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

// Move LABEL_MAP outside to prevent recreation on renders
const LABEL_MAP: Record<string, string> = {
  "use-cases": "Use Cases",
  help: "Help Center",
  pricing: "Pricing",
  docs: "Documentation",
  blog: "Blog",
  about: "About",
  contact: "Contact",
  faq: "FAQ",
  terms: "Terms of Service",
  privacy: "Privacy Policy",
};

// Helper function to format segment
const formatSegment = (segment: string): string => {
  return (
    LABEL_MAP[segment] ||
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Basic error handling for invalid pathname
  if (!pathname) {
    return null;
  }

  // If no items provided, generate from pathname
  const breadcrumbs =
    items ||
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, array) => {
        const href = `/${array.slice(0, index + 1).join("/")}`;
        const label = formatSegment(segment);
        return { label, href };
      });

  // Add home as first item if not included
  if (!items && breadcrumbs.length > 0) {
    breadcrumbs.unshift({ label: "Home", href: "/" });
  }

  // Limit breadcrumbs to prevent extremely long trails
  const limitedBreadcrumbs = breadcrumbs.slice(0, 5);

  // Generate JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://bordful.com${pathname}#breadcrumb`,
    itemListElement: limitedBreadcrumbs.map((item, index) => ({
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
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb className={className}>
          <BreadcrumbList>
            {limitedBreadcrumbs.map((item, index) => (
              <React.Fragment key={item.href}>
                <BreadcrumbItem>
                  {index === limitedBreadcrumbs.length - 1 ? (
                    <BreadcrumbPage aria-current="page">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < limitedBreadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </>
  );
}
