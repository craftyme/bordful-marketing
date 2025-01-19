import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  try {
    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory not found at ${postsDirectory}`);
      return [];
    }

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        try {
          // Remove ".md" from file name to get slug
          const slug = fileName.replace(/\.md$/, "");

          // Read markdown file as string
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");

          // Use gray-matter to parse the post metadata section
          const { data, content } = matter(fileContents);

          // Validate required fields
          const requiredFields = ["title", "description", "date", "author"];
          const missingFields = requiredFields.filter(
            (field) => !(field in data)
          );

          if (missingFields.length > 0) {
            console.warn(
              `Post ${fileName} is missing required fields: ${missingFields.join(
                ", "
              )}`
            );
            return null;
          }

          // Combine the data with the slug
          return {
            slug,
            content,
            ...(data as Omit<BlogPost, "slug" | "content">),
          };
        } catch (error) {
          console.error(`Error processing post ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null);

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    if (!slug) {
      console.warn("No slug provided to getPostBySlug");
      return null;
    }

    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      console.warn(`Post not found: ${slug}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Validate required fields
    const requiredFields = ["title", "description", "date", "author"];
    const missingFields = requiredFields.filter((field) => !(field in data));

    if (missingFields.length > 0) {
      console.warn(
        `Post ${slug} is missing required fields: ${missingFields.join(", ")}`
      );
      return null;
    }

    return {
      slug,
      content,
      ...(data as Omit<BlogPost, "slug" | "content">),
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}
