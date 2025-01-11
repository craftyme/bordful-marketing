import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { getAllPosts } from "@/lib/blog";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  href: string;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const BlogCard = React.memo(function BlogCard({
  title,
  description,
  date,
  href,
}: BlogPost) {
  return (
    <CustomLink
      href={href}
      className="block rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <time className="text-xs text-muted-foreground">{formatDate(date)}</time>
      <div className="mt-2">
        <h3 className="mb-1.5 text-sm font-medium tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </CustomLink>
  );
});

export function Blog() {
  const posts = getAllPosts().map((post) => ({
    title: post.title,
    description: post.description,
    date: post.date,
    href: `/blog/${post.slug}`,
  }));

  return (
    <Section variant="secondary">
      <Container>
        <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
          Latest Updates
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
          Stay up to date with the latest features, guides, and tips for
          building successful job boards with Bordful.
        </p>
        <div className="mt-8 flex justify-center">
          <CustomLink
            href="/blog"
            variant="button"
            className="h-10 px-6 text-sm"
          >
            Read More Posts
          </CustomLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.href} {...post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
