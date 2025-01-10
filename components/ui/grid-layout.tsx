import * as React from "react";
import { cn } from "@/lib/utils";

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const GridLayout = React.memo(function GridLayout({
  children,
  className,
}: GridLayoutProps) {
  return (
    <div
      className={cn(
        "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
});
