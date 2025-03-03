import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { BlogCard } from "@/components/blog";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata('/blog', {
  title: "Blog - Bordful",
  description:
    "Latest updates, guides, and tips for building successful job boards with Bordful.",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Breadcrumbs className="mb-8" />
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <SectionHeader
                title="Blog"
                description="Latest updates, guides, and tips for building successful job boards with Bordful."
                headingLevel="h1"
              />
            </div>

            <div className="mt-16 space-y-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
