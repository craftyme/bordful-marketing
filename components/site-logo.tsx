import { CustomLink } from "./ui/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export function SiteLogo() {
  return (
    <CustomLink href="/" className="flex items-center gap-2 group">
      <Image
        src="/images/logos/bordful.svg"
        alt={siteConfig.name}
        width={20}
        height={20}
        className="h-5 w-5 dark:invert"
      />
      <span className="text-sm font-medium text-foreground opacity-100 transition-opacity duration-200 group-hover:opacity-50">
        {siteConfig.name}
      </span>
    </CustomLink>
  );
}
