import type { HTMLAttributes } from "react";
import clsx from "clsx";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({
  src,
  alt = "",
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={clsx(
        "rounded-full overflow-hidden bg-slate-200",
        {
          "w-8 h-8": size === "sm",
          "w-10 h-10": size === "md",
          "w-12 h-12": size === "lg",
        },
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-500 font-semibold">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
