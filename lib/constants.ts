export const siteConfig = {
  name: "Bordful",
  description: "Open source job board starter template built with Next.js and Airtable. Clone, customize and deploy your own job board in minutes.",
  links: {
    home: "https://bordful.com",
    demo: "https://demo.bordful.com",
    github: "https://github.com/tomaslau/bordful",
    twitter: "https://twitter.com/bordful",
    linkedin: "https://linkedin.com/company/bordful",
    bluesky: "https://bsky.app/profile/bordful.com",
    reddit: "https://www.reddit.com/r/bordful/",
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

// Add type exports for better type safety
export type SiteConfig = typeof siteConfig;
export type NavConfig = typeof navConfig;
export type NavItem = (typeof navConfig.mainNav)[number];

// Add validation function
export function isValidNavItem(item: unknown): item is NavItem {
  if (!item || typeof item !== "object") return false;
  return (
    "href" in item &&
    "label" in item &&
    typeof (item as NavItem).href === "string" &&
    typeof (item as NavItem).label === "string"
  );
}
