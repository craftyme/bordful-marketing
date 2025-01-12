import * as React from "react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/categories";

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export const CategoryBadge = React.memo(function CategoryBadge({
  category,
  className,
}: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground",
        className
      )}
      aria-label={`Category: ${category}`}
    >
      {category}
    </span>
  );
});
