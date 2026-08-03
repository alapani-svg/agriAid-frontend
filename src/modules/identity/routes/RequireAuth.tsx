import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { readSession } from "../utils/session";

type Props = {
  children: ReactNode;
};

/**
 * Blocks unauthenticated access. Sends users to /login and preserves return path.
 */
export default function RequireAuth({ children }: Props) {
  const location = useLocation();
  const session = readSession();

  if (!session) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  return <>{children}</>;
}
