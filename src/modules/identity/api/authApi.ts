const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
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

export async function registerUser(payload: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone?: string;
}): Promise<{ user: AuthUser; message: string }> {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await parseJson(res);
  if (!res.ok) {
    throw new Error(formatError(data, "Registration failed"));
  }

  return data as { user: AuthUser; message: string };
}

export async function loginUser(payload: {
  email: string;
  password: string;
}): Promise<{ user: AuthUser; message: string }> {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await parseJson(res);
  if (!res.ok) {
    throw new Error(formatError(data, "Login failed"));
  }

  return data as { user: AuthUser; message: string };
}

export async function verifyOtp(payload: {
  user_id: string;
  code: string;
  purpose?: string;
}): Promise<{ token: string; user: AuthUser; message: string }> {
  const res = await fetch(`${API_BASE}/api/otp/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      purpose: "login",
      ...payload,
    }),
  });

  const data = await parseJson(res);
  if (!res.ok) {
    throw new Error(formatError(data, "Verification failed"));
  }

  return data as { token: string; user: AuthUser; message: string };
}

export async function resendOtp(payload: {
  user_id: string;
  purpose?: string;
}): Promise<{ message: string }> {
  const res = await fetch(`${API_BASE}/api/otp/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      purpose: "login",
      ...payload,
    }),
  });

  const data = await parseJson(res);
  if (!res.ok) {
    throw new Error(formatError(data, "Failed to resend OTP"));
  }

  return data as { message: string };
}

export async function logoutUser(): Promise<void> {
  const token = localStorage.getItem("auth_token");
  try {
    await fetch(`${API_BASE}/api/auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      credentials: "include",
    });
  } catch {
    // ignore
  }
}

export function persistPendingUser(user: AuthUser) {
  localStorage.setItem("user_id", user.id);
  localStorage.setItem("user_email", user.email);
}

export function persistSession(token: string, user: AuthUser) {
  localStorage.setItem("auth_token", token);
  localStorage.setItem("user_data", JSON.stringify(user));
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_email");
}

export function clearSession() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user_data");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_email");
}
