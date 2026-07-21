import type { ReactNode } from "react";
import Navigation from "../modules/Landing/components/Navigation/Navigation";

interface Props {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#f6f7f9] text-slate-950 antialiased">
      <Navigation />
      <main className="pt-28">{children}</main>
    </div>
  );
}
