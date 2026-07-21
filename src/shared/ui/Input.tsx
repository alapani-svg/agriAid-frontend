import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input({ error, className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all",
        error && "border-red-500 focus:ring-red-500",
        className
      )}
      {...props}
    />
  );
}
