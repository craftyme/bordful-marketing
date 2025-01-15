import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { HelpCenter } from "@/components/help-center";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Help Center - Bordful",
  description:
    "Get help with Bordful. Find answers to common questions, troubleshooting guides, and support resources.",
};

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-[800px]">
            <Breadcrumbs className="mb-8" />
            <SectionHeader
              title="Help Center"
              description="Find answers to common questions, troubleshooting guides, and support resources to help you get the most out of Bordful."
            />
            <div className="mt-16">
              <HelpCenter />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
