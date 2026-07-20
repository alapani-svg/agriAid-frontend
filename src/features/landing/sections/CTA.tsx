import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import Button from "../../../shared/ui/Button";
import Reveal from "../components/Reveal";
import { roleOptions, regionOptions } from "../constants/landing.constants";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  name: string;
  email: string;
  role: number;
  region: number;
}

type FieldKey = keyof FormState;
type Touched = Partial<Record<FieldKey, boolean>>;

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#2EAD53] focus:ring-4 focus:ring-[#2EAD53]/15";

export default function CTA() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", role: 0, region: 0 });
  const [touched, setTouched] = useState<Touched>({});
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (form.role <= 0) e.role = "Please select your role.";
    if (form.region <= 0) e.region = "Please select your region.";
    return e;
  }, [form]);

  const show = (k: FieldKey) => (touched[k] || submitted) && errors[k];

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) setDone(true);
  }

  return (
    <Section id="get-started" className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-[#2EAD53]/15 bg-gradient-to-br from-[#EAF7EE] via-white to-[#EAF7EE] p-8 shadow-[0_40px_80px_-40px_rgba(18,73,37,0.4)] sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* pitch */}
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2EAD53]">
                Get started
              </span>
              <h2 className="mt-3 text-[1.9rem] font-extrabold tracking-tight text-[#124925] sm:text-[2.4rem]">
                Start building your verifiable credit today
              </h2>
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-slate-600">
                Join the early access list. Tell us who you are and where you work, and we'll
                reach out as onboarding opens in your region.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Free for producers to join",
                  "Works on low-bandwidth connections",
                  "Your data stays yours",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2EAD53]" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* form / success */}
            <Reveal delay={0.1}>
              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center rounded-3xl border border-[#2EAD53]/20 bg-white p-10 text-center shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF7E4]">
                    <CheckCircle2 className="h-9 w-9 text-[#2EAD53]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#124925]">You're on the list!</h3>
                  <p className="mt-2 text-slate-600">
                    Thanks for your interest in AgriAid. We'll be in touch as onboarding opens
                    in your region.
                  </p>
                </motion.div>
              ) : (
                <form
                  noValidate
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Amina Njoya"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onBlur={() => setTouched({ ...touched, name: true })}
                        aria-invalid={Boolean(show("name"))}
                        className={`${inputBase} ${show("name") ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15" : "border-slate-200"}`}
                      />
                      {show("name") && (
                        <p className="mt-1.5 text-sm text-[#DC2626]">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        aria-invalid={Boolean(show("email"))}
                        className={`${inputBase} ${show("email") ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15" : "border-slate-200"}`}
                      />
                      {show("email") && (
                        <p className="mt-1.5 text-sm text-[#DC2626]">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="role" className="mb-1.5 block text-sm font-semibold text-slate-700">
                          I am a…
                        </label>
                        <select
                          id="role"
                          value={form.role}
                          onChange={(e) => setForm({ ...form, role: Number(e.target.value) })}
                          onBlur={() => setTouched({ ...touched, role: true })}
                          aria-invalid={Boolean(show("role"))}
                          className={`${inputBase} ${show("role") ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15" : "border-slate-200"} ${form.role <= 0 ? "text-slate-400" : ""}`}
                        >
                          {roleOptions.map((r, i) => (
                            <option key={r} value={i} disabled={i === 0}>
                              {r}
                            </option>
                          ))}
                        </select>
                        {show("role") && (
                          <p className="mt-1.5 text-sm text-[#DC2626]">{errors.role}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="region" className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Region
                        </label>
                        <select
                          id="region"
                          value={form.region}
                          onChange={(e) => setForm({ ...form, region: Number(e.target.value) })}
                          onBlur={() => setTouched({ ...touched, region: true })}
                          aria-invalid={Boolean(show("region"))}
                          className={`${inputBase} ${show("region") ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15" : "border-slate-200"} ${form.region <= 0 ? "text-slate-400" : ""}`}
                        >
                          {regionOptions.map((r, i) => (
                            <option key={r} value={i} disabled={i === 0}>
                              {r}
                            </option>
                          ))}
                        </select>
                        {show("region") && (
                          <p className="mt-1.5 text-sm text-[#DC2626]">{errors.region}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    glassy
                    fullWidth
                    className="mt-6 inline-flex items-center justify-center gap-2"
                  >
                    Request early access
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#2EAD53]" />
                    No credit card. No spam. We respect your privacy.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
