import { createMetadata } from "@/lib/metadata";
import { UseCasePage } from "@/components/use-case-page";

export const metadata = createMetadata('/use-cases/city', {
  title: "City-Specific Job Boards - Bordful",
  description: "Launch a city-focused job board that connects local talent with employers in your urban area. Perfect for metropolitan job markets.",
});

const metrics = [
  {
    metric: "3-4x",
    description: "Higher relevance for local job seekers",
  },
  {
    metric: "75%",
    description: "Of jobs are filled through local connections",
  },
  {
    metric: "60%",
    description: "Better response rate from local candidates",
  },
];

const benefits = [
  {
    title: "Hyper-Local Focus",
    description:
      "Target specific neighborhoods and districts within your city for precise job matching.",
  },
  {
    title: "Community Integration",
    description:
      "Connect with local business associations and community events to boost visibility.",
  },
  {
    title: "Local Business Directory",
    description:
      "Showcase local employers with detailed company profiles and employer branding.",
  },
  {
    title: "City Events",
    description:
      "Promote job fairs, networking events, and career development opportunities in your city.",
  },
  {
    title: "Local SEO",
    description:
      "Optimized for city-specific searches and local business directories.",
  },
  {
    title: "Mobile-First",
    description:
      "Perfect for on-the-go job seekers looking for opportunities in their vicinity.",
  },
];

const features = [
  {
    title: "Neighborhood Filtering",
    description:
      "Allow job seekers to search by specific districts, neighborhoods, or postal codes.",
  },
  {
    title: "Local Business Verification",
    description:
      "Verify local businesses to build trust and ensure quality job listings.",
  },
  {
    title: "Public Transit Info",
    description:
      "Show commute times and public transportation options for each job listing.",
  },
  {
    title: "Local Salary Data",
    description:
      "Provide city-specific salary insights and cost of living comparisons.",
  },
];

const faqs = [
  {
    question: "How do I target specific neighborhoods in my city?",
    answer:
      "Bordful includes built-in neighborhood and district filtering. You can easily set up custom geographic zones, add local landmarks, and enable radius-based searches for precise targeting.",
  },
  {
    question: "Can I integrate with local business directories?",
    answer:
      "Yes! Bordful supports integration with popular local business directories and chambers of commerce. You can import business listings and sync job postings automatically.",
  },
  {
    question: "How do you handle local business verification?",
    answer:
      "We provide tools for verifying local businesses through business licenses, physical address verification, and integration with local business registries.",
  },
  {
    question: "Can I promote local job fairs and events?",
    answer:
      "Absolutely! The platform includes an events section where you can promote job fairs, networking events, and other local career opportunities.",
  },
];

export default function CityJobBoardPage() {
  return (
    <UseCasePage
      badge="City-Specific Job Board"
      title="Launch Your Job Board"
      titleSuffix="for Your City"
      description="Create a hyper-local job board that connects talent with opportunities in your city. Perfect for building stronger local communities."
      metrics={metrics}
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaDescription="Join successful city-specific job boards built with Bordful. Start connecting local talent with opportunities in your city today."
    />
  );
}
