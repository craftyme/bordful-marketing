import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = React.memo(function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
});
