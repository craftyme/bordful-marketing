import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Showcase } from "@/components/showcase";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = createMetadata('/showcase', {
  title: "Showcase - Bordful",
  description: "Discover successful job boards powered by Bordful. From niche industry boards to regional platforms, see how others are using our template.",
});

export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Breadcrumbs className="mb-8" />
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <SectionHeader
                title="Showcase"
                description="Discover successful job boards powered by Bordful. From niche industry boards to regional platforms, see how others are using our template."
              />
            </div>
            <div className="mt-16">
              <Showcase variant="standalone" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
