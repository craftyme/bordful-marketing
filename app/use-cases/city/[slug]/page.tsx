import { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";
import {
  CORE_FEATURES,
  CORE_METRICS,
  CORE_BENEFITS,
  CORE_FAQS,
} from "@/lib/features";
import { createMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Add static params generation for key cities
export async function generateStaticParams() {
  // Top tech hubs and emerging markets
  return [
    { slug: "new-york" },
    { slug: "san-francisco" },
    { slug: "london" },
    { slug: "berlin" },
    { slug: "singapore" },
    { slug: "toronto" },
    { slug: "sydney" },
    { slug: "amsterdam" },
    { slug: "austin" },
    { slug: "bangalore" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cityName = resolvedParams.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title = `${cityName} Job Board Software | Create a Local Job Site`;
  const description = `Launch your own ${cityName} job board website using Next.js and Airtable. Modern UI components, job search filters, and TypeScript support included.`;

  return createMetadata(`/use-cases/city/${resolvedParams.slug}`, {
    title,
    description,
    keywords: [
      `${cityName.toLowerCase()} job board software`,
      `${cityName.toLowerCase()} job site template`,
      "next.js job board",
      "airtable job board",
      "job board template",
      "typescript job board",
      "modern job board software",
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  });
}

export default async function CityJobBoardPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cityName = resolvedParams.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Convert readonly arrays to mutable ones
  const metrics = [...CORE_METRICS];
  const benefits = [...CORE_BENEFITS];
  const faqs = [...CORE_FAQS];

  return (
    <UseCasePage
      badge={`${cityName} Job Board Software`}
      title={`Create Your ${cityName}`}
      titleSuffix="Job Board Website"
      description={`Launch a modern job board for ${cityName} with essential features like job search filters, responsive design, and Airtable integration.`}
      metrics={metrics}
      benefits={benefits}
      features={[
        {
          title: CORE_FEATURES.jobListings.title,
          description: `${CORE_FEATURES.jobListings.description} for ${cityName}`,
        },
        {
          title: CORE_FEATURES.userInterface.title,
          description: CORE_FEATURES.userInterface.description,
        },
        {
          title: CORE_FEATURES.integrations.title,
          description: CORE_FEATURES.integrations.description,
        },
        {
          title: CORE_FEATURES.components.title,
          description: CORE_FEATURES.components.description,
        },
        {
          title: CORE_FEATURES.developerTools.title,
          description: CORE_FEATURES.developerTools.description,
        },
      ]}
      faqs={[
        {
          question: `What features are included in the ${cityName} job board template?`,
          answer:
            "The template includes job search with filters, job details with sidebar layout, similar jobs recommendations, pagination support, and modern UI components with dark mode and responsive design.",
        },
        ...faqs,
      ]}
      ctaDescription={`Ready to launch your ${cityName} job board? Get started with our Next.js and Airtable powered template.`}
    />
  );
}
