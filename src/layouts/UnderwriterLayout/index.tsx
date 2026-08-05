import type { ReactNode } from "react";
import WorkspaceChrome from "../WorkspaceChrome";

/** Lender / underwriter shell. */
export default function UnderwriterLayout({ children }: { children: ReactNode }) {
  return <WorkspaceChrome>{children}</WorkspaceChrome>;
}
