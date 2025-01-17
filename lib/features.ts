/**
 * Core platform features and capabilities
 * IMPORTANT: This is our single source of truth.
 * Only add features that are actually implemented.
 */

export const CORE_FEATURES = {
  jobListings: {
    title: "Job Listings",
    description: "Modern job listing platform with essential features",
    capabilities: [
      "Job search with filters",
      "Job details with sidebar layout",
      "Similar jobs recommendations",
      "Pagination support",
    ],
  },
  userInterface: {
    title: "Modern UI Components",
    description: "Built with Next.js 14 and Tailwind CSS",
    capabilities: [
      "Responsive design",
      "Dark mode support",
      "Custom typography with Geist font",
      "Loading states and animations",
    ],
  },
  integrations: {
    title: "Ready Integrations",
    description: "Pre-built integrations with popular services",
    capabilities: [
      "Airtable as database",
      "Next.js App Router",
      "TypeScript support",
      "Tailwind CSS styling",
    ],
  },
  components: {
    title: "UI Components",
    description: "Comprehensive set of UI components",
    capabilities: [
      "Job cards and search",
      "Navigation and breadcrumbs",
      "Form elements and inputs",
      "Toast notifications",
    ],
  },
  developerTools: {
    title: "Developer Features",
    description: "Built for developer productivity",
    capabilities: [
      "TypeScript configuration",
      "ESLint setup",
      "Component architecture",
      "Utility functions",
    ],
  },
} as const;

export const CORE_INTEGRATIONS = {
  database: ["Airtable"],
  framework: ["Next.js 14", "React", "TypeScript"],
  styling: ["Tailwind CSS", "Geist font"],
  tooling: ["ESLint", "PostCSS"],
} as const;

export const CORE_METRICS = [
  {
    metric: "14+",
    description: "Ready-to-use UI components",
  },
  {
    metric: "100%",
    description: "TypeScript coverage",
  },
  {
    metric: "24/7",
    description: "Community support",
  },
] as const;

export const CORE_BENEFITS = [
  {
    title: "Modern Stack",
    description:
      "Built with Next.js 14, TypeScript, and Tailwind CSS for a modern development experience",
  },
  {
    title: "Responsive Design",
    description:
      "Beautiful, responsive design that works perfectly on all devices and screen sizes",
  },
  {
    title: "Developer Friendly",
    description:
      "Well-structured codebase with TypeScript and comprehensive documentation",
  },
  {
    title: "Quick Start",
    description:
      "Get your job board running quickly with minimal configuration needed",
  },
] as const;

export const CORE_FAQS = [
  {
    question: "What tech stack does Bordful use?",
    answer:
      "Bordful is built with Next.js 14, TypeScript, and Tailwind CSS. It uses Airtable as the database and includes modern UI components with responsive design.",
  },
  {
    question: "How do I customize the job board?",
    answer:
      "You can customize the UI components, job fields, and styling using Tailwind CSS. The codebase is well-structured and includes TypeScript for type safety.",
  },
  {
    question: "What components are included?",
    answer:
      "Bordful includes essential job board components like job cards, search functionality, filters, pagination, form elements, and more. All components are built with accessibility in mind.",
  },
  {
    question: "How do I handle the database?",
    answer:
      "Bordful uses Airtable as the database by default. You can find the database configuration in the lib/db directory and customize it according to your needs.",
  },
] as const;

// Helper function to generate location-specific content
export function generateLocationContent(location: {
  name: string;
  type: "city" | "country";
  population: string;
  industries: string[];
  regions: string[];
}) {
  const content = {
    metrics: [
      {
        metric: location.population,
        description: `Potential job seekers in ${location.name}`,
      },
      ...CORE_METRICS,
    ],
    benefits: [
      {
        title: `${location.name} Focus`,
        description: `Target the ${
          location.name
        } job market with local features and ${
          location.type === "city" ? "neighborhood" : "regional"
        } targeting.`,
      },
      {
        title: "Local Search",
        description: `Optimized for ${location.name}-specific job searches and local discovery.`,
      },
      ...CORE_BENEFITS,
    ],
    features: Object.values(CORE_FEATURES).map((feature) => ({
      title: feature.title,
      description: feature.description,
    })),
    faqs: [...CORE_FAQS],
  };

  return content;
}
