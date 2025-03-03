import { createMetadata } from "@/lib/metadata";
import { UseCasePage } from "@/components/use-case-page";

export const metadata = createMetadata('/use-cases/industry', {
  title: "Industry-Specific Job Boards - Bordful",
  description: "Create a specialized job board for your industry. Connect qualified candidates with employers in your specific sector.",
});

const metrics = [
  {
    metric: "4x",
    description: "Higher candidate quality for specialized roles",
  },
  {
    metric: "70%",
    description: "Faster time-to-hire for industry positions",
  },
  {
    metric: "85%",
    description: "Of employers find better-matched candidates",
  },
];

const benefits = [
  {
    title: "Industry Expertise",
    description:
      "Showcase deep industry knowledge with specialized job categories and requirements.",
  },
  {
    title: "Professional Networks",
    description:
      "Connect with industry associations and professional networks to expand reach.",
  },
  {
    title: "Skill Verification",
    description:
      "Validate industry-specific skills and certifications for quality candidates.",
  },
  {
    title: "Industry News",
    description:
      "Keep your community informed with industry trends, news, and career insights.",
  },
  {
    title: "Targeted Advertising",
    description:
      "Reach industry professionals through specialized marketing channels.",
  },
  {
    title: "Compliance Tools",
    description:
      "Handle industry-specific regulations and compliance requirements effortlessly.",
  },
];

const features = [
  {
    title: "Specialized Job Forms",
    description:
      "Custom application forms with industry-specific fields and requirements.",
  },
  {
    title: "Certification Tracking",
    description:
      "Track and verify professional certifications and industry qualifications.",
  },
  {
    title: "Industry Analytics",
    description:
      "Gain insights into industry hiring trends and salary benchmarks.",
  },
  {
    title: "Professional Profiles",
    description:
      "Detailed candidate profiles highlighting industry experience and expertise.",
  },
];

const faqs = [
  {
    question: "How do I customize job forms for my industry?",
    answer:
      "Bordful provides flexible form builders that let you add industry-specific fields, requirements, and qualification checks. You can create custom application workflows tailored to your industry's needs.",
  },
  {
    question: "Can I verify industry certifications?",
    answer:
      "Yes! The platform includes tools for certification verification and can integrate with professional certification bodies to validate credentials automatically.",
  },
  {
    question: "How do you handle industry compliance?",
    answer:
      "We offer customizable compliance tools that can be configured for your industry's specific regulations, including document collection, verification processes, and reporting requirements.",
  },
  {
    question: "Can I integrate with industry associations?",
    answer:
      "Absolutely! Bordful supports partnerships with professional associations, enabling features like member verification, exclusive listings, and automated job distribution to association networks.",
  },
];

export default function IndustryJobBoardPage() {
  return (
    <UseCasePage
      badge="Industry-Specific Job Board"
      title="Launch Your Job Board"
      titleSuffix="for Your Industry"
      description="Create a specialized job board that connects professionals with opportunities in your industry. Built for your sector's unique requirements."
      metrics={metrics}
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaDescription="Join successful industry-specific job boards built with Bordful. Start connecting specialized talent with opportunities in your sector today."
    />
  );
}
