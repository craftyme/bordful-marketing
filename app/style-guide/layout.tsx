import * as React from "react";
import { Container } from "@/components/ui/container";
import { StyleGuideSidebar } from "@/components/style-guide/sidebar";
import { SiteHeader } from "@/components/site-header";

interface StyleGuideLayoutProps {
  children: React.ReactNode;
}

export default function StyleGuideLayout({ children }: StyleGuideLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 pt-24">
        <Container>
          <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="fixed top-24 z-30 hidden h-[calc(100vh-6rem)] w-full shrink-0 overflow-y-auto border-r py-6 md:sticky md:block lg:py-10">
              <StyleGuideSidebar />
            </aside>
            <main className="relative py-6 lg:py-10">
              <div className="mx-auto w-full min-w-0">{children}</div>
            </main>
          </div>
        </Container>
      </div>
    </div>
  );
}
