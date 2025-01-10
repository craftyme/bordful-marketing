import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Brands } from "@/components/brands";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      <Features />
      <Pricing />
    </div>
  );
}
