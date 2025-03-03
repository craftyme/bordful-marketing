import { notFound } from "next/navigation";
import { USE_CASES } from "@/lib/use-cases";
import { UseCasePage as UseCasePageComponent } from "@/components/use-case-page";
import Script from "next/script";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return Object.keys(USE_CASES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const useCase = USE_CASES[resolvedParams.slug];

  if (!useCase) {
    return {};
  }

  return createMetadata(`/use-cases/${resolvedParams.slug}`, {
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
  });
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const useCase = USE_CASES[resolvedParams.slug];

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
