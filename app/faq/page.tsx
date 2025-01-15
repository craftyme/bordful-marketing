import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { FAQ } from "@/components/faq";

export const metadata: Metadata = {
  title: "FAQ - Bordful",
  description:
    "Frequently asked questions about Bordful. Find answers to common questions about features, pricing, licensing, and technical details.",
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-[800px]">
            <FAQ variant="standalone" />
          </div>
        </Container>
      </Section>
    </div>
  );
}
