import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    name: "Open Source",
    price: "Free",
    description: "For developers and hobbyists",
    features: [
      "Next.js 15 codebase",
      "Basic job board features",
      "Self-hosted solution",
      "MIT license",
      "Community support",
    ],
    cta: "Clone Now",
    href: "https://github.com/tomaslau/bordful",
    external: true,
  },
  {
    name: "Pro",
    price: "$299",
    description: "For solopreneurs and founders",
    features: [
      "Premium job board templates",
      "Advanced customization",
      "No subscription fees",
      "Free lifetime updates",
      "Email support",
    ],
    cta: "Buy Pro",
    href: "#buy-pro",
  },
  {
    name: "Business",
    price: "$799",
    description: "For agencies and teams",
    features: [
      "Everything in Pro plan",
      "Team collaboration",
      "No recurring fees",
      "Multiple projects license",
      "Email support",
    ],
    cta: "Buy Business",
    href: "#buy-business",
  },
  {
    name: "Custom Setup",
    price: "$499",
    description: "Let us handle everything for you",
    features: [
      "Full installation service",
      "Custom domain setup",
      "One-time payment",
      "1-hour consultation",
      "Email support",
    ],
    cta: "Order Setup",
    href: "#order-setup",
    highlight: true,
  },
];

const Feature = React.memo(function Feature({ text }: Feature) {
  return (
    <li className="flex text-sm text-muted-foreground">
      <svg
        className="mr-2 h-5 w-5 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      {text}
    </li>
  );
});

const PricingCard = React.memo(function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  href,
  external,
  highlight,
}: Plan) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-background/50 p-6 backdrop-blur-sm",
        highlight && "border-primary"
      )}
    >
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 text-3xl font-medium">{price}</div>
      <ul className="mt-4 flex-1 space-y-2">
        {features.map((feature) => (
          <Feature key={feature} text={feature} />
        ))}
      </ul>
      <CustomLink
        href={href}
        variant={highlight ? "primary" : "button"}
        className="mt-6 h-10 px-6 text-sm w-full justify-center"
        external={external}
      >
        {cta}
      </CustomLink>
    </div>
  );
});

const PricingHeader = React.memo(function PricingHeader() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
        Pricing
      </h2>
      <p className="mx-auto mt-3 max-w-[600px] text-sm text-muted-foreground">
        Choose between our open source version or premium options with
        additional features and support
      </p>
    </div>
  );
});

export function Pricing() {
  return (
    <Section id="pricing" variant="secondary">
      <Container>
        <PricingHeader />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>All payments are processed & secured by Stripe</p>
          <p className="mt-1">Price in USD. VAT may apply.</p>
        </div>
      </Container>
    </Section>
  );
}
