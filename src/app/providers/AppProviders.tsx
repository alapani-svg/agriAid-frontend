import type { ReactNode } from "react";
import { LanguageProvider } from "../../shared/i18n/LanguageProvider";

/** Root providers for agriAid (i18n, future auth/theme). */
export default function AppProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
