import * as React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { navConfig } from "@/lib/constants";
import { CustomLink } from "./ui/link";
import { SocialIcons } from "./social-icons";
import { ActionButtons } from "./action-buttons";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle>Menu</SheetTitle>
        <div className="mt-8 flex flex-col gap-6">
          <nav>
            <ul className="space-y-3">
              {navConfig.mainNav.map((link) => (
                <li key={link.href}>
                  <CustomLink
                    href={link.href}
                    className="block text-base text-muted-foreground hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <ActionButtons />
          </div>
          <div className="flex">
            <SocialIcons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
