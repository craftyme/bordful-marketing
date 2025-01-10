import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { CustomLink } from "@/components/ui/link";
import { Badge } from "@/components/ui/badge";

type BlogPostParams = {
  slug: string;
};

type BlogPostProps = {
  params: BlogPostParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} - Bordful Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <Badge className="mb-6 text-muted-foreground">Blog Post</Badge>
              <h1 className="mb-3 text-2xl font-medium tracking-tight sm:text-3xl">
                {post.title}
              </h1>
              <p className="mx-auto mt-3 max-w-[600px] text-sm text-muted-foreground text-balance">
                {post.description}
              </p>
              <div className="mt-4 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <time>{post.date}</time>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
            </div>

            <article className="space-y-6">
              <div className="text-sm text-muted-foreground leading-relaxed">
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                  components={{
                    p: (props) => (
                      <p
                        className="mb-4 text-sm text-muted-foreground leading-relaxed last:mb-0"
                        {...props}
                      />
                    ),
                    a: (props) => (
                      <a
                        className="inline-flex items-center text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                        target={
                          props.href?.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          props.href?.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        {...props}
                      />
                    ),
                    h2: (props) => (
                      <h2
                        className="mt-8 mb-4 text-xl font-medium tracking-tight text-foreground"
                        {...props}
                      />
                    ),
                    ul: (props) => (
                      <ul
                        className="mb-4 ml-0 space-y-1 list-none last:mb-0"
                        {...props}
                      />
                    ),
                    ol: (props) => (
                      <ol
                        className="mb-4 ml-0 space-y-1 list-none last:mb-0 [counter-reset:list]"
                        {...props}
                      />
                    ),
                    li: ({ children, ...props }) => {
                      const isOrdered = props.parentName === "ol";
                      return (
                        <li className="flex gap-2 text-sm text-muted-foreground">
                          {isOrdered ? (
                            <span className="select-none text-primary text-xs mt-1 min-w-[12px] text-center font-medium [counter-increment:list] before:content-[counter(list)]" />
                          ) : (
                            <span className="select-none text-primary text-xs mt-1 min-w-[12px] text-center">
                              •
                            </span>
                          )}
                          <span className="flex-1">{children}</span>
                        </li>
                      );
                    },
                    strong: (props) => (
                      <strong
                        className="font-medium text-foreground"
                        {...props}
                      />
                    ),
                  }}
                />
              </div>
            </article>

            <div className="mt-12 flex justify-center">
              <CustomLink
                href="/blog"
                variant="button"
                className="h-10 px-6 text-sm"
              >
                ← Back to Blog
              </CustomLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
