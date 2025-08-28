import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HealthCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

export function HealthCard({ children, className, variant = "default" }: HealthCardProps) {
  return (
    <Card 
      className={cn(
        "p-6 transition-all duration-200",
        "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]",
        {
          "bg-card": variant === "default",
          "bg-gradient-to-br from-health-primary/5 to-health-primary/10 border-health-primary/20": variant === "primary",
          "bg-gradient-to-br from-health-secondary/5 to-health-secondary/10 border-health-secondary/20": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </Card>
  );
}