import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/Button";
import TextField from "../../../../shared/ui/TextField";
import { persistSession, resendOtp, verifyOtp } from "../../api/authApi";
import { homePathForUser, normalizeRole } from "../../utils/roleRoutes";

export default function OTPVerify() {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const userId = localStorage.getItem("user_id");
  const userEmail = localStorage.getItem("user_email");
  const remember = sessionStorage.getItem("remember_me") === "1";

  useEffect(() => {
    if (!userId) {
      navigate("/login", { replace: true });
    }
  }, [userId, navigate]);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (otp.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }

    if (!userId) {
      navigate("/login", { replace: true });
      return;
    }

    setLoading(true);

    try {
      const data = await verifyOtp({
        user_id: userId,
        code: otp,
        purpose: "login",
        remember,
      });

      const user = {
        ...data.user,
        role: normalizeRole(data.user.role),
      };

      persistSession(data.token, user, {
        remember: data.remember ?? remember,
        token_expires_at: data.token_expires_at,
      });

      navigate(homePathForUser(user), { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (countdown > 0 || resending || !userId) return;

    setResending(true);
    setError("");
    setInfo("");

    try {
      await resendOtp({ user_id: userId, purpose: "login" });
      setInfo("A new code was sent to your email inbox.");
      setCountdown(60);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend code");
    } finally {
      setResending(false);
    }
  };

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOTP(value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-lg backdrop-blur">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            agriAid
          </p>
          <h1 className="mt-1 font-headline text-3xl font-bold text-gray-900">
            Verify your identity
          </h1>
          <p className="mt-2 text-gray-600">
            We sent a 6-digit code to{" "}
            <span className="font-medium text-gray-800">{userEmail}</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Check your email inbox (and spam folder) for the agriAid message.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {info && (
          <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            {info}
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-6">
          <TextField
            label="Verification code"
            id="otp"
            name="otp"
            type="text"
            inputMode="numeric"
            value={otp}
            onChange={handleOTPChange}
            placeholder="123456"
            maxLength={6}
            required
            className="text-center text-2xl tracking-widest"
            autoComplete="one-time-code"
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Verifying…" : "Verify & open dashboard"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={countdown > 0 || resending}
              className={`font-semibold ${
                countdown > 0 || resending
                  ? "cursor-not-allowed text-gray-400"
                  : "text-emerald-600 hover:text-emerald-700"
              }`}
            >
              {resending
                ? "Resending…"
                : countdown > 0
                  ? `Resend in ${countdown}s`
                  : "Resend code"}
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-gray-600 hover:text-gray-800">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
