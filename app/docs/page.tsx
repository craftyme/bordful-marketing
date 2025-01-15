import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Documentation } from "@/components/documentation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Documentation - Bordful",
  description:
    "Learn how to set up, customize, and manage your job board with our comprehensive documentation.",
};

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-[800px]">
            <Breadcrumbs className="mb-8" />
            <SectionHeader
              title="Documentation"
              description="Everything you need to know about setting up and managing your job board. From installation to customization, we've got you covered."
            />
            <div className="mt-16">
              <Documentation />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
