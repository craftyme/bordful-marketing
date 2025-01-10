"use client";

import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { cn } from "@/lib/utils";

interface Integration {
  name: string;
  status: "live" | "soon";
  description: string;
  icon: React.ReactElement;
}

const IntegrationIcon = React.memo(function IntegrationIcon({
  children,
  className,
  viewBox = "0 0 24 24",
}: {
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
}) {
  return (
    <svg viewBox={viewBox} className={cn("h-5 w-5 fill-current", className)}>
      {children}
    </svg>
  );
});

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
      <IntegrationIcon viewBox="0 0 750 628">
        <path d="M21.225 192C21.025 192 20.775 191.975 20.5 191.975C14.925 191.975 9.87498 194.25 6.22498 197.925C2.69998 201.075 0.374976 205.525 0.0999756 210.525V210.575V471.6C0.699976 482.1 9.37498 490.375 19.95 490.375C23.05 490.375 25.975 489.675 28.575 488.4L28.45 488.45L233.925 389.95L326.675 345.1C332.825 341.975 336.95 335.7 336.95 328.45C336.95 320.475 331.95 313.675 324.9 311.025L324.775 310.975L27.675 193.325C25.775 192.5 23.55 192 21.225 191.95V192ZM731.15 190.775C728.65 190.8 726.275 191.3 724.1 192.225L724.225 192.175L411.45 313.3C404.45 316.225 399.6 323 399.575 330.925V608.85C399.675 619.125 408.025 627.425 418.325 627.425C420.8 627.425 423.175 626.95 425.35 626.05L425.225 626.1L738.05 504.575C745.05 501.925 749.925 495.275 749.925 487.5C749.925 487.45 749.925 487.4 749.925 487.35V209.425C749.85 199.125 741.5 190.8 731.175 190.8L731.15 190.775ZM374.75 0.525391C360.325 0.525391 346.575 3.47539 334.075 8.80039L334.75 8.55039L55.675 123.95C48.825 126.85 44.1 133.525 44.1 141.3C44.1 149.225 49 156 55.925 158.775L56.05 158.825L336.65 269.975C348 274.7 361.175 277.45 374.975 277.45C388.775 277.45 401.975 274.7 413.975 269.725L413.3 269.975L693.9 158.825C700.9 155.95 705.725 149.2 705.725 141.325C705.725 133.575 701.05 126.925 694.4 124.025L694.275 123.975L414.45 8.57539C402.75 3.50039 389.15 0.550389 374.85 0.550389C374.8 0.550389 374.75 0.550389 374.7 0.550389L374.75 0.525391Z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Google Sheets",
    status: "soon",
    description: "Export and sync job listings directly to Google Sheets",
    icon: (
      <IntegrationIcon>
        <path d="M19.385 21.667H4.615A2.618 2.618 0 0 1 2 19.052V4.948a2.618 2.618 0 0 1 2.615-2.615h14.77A2.618 2.618 0 0 1 22 4.948v14.104a2.618 2.618 0 0 1-2.615 2.615zM7.99 14.76v3.656h8.02v-3.656H7.99zm0-1.813h8.02V9.291H7.99v3.656zm0-5.469h8.02V5.583H7.99v1.895z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Notion",
    status: "soon",
    description: "Organize job data in Notion databases and workspaces",
    icon: (
      <IntegrationIcon>
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-1.026-.7-2.149-.606L3.063 2.31c-.419.047-.489.28-.349.466l1.745 1.432zm.466 3.857c.28-.233.607-.42 1.49-.373l14.661.84c.419.023.419.28.419.56l-.372 10.954c-.047.653-.28.933-.839.98l-14.334 1.716c-.606.07-.933 0-1.252-.373l-3.857-6.217c-.326-.606-.42-1.026-.42-1.716L1 7.858c0-.606.187-.886.653-.886l3.272 1.093zm-.979 10.954c.187.373.466.466.839.42l12.185-1.413c.373-.047.606-.28.606-.653V6.278c0-.373-.233-.56-.606-.56l-11.579-.84c-.373 0-.7.047-.933.327L3.622 6.557v10.615l.326 1.847zm10.766-10.488c.14.187.047.42-.093.513l-.7.233v6.637c-.603.42-1.198.653-1.664.653-.746 0-.933-.326-1.475-.933l-4.506-7.103v6.964l1.452.466c0 0 0 .84-1.172.84l-3.225.186c-.093-.186 0-.419.186-.513l.84-.28V8.724l-1.172-.373c-.187-.233-.093-.606.28-.653l3.318-.233 4.693 7.197v-6.344L13 8.071c-.187.186-.466 0-.466-.28l-.186-2.319 3.505-.233z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Supabase",
    status: "soon",
    description:
      "Store job data in a scalable PostgreSQL database with real-time updates",
    icon: (
      <IntegrationIcon>
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424c-.169.253-.203.574-.093.857.11.283.37.473.672.473h9.362v8.958c0 .335.425.483.642.224l9.081-12.261c.169-.253.203-.574.093-.857a.766.766 0 0 0-.672-.473z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Postgres",
    status: "soon",
    description:
      "Direct database integration for job data storage and querying",
    icon: (
      <IntegrationIcon>
        <path d="M12.03 19.564c-1.263.097-1.453-.895-1.453-.895 2.83-.443 3.993-1.994 3.993-1.994-2.632.661-5.617.574-8.196-.17-1.738-.508-2.486-1.316-2.486-1.316s1.337 2.087 4.897 2.249l.002.023c-.124.241-.94 1.655-2.853.127-1.079-.862-1.089-1.527-1.089-1.527s-.747.397-1.042.397c-.295 0-.345-.199-.345-.397 0-.22.747-.397 1.042-.397.295 0 1.042.198 1.042.397 0 0 1.044-.993 2.09-.993 1.044 0 2.09.993 2.09.993s.747-.397 1.042-.397c.295 0 1.042.198 1.042.397 0 .198-.05.397-.345.397-.295 0-1.042-.397-1.042-.397s-.01.664-1.089 1.527c-1.913 1.528-2.729.114-2.853-.127l.002-.023c3.56-.162 4.897-2.249 4.897-2.249s-.748.808-2.486 1.316c-2.579.744-5.564.831-8.196.17 0 0 1.163 1.551 3.993 1.994 0 0-.19.992-1.453.895 0 0 .19.794 1.453.596 0 0 .748.596 2.09.596 1.34 0 2.09-.596 2.09-.596 1.263.198 1.453-.596 1.453-.596zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Stripe",
    status: "soon",
    description: "Process payments and manage subscriptions for job listings",
    icon: (
      <IntegrationIcon>
        <path d="M13.976 9.15c-2.172-.806-3.396-1.38-3.396-2.197 0-.761.613-1.109 1.746-1.109 2.078 0 4.215.911 5.668 1.666V3.75c-1.19-.651-3.266-1.25-5.643-1.25-4.5 0-7.455 2.375-7.455 5.834 0 3.541 2.25 4.751 5.75 5.834 2.418.761 3.266 1.38 3.266 2.197 0 .825-.664 1.151-1.746 1.151-2.183 0-4.73-1.003-6.32-1.91v3.781c1.536.825 3.781 1.577 6.266 1.577 4.73 0 7.607-2.375 7.607-5.834 0-3.771-2.392-4.959-5.743-6.025z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Kadoa",
    status: "soon",
    description:
      "Automated job market intelligence and data extraction from any source",
    icon: (
      <IntegrationIcon>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </IntegrationIcon>
    ),
  },
  {
    name: "OpenAI",
    status: "soon",
    description: "AI-powered job description analysis and matching",
    icon: (
      <IntegrationIcon>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.282a4.476 4.476 0 0 1 2.343-1.845V12.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.282zm16.597 3.892l-5.843-3.369 2.02-1.163a.071.071 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.137v-6.16a.79.79 0 0 0-.402-.231zm2.962-3.502a4.476 4.476 0 0 1 .583 2.196l-.142-.085-4.779-2.758a.776.776 0 0 0-.784 0L11.0 11.4V9.062a.076.076 0 0 1 .033-.062l4.84-2.791a4.504 4.504 0 0 1 6.026 2.463zm-8.67-4.798a4.476 4.476 0 0 1 2.876 1.04l-.141.085-4.779 2.758a.795.795 0 0 0-.392.681v6.737l-2.02-1.168a.071.071 0 0 1-.038-.052V8.282a4.504 4.504 0 0 1 4.494-4.408zm-3.251 9.927l2.62-1.508 2.62 1.508v3.016l-2.62 1.508-2.62-1.508z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Resend",
    status: "soon",
    description:
      "Send beautiful transactional emails for job alerts and notifications",
    icon: (
      <IntegrationIcon>
        <path d="M10.0264 14.9999L13.3542 18.3277C13.4211 18.3946 13.4211 18.5053 13.3542 18.5722L10.0264 21.9C9.95951 21.9669 9.84876 21.9669 9.78183 21.9L6.454 18.5722C6.38707 18.5053 6.38707 18.3946 6.454 18.3277L9.78183 14.9999C9.84876 14.933 9.95951 14.933 10.0264 14.9999ZM14.2181 10.7819L17.546 14.1097C17.6129 14.1766 17.6129 14.2874 17.546 14.3543L14.2181 17.6821C14.1512 17.749 14.0405 17.749 13.9736 17.6821L10.6457 14.3543C10.5788 14.2874 10.5788 14.1766 10.6457 14.1097L13.9736 10.7819C14.0405 10.715 14.1512 10.715 14.2181 10.7819ZM10.0264 6.56396L13.3542 9.89179C13.4211 9.95872 13.4211 10.0695 13.3542 10.1364L10.0264 13.4642C9.95951 13.5311 9.84876 13.5311 9.78183 13.4642L6.454 10.1364C6.38707 10.0695 6.38707 9.95872 6.454 9.89179L9.78183 6.56396C9.84876 6.49703 9.95951 6.49703 10.0264 6.56396Z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Loops",
    status: "soon",
    description: "Automate email campaigns and engagement for job seekers",
    icon: (
      <IntegrationIcon>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-3a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "MailerSend",
    status: "soon",
    description:
      "Send bulk emails and newsletters to job applicants and recruiters",
    icon: (
      <IntegrationIcon>
        <path d="M22 8.608v8.784a3.6 3.6 0 0 1-3.6 3.6H5.6a3.6 3.6 0 0 1-3.6-3.6V8.608l9.65 4.825a.6.6 0 0 0 .7 0L22 8.608ZM5.6 3h12.8a3.6 3.6 0 0 1 3.6 3.6v.187L12 11.773 2 6.787V6.6A3.6 3.6 0 0 1 5.6 3Z" />
      </IntegrationIcon>
    ),
  },
  {
    name: "Polar",
    status: "soon",
    description:
      "Process payments and handle subscriptions with modern billing infrastructure",
    icon: (
      <IntegrationIcon>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z" />
      </IntegrationIcon>
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
