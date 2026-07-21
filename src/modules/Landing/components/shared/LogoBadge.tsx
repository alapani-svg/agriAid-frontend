import clsx from "clsx";

interface LogoBadgeProps {
  badgeClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
}

export default function LogoBadge({
  badgeClassName,
  wordmarkClassName,
  showWordmark = true,
}: LogoBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={clsx(
          "inline-flex items-center justify-center rounded-2xl border-2 border-emerald-700 bg-white p-0.5 shadow-md",
          badgeClassName ?? "h-12 w-12",
        )}
      >
        <img
          src="/agriAid-logo.png"
          alt="AgriAid logo"
          className="h-full w-full rounded-xl object-contain"
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
