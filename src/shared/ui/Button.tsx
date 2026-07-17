import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  glassy?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  glassy = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        // base glassy appearance
        "rounded-xl font-semibold transition-all duration-300 active:scale-95 relative overflow-hidden",
        glassy ? "border border-white/20 backdrop-blur-[10px] bg-[rgba(255,255,255,0.08)] overflow-hidden" : "",

        // variants: keep semantic variants but use translucent tints
        {
          "text-white bg-[rgba(16,185,129,0.14)] hover:bg-[rgba(16,185,129,0.2)]":
            variant === "primary" && !glassy,

          // glassy primary uses gradient + stronger tint
          "text-white font-bold bg-gradient-to-r from-[rgba(16,185,129,0.46)] to-[rgba(16,185,129,0.3)] hover:from-[rgba(16,185,129,0.56)] hover:to-[rgba(16,185,129,0.38)] shadow-[0_8px_30px_rgba(16,185,129,0.12)]":
            variant === "primary" && glassy,

          "text-white bg-[rgba(245,158,11,0.12)] hover:bg-[rgba(245,158,11,0.18)]":
            variant === "secondary",

          "border border-white/20 bg-[rgba(255,255,255,0.02)] text-slate-900 hover:bg-[rgba(255,255,255,0.04)]":
            variant === "outline" && !glassy,

          // glassy outline variant: stronger tint, softer border and depth
          "bg-[rgba(255,255,255,0.18)] border-white/30 text-slate-950 shadow-[0_12px_40px_rgba(15,23,42,0.14)] hover:bg-[rgba(255,255,255,0.26)]":
            variant === "outline" && glassy,

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
      // Safari / WebKit fallback for backdrop-filter
      style={{ WebkitBackdropFilter: "blur(12px)" }}
      {...props}
    >
      {children}

      {glassy && (
        // subtle moving sheen to suggest liquid surface
        <motion.span
          aria-hidden
          className="absolute left-0 top-0 h-full w-48 -translate-x-full rounded-xl opacity-30"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.02) 100%)",
            mixBlendMode: "overlay",
          }}
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </button>
  );
}