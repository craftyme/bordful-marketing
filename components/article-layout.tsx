import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface ArticleLayoutProps {
  title: string;
  description: string;
  date?: string;
  content: string;
  headerClassName?: string;
  children?: React.ReactNode;
  badge?: {
    text: string;
    className?: string;
  };
}

export function ArticleLayout({
  title,
  description,
  date,
  content,
  headerClassName,
  children,
  badge,
}: ArticleLayoutProps) {
  return (
    <div className="space-y-8">
      <div className={cn("space-y-4", headerClassName)}>
        <div>
          {badge && (
            <Badge className={cn("mb-4", badge.className)}>{badge.text}</Badge>
          )}
          <h1 className="mb-3 text-2xl font-medium tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="mb-2 text-sm text-muted-foreground text-balance max-w-[750px]">
            {description}
          </p>
          {date && (
            <time className="text-xs text-muted-foreground">
              {formatDate(date)}
            </time>
          )}
        </div>
      </div>

      {children}

      <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
          components={mdxComponents}
        />
      </article>
    </div>
  );
}
