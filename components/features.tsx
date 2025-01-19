import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";

interface FeaturesProps {
  variant?: "standalone" | "section";
}

const features = [
  {
    title: "Modern Stack",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS for a modern development experience.",
  },
  {
    title: "Responsive Design",
    description:
      "Beautiful, responsive design that works perfectly on all devices and screen sizes.",
  },
  {
    title: "Job Listings",
    description:
      "Easy-to-use job posting system with customizable categories and search functionality.",
  },
  {
    title: "User Management",
    description:
      "Built-in authentication and user management for both employers and job seekers.",
  },
  {
    title: "SEO Optimized",
    description:
      "Search engine optimized structure to help your job listings rank better.",
  },
  {
    title: "Easy Customization",
    description:
      "Highly customizable design and functionality to match your brand and needs.",
  },
] as const;

const FeaturesHeader = React.memo(function FeaturesHeader() {
  return (
    <>
      <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
        Features
      </h2>
      <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
        Everything you need to run a successful job board. Built with modern
        technologies and best practices.
      </p>
    </>
  );
});

const FeaturesGrid = React.memo(function FeaturesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80"
        >
          <h3 className="mb-1.5 text-sm font-medium">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
});

export function Features({ variant = "section" }: FeaturesProps) {
  const content = (
    <>
      <FeaturesHeader />
      <div className="mt-12">
        <FeaturesGrid />
      </div>
    </>
  );

  if (variant === "section") {
    return (
      <Section variant="secondary">
        <Container>{content}</Container>
      </Section>
    );
  }

  return content;
}
