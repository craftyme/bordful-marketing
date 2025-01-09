import { Hero } from "@/components/hero";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Features />
    </div>
  );
}
