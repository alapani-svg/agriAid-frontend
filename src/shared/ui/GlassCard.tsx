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
        "rounded-3xl border border-white/40",
        "bg-white/30",
        "backdrop-blur-xl",
        "shadow-[0_35px_90px_rgba(15,23,42,0.16)]",
        "p-6",
        "text-slate-900",
        className
      )}
    >
      {children}
    </div>
  );
}