import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/docs");

export interface Doc {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
}

export function getAllDocs(): Doc[] {
  // Get file names under /docs
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the doc metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      content,
      ...(data as Omit<Doc, "slug" | "content">),
    };
  });

  return allDocsData;
}

export function getDocBySlug(slug: string): Doc | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as Omit<Doc, "slug" | "content">),
    };
  } catch {
    return null;
  }
}
