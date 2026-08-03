import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../shared/ui/Button";
import { clearSession, logoutUser, type AuthUser } from "../api/authApi";
import { ROLE_OPTIONS } from "../constants/signup";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const raw = localStorage.getItem("user_data");

    if (!token || !raw) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      const parsed = JSON.parse(raw) as AuthUser;
      setUser(parsed);
      if (parsed.role === "farmer") {
        navigate("/operations", { replace: true });
      }
    } catch {
      clearSession();
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const handleLogout = async () => {
    await logoutUser();
    clearSession();
    navigate("/login", { replace: true });
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-emerald-50">
        <p className="text-gray-600">Loading dashboard…</p>
      </div>
    );
  }

  const roleLabel =
    ROLE_OPTIONS.find((r) => r.value === user.role)?.label ?? user.role ?? "Member";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <header className="border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              agriAid
            </p>
            <h1 className="font-headline text-xl font-bold text-gray-900">
              Dashboard
            </h1>
          </div>
          <Button type="button" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="liquid-glass rounded-2xl p-8">
          <h2 className="font-headline text-2xl font-bold text-gray-900">
            Welcome, {user.name}
          </h2>
          <p className="mt-2 text-gray-600">{user.email}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Role
              </dt>
              <dd className="mt-1 font-medium text-gray-900">{roleLabel}</dd>
            </div>
            <div className="rounded-xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Region
              </dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user.region || "—"}
              </dd>
            </div>
            <div className="rounded-xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Status
              </dt>
              <dd className="mt-1 font-medium capitalize text-gray-900">
                {user.status || "active"}
              </dd>
            </div>
            <div className="rounded-xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Organisation
              </dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user.organization || "—"}
              </dd>
            </div>
          </dl>

          {user.role === "farmer" && (
            <div className="mt-6">
              <Link
                to="/operations"
                className="inline-flex rounded-xl bg-[#026e00] px-4 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#015200]"
              >
                Open farmer operations →
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
