import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Pricing } from "@/components/pricing";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Pricing - Bordful",
  description:
    "Simple, transparent pricing for your job board. Start for free and scale as you grow.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Breadcrumbs className="mb-8" />
          <div className="mx-auto max-w-[800px]">
            <SectionHeader
              title="Simple, Transparent Pricing"
              description="Start for free and scale as your job board grows. No hidden fees, no surprises."
            />
            <div className="mt-16">
              <Pricing />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
