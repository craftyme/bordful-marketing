import { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";

export const metadata: Metadata = {
  title: "Remote Job Boards - Bordful",
  description:
    "Launch a remote job board with specialized features for distributed teams. Connect remote talent with location-independent opportunities worldwide.",
};

const metrics = [
  {
    metric: "3x",
    description: "Larger talent pool for employers",
  },
  {
    metric: "75%",
    description: "Of candidates prefer remote positions",
  },
  {
    metric: "50%",
    description: "Lower recruitment costs",
  },
];

const benefits = [
  {
    title: "Global Reach",
    description:
      "Connect with talent and opportunities worldwide without geographical limitations.",
  },
  {
    title: "Remote Culture",
    description:
      "Built-in features to support and promote remote work culture and practices.",
  },
  {
    title: "Time Zone Management",
    description:
      "Tools for handling distributed teams across different time zones.",
  },
  {
    title: "Virtual Onboarding",
    description:
      "Resources and guides for remote hiring and virtual team integration.",
  },
  {
    title: "Digital Tools",
    description:
      "Integration with popular remote work and collaboration platforms.",
  },
  {
    title: "Work Flexibility",
    description:
      "Support for various remote work arrangements and flexible schedules.",
  },
];

const features = [
  {
    title: "Remote Filters",
    description:
      "Advanced filtering for time zones, work arrangements, and remote policies.",
  },
  {
    title: "Virtual Interviews",
    description:
      "Built-in video interviewing and remote assessment capabilities.",
  },
  {
    title: "Remote Stack",
    description:
      "Showcase remote work tools and technologies used by companies.",
  },
  {
    title: "Global Payments",
    description:
      "Support for international payment methods and currency conversion.",
  },
];

const faqs = [
  {
    question: "How do you handle different time zones?",
    answer:
      "Bordful includes time zone management tools that automatically display job listings and schedules in the candidate's local time. You can also filter positions by preferred time zones and overlap requirements.",
  },
  {
    question: "Can I verify remote work experience?",
    answer:
      "Yes! Our platform includes features for verifying remote work history, assessing remote collaboration skills, and checking references from distributed teams.",
  },
  {
    question: "What remote work tools are supported?",
    answer:
      "We integrate with popular remote work platforms including Slack, Zoom, Microsoft Teams, and project management tools. You can also specify your remote tech stack in job listings.",
  },
  {
    question: "How do you handle international hiring?",
    answer:
      "Our platform supports international hiring with features for currency conversion, global payment methods, and compliance tools for different regions.",
  },
];

export default function RemoteJobBoardPage() {
  return (
    <UseCasePage
      badge="Remote Job Board"
      title="Launch Your Job Board"
      titleSuffix="for Remote Work"
      description="Create a specialized job board that connects remote talent with distributed teams. Built for the future of work."
      metrics={metrics}
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaDescription="Join successful remote job boards built with Bordful. Start connecting distributed teams with global talent today."
    />
  );
}
