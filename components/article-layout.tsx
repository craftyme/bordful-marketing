import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ArticleLayoutProps {
  title: string;
  description: string;
  date?: string;
  content: string;
  badge?: {
    text: string;
    className?: string;
  };
  headerClassName?: string;
  children?: React.ReactNode;
}

export function ArticleLayout({
  title,
  description,
  date,
  content,
  badge,
  headerClassName,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="space-y-8">
      <div className={cn("space-y-4", headerClassName)}>
        <div className="flex items-center gap-2">
          {badge && (
            <>
              <Badge className={cn("text-muted-foreground", badge.className)}>
                {badge.text}
              </Badge>
              {date && (
                <>
                  <span className="text-xs text-muted-foreground">•</span>
                  <time className="text-xs text-muted-foreground">
                    {formatDate(date)}
                  </time>
                </>
              )}
            </>
          )}
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-medium tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground text-balance max-w-[750px]">
            {description}
          </p>
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
