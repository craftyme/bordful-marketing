"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

interface BreadcrumbsProps {
  items?: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

// Map of URL segments to properly formatted labels
const LABEL_MAP: Record<string, string> = {
  "use-cases": "Use Cases",
  help: "Help Center",
  pricing: "Pricing",
  docs: "Documentation",
  blog: "Blog",
  about: "About",
  contact: "Contact",
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname();

  // If no items provided, generate from pathname
  const breadcrumbs =
    items ||
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, array) => {
        const href = `/${array.slice(0, index + 1).join("/")}`;
        // Use the mapped label if available, otherwise format the segment
        const label =
          LABEL_MAP[segment] ||
          segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        return { label, href };
      });

  // Add home as first item if not included
  if (!items && breadcrumbs.length > 0) {
    breadcrumbs.unshift({ label: "Home", href: "/" });
  }

  // Generate JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://bordful.com${pathname}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": `https://bordful.com${item.href}`,
        name: item.label,
      },
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb className={className}>
        <BreadcrumbList>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
