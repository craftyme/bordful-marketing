import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Brands } from "@/components/brands";
import { TechStack } from "@/components/tech-stack";
import { Pricing } from "@/components/pricing";
import { Integrations } from "@/components/integrations";
import { UseCases } from "@/components/use-cases";
import { Showcase } from "@/components/showcase";
import { HomeDocumentation } from "@/components/home-documentation";
import { Blog } from "@/components/blog";
import { FAQ } from "@/components/faq";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata('/', {
  title: siteConfig.name,
  description: siteConfig.description,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      <TechStack />
      <Features />
      <UseCases />
      <Integrations />
      <Showcase limit={3} />
      <HomeDocumentation />
      <Blog />
      <Pricing />
      <FAQ />
    </div>
  );
}
