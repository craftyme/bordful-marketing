export const siteConfig = {
  name: "Bordful",
  description: "A modern, customizable job board template built with Next.js",
  links: {
    demo: "https://demo.bordful.com",
    github: "https://github.com/tomaslau/bordful",
    twitter: "https://twitter.com/bordful",
    linkedin: "https://linkedin.com/company/bordful",
  },
} as const;

export const navConfig = {
  mainNav: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/showcase", label: "Showcase" },
    { href: "/docs", label: "Docs" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/blog", label: "Blog" },
    { href: "/help", label: "Help Center" },
  ],
} as const;
