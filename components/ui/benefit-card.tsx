import { memo } from "react";
import { CheckCircle2 } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
}

export const BenefitCard = memo(function BenefitCard({
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
      <div className="mb-3 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
});
