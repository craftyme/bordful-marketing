import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { SocialIcons } from "./social-icons";
import { CraftledLogo } from "./craftled-logo";
import { SiteLogo } from "./site-logo";
import { siteConfig } from "@/lib/constants";

type FooterLink = {
  href: string;
  label: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#use-cases", label: "Use Cases" },
      { href: "#templates", label: "Templates" },
      { href: "#integrations", label: "Integrations" },
      { href: "#showcase", label: "Showcase" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#docs", label: "Documentation" },
      { href: "#blog", label: "Blog" },
      { href: "#changelog", label: "Changelog" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#help", label: "Help Center" },
      { href: "https://x.com/bordful", label: "Twitter/X" },
      { href: "https://www.linkedin.com/company/bordful", label: "LinkedIn" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
    ],
  },
];

function FooterLinks({ title, links }: FooterSection) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <CustomLink href={link.href}>{link.label}</CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50 backdrop-blur-sm">
      <Container className="flex flex-col gap-8 py-8 md:py-12">
        <div className="grid gap-8 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-start space-y-4 xs:col-span-2 sm:col-span-3 lg:col-span-2">
            <SiteLogo />
            <p className="max-w-[320px] text-sm text-muted-foreground">
              A powerful, customizable job board template built with Next.js.
              Start accepting job postings and connecting talent with
              opportunities today.
            </p>
            <SocialIcons />
          </div>
          {footerSections.map((section) => (
            <FooterLinks key={section.title} {...section} />
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            2024-2025 © {siteConfig.name} - An open-source Next.js job board
            template. Standing on the shoulders of giants.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Built by</span>
            <div className="flex items-center gap-1">
              <CraftledLogo />
              <CustomLink
                href="https://craftled.com/"
                external
                className="text-xs font-medium"
              >
                Craftled
              </CustomLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
