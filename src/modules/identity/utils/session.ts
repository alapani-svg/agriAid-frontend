import type { AuthUser } from "../api/authApi";
import { normalizeRole, type AppRole } from "./roleRoutes";

export type Session = {
  token: string;
  user: AuthUser;
  role: AppRole;
};

export function readSession(): Session | null {
  const token = localStorage.getItem("auth_token");
  const raw = localStorage.getItem("user_data");

  if (!token || !raw) return null;

  try {
    const user = JSON.parse(raw) as AuthUser;
    if (!user || typeof user !== "object") return null;

    return {
      token,
      user: { ...user, role: normalizeRole(user.role) },
      role: normalizeRole(user.role),
    };
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return readSession() !== null;
}

export function hasRole(allowed: AppRole | AppRole[], opts?: { allowAdmin?: boolean }): boolean {
  const session = readSession();
  if (!session) return false;

  const list = Array.isArray(allowed) ? allowed : [allowed];
  if (list.includes(session.role)) return true;
  if (opts?.allowAdmin !== false && session.role === "admin") return true;

  return false;
}
