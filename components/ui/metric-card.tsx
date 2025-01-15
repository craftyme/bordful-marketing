import { memo } from "react";

interface MetricCardProps {
  metric: string;
  description: string;
}

export const MetricCard = memo(function MetricCard({
  metric,
  description,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
      <div className="text-2xl font-medium text-primary">{metric}</div>
      <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
    </div>
  );
});
