import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Pricing } from "@/components/pricing";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Pricing - Bordful",
  description:
    "Simple pricing for your job board. Bordful is open source and free to use commercially. Custom setup service available for a one-time fee.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Breadcrumbs className="mb-8" />
          <div className="mx-auto max-w-[800px]">
            <SectionHeader
              title="Simple Pricing"
              description="Bordful is open source and free to use commercially. Need help getting started? We offer custom setup services for a one-time fee."
            />
            <div className="mt-16">
              <Pricing variant="standalone" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
