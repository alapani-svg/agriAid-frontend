import type { ReactNode } from "react";
import WorkspaceChrome from "../WorkspaceChrome";

export default function BuyerLayout({ children }: { children: ReactNode }) {
  return <WorkspaceChrome>{children}</WorkspaceChrome>;
}
