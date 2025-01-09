import { navConfig } from "@/lib/constants";
import { CustomLink } from "./ui/link";

export function NavLinks() {
  return (
    <nav className="hidden gap-4 sm:gap-6 lg:flex">
      {navConfig.mainNav.map((link) => (
        <CustomLink key={link.href} href={link.href} variant="nav">
          {link.label}
        </CustomLink>
      ))}
    </nav>
  );
}
