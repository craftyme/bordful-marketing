import { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";

export const metadata: Metadata = {
  title: "Technology-Specific Job Boards - Bordful",
  description:
    "Launch a technology-specific job board with specialized features for your tech stack. Connect developers and tech professionals with targeted opportunities.",
};

const metrics = [
  {
    metric: "6x",
    description: "Higher match rate for tech positions",
  },
  {
    metric: "80%",
    description: "Faster technical screening process",
  },
  {
    metric: "95%",
    description: "Of tech recruiters find qualified candidates",
  },
];

const benefits = [
  {
    title: "Tech Stack Focus",
    description:
      "Specialized categories and filters for specific programming languages and technologies.",
  },
  {
    title: "Code Assessment",
    description:
      "Built-in technical assessment tools and coding challenge platforms.",
  },
  {
    title: "GitHub Integration",
    description:
      "Seamless integration with GitHub profiles and repository showcases.",
  },
  {
    title: "Tech Community",
    description:
      "Foster a community of developers sharing knowledge and opportunities.",
  },
  {
    title: "Remote Support",
    description:
      "Built for remote work with distributed team and collaboration features.",
  },
  {
    title: "Developer Tools",
    description:
      "Integration with popular developer tools and project management platforms.",
  },
];

const features = [
  {
    title: "Tech Stack Matching",
    description:
      "Advanced matching system based on programming languages and technical skills.",
  },
  {
    title: "Code Challenges",
    description:
      "Integrated platform for creating and evaluating coding challenges.",
  },
  {
    title: "Tech Profiles",
    description:
      "Developer-focused profiles highlighting projects, contributions, and tech stack.",
  },
  {
    title: "API Access",
    description:
      "RESTful API for integration with other developer tools and platforms.",
  },
];

const faqs = [
  {
    question: "How do you verify technical skills?",
    answer:
      "Bordful integrates with coding assessment platforms and provides built-in technical screening tools. You can also verify skills through GitHub integration and portfolio reviews.",
  },
  {
    question: "Can I customize for specific tech stacks?",
    answer:
      "Yes! You can configure custom categories for programming languages, frameworks, and tools. The platform automatically matches candidates based on technical requirements.",
  },
  {
    question: "How do you handle remote tech positions?",
    answer:
      "Our platform is built for remote work with features for timezone management, virtual interviews, and distributed team collaboration.",
  },
  {
    question: "What developer integrations are available?",
    answer:
      "We support integration with GitHub, Stack Overflow, LinkedIn, and popular project management tools. You can also access our API for custom integrations.",
  },
];

export default function TechnologyJobBoardPage() {
  return (
    <UseCasePage
      badge="Technology-Specific Job Board"
      title="Launch Your Job Board"
      titleSuffix="for Your Tech Stack"
      description="Create a specialized job board that connects developers with opportunities in your technology stack. Built for technical recruitment."
      metrics={metrics}
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaDescription="Join successful technology-specific job boards built with Bordful. Start connecting tech talent with opportunities in your stack today."
    />
  );
}
