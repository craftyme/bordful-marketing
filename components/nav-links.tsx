import { navConfig } from "@/lib/constants";
import { CustomLink } from "./ui/link";
import { UseCasesNav } from "./use-cases-nav";

export function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      {navConfig.mainNav.map((item) => {
        if (item.label === "Use Cases") {
          return <UseCasesNav key={item.href} />;
        }
        return (
          <CustomLink
            key={item.href}
            href={item.href}
            className="text-[13px] text-muted-foreground hover:text-foreground"
          >
            {item.label}
          </CustomLink>
        );
      })}
    </nav>
  );
}
