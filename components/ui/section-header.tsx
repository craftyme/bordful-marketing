import * as React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = React.memo(function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <>
      <h1 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
        {description}
      </p>
    </>
  );
});
