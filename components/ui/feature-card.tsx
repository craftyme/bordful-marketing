import { memo } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard = memo(function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
      <h3 className="mb-1.5 text-sm font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
});
