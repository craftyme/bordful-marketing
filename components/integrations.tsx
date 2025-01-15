"use client";

import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Integration {
  name: string;
  status: "live" | "soon";
  description: string;
  icon: React.ReactElement;
}

const StatusBadge = React.memo(function StatusBadge({
  status,
}: {
  status: Integration["status"];
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "inline-flex h-2 w-2 rounded-full",
          status === "live" ? "bg-green-500" : "bg-yellow-500"
        )}
      />
      <span className="text-xs text-muted-foreground">
        {status === "live" ? "Live" : "Coming soon"}
      </span>
    </div>
  );
});

const IntegrationCard = React.memo(function IntegrationCard({
  name,
  status,
  description,
  icon,
}: Integration) {
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
      {icon}
      <div className="flex-1">
        <h3 className="mb-1 text-sm font-medium">{name}</h3>
        <p className="mb-2 text-xs text-muted-foreground">{description}</p>
        <StatusBadge status={status} />
      </div>
    </div>
  );
});

const IntegrationsHeader = React.memo(function IntegrationsHeader() {
  return (
    <>
      <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
        Powerful Integrations
      </h2>
      <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
        Connect with your favorite tools and services. More integrations are
        added regularly based on community feedback.
      </p>
      <div className="mt-8 text-center">
        <CustomLink
          href="mailto:support@bordful.com?subject=Integration Request"
          variant="button"
          external
        >
          Request Integration
        </CustomLink>
      </div>
    </>
  );
});

// Move integrations data to a separate constant
const integrations: Integration[] = [
  {
    name: "Airtable",
    status: "live",
    description: "Store and manage job data in customizable tables and views",
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
    name: "Notion",
    status: "soon",
    description: "Manage job content and documentation in Notion workspace",
    icon: (
      <Image
        src="/images/logos/notion.svg"
        alt="Notion"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Loops",
    status: "soon",
    description: "Send automated emails and newsletters to job seekers",
    icon: (
      <Image
        src="/images/logos/loops.svg"
        alt="Loops"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "OpenAI",
    status: "soon",
    description: "AI-powered job descriptions and content generation",
    icon: (
      <Image
        src="/images/logos/openai.svg"
        alt="OpenAI"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Stripe",
    status: "soon",
    description: "Process payments and manage subscriptions for job listings",
    icon: (
      <Image
        src="/images/logos/stripe.svg"
        alt="Stripe"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Kadoa",
    status: "soon",
    description: "Automated job market intelligence and data extraction",
    icon: (
      <Image
        src="/images/logos/kadoa.svg"
        alt="Kadoa"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Resend",
    status: "soon",
    description: "Send transactional emails to users and job applicants",
    icon: (
      <Image
        src="/images/logos/resend.svg"
        alt="Resend"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "MailerSend",
    status: "soon",
    description:
      "Send bulk emails and newsletters to job applicants and recruiters",
    icon: (
      <Image
        src="/images/logos/mailersend.svg"
        alt="MailerSend"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Polar",
    status: "soon",
    description:
      "Process payments and handle subscriptions with modern billing infrastructure",
    icon: (
      <Image
        src="/images/logos/polar.svg"
        alt="Polar"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Google Sheets",
    status: "soon",
    description: "Sync and manage job data with Google Sheets",
    icon: (
      <Image
        src="/images/logos/googlesheets.svg"
        alt="Google Sheets"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "PostgreSQL",
    status: "soon",
    description: "Store job data in a powerful and reliable database",
    icon: (
      <Image
        src="/images/logos/postgresql.svg"
        alt="PostgreSQL"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
  {
    name: "Supabase",
    status: "soon",
    description:
      "Build your job board with an open source Firebase alternative",
    icon: (
      <Image
        src="/images/logos/supabase.svg"
        alt="Supabase"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
];

export function Integrations() {
  return (
    <Section variant="secondary">
      <Container>
        <IntegrationsHeader />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => (
            <IntegrationCard key={integration.name} {...integration} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
