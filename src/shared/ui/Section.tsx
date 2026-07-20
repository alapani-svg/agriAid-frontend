import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-24",
        className
      )}
    >
      {children}
    </section>
  );
}