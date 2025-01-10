import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";

const HeroContent = React.memo(function HeroContent() {
  return (
    <Container>
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Launch Your Job Board{" "}
        <span className="hidden sm:inline">in Minutes</span>
        <span className="sm:hidden">in Minutes</span>
      </h1>
      <p className="mx-auto mt-3 max-w-[600px] text-base text-muted-foreground">
        Open source job board starter template built with Next.js. Clone,
        customize and deploy your own job board in minutes.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <CustomLink
          href="https://github.com/tomaslau/bordful"
          variant="primary"
          className="h-10 px-6 text-sm"
          external
          aria-label="Clone Bordful on GitHub"
        >
          Clone Now
        </CustomLink>
        <CustomLink
          href="https://demo.bordful.com"
          variant="button"
          className="h-10 px-6 text-sm"
          external
          aria-label="View Live Demo"
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
