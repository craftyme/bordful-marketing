"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: Array<{
    text: string;
    level: number;
    slug: string;
  }>;
}

export function TableOfContents({ headings }: TableOfContentsProps) {
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

  return (
    <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="mb-4">
        <h4 className="text-sm font-medium">On This Page</h4>
      </div>
      <div className="w-64 border-l border-border">
        {headings.map(({ text, level, slug }) => (
          <a
            key={slug}
            href={`#${slug}`}
            className={cn(
              "block border-l -ml-px py-1 text-xs transition-colors hover:text-foreground",
              {
                "pl-4": level === 1,
                "pl-6": level === 2,
                "pl-8": level === 3,
                "pl-10": level === 4,
                "pl-12": level === 5,
                "pl-14": level === 6,
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
    </div>
  );
}
