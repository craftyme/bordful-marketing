"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { CustomLink } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Overview",
    items: [
      {
        title: "Introduction",
        href: "/style-guide",
      },
    ],
  },
  {
    title: "Foundation",
    items: [
      {
        title: "Typography",
        href: "/style-guide#typography",
      },
      {
        title: "Colors",
        href: "/style-guide#colors",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Badges",
        href: "/style-guide#badges",
      },
      {
        title: "Breadcrumbs",
        href: "/style-guide#breadcrumbs",
      },
      {
        title: "Buttons & Links",
        href: "/style-guide#buttons-links",
      },
      {
        title: "Cards",
        href: "/style-guide#cards",
      },
      {
        title: "Section Headers",
        href: "/style-guide#section-headers",
      },
      {
        title: "Tables & Lists",
        href: "/style-guide#tables-lists",
      },
    ],
  },
  {
    title: "Layout",
    items: [
      {
        title: "Container",
        href: "/style-guide#container",
      },
      {
        title: "Grid System",
        href: "/style-guide#grid-system",
      },
      {
        title: "Spacing",
        href: "/style-guide#spacing",
      },
    ],
  },
  {
    title: "Animation",
    items: [
      {
        title: "Transitions",
        href: "/style-guide#transitions",
      },
      {
        title: "Loading States",
        href: "/style-guide#loading-states",
      },
    ],
  },
] as const;

export function StyleGuideSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {items.map((section) => (
        <div key={section.title} className="mb-6">
          <div className="mb-2 text-sm font-medium text-muted-foreground">
            {section.title}
          </div>
          <nav className="space-y-1">
            {section.items.map((item) => (
              <CustomLink
                key={item.href}
                href={item.href}
                variant="nav"
                className={cn(
                  "block text-sm text-muted-foreground hover:text-foreground",
                  pathname === item.href && "font-medium text-foreground"
                )}
              >
                {item.title}
              </CustomLink>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
}
