import { Sprout } from "lucide-react";
import clsx from "clsx";

interface LogoBadgeProps {
  badgeClassName?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
}

export default function LogoBadge({
  badgeClassName,
  iconClassName,
  wordmarkClassName,
  showWordmark = true,
}: LogoBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={clsx(
          "relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-600/40 ring-1 ring-white/50",
          badgeClassName ?? "h-10 w-10",
        )}
      >
        <span className="pointer-events-none absolute -right-2 -top-3 h-6 w-6 rounded-full bg-white/25 blur-md" />
        <Sprout
          strokeWidth={2.5}
          className={clsx("relative h-1/2 w-1/2", iconClassName)}
        />
      </span>
      {showWordmark && (
        <span
          className={clsx(
            "font-headline text-lg font-extrabold tracking-tight",
            wordmarkClassName ?? "text-gray-900",
          )}
        >
          Agri<span className="text-emerald-600">Aid</span>
        </span>
      )}
    </span>
  );
}
