import { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";

export const metadata: Metadata = {
  title: "Role-Specific Job Boards - Bordful",
  description:
    "Launch a role-specific job board with specialized features for your profession. Connect qualified candidates with targeted opportunities in their field.",
};

const metrics = [
  {
    metric: "5x",
    description: "More relevant applications per posting",
  },
  {
    metric: "65%",
    description: "Reduction in time-to-hire",
  },
  {
    metric: "90%",
    description: "Of employers report better candidate matches",
  },
];

const benefits = [
  {
    title: "Role Expertise",
    description:
      "Showcase deep understanding of the profession with role-specific features and content.",
  },
  {
    title: "Skill Assessment",
    description:
      "Built-in tools for evaluating role-specific skills and competencies.",
  },
  {
    title: "Career Development",
    description:
      "Provide resources for professional growth and career advancement.",
  },
  {
    title: "Salary Insights",
    description:
      "Offer detailed compensation data and benchmarks for the specific role.",
  },
  {
    title: "Professional Community",
    description:
      "Build a community of professionals sharing insights and opportunities.",
  },
  {
    title: "Learning Resources",
    description:
      "Curated content and resources for skill development and certification.",
  },
];

const features = [
  {
    title: "Skill Matrix",
    description:
      "Detailed skill assessment and matching system for the specific role.",
  },
  {
    title: "Portfolio Showcase",
    description:
      "Dedicated space for candidates to showcase relevant work and projects.",
  },
  {
    title: "Career Pathing",
    description:
      "Tools for mapping career progression and identifying growth opportunities.",
  },
  {
    title: "Role-Based Search",
    description:
      "Advanced search filters tailored to the specific role and its variations.",
  },
];

const faqs = [
  {
    question: "How do you ensure candidate quality for specific roles?",
    answer:
      "Bordful includes role-specific skill assessments, portfolio showcases, and verification tools to ensure candidates meet the required qualifications and experience levels.",
  },
  {
    question: "Can I customize the application process for my role?",
    answer:
      "Yes! You can create custom application workflows with role-specific questions, skill assessments, and portfolio requirements tailored to your profession.",
  },
  {
    question: "How do you handle different experience levels?",
    answer:
      "Our platform supports multiple experience levels with customizable requirements, separate job categories, and targeted content for each career stage.",
  },
  {
    question: "What career development features are included?",
    answer:
      "We provide tools for skill tracking, learning resources, mentorship connections, and career progression planning specific to your role.",
  },
];

export default function RoleJobBoardPage() {
  return (
    <UseCasePage
      badge="Role-Specific Job Board"
      title="Launch Your Job Board"
      titleSuffix="for Your Profession"
      description="Create a specialized job board that connects qualified professionals with targeted opportunities. Built for your role's unique requirements."
      metrics={metrics}
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaDescription="Join successful role-specific job boards built with Bordful. Start connecting specialized talent with opportunities in your profession today."
    />
  );
}
