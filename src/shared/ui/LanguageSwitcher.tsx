import clsx from "clsx";

import { useLanguage } from "../i18n/context";
import type { Lang } from "../i18n/dictionary";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={clsx(
        "inline-flex items-center rounded-full border border-emerald-200 bg-white/70 p-0.5 backdrop-blur",
        className,
      )}
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(opt.code)}
            className={clsx(
              "rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
              active
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-emerald-700 hover:text-emerald-900",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
