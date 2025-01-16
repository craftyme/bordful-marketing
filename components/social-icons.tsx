import { siteConfig } from "@/lib/constants";
import { CustomLink } from "./ui/link";
import Image from "next/image";

const socialLinks = [
  {
    href: siteConfig.links.twitter,
    icon: "/images/logos/x.svg",
    label: "X (Twitter)",
  },
  {
    href: siteConfig.links.bluesky,
    icon: "/images/logos/bluesky.svg",
    label: "Bluesky",
  },
  {
    href: siteConfig.links.linkedin,
    icon: "/images/logos/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: siteConfig.links.github,
    icon: "/images/logos/github.svg",
    label: "GitHub",
  },
] as const;

export function SocialIcons() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <CustomLink
          key={link.href}
          href={link.href}
          external
          aria-label={link.label}
          className="transition-opacity duration-200"
        >
          <Image
            src={link.icon}
            alt={link.label}
            width={16}
            height={16}
            className="h-4 w-4 opacity-50 transition-opacity duration-200 hover:opacity-100 dark:invert"
          />
        </CustomLink>
      ))}
    </div>
  );
}
