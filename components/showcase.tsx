import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { CATEGORIES, type Category } from "@/lib/categories";
import { CategoryBadge } from "./ui/category-badge";
import { SectionHeader } from "./ui/section-header";
import { GridLayout } from "./ui/grid-layout";

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
    title: "GrowthJobs.org",
    description:
      "The leading job board for growth marketing roles. Find or post jobs in growth, marketing, and digital marketing.",
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
    title: "Python Jobs",
    description:
      "A specialized job board connecting Python developers with companies. From Django to Flask, find your next Python role.",
    href: "https://pythonjobs.demo.bordful.com",
    category: CATEGORIES.TECHNOLOGY,
    jobs: [
      {
        role: "Senior Python Developer",
        company: "CloudTech",
        location: "Remote",
      },
      {
        role: "Django Backend Engineer",
        company: "WebFlow",
        location: "Berlin",
      },
      {
        role: "Python Team Lead",
        company: "DataCo",
        location: "Amsterdam",
      },
    ],
  },
  {
    title: "Tech Jobs in Spain",
    description:
      "The largest tech job board in Spain. Find software development, design, and tech roles across Spanish cities.",
    href: "https://techjobs.es",
    category: CATEGORIES.COUNTRY,
    jobs: [
      {
        role: "Frontend Developer",
        company: "SpainTech",
        location: "Madrid",
      },
      {
        role: "UX Designer",
        company: "DesignStudio",
        location: "Barcelona",
      },
      {
        role: "Full Stack Developer",
        company: "CodeLab",
        location: "Valencia",
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

export function Showcase() {
  return (
    <Section id="showcase" variant="secondary">
      <Container>
        <SectionHeader
          title="Built with Bordful"
          description="Discover successful job boards powered by Bordful. From niche industry boards to regional platforms, see how others are using our template."
        />
        <GridLayout>
          {showcaseItems.map((item) => (
            <ShowcaseCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </Container>
    </Section>
  );
}
