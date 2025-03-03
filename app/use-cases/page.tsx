import { Metadata } from "next";
import { UseCases } from "@/components/use-cases";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata('/use-cases', {
  title: "Use Cases - Bordful",
  description:
    "Explore different ways to launch your niche job board with Bordful. From local to industry-specific job boards, we've got you covered.",
});

export default function UseCasesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Breadcrumbs className="mb-8" />
          <header className="text-center">
            <SectionHeader
              title="Use Cases"
              description="Discover how you can launch your own specialized job board. Whether it's location-based, industry-focused, or role-specific, Bordful helps you create the perfect platform."
            />
          </header>
          <UseCases variant="standalone" className="mt-16" />
        </Container>
      </Section>
    </main>
  );
}
