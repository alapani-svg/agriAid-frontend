import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/ui/Button";
import { clearSession, logoutUser, type AuthUser } from "../api/authApi";

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
      setUser(JSON.parse(raw) as AuthUser);
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
        <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
          <h2 className="font-headline text-2xl font-bold text-gray-900">
            Welcome, {user.name}
          </h2>
          <p className="mt-2 text-gray-600">{user.email}</p>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            You are signed in. This is your local agriAid dashboard. Farm
            activity, warehouse receipts and financing modules can plug in here
            next.
          </p>
        </div>
      </main>
    </div>
  );
}
