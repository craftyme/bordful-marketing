import * as React from "react";
import { CustomLink } from "./ui/link";
import Image from "next/image";

interface HelpCategory {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const helpCategories: HelpCategory[] = [
  {
    title: "Getting Started",
    description:
      "Learn the basics of setting up and customizing your job board.",
    href: "/docs/quick-start",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Troubleshooting",
    description: "Find solutions to common issues and error messages.",
    href: "/docs/guides/troubleshooting",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "API Documentation",
    description: "Explore our API endpoints and integration guides.",
    href: "/docs/api",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "FAQ",
    description: "Find answers to frequently asked questions.",
    href: "/faq",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
];

const supportChannels = [
  {
    title: "Email Support",
    description: "Get in touch with our support team via email.",
    href: "mailto:support@bordful.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Twitter/X Support",
    description: "Follow us for updates and quick support.",
    href: "https://x.com/bordful",
    icon: (
      <Image
        src="/images/logos/x.svg"
        alt="X (Twitter)"
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
    ),
  },
];

const HelpCard = React.memo(function HelpCard({
  title,
  description,
  href,
  icon,
}: HelpCategory) {
  return (
    <CustomLink
      href={href}
      className="block rounded-lg border bg-background p-6 transition-colors hover:bg-background/80"
    >
      <div className="flex items-start gap-4">
        <div className="text-foreground">{icon}</div>
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </CustomLink>
  );
});

export function HelpCenter() {
  return (
    <div className="space-y-12">
      <div className="grid gap-6 sm:grid-cols-2">
        {helpCategories.map((category) => (
          <HelpCard key={category.title} {...category} />
        ))}
      </div>

      <div>
        <h2 className="mb-6 text-xl font-medium">Support Channels</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {supportChannels.map((channel) => (
            <HelpCard key={channel.title} {...channel} />
          ))}
        </div>
      </div>
    </div>
  );
}
