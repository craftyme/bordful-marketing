import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";

interface UseCase {
  title: string;
  description: string;
  category: "country" | "city" | "industry" | "role" | "technology" | "remote";
  href: string;
}

const useCases: UseCase[] = [
  {
    category: "country",
    title: "Start a Job Board in Spain",
    description:
      "Target country-specific job markets with localized features, language support, and regional job categories to connect local talent with opportunities.",
    href: "#country",
  },
  {
    category: "city",
    title: "Start a Local Job Board in Alicante",
    description:
      "Create hyper-local job boards that serve specific cities and communities, fostering stronger connections between local businesses and talent.",
    href: "#city",
  },
  {
    category: "industry",
    title: "Start Manufacturing Job Board",
    description:
      "Build industry-focused job boards that cater to specific sectors, offering specialized features and categories relevant to your chosen industry.",
    href: "#industry",
  },
  {
    category: "role",
    title: "Start a Job Board for Truck Drivers",
    description:
      "Launch role-specific job boards that connect specialized professionals with employers, featuring targeted job categories and requirements.",
    href: "#role",
  },
  {
    category: "technology",
    title: "Start Next.js Job Board",
    description:
      "Create technology-focused job boards that serve specific tech communities, with features tailored to technical recruitment and skill verification.",
    href: "#technology",
  },
  {
    category: "remote",
    title: "Start Remote Jobs Board",
    description:
      "Build remote-first job boards that connect distributed teams with global talent, featuring location-independent opportunities and remote work tools.",
    href: "#remote",
  },
];

const UseCaseCard = React.memo(function UseCaseCard({
  title,
  description,
  category,
  href,
}: UseCase) {
  return (
    <CustomLink
      href={href}
      className="block rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <div className="mb-2">
        <span
          className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          aria-label={`Category: ${category}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      </div>
      <h3 className="mb-2 text-sm font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CustomLink>
  );
});

const UseCasesHeader = React.memo(function UseCasesHeader() {
  return (
    <>
      <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
        Launch Your Niche Job Board
      </h2>
      <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
        Create specialized job boards for any market, location, or industry.
        Bordful helps you target specific niches for maximum impact.
      </p>
    </>
  );
});

export function UseCases() {
  return (
    <Section id="use-cases">
      <Container>
        <UseCasesHeader />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={`${useCase.category}-${useCase.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              {...useCase}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
