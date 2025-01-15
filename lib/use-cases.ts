import { CATEGORIES, type Category } from "./categories";

export interface UseCase {
  slug: string;
  category: Category;
  badge: string;
  title: string;
  titleSuffix: string;
  description: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    jsonLd: {
      "@context": "https://schema.org";
      "@graph": [
        {
          "@type": "Organization";
          "@id": "https://bordful.com/#organization";
          name: "Bordful";
          url: "https://bordful.com";
          logo: {
            "@type": "ImageObject";
            url: "https://bordful.com/images/logo.png";
          };
          sameAs: [
            "https://twitter.com/bordful",
            "https://github.com/tomaslau/bordful",
            "https://linkedin.com/company/bordful"
          ];
        },
        {
          "@type": "BreadcrumbList";
          "@id": "https://bordful.com/#breadcrumb";
          itemListElement: [
            {
              "@type": "ListItem";
              position: 1;
              item: {
                "@id": "https://bordful.com";
                name: "Home";
              };
            },
            {
              "@type": "ListItem";
              position: 2;
              item: {
                "@id": "https://bordful.com/use-cases";
                name: "Use Cases";
              };
            },
            {
              "@type": "ListItem";
              position: 3;
              item: {
                "@id": string;
                name: string;
              };
            }
          ];
        },
        {
          "@type": "FAQPage";
          "@id": string;
          mainEntity: Array<{
            "@type": "Question";
            name: string;
            acceptedAnswer: {
              "@type": "Answer";
              text: string;
            };
          }>;
        },
        {
          "@type": "SoftwareApplication";
          name: string;
          description: string;
          applicationCategory: "BusinessApplication";
          operatingSystem: "Any";
          offers: {
            "@type": "Offer";
            price: "0";
            priceCurrency: "USD";
            availability: "https://schema.org/InStock";
          };
          aggregateRating?: {
            "@type": "AggregateRating";
            ratingValue: string;
            reviewCount: string;
          };
        },
        {
          "@type": "Product";
          name: string;
          description: string;
          category: string;
          offers: {
            "@type": "Offer";
            price: "0";
            priceCurrency: "USD";
            availability: "https://schema.org/InStock";
          };
          aggregateRating?: {
            "@type": "AggregateRating";
            ratingValue: string;
            reviewCount: string;
          };
          features: string[];
        }
      ];
    };
  };
  metrics: Array<{
    metric: string;
    description: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  ctaDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const USE_CASES: Record<string, UseCase> = {
  country: {
    slug: "country",
    category: CATEGORIES.COUNTRY,
    badge: "Country-Specific Job Board",
    title: "Launch Your Job Board",
    titleSuffix: "for Your Country",
    description:
      "Create a localized job board that connects talent with opportunities in your target country. Built-in support for local languages, currencies, and regional requirements.",
    seo: {
      title:
        "Country-Specific Job Boards - Launch Your Local Job Board | Bordful",
      description:
        "Create a country-specific job board with localized features, language support, and regional job categories. Connect local talent with opportunities in your target country.",
      keywords: [
        "country-specific job board",
        "local job board",
        "job board localization",
        "regional job marketplace",
        "local recruitment platform",
        "country job listings",
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://bordful.com/#organization",
            name: "Bordful",
            url: "https://bordful.com",
            logo: {
              "@type": "ImageObject",
              url: "https://bordful.com/images/logo.png",
            },
            sameAs: [
              "https://twitter.com/bordful",
              "https://github.com/tomaslau/bordful",
              "https://linkedin.com/company/bordful",
            ],
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://bordful.com/#breadcrumb",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": "https://bordful.com",
                  name: "Home",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": "https://bordful.com/use-cases",
                  name: "Use Cases",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id": "https://bordful.com/use-cases/country",
                  name: "Country-Specific Job Board",
                },
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://bordful.com/use-cases/country#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I localize my job board for a specific country?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bordful provides built-in support for multiple languages, local currencies, and regional job categories. You can easily customize templates, forms, and content to match your target country's requirements and cultural preferences.",
                },
              },
              {
                "@type": "Question",
                name: "What features are included for country-specific job boards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Key features include local language support, regional job categories, local currency handling, cultural customization, SEO optimization for local search engines, compliance tools for local regulations, and geographic filtering.",
                },
              },
              {
                "@type": "Question",
                name: "Is Bordful compliant with local data protection laws?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Bordful includes pre-built components for handling local labor laws, data protection requirements, and regulatory compliance. You can easily configure these settings based on your country's specific requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customize the job board for multiple regions within a country?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! Bordful's geographic filtering feature allows you to create region-specific sections, customize job categories by area, and provide location-based search functionality within your country.",
                },
              },
            ],
          },
          {
            "@type": "SoftwareApplication",
            name: "Country-Specific Job Board Software",
            description:
              "Create a localized job board that connects talent with opportunities in your target country. Built-in support for local languages, currencies, and regional requirements.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
            },
          },
          {
            "@type": "Product",
            name: "Country-Specific Job Board Software",
            description:
              "Create a localized job board that connects talent with opportunities in your target country. Built-in support for local languages, currencies, and regional requirements.",
            category: "Job Board Software",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
            },
            features: [
              "Local language support",
              "Regional job categories",
              "Local currency & payments",
              "Cultural relevance",
              "SEO optimization",
              "Compliance ready",
              "Localized job posting forms",
              "Regional job alerts",
              "Local company profiles",
              "Geographic filtering",
            ],
          },
        ],
      },
    },
    metrics: [
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
    ],
    benefits: [
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
    ],
    features: [
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
    ],
    ctaDescription:
      "Join successful country-specific job boards built with Bordful. Start connecting local talent with opportunities today.",
    faqs: [
      {
        question: "How do I localize my job board for a specific country?",
        answer:
          "Bordful provides built-in support for multiple languages, local currencies, and regional job categories. You can easily customize templates, forms, and content to match your target country's requirements and cultural preferences.",
      },
      {
        question: "What features are included for country-specific job boards?",
        answer:
          "Key features include local language support, regional job categories, local currency handling, cultural customization, SEO optimization for local search engines, compliance tools for local regulations, and geographic filtering.",
      },
      {
        question: "Is Bordful compliant with local data protection laws?",
        answer:
          "Yes, Bordful includes pre-built components for handling local labor laws, data protection requirements, and regulatory compliance. You can easily configure these settings based on your country's specific requirements.",
      },
      {
        question:
          "Can I customize the job board for multiple regions within a country?",
        answer:
          "Absolutely! Bordful's geographic filtering feature allows you to create region-specific sections, customize job categories by area, and provide location-based search functionality within your country.",
      },
    ],
  },
};
