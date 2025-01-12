export interface Heading {
  text: string;
  level: number;
  slug: string;
}

// Helper function to generate slug from text
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");

  lines.forEach((line) => {
    // Match h2-h4 headings (## to ####)
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2];
      headings.push({
        text,
        level,
        slug: slugify(text),
      });
    }
  });

  return headings;
}
