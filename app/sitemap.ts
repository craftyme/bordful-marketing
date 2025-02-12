import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { generateStaticParams as getCityParams } from "./use-cases/city/[slug]/page";
import { readdirSync, statSync } from "fs";
import { join } from "path";

// Helper function to get the last modified date
const getLastModified = () => new Date();

type ChangeFrequency =
  | "daily"
  | "weekly"
  | "monthly"
  | "always"
  | "hourly"
  | "yearly"
  | "never";

// Helper function to recursively get all page routes
function getPageRoutes(dir: string, baseDir: string = ""): string[] {
  const routes: string[] = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const relativePath = join(baseDir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip special Next.js directories and non-route directories
      if (!item.startsWith("_") && !item.startsWith(".") && item !== "api") {
        // Handle dynamic route directories
        if (item.startsWith("[") && item.endsWith("]")) {
          continue; // Skip dynamic routes as they'll be handled separately
        }
        routes.push(...getPageRoutes(fullPath, relativePath));
      }
    } else if (
      item === "page.tsx" ||
      item === "page.ts" ||
      item === "page.js"
    ) {
      // Convert directory path to route
      const route = baseDir
        .replace(/\\/g, "/") // Convert Windows paths
        .replace(/\/page$/, ""); // Remove /page from the end
      if (route) routes.push(route);
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bordful.com";

  // Get all static routes from the app directory
  const appDir = join(process.cwd(), "app");
  const staticRoutes = getPageRoutes(appDir)
    .filter((route) => !route.includes("[")) // Filter out dynamic route templates
    .map((route) => ({
      url: `${baseUrl}${route === "index" ? "" : `/${route}`}`,
      lastModified: getLastModified(),
      changeFrequency: (route === "" || route === "blog"
        ? "daily"
        : "weekly") as ChangeFrequency,
      priority: route === "" ? 1 : route === "blog" ? 0.9 : 0.8,
    }));

  // Get all blog posts
  const posts = await getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : getLastModified(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.7,
  }));

  // Get all city pages
  const cityParams = await getCityParams();
  const cityRoutes = cityParams.map(({ slug }) => ({
    url: `${baseUrl}/use-cases/city/${slug}`,
    lastModified: getLastModified(),
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...cityRoutes];
}
