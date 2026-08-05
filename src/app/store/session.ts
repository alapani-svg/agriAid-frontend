/** Thin session helpers used by the app shell (localStorage-backed). */

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role?: string;
  region?: string | null;
  status?: string;
};

export function readSessionUser(): SessionUser | null {
  try {
    const raw = localStorage.getItem("user_data");
    if (!raw) return null;
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function readAuthToken(): string | null {
  return localStorage.getItem("auth_token");
}

export function isAuthenticated(): boolean {
  return Boolean(readAuthToken() && readSessionUser());
}
