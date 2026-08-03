import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { homePathForRole, type AppRole } from "../utils/roleRoutes";
import { readSession } from "../utils/session";
import RequireAuth from "./RequireAuth";

type Props = {
  /** One or more roles allowed on this route. */
  roles: AppRole | AppRole[];
  /** Admin bypass (default true). */
  allowAdmin?: boolean;
  children: ReactNode;
};

/**
 * Requires authentication + an allowed role.
 * Wrong role → redirect to that user's own home dashboard (no loop).
 */
export default function RequireRole({ roles, allowAdmin = true, children }: Props) {
  return (
    <RequireAuth>
      <RoleCheck roles={roles} allowAdmin={allowAdmin}>
        {children}
      </RoleCheck>
    </RequireAuth>
  );
}

function RoleCheck({
  roles,
  allowAdmin,
  children,
}: {
  roles: AppRole | AppRole[];
  allowAdmin: boolean;
  children: ReactNode;
}) {
  const session = readSession();
  // RequireAuth already ensures session exists
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  const allowed = Array.isArray(roles) ? roles : [roles];
  const ok =
    allowed.includes(session.role) || (allowAdmin && session.role === "admin");

  if (!ok) {
    return <Navigate to={homePathForRole(session.role)} replace />;
  }

  return <>{children}</>;
}
