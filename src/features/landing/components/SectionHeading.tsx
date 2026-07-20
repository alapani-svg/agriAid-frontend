import clsx from "clsx";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={clsx(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      <span
        className={clsx(
          "text-xs font-bold uppercase tracking-widest",
          light ? "text-[#8FE3A7]" : "text-[#2EAD53]",
        )}
      >
        {kicker}
      </span>
      <h2
        className={clsx(
          "mt-3 text-[1.9rem] font-extrabold tracking-tight sm:text-[2.5rem]",
          light ? "text-white" : "text-[#124925]",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-[1.05rem] leading-relaxed",
            light ? "text-white/75" : "text-slate-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
