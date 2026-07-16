import type { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
  children: ReactNode;
  center?: boolean;
}

export default function Heading({
  children,
  center = false,
}: HeadingProps) {
  return (
    <h2
      className={clsx(
        "text-4xl lg:text-5xl",
        "font-bold",
        "tracking-tight",
        "text-slate-900",
        {
          "text-center": center,
        }
      )}
    >
      {children}
    </h2>
  );
}