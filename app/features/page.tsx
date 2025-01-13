import { Metadata } from "next";
import { Features } from "@/components/features";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Features - Bordful",
  description:
    "Everything you need to run a successful job board. Built with modern technologies and best practices.",
};

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Features variant="standalone" />
        </Container>
      </Section>
    </div>
  );
}
