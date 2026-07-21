import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import clsx from "clsx";

import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import CtaButton from "../shared/CtaButton";
import { roleOptions, regionOptions } from "../../constants/landing.constants";

interface FormState {
  name: string;
  email: string;
  role: number;
  region: number;
}

type FieldKey = keyof FormState;
type Touched = Partial<Record<FieldKey, boolean>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CTA() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: 0,
    region: 0,
  });
  const [touched, setTouched] = useState<Touched>({});
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!EMAIL_RE.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
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

  const fieldClass = (k: FieldKey) =>
    clsx(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:ring-2 focus:ring-emerald-500/40",
      show(k)
        ? "border-red-400 focus:border-red-400"
        : "border-gray-200 focus:border-emerald-500",
    );

  return (
    <section
      id="get-started"
      className="bg-gradient-to-b from-white to-emerald-50 py-24"
    >
      <Container>
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
              Get started
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Start building your verifiable credit today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Join AgriAid to document your activity, certify your stock and open
              the door to financing. Tell us a little about you and we'll be in
              touch.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> No cost to
                join
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> No credit
                card required
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Your data
                stays yours
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl">
              {done ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-600" />
                  <h3 className="mt-4 font-headline text-2xl font-extrabold text-gray-900">
                    You're on the list!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-600">
                    Thanks, {form.name.split(" ")[0]}. We'll reach out with next
                    steps to get your cooperative onboarded to AgriAid.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      onBlur={() => setTouched({ ...touched, name: true })}
                      placeholder="e.g. Amina Njoya"
                      className={fieldClass("name")}
                    />
                    {show("name") && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      onBlur={() => setTouched({ ...touched, email: true })}
                      placeholder="you@example.com"
                      className={fieldClass("email")}
                    />
                    {show("email") && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Role
                      </label>
                      <select
                        value={form.role}
                        onChange={(e) =>
                          setForm({ ...form, role: Number(e.target.value) })
                        }
                        onBlur={() => setTouched({ ...touched, role: true })}
                        className={fieldClass("role")}
                      >
                        <option value={0}>Select role</option>
                        {roleOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {show("role") && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.role}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Region
                      </label>
                      <select
                        value={form.region}
                        onChange={(e) =>
                          setForm({ ...form, region: Number(e.target.value) })
                        }
                        onBlur={() => setTouched({ ...touched, region: true })}
                        className={fieldClass("region")}
                      >
                        <option value={0}>Select region</option>
                        {regionOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {show("region") && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.region}
                        </p>
                      )}
                    </div>
                  </div>

                  <CtaButton type="submit" size="lg" fullWidth>
                    Get started free
                    <ArrowRight className="h-5 w-5" />
                  </CtaButton>

                  <p className="text-center text-xs text-gray-400">
                    We respect your privacy. No spam — just onboarding help.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
