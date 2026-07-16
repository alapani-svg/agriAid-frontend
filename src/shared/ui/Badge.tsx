import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
      {children}
    </span>
  );
}