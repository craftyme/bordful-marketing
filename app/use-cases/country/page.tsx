import { Metadata } from "next";
import { UseCasePage } from "@/components/use-case-page";

export const metadata: Metadata = {
  title: "Country-Specific Job Boards - Bordful",
  description:
    "Launch a country-specific job board with localized features, language support, and regional job categories. Connect local talent with opportunities in your target country.",
};

const metrics = [
  {
    metric: "2-3x",
    description: "Higher engagement compared to global job boards",
  },
  {
    metric: "80%",
    description: "Of job seekers prefer local job boards",
  },
  {
    metric: "45%",
    description: "Better conversion rate for local employers",
  },
];

const benefits = [
  {
    title: "Local Language Support",
    description:
      "Built-in support for multiple languages and regional content to serve your target country effectively.",
  },
  {
    title: "Regional Job Categories",
    description:
      "Pre-configured job categories and industries specific to your chosen country's market.",
  },
  {
    title: "Local Currency & Payments",
    description:
      "Handle payments in local currency with region-specific payment methods and tax compliance.",
  },
  {
    title: "Cultural Relevance",
    description:
      "Customizable templates and layouts that resonate with local job seekers and employers.",
  },
  {
    title: "SEO Optimization",
    description:
      "Built-in SEO features optimized for local search engines and regional job search patterns.",
  },
  {
    title: "Compliance Ready",
    description:
      "Pre-built components for local labor laws, data protection, and regulatory requirements.",
  },
];

const features = [
  {
    title: "Localized Job Posting Forms",
    description:
      "Custom fields for local requirements, salary ranges in local currency, and region-specific job attributes.",
  },
  {
    title: "Regional Job Alerts",
    description:
      "Automated notifications for new jobs matching local preferences and requirements.",
  },
  {
    title: "Local Company Profiles",
    description:
      "Showcase employers with region-specific company information and cultural highlights.",
  },
  {
    title: "Geographic Filtering",
    description:
      "Advanced search with city, region, and area-based filtering for precise job matching.",
  },
];

const faqs = [
  {
    question: "How do I localize my job board for a specific country?",
    answer:
      "Bordful makes it easy with built-in localization features. You can set the default language, currency, and regional settings in your configuration. All components, including job posting forms and search filters, will automatically adapt to your chosen locale.",
  },
  {
    question: "Can I support multiple regions within a country?",
    answer:
      "Yes! You can set up custom regions, cities, and areas within your target country. Job seekers can filter by specific locations, and employers can post jobs with precise geographic targeting.",
  },
  {
    question: "What about local data protection laws?",
    answer:
      "Bordful includes configurable data protection features to help you comply with local regulations like GDPR (EU), LGPD (Brazil), or PDPA (Singapore). You can easily customize privacy policies and data handling practices.",
  },
  {
    question: "How do I handle local payment methods?",
    answer:
      "You can integrate popular payment gateways that support your country's preferred payment methods. Bordful works seamlessly with Stripe, which supports multiple local payment methods and currencies.",
  },
  {
    question: "Can I customize the job categories for my country?",
    answer:
      "Absolutely! You can define custom job categories that match your country's industry sectors and job market structure. This helps ensure your job board reflects the local employment landscape.",
  },
];

export default function CountryJobBoardPage() {
  return (
    <UseCasePage
      badge="Country-Specific Job Board"
      title="Launch Your Job Board"
      titleSuffix="for Your Country"
      description="Create a localized job board that connects talent with opportunities in your target country. Built-in support for local languages, currencies, and regional requirements."
      metrics={metrics}
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaDescription="Join successful country-specific job boards built with Bordful. Start connecting local talent with opportunities today."
    />
  );
}
