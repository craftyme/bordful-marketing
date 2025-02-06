import { navConfig } from "@/lib/constants";
import { CustomLink } from "./ui/link";
import { UseCasesNav } from "./use-cases-nav";

export function NavLinks() {
  return (
    <nav className="flex items-center gap-4 md:gap-6 whitespace-nowrap overflow-x-auto px-2">
      {navConfig.mainNav.map((item) => {
        if (item.label === "Use Cases") {
          return <UseCasesNav key={item.href} />;
        }
        return (
          <CustomLink
            key={item.href}
            href={item.href}
            className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground flex-shrink-0 transition-colors"
          >
            {item.label}
          </CustomLink>
        );
      })}
    </nav>
  );
}
