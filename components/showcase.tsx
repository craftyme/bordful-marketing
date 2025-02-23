import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { CATEGORIES, type Category } from "@/lib/categories";
import { CategoryBadge } from "./ui/category-badge";
import { SectionHeader } from "./ui/section-header";
import { GridLayout } from "./ui/grid-layout";

interface ShowcaseProps {
  variant?: "standalone" | "section";
  limit?: number;
}

interface ShowcaseItem {
  title: string;
  description: string;
  href: string;
  category: Category;
  jobs: Array<{
    role: string;
    company: string;
    location: string;
  }>;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Growth Jobs",
    description:
      "Growth Jobs is a specialized job board connecting growth-driven professionals with scaling companies.",
    href: "https://growthjobs.org",
    category: CATEGORIES.ROLE,
    jobs: [
      {
        role: "Growth Marketing Manager",
        company: "TechCorp",
        location: "Remote",
      },
      {
        role: "Digital Marketing Lead",
        company: "StartupX",
        location: "New York",
      },
      {
        role: "Growth Specialist",
        company: "ScaleUp Inc",
        location: "London",
      },
    ],
  },
  {
    title: "YouStartups",
    description:
      "The go-to job board for innovators ready to build the future. We connect bold talent with startups.",
    href: "https://youstartups.com",
    category: CATEGORIES.COUNTRY,
    jobs: [
      {
        role: "Founder's Associate",
        company: "SpainTech",
        location: "Madrid",
      },
      {
        role: "Co-Founder in Residence",
        company: "DesignStudio",
        location: "London",
      },
      {
        role: "Advisor/Prospective Co-Founder",
        company: "CodeLab",
        location: "New York",
      },
    ],
  },
  {
    title: "RemoteML",
    description:
      "Remote jobs in machine learning, AI, and data science. Connect with leading companies in the AI space.",
    href: "https://ml.demo.bordful.com",
    category: CATEGORIES.REMOTE,
    jobs: [
      {
        role: "ML Engineer",
        company: "AI Labs",
        location: "Remote",
      },
      {
        role: "Data Scientist",
        company: "DataCo",
        location: "Remote",
      },
      {
        role: "AI Researcher",
        company: "DeepTech",
        location: "Remote",
      },
    ],
  },
];

const JobCard = React.memo(function JobCard({
  role,
  company,
  location,
}: ShowcaseItem["jobs"][0]) {
  return (
    <div className="rounded-md border border-border/40 bg-background/30 p-3">
      <div className="mb-1 text-[13px] font-medium text-foreground/90">
        {role}
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{company}</span>
        <span>{location}</span>
      </div>
    </div>
  );
});

const ShowcaseCard = React.memo(function ShowcaseCard({
  title,
  description,
  href,
  category,
  jobs,
}: ShowcaseItem) {
  return (
    <CustomLink
      href={href}
      external
      className="group block overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <div className="border-b border-border/40 bg-background/30 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium">{title}</span>
          </div>
          <span className="text-[10px] text-muted-foreground">
            {href.replace(/(^\w+:|^)\/\//, "")}
          </span>
        </div>
      </div>

      <div className="space-y-2 p-3">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      <div className="border-t border-border/40 p-5">
        <div className="mb-2">
          <CategoryBadge category={category} />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </CustomLink>
  );
});

export function Showcase({ variant = "section", limit }: ShowcaseProps) {
  const items = limit ? showcaseItems.slice(0, limit) : showcaseItems;

  const content = (
    <>
      {variant === "section" && (
        <SectionHeader
          title="Built with Bordful"
          description="Discover successful job boards powered by Bordful. From niche industry boards to regional platforms, see how others are using our template."
        />
      )}
      <GridLayout>
        {items.map((item) => (
          <ShowcaseCard key={item.title} {...item} />
        ))}
      </GridLayout>
      {variant === "section" && items.length < showcaseItems.length && (
        <div className="mt-8 flex justify-center">
          <CustomLink href="/showcase" variant="button">
            View All Sites
          </CustomLink>
        </div>
      )}
    </>
  );

  if (variant === "section") {
    return (
      <Section id="showcase" variant="secondary">
        <Container>{content}</Container>
      </Section>
    );
  }

  return content;
}
