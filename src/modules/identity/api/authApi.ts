import type { PlatformRole } from "../constants/signup";

const API_BASE = (import.meta.env.VITE_API_URL ?? "http://localhost:8000").replace(/\/$/, "");

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  role?: string;
  region?: string | null;
  organization?: string | null;
  status?: string;
};

export type LoginResponse = {
  user: AuthUser;
  message: string;
  requires_otp: boolean;
  token?: string;
  remember?: boolean;
  token_expires_at?: string | null;
};

type ApiErrorBody = {
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
};

async function parseJson(res: Response): Promise<ApiErrorBody & Record<string, unknown>> {
  try {
    return await res.json();
  } catch {
    return {};
  }
}

function formatError(data: ApiErrorBody, fallback: string): string {
  if (data.errors) {
    const first = Object.values(data.errors)[0];
    if (first?.[0]) return first[0];
  }
  return data.error || data.message || fallback;
}

function networkError(err: unknown): Error {
  if (err instanceof TypeError) {
    return new Error(
      "Cannot reach the API. Start the backend with: php artisan serve (http://localhost:8000), then try again.",
    );
  }
  if (err instanceof Error) return err;
  return new Error("Request failed");
}

async function postJson<T>(path: string, body: unknown, token?: string | null): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw networkError(err);
  }

  const data = await parseJson(res);
  if (!res.ok) {
    throw new Error(formatError(data, `Request failed (${res.status})`));
  }
  return data as T;
}

export async function registerUser(payload: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone?: string;
  role: PlatformRole;
  region: string;
  organization?: string;
  access_code?: string;
}): Promise<{ user: AuthUser; message: string; requires_otp?: boolean }> {
  return postJson("/api/auth/register", payload);
}

export async function loginUser(payload: {
  email: string;
  password: string;
  remember?: boolean;
}): Promise<LoginResponse> {
  return postJson("/api/auth/login", payload);
}

export async function forgotPassword(payload: {
  email: string;
}): Promise<{ message: string; email: string }> {
  return postJson("/api/auth/forgot-password", payload);
}

export async function resetPassword(payload: {
  email: string;
  code: string;
  password: string;
  password_confirmation: string;
}): Promise<{ message: string }> {
  return postJson("/api/auth/reset-password", payload);
}

export async function verifyOtp(payload: {
  user_id: string;
  code: string;
  purpose?: string;
  remember?: boolean;
}): Promise<{
  token: string;
  user: AuthUser;
  message: string;
  remember?: boolean;
  token_expires_at?: string | null;
}> {
  return postJson("/api/otp/verify", { purpose: "login", ...payload });
}

export async function resendOtp(payload: {
  user_id: string;
  purpose?: string;
}): Promise<{ message: string }> {
  return postJson("/api/otp/generate", { purpose: "login", ...payload });
}

export async function logoutUser(): Promise<void> {
  const token = localStorage.getItem("auth_token");
  try {
    await postJson("/api/auth/logout", {}, token);
  } catch {
    // ignore
  }
}

export function persistPendingUser(user: AuthUser, remember = false) {
  localStorage.setItem("user_id", user.id);
  localStorage.setItem("user_email", user.email);
  sessionStorage.setItem("remember_me", remember ? "1" : "0");
}

export function persistSession(
  token: string,
  user: AuthUser,
  opts?: { remember?: boolean; token_expires_at?: string | null },
) {
  localStorage.setItem("auth_token", token);
  localStorage.setItem("user_data", JSON.stringify(user));
  localStorage.setItem("remember_me", opts?.remember ? "1" : "0");
  if (opts?.token_expires_at) {
    localStorage.setItem("token_expires_at", opts.token_expires_at);
  } else {
    localStorage.removeItem("token_expires_at");
  }
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_email");
  sessionStorage.removeItem("remember_me");
}

export function clearSession() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user_data");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_email");
  localStorage.removeItem("remember_me");
  localStorage.removeItem("token_expires_at");
  sessionStorage.removeItem("remember_me");
}

export function isRemembered(): boolean {
  return localStorage.getItem("remember_me") === "1";
}
