import { Metadata } from "next";
import { notFound } from "next/navigation";
import { USE_CASES } from "@/lib/use-cases";
import { UseCasePage as UseCasePageComponent } from "@/components/use-case-page";
import Script from "next/script";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(USE_CASES).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const useCase = USE_CASES[params.slug];

  if (!useCase) {
    return {};
  }

  return {
    title: useCase.seo.title,
    description: useCase.seo.description,
    keywords: useCase.seo.keywords,
    openGraph: {
      title: useCase.seo.title,
      description: useCase.seo.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: useCase.seo.title,
      description: useCase.seo.description,
    },
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const useCase = USE_CASES[params.slug];

  if (!useCase) {
    notFound();
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(useCase.seo.jsonLd),
        }}
      />
      <UseCasePageComponent
        badge={useCase.badge}
        title={useCase.title}
        titleSuffix={useCase.titleSuffix}
        description={useCase.description}
        metrics={useCase.metrics}
        benefits={useCase.benefits}
        features={useCase.features}
        ctaDescription={useCase.ctaDescription}
        faqs={useCase.faqs}
      />
    </>
  );
}
