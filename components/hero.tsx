import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { siteConfig } from "@/lib/constants";

const HeroContent = React.memo(function HeroContent() {
  return (
    <Container>
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Launch Your Job Board{" "}
        <span className="hidden sm:inline">in Minutes</span>
        <span className="sm:hidden">in Minutes</span>
      </h1>
      <p className="mx-auto mt-3 max-w-[600px] text-base text-muted-foreground">
        {siteConfig.description}. Start accepting job postings and connecting
        talent with opportunities today.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <CustomLink
          href="#"
          variant="primary"
          className="h-10 px-6 text-sm"
          aria-label="Get started with Bordful"
        >
          Get Started
        </CustomLink>
        <CustomLink
          href={siteConfig.links.demo}
          variant="button"
          className="h-10 px-6 text-sm"
          external
          aria-label="View live demo of Bordful"
        >
          Live Demo
        </CustomLink>
      </div>
    </Container>
  );
});

export function Hero() {
  return (
    <Section padding="hero" className="text-center">
      <HeroContent />
    </Section>
  );
}
