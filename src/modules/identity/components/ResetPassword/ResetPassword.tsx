import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/Button";
import TextField from "../../../../shared/ui/TextField";
import { forgotPassword, resetPassword } from "../../api/authApi";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const stateEmail = (location.state as { email?: string } | null)?.email;

  const initialEmail = useMemo(() => {
    return stateEmail || sessionStorage.getItem("reset_email") || "";
  }, [stateEmail]);

  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }
    if (code.length !== 6) {
      setError("Enter the 6-digit code from your email");
      return;
    }

    setLoading(true);
    try {
      const data = await resetPassword({
        email: email.trim(),
        code,
        password,
        password_confirmation: passwordConfirmation,
      });
      sessionStorage.removeItem("reset_email");
      setInfo(data.message);
      setTimeout(() => navigate("/login", { replace: true }), 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email.trim() || resending) return;
    setResending(true);
    setError("");
    setInfo("");
    try {
      const data = await forgotPassword({ email: email.trim() });
      setInfo(data.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resend code");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-lg backdrop-blur">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            agriAid
          </p>
          <h1 className="mt-1 font-headline text-3xl font-bold text-gray-900">
            Reset password
          </h1>
          <p className="mt-2 text-gray-600">
            Enter the code from your email and choose a new password.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {info && (
          <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
            {info}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <TextField
            label="Reset code"
            id="code"
            name="code"
            type="text"
            inputMode="numeric"
            value={code}
            onChange={(e) =>
              setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            placeholder="123456"
            maxLength={6}
            required
            className="text-center text-xl tracking-widest"
            autoComplete="one-time-code"
          />

          <TextField
            label="New password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            required
            autoComplete="new-password"
          />

          <TextField
            label="Confirm new password"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            autoComplete="new-password"
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Updating…" : "Update password"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Didn't get a code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="font-semibold text-emerald-600 hover:text-emerald-700 disabled:text-gray-400"
          >
            {resending ? "Sending…" : "Resend code"}
          </button>
        </p>

        <p className="mt-3 text-center text-sm">
          <Link to="/login" className="text-gray-500 hover:text-gray-700">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
