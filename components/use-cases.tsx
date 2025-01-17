import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { CATEGORIES, type Category } from "@/lib/categories";
import { CategoryBadge } from "./ui/category-badge";
import { SectionHeader } from "./ui/section-header";
import { GridLayout } from "./ui/grid-layout";

interface UseCase {
  title: string;
  description: string;
  category: Category;
  href: string;
  id: string;
}

const USE_CASES: UseCase[] = [
  {
    id: "country-spain",
    category: CATEGORIES.COUNTRY,
    title: "Start a Job Board in Spain",
    description:
      "Target country-specific job markets with localized features, language support, and regional job categories to connect local talent with opportunities.",
    href: "/use-cases/country",
  },
  {
    id: "city-alicante",
    category: CATEGORIES.CITY,
    title: "Start a Local Job Board in Alicante",
    description:
      "Create hyper-local job boards that serve specific cities and communities, fostering stronger connections between local businesses and talent.",
    href: "/use-cases/city",
  },
  {
    id: "industry-manufacturing",
    category: CATEGORIES.INDUSTRY,
    title: "Start Manufacturing Job Board",
    description:
      "Build industry-focused job boards that cater to specific sectors, offering specialized features and categories relevant to your chosen industry.",
    href: "/use-cases/industry",
  },
  {
    id: "role-truck-drivers",
    category: CATEGORIES.ROLE,
    title: "Start a Job Board for Truck Drivers",
    description:
      "Launch role-specific job boards that connect specialized professionals with employers, featuring targeted job categories and requirements.",
    href: "/use-cases/role",
  },
  {
    id: "technology-nextjs",
    category: CATEGORIES.TECHNOLOGY,
    title: "Start Next.js Job Board",
    description:
      "Create technology-focused job boards that serve specific tech communities, with features tailored to technical recruitment and skill verification.",
    href: "/use-cases/technology",
  },
  {
    id: "remote-jobs",
    category: CATEGORIES.REMOTE,
    title: "Start Remote Jobs Board",
    description:
      "Build remote-first job boards that connect distributed teams with global talent, featuring location-independent opportunities and remote work tools.",
    href: "/use-cases/remote",
  },
] as const;

const SECTION_CONTENT = {
  title: "Launch Your Niche Job Board",
  description:
    "Create specialized job boards for any market, location, or industry. Bordful helps you target specific niches for maximum impact.",
} as const;

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
        <CategoryBadge category={category} />
      </div>
      <h3 className="mb-2 text-sm font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CustomLink>
  );
});

type UseCasesVariant = "default" | "standalone";

interface UseCasesProps {
  variant?: UseCasesVariant;
  className?: string;
}

export function UseCases({ variant = "default", className }: UseCasesProps) {
  const content = (
    <GridLayout className={className}>
      {USE_CASES.map((useCase) => (
        <UseCaseCard key={useCase.id} {...useCase} />
      ))}
    </GridLayout>
  );

  if (variant === "standalone") {
    return content;
  }

  return (
    <Section id="use-cases">
      <Container>
        <SectionHeader
          title={SECTION_CONTENT.title}
          description={SECTION_CONTENT.description}
        />
        {content}
      </Container>
    </Section>
  );
}
