import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Landmark,
  LogOut,
  Shield,
  ShoppingCart,
  Sprout,
  Warehouse,
} from "lucide-react";
import Button from "../../../shared/ui/Button";
import { clearSession, logoutUser, type AuthUser } from "../api/authApi";
import { ROLE_OPTIONS } from "../constants/signup";
import {
  homePathForRole,
  normalizeRole,
  ROLE_DASHBOARD_META,
} from "../utils/roleRoutes";

const ICONS: Record<string, typeof Sprout> = {
  farmer: Sprout,
  warehouse: Warehouse,
  lender: Landmark,
  buyer: ShoppingCart,
  government: Building2,
  admin: Shield,
};

type Props = {
  expectedRole: string;
};

export default function RoleDashboard({ expectedRole }: Props) {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);
  const redirected = useRef(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const raw = localStorage.getItem("user_data");

    if (!token || !raw) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      const parsed = JSON.parse(raw) as AuthUser;
      const role = normalizeRole(parsed.role);
      setUser({ ...parsed, role });

      // Wrong role for this page → send once to their real home (not /dashboard hub)
      if (!redirected.current && role !== expectedRole && role !== "admin") {
        redirected.current = true;
        navigate(homePathForRole(role), { replace: true });
      }
    } catch {
      clearSession();
      navigate("/login", { replace: true });
    }
  }, [expectedRole, navigate]);

  const meta = ROLE_DASHBOARD_META[expectedRole] ?? {
    title: "Dashboard",
    subtitle: "Your agriAid workspace.",
    modules: [],
  };

  const Icon = ICONS[expectedRole] ?? Shield;

  const roleLabel = useMemo(() => {
    return (
      ROLE_OPTIONS.find((r) => r.value === (user?.role ?? expectedRole))?.label ??
      user?.role ??
      expectedRole
    );
  }, [expectedRole, user?.role]);

  const handleLogout = async () => {
    await logoutUser();
    clearSession();
    navigate("/login", { replace: true });
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f0f7f0]">
        <p className="text-gray-600">Loading workspace…</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f7f0]">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#00e600]/15 blur-3xl orb-drift" />
      <div className="pointer-events-none absolute -right-10 top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-white/50 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#026e00]/10 text-[#026e00] liquid-glass">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#026e00]">
                agriAid · {roleLabel}
              </p>
              <h1 className="font-headline text-lg font-bold text-gray-900">
                {meta.title}
              </h1>
            </div>
          </div>
          <Button type="button" size="sm" variant="outline" onClick={handleLogout}>
            <span className="inline-flex items-center gap-1.5">
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </span>
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl space-y-6 px-4 py-8">
        <section className="liquid-glass glass-shine rounded-3xl p-8 animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#026e00]">
            Signed in
          </p>
          <h2 className="mt-1 font-headline text-2xl font-bold text-gray-900">
            Welcome, {user.name}
          </h2>
          <p className="mt-1 text-sm text-gray-600">{user.email}</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">{meta.subtitle}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                Role
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">{roleLabel}</dd>
            </div>
            <div className="rounded-2xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                Region
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">{user.region || "—"}</dd>
            </div>
            <div className="rounded-2xl bg-emerald-50/80 px-4 py-3">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                Status
              </dt>
              <dd className="mt-1 font-semibold capitalize text-gray-900">
                {user.status || "active"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="liquid-glass rounded-3xl p-6 afd1">
          <h3 className="font-headline text-lg font-bold text-gray-900">
            Modules in this workspace
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            Layout is ready. Live data connects as each module is built.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {meta.modules.map((m) => (
              <li
                key={m}
                className="rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm font-medium text-gray-800"
              >
                {m}
                <span className="mt-1 block text-[10px] font-mono-tech uppercase tracking-wide text-gray-400">
                  Placeholder · no data required yet
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
