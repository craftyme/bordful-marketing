import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Brands } from "@/components/brands";
import { TechStack } from "@/components/tech-stack";
import { Pricing } from "@/components/pricing";
import { Integrations } from "@/components/integrations";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      <TechStack />
      <Features />
      <Integrations />
      <Pricing />
    </div>
  );
}
