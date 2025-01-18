import type { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";
import { generateLocationContent } from "@/lib/features";

type CitySlug = "new-york";

const CITIES = {
  "new-york": {
    name: "New York",
    type: "city" as const,
    population: "8.8M",
    regions: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
    industries: [
      "Technology",
      "Finance",
      "Media",
      "Startups",
      "Software Development",
      "Digital Marketing",
    ],
    techStack: {
      frontend: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
      database: ["Airtable"],
      deployment: ["Vercel"],
      tools: ["ESLint", "PostCSS", "Git"],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: CitySlug };
}): Promise<Metadata> {
  const city = CITIES[params.slug];

  return {
    title: `${city.name} Job Board Template - Built with Next.js & Airtable | Bordful`,
    description: `Launch your ${city.name} job board using Next.js 14, TypeScript, and Airtable. Ready-made components and features for the ${city.name} tech community.`,
    keywords: [
      "next.js job board",
      "typescript job board template",
      `${city.name.toLowerCase()} tech jobs`,
    ],
    openGraph: {
      title: `${city.name} Job Board Template - Built with Next.js & Airtable`,
      description: `Launch your ${city.name} job board using Next.js 14, TypeScript, and Airtable.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.name} Job Board Template`,
      description: `Launch your ${city.name} job board using Next.js 14, TypeScript, and Airtable.`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(CITIES).map((slug) => ({
    slug,
  }));
}

export default async function CitySpecificPage({
  params,
}: {
  params: { slug: CitySlug };
}) {
  const city = CITIES[params.slug];
  const content = generateLocationContent(city);

  return (
    <UseCasePage
      badge="City-specific"
      title={`${city.name} Job Board`}
      titleSuffix="Template"
      description={`Launch your own job board for ${city.name} with our ready-to-use template. Built with Next.js 14 and TypeScript.`}
      {...content}
      ctaDescription={`Clone our GitHub repository and launch your ${city.name} job board in minutes.`}
    />
  );
}
