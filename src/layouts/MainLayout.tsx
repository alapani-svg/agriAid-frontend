import type { ReactNode } from "react";
import Navigation from "../features/landing/sections/Navigation";

interface Props {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navigation />

      <main>
        {children}
      </main>

    </div>
  );
}