import * as React from "react";
import { CustomLink } from "./ui/link";
import { Badge } from "./ui/badge";

// Move to lib/constants.ts if more components need access to this data
const DOCS = {
  QUICK_START: {
    title: "Quick Start Guide",
    description:
      "Get your job board up and running in minutes. Learn how to clone, customize, and deploy your first job board.",
    href: "/docs/quick-start",
    badge: "Start Here" as const,
  },
  AIRTABLE: {
    title: "Airtable Integration",
    description:
      "Learn how to use Airtable as your job board database. Set up tables, configure fields, and manage job listings.",
    href: "#airtable",
  },
  JOBS: {
    title: "Job Listings & Forms",
    description:
      "Customize job submission forms, implement search and filtering, and manage the job posting workflow.",
    href: "#jobs",
  },
  SEO: {
    title: "SEO & Performance",
    description:
      "Optimize your job board for search engines with dynamic pages, sitemaps, and meta tags. Ensure fast loading times.",
    href: "#seo",
  },
  STYLING: {
    title: "Styling Guide",
    description:
      "Customize your job board's look and feel using Tailwind CSS. Theme configuration, components, and best practices.",
    href: "#styling",
  },
  DEPLOYMENT: {
    title: "Deployment & Updates",
    description:
      "Deploy your job board to Vercel, configure domains, and keep your site updated with the latest features.",
    href: "#deployment",
  },
} as const;

interface Doc {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

const DocCard = React.memo(function DocCard({
  title,
  description,
  href,
  badge,
}: Doc) {
  return (
    <CustomLink
      href={href}
      className="group block rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-medium">{title}</h3>
        {badge && (
          <Badge className="border-primary/20 bg-primary/10 text-primary">
            {badge}
          </Badge>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </CustomLink>
  );
});

export function Documentation() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Object.values(DOCS).map((doc) => (
        <DocCard key={doc.href} {...doc} />
      ))}
    </div>
  );
}
