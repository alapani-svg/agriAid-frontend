import type { ReactNode } from "react";
import WorkspaceChrome from "../WorkspaceChrome";

export default function WarehouseLayout({ children }: { children: ReactNode }) {
  return <WorkspaceChrome>{children}</WorkspaceChrome>;
}
