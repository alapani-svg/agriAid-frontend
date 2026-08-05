import type { ReactNode } from "react";
import WorkspaceChrome from "../WorkspaceChrome";

/** Admin + government shell. */
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <WorkspaceChrome>{children}</WorkspaceChrome>;
}
