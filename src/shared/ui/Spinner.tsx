import clsx from "clsx";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <div
      className={clsx(
        "border-2 border-slate-200 border-t-emerald-500 rounded-full animate-spin",
        {
          "w-4 h-4": size === "sm",
          "w-6 h-6": size === "md",
          "w-8 h-8": size === "lg",
        },
        className
      )}
    />
  );
}
