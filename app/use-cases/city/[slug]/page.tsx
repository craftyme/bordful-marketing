import { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";
import { notFound } from "next/navigation";
import { generateLocationContent } from "@/lib/features";

// This will be moved to a data file later when we have more cities
const CITIES = {
  "new-york": {
    name: "New York",
    state: "NY",
    type: "city" as const,
    population: "8.8M",
    industries: [
      "Technology",
      "Finance",
      "Media",
      "Startups",
      "Software Development",
      "Digital Marketing",
    ],
    regions: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
    techStack: {
      frontend: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
      database: ["Airtable"],
      deployment: ["Vercel"],
      tools: ["ESLint", "PostCSS", "Git"],
    },
  },
};

type CitySlug = keyof typeof CITIES;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const city = CITIES[params.slug as CitySlug];

  if (!city) {
    return {};
  }

  const title = `${city.name} Job Board Template - Built with Next.js & Airtable | Bordful`;
  const description = `Launch your ${city.name} job board using Next.js 14, TypeScript, and Airtable. Ready-made components and features for the ${city.name} tech community.`;

  return {
    title,
    description,
    keywords: [
      // Tech-focused keywords
      "next.js job board",
      "typescript job board template",
      "airtable job board",
      "react job board",
      // Location-specific tech keywords
      `${city.name.toLowerCase()} tech jobs`,
      `${city.name.toLowerCase()} startup jobs`,
      `${city.name.toLowerCase()} developer jobs`,
      // Industry keywords
      ...city.industries.map(
        (i) => `${i.toLowerCase()} jobs ${city.name.toLowerCase()}`
      ),
      // Region keywords
      ...city.regions.map((n) => `${n.toLowerCase()} tech jobs`),
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(CITIES).map((slug) => ({
    slug,
  }));
}

export default function CitySpecificPage({
  params,
}: {
  params: { slug: string };
}) {
  const city = CITIES[params.slug as CitySlug];

  if (!city) {
    notFound();
  }

  const content = generateLocationContent(city);

  return (
    <UseCasePage
      badge={`${city.name} Job Board Template`}
      title="Launch Your Tech Job Board"
      titleSuffix={`in ${city.name}`}
      description={`Create a modern job board for ${city.name}'s tech community using Next.js 14, TypeScript, and Airtable. Get started in minutes with our developer-friendly template.`}
      metrics={content.metrics}
      benefits={content.benefits}
      features={content.features}
      faqs={content.faqs}
      ctaDescription={`Join developers building modern job boards with Bordful. Clone our GitHub repository and launch your ${city.name} job board today.`}
    />
  );
}
