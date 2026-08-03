import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/Button";
import TextField from "../../../../shared/ui/TextField";
import AuthBrandHeader from "../../../../shared/ui/AuthBrandHeader";
import {
  loginUser,
  persistPendingUser,
  persistSession,
} from "../../api/authApi";
import { homePathForUser, normalizeRole } from "../../utils/roleRoutes";

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    remember: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser({
        email: formData.email.trim(),
        password: formData.password,
        remember: formData.remember,
      });

      if (!data.requires_otp && data.token) {
        const user = {
          ...data.user,
          role: normalizeRole(data.user.role),
        };
        persistSession(data.token, user, {
          remember: data.remember ?? formData.remember,
          token_expires_at: data.token_expires_at,
        });
        navigate(homePathForUser(user), { replace: true });
        return;
      }

      persistPendingUser(data.user, data.remember ?? formData.remember);
      navigate("/otp-verify", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-lg backdrop-blur">
        <AuthBrandHeader
          title="Welcome back"
          subtitle="Sign in with your email and password. OTP is only needed the first time."
        />

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />

          <div>
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
            <div className="mt-2 text-right">
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span>
              Remember me{" "}
              <span className="text-gray-500">(stay signed in for 30 days)</span>
            </span>
          </label>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Sign up
          </Link>
        </p>

        <p className="mt-3 text-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
