import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import Image from "next/image";

interface Technology {
  name: string;
  description: string;
  icon: React.ReactElement;
}

const techStack: Technology[] = [
  {
    name: "Next.js",
    description: "React framework for production",
    icon: (
      <Image
        src="/images/logos/nextjs.svg"
        alt="Next.js"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Airtable",
    description: "Powerful database & CMS",
    icon: (
      <Image
        src="/images/logos/airtable.svg"
        alt="Airtable"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: (
      <Image
        src="/images/logos/tailwindcss.svg"
        alt="Tailwind CSS"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "shadcn/ui",
    description: "Beautifully designed components",
    icon: (
      <Image
        src="/images/logos/shadcn.svg"
        alt="shadcn/ui"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "GitHub",
    description: "Version control and collaboration",
    icon: (
      <Image
        src="/images/logos/github.svg"
        alt="GitHub"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Vercel",
    description: "Deploy and scale with ease",
    icon: (
      <Image
        src="/images/logos/vercel.svg"
        alt="Vercel"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
];

const TechCard = React.memo(function TechCard({
  name,
  description,
  icon,
}: Technology) {
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
      {icon}
      <div>
        <h3 className="mb-1 text-sm font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
});

export function TechStack() {
  return (
    <Section>
      <Container>
        <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
          Built with Modern Stack
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
          Powered by the latest technologies and tools to ensure scalability,
          performance, and developer experience. Start for free.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
