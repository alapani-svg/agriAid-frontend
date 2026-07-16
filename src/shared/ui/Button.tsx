import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl font-semibold transition-all duration-300 active:scale-95",

        {
          "bg-green-600 hover:bg-green-700 text-white":
            variant === "primary",

          "bg-amber-500 hover:bg-amber-600 text-white":
            variant === "secondary",

          "border border-slate-300 bg-white hover:bg-slate-100":
            variant === "outline",

          "px-3 py-2 text-sm":
            size === "sm",

          "px-5 py-3 text-base":
            size === "md",

          "px-8 py-4 text-lg":
            size === "lg",

          "w-full":
            fullWidth,
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}