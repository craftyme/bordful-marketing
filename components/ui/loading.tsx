import * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary";
}

export function Loading({
  size = "md",
  variant = "default",
  className,
  ...props
}: LoadingProps) {
  return (
    <div
      role="status"
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          {
            "h-4 w-4": size === "sm",
            "h-6 w-6": size === "md",
            "h-8 w-8": size === "lg",
            "text-muted-foreground": variant === "default",
            "text-primary": variant === "primary",
          }
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <Loading size="lg" />
    </div>
  );
}

export function LoadingSection() {
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <Loading />
    </div>
  );
}

export function LoadingInline() {
  return <Loading size="sm" className="inline-flex" />;
}
