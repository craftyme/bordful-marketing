import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { MetricCard } from "@/components/ui/metric-card";
import { BenefitCard } from "@/components/ui/benefit-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { FAQ } from "@/components/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CustomLink } from "@/components/ui/link";

interface UseCasePageProps {
  badge: string;
  title: string;
  titleSuffix: string;
  description: string;
  metrics: Array<{
    metric: string;
    description: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function UseCasePage({
  badge,
  title,
  titleSuffix,
  description,
  metrics,
  benefits,
  features,
  faqs,
}: UseCasePageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Section padding="hero" className="text-center">
        <Container>
          <Breadcrumbs className="mb-6" />
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              {badge}
            </span>
          </div>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title} <span className="hidden sm:inline">{titleSuffix}</span>
            <span className="sm:hidden">{titleSuffix}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-[600px] text-base text-muted-foreground text-balance">
            {description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <CustomLink
              href="https://github.com/tomaslau/bordful"
              variant="primary"
              className="h-10 px-6 text-sm"
              external
              aria-label="Clone Bordful on GitHub"
            >
              Clone Now
            </CustomLink>
            <CustomLink
              href="https://demo.bordful.com"
              variant="button"
              className="h-10 px-6 text-sm"
              external
              aria-label="View Live Demo"
            >
              Live Demo
            </CustomLink>
          </div>
        </Container>
      </Section>

      {/* Success Metrics */}
      <Section variant="secondary">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.metric} {...metric} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <SectionHeader
            title={`Why Choose a ${badge}?`}
            description="Stand out in your local market with features designed specifically for your target needs."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section variant="secondary">
        <Container>
          <SectionHeader
            title="Powerful Features for Success"
            description="Everything you need to create a thriving job marketplace."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            description="Everything you need to know about launching your specialized job board."
          />
          <FAQ items={faqs} variant="standalone" showTitle={false} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="secondary">
        <Container>
          <div className="mx-auto max-w-[600px] text-center">
            <SectionHeader
              title={`Ready to Launch Your ${badge}?`}
              description="Join successful job boards built with Bordful. Start connecting talent with opportunities today."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <CustomLink
                href="https://github.com/tomaslau/bordful"
                variant="primary"
                className="h-10 px-6 text-sm"
                external
                aria-label="Clone Bordful on GitHub"
              >
                Clone Now
              </CustomLink>
              <CustomLink
                href="https://demo.bordful.com"
                variant="button"
                className="h-10 px-6 text-sm"
                external
                aria-label="View Live Demo"
              >
                Live Demo
              </CustomLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
