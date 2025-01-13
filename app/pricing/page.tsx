import { Metadata } from "next";
import { Pricing } from "@/components/pricing";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Pricing - Bordful",
  description:
    "Choose between our open source version or let us handle the complete setup with our custom installation service.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <SectionHeader
                title="Pricing"
                description="Choose between our open source version or let us handle the complete setup with our custom installation service."
              />
            </div>
            <div className="mt-16">
              <Pricing variant="standalone" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
