"use client";

import { ThemeSwitcher } from "./theme-switcher";
import { NavLinks } from "./nav-links";
import { SocialIcons } from "./social-icons";
import { ActionButtons } from "./action-buttons";
import { SiteLogo } from "./site-logo";
import { MobileNav } from "./mobile-nav";
import { Container } from "./ui/container";

export function SiteHeader() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <Container>
        <div className="flex h-14 items-center justify-between rounded-full border border-border bg-background/60 backdrop-blur-md backdrop-saturate-150 px-4 sm:px-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <SiteLogo />
            <div className="hidden lg:flex">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex gap-6">
              <SocialIcons />
              <ActionButtons />
            </div>
            <ThemeSwitcher />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
