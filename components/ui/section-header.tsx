import * as React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  headingLevel?: 'h1' | 'h2';
}

export const SectionHeader = React.memo(function SectionHeader({
  title,
  description,
  headingLevel = 'h2',
}: SectionHeaderProps) {
  const Heading = headingLevel;
  
  return (
    <>
      <Heading className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
        {title}
      </Heading>
      <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
        {description}
      </p>
    </>
  );
});
