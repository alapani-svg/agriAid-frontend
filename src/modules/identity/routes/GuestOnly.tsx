import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { homePathForRole } from "../utils/roleRoutes";
import { readSession } from "../utils/session";

type Props = {
  children: ReactNode;
};

/**
 * For login / register: if already signed in, send to role dashboard.
 */
export default function GuestOnly({ children }: Props) {
  const session = readSession();

  if (session) {
    return <Navigate to={homePathForRole(session.role)} replace />;
  }

  return <>{children}</>;
}
