import type { ReactNode } from "react";
import WorkspaceChrome from "../WorkspaceChrome";

export default function FarmerLayout({ children }: { children: ReactNode }) {
  return <WorkspaceChrome>{children}</WorkspaceChrome>;
}
