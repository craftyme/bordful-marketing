import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { CustomLink } from "@/components/ui/link";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "@/components/mdx-components";

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

  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-16 text-center">
              <Badge className="mb-8 text-muted-foreground">Blog Post</Badge>
              <h1 className="mb-6 text-2xl font-medium tracking-tight sm:text-3xl">
                {post.title}
              </h1>
              <p className="mx-auto mb-6 max-w-[600px] text-sm text-muted-foreground text-balance">
                {post.description}
              </p>
              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <time>{formatDate(post.date)}</time>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
            </div>

            <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
                components={mdxComponents}
              />
            </article>

            <div className="mt-8 text-center">
              <CustomLink href="/blog" variant="button">
                Back to Blog
              </CustomLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
