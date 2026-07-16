import type { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/20",
        "bg-white/10",
        "backdrop-blur-xl",
        "shadow-xl",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}