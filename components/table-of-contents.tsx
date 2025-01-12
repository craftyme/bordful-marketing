"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Heading } from "@/lib/mdx";

interface TableOfContentsProps {
  headings: Heading[];
  title?: string;
  className?: string;
}

export function TableOfContents({
  headings,
  title = "On This Page",
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach(({ slug }) => {
      const element = document.getElementById(slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={cn("hidden xl:block", className)}>
      <div className="sticky top-24">
        <div className="mb-4">
          <h4 className="text-sm font-medium">{title}</h4>
        </div>
        <div className="relative">
          <div className="w-64 border-l border-border overflow-y-auto max-h-[168px] pb-8">
            {headings.map(({ text, level, slug }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className={cn(
                  "block border-l -ml-px py-1 text-xs transition-colors hover:text-foreground",
                  {
                    "pl-2": level === 1,
                    "pl-3": level === 2,
                    "pl-4": level === 3,
                    "pl-5": level === 4,
                    "text-muted-foreground": activeId !== slug,
                    "border-foreground font-medium text-foreground":
                      activeId === slug,
                  }
                )}
              >
                <span className="block truncate pr-2">{text}</span>
              </a>
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-0 h-16 w-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </div>
  );
}
