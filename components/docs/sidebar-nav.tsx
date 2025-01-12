"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { CustomLink } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const items = [
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
        title: "Job Listings & Forms",
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
        title: "Jobs",
        href: "/docs/api/jobs",
      },
      {
        title: "Applications",
        href: "/docs/api/applications",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Job Board",
        href: "/docs/examples/job-board",
      },
      {
        title: "Application Form",
        href: "/docs/examples/application-form",
      },
      {
        title: "Admin Dashboard",
        href: "/docs/examples/admin-dashboard",
      },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {items.map((section) => (
        <div key={section.title} className="pb-8">
          <h4 className="mb-1 text-sm font-medium">{section.title}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item) => (
              <CustomLink
                key={item.href}
                href={item.href}
                variant="nav"
                className={cn(
                  "flex w-full items-center rounded-md p-2",
                  pathname === item.href &&
                    "bg-muted font-medium text-foreground"
                )}
              >
                {item.title}
              </CustomLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
