import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/Button";
import TextField from "../../../../shared/ui/TextField";
import AuthBrandHeader from "../../../../shared/ui/AuthBrandHeader";
import { forgotPassword } from "../../api/authApi";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      const data = await forgotPassword({ email: email.trim() });
      setInfo(data.message);
      sessionStorage.setItem("reset_email", email.trim());
      setTimeout(() => {
        navigate("/reset-password", {
          replace: true,
          state: { email: email.trim() },
        });
      }, 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-lg backdrop-blur">
        <AuthBrandHeader
          title="Forgot password"
          subtitle="Enter your account email. We will send a 6-digit reset code if the account exists."
        />
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
          <Button type="submit" className="w-full" disabled={loading || !!info}>
            {loading ? "Sending code…" : info ? "Check your email…" : "Send reset code"}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered it?{" "}
          <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
