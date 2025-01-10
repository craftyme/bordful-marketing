import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Brands } from "@/components/brands";
import { TechStack } from "@/components/tech-stack";
import { Pricing } from "@/components/pricing";
import { Integrations } from "@/components/integrations";
import { UseCases } from "@/components/use-cases";
import { Showcase } from "@/components/showcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      <TechStack />
      <Features />
      <UseCases />
      <Integrations />
      <Showcase />
      <Pricing />
    </div>
  );
}
