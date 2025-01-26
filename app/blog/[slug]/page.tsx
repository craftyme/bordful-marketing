import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { CustomLink } from "@/components/ui/link";
import { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { TableOfContents } from "@/components/table-of-contents";
import { extractHeadings } from "@/lib/mdx";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} - Bordful Blog`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const showTableOfContents = headings.length >= 2;

  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto flex max-w-[calc(42rem+16rem+2.5rem)] gap-10">
            <div className="flex-1 max-w-2xl">
              <div className="flex justify-start">
                <Breadcrumbs
                  className="mb-4"
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: post.title, href: `/blog/${post.slug}` },
                  ]}
                />
              </div>
              <ArticleLayout
                title={post.title}
                description={post.description}
                content={post.content}
                headerClassName="space-y-6"
              >
                <div className="text-xs text-muted-foreground">
                  By {post.author} • Published{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  {post.updatedDate && post.updatedDate !== post.date && (
                    <>
                      {" "}
                      • Updated{" "}
                      {new Date(post.updatedDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </>
                  )}
                </div>
              </ArticleLayout>

              <div className="mt-8">
                <CustomLink href="/blog" variant="button">
                  Back to Blog
                </CustomLink>
              </div>
            </div>

            {showTableOfContents && <TableOfContents headings={headings} />}
          </div>
        </Container>
      </Section>
    </div>
  );
}
