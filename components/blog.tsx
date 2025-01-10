import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { SectionHeader } from "./ui/section-header";
import { CustomLink } from "./ui/link";

const BLOG_POSTS = {
  LAUNCH: {
    title: "Introducing Bordful: Open Source Job Board Software",
    description:
      "Learn how Bordful makes it easy to launch your own job board without coding knowledge using Airtable as a backend.",
    date: "January 10, 2025",
    href: "/blog/introducing-bordful",
  },
  GUIDE: {
    title: "How to Launch a Niche Job Board in 10 Minutes",
    description:
      "Step-by-step guide to creating a specialized job board for your industry, technology, or location using Bordful.",
    date: "January 10, 2025",
    href: "/blog/launch-niche-job-board",
  },
  TIPS: {
    title: "5 Ways to Promote Your Job Board",
    description:
      "Proven strategies to attract employers and job seekers to your newly launched job board platform.",
    date: "January 10, 2025",
    href: "/blog/promote-job-board",
  },
} as const;

interface BlogPost {
  title: string;
  description: string;
  date: string;
  href: string;
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
      className="block space-y-4 rounded-lg border bg-background/50 p-6 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <time className="text-sm text-muted-foreground">{date}</time>
      <div>
        <h3 className="mb-2 text-xl font-medium tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </CustomLink>
  );
});

export function Blog() {
  return (
    <Section id="blog">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeader
            title="Latest Updates"
            description="Stay up to date with the latest features, guides, and tips for building successful job boards with Bordful."
          />
          <div className="mt-8">
            <CustomLink href="/blog" variant="button">
              Read More Posts
            </CustomLink>
          </div>
        </div>
        <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(BLOG_POSTS).map((post) => (
            <BlogCard key={post.href} {...post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
