import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { Badge } from "./ui/badge";
import Image from "next/image";

const HeroContent = React.memo(function HeroContent() {
  return (
    <Container>
      <div className="mx-auto max-w-[980px] pb-12">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="text-muted-foreground">
            Open Source Job Board Software
          </Badge>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Launch Your Job Board{" "}
            <span className="text-muted-foreground">in Minutes</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-[600px]">
            Open source job board starter template built with Next.js and
            Airtable.
            <br /> Clone, customize and deploy your own job board in minutes.
          </p>
          <div className="flex items-center gap-3">
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
        </div>
      </div>

      {/* Demo Screenshot */}
      <div className="relative mx-auto w-full max-w-[1080px] overflow-hidden rounded-lg border bg-background">
        <Image
          src="/images/bordful-demo.png"
          alt="Bordful Demo"
          width={2160}
          height={1215}
          className="w-full"
          quality={100}
          priority
        />
      </div>
    </Container>
  );
});

export function Hero() {
  return (
    <Section padding="hero" className="overflow-hidden">
      <HeroContent />
    </Section>
  );
}
