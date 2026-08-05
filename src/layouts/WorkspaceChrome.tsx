import type { ReactNode } from "react";

/** Shared liquid-glass ambient background for role workspaces. */
export default function WorkspaceChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f7f0]">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#00e600]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
