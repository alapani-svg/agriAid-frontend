import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/Button";
import TextField from "../../../../shared/ui/TextField";
import AuthBrandHeader from "../../../../shared/ui/AuthBrandHeader";
import { persistPendingUser, registerUser } from "../../api/authApi";
import {
  REGION_OPTIONS,
  ROLE_OPTIONS,
  type PlatformRole,
} from "../../constants/signup";

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  role: PlatformRole | "";
  region: string;
  organization: string;
  access_code: string;
  password: string;
  password_confirmation: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    region: "",
    organization: "",
    access_code: "",
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const selectedRole = useMemo(
    () => ROLE_OPTIONS.find((r) => r.value === formData.role),
    [formData.role],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.role) {
      setError("Please select your role on the platform.");
      return;
    }
    if (!formData.region) {
      setError("Please select your region.");
      return;
    }
    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (selectedRole?.needsCode && !formData.access_code.trim()) {
      setError("This role requires an organisation access code.");
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        role: formData.role as PlatformRole,
        region: formData.region,
        organization: formData.organization.trim() || undefined,
        access_code: formData.access_code.trim() || undefined,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      });

      persistPendingUser(data.user);

      setSuccess(
        `Account created. A 6-digit verification code was sent to ${formData.email.trim()}. Check your inbox to continue.`,
      );

      setTimeout(() => {
        navigate("/otp-verify", { replace: true });
      }, 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-lg backdrop-blur">
        <AuthBrandHeader
          title="Create your account"
          subtitle="Choose your role and region. We will email you a verification code."
        />

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Full name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Amina Njoya"
            required
            autoComplete="name"
          />

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

          <TextField
            label="Phone (optional)"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+237 6XX XXX XXX"
            autoComplete="tel"
          />

          <div className="w-full">
            <label htmlFor="role" className="mb-1 block text-sm font-medium text-slate-700">
              Role on agriAid
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select role</option>
              {ROLE_OPTIONS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                  {r.needsCode ? " (access code required)" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full">
            <label htmlFor="region" className="mb-1 block text-sm font-medium text-slate-700">
              Region (Cameroon)
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select region</option>
              {REGION_OPTIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <TextField
            label="Organisation / cooperative (optional)"
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="e.g. COOP-NORD Maize"
          />

          {selectedRole?.needsCode && (
            <div>
              <TextField
                label="Organisation access code"
                id="access_code"
                name="access_code"
                type="text"
                value={formData.access_code}
                onChange={handleChange}
                placeholder="Code from your institution"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Lenders, warehouses and government accounts need a code from agriAid or your organisation.
              </p>
            </div>
          )}

          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            required
            autoComplete="new-password"
          />

          <TextField
            label="Confirm password"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder="Repeat password"
            required
            autoComplete="new-password"
          />

          <p className="text-xs text-gray-500">
            After you submit, agriAid emails a 6-digit code to the address above.
          </p>

          <Button type="submit" className="w-full" disabled={loading || !!success}>
            {loading
              ? "Creating account & sending code…"
              : success
                ? "Redirecting to verification…"
                : "Sign up"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">
            Sign in
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
