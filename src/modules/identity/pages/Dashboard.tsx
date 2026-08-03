import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession, type AuthUser } from "../api/authApi";
import { homePathForUser } from "../utils/roleRoutes";

/**
 * Hub: one redirect to the role home. Never targets itself.
 */
export default function Dashboard() {
  const navigate = useNavigate();
  const didRedirect = useRef(false);

  useEffect(() => {
    if (didRedirect.current) return;
    didRedirect.current = true;

    const token = localStorage.getItem("auth_token");
    const raw = localStorage.getItem("user_data");

    if (!token || !raw) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      const user = JSON.parse(raw) as AuthUser;
      const target = homePathForUser(user);
      // Absolute safety: never navigate to /dashboard from here
      navigate(target === "/dashboard" ? "/operations" : target, { replace: true });
    } catch {
      clearSession();
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f7f0]">
      <p className="text-sm text-gray-600">Opening your workspace…</p>
    </div>
  );
}
