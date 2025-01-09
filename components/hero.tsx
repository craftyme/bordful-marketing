import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <Section padding="hero" className="text-center">
      <Container>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Launch Your Job Board <br className="hidden sm:inline" />
          in Minutes
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-base text-muted-foreground">
          {siteConfig.description}. Start accepting job postings and connecting
          talent with opportunities today.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <CustomLink href="#" variant="primary" className="h-9 px-4 text-sm">
            Get Started
          </CustomLink>
          <CustomLink
            href={siteConfig.links.demo}
            variant="button"
            className="h-9 px-4 text-sm"
            external
          >
            Live Demo
          </CustomLink>
        </div>
      </Container>
    </Section>
  );
}
