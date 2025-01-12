import * as React from "react";
import { cn } from "@/lib/utils";

interface DocLink {
  title: string;
  href: string;
}

interface DocSection {
  title: string;
  items: DocLink[];
}

const SIDEBAR_NAV_ITEMS: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Quick Start",
        href: "/docs/quick-start",
      },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        title: "Airtable Setup",
        href: "/docs/guides/airtable",
      },
      {
        title: "Job Listings",
        href: "/docs/guides/job-listings",
      },
      {
        title: "Customization",
        href: "/docs/guides/customization",
      },
      {
        title: "Deployment",
        href: "/docs/guides/deployment",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        title: "Overview",
        href: "/docs/api",
      },
      {
        title: "Authentication",
        href: "/docs/api/authentication",
      },
      {
        title: "Job Endpoints",
        href: "/docs/api/jobs",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Custom Forms",
        href: "/docs/examples/forms",
      },
      {
        title: "Search Integration",
        href: "/docs/examples/search",
      },
      {
        title: "Email Notifications",
        href: "/docs/examples/notifications",
      },
    ],
  },
];

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className={cn("space-y-6", className)} {...props}>
      {SIDEBAR_NAV_ITEMS.map((section) => (
        <div key={section.title} className="space-y-3">
          <h4 className="font-medium">{section.title}</h4>
          <div className="flex flex-col space-y-2">
            {section.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
