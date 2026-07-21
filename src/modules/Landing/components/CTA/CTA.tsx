import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import clsx from "clsx";

import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import CtaButton from "../shared/CtaButton";
import { useT } from "../../../../shared/i18n/context";

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
  const t = useT();
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
    if (form.name.trim().length < 2) e.name = t.cta.errors.name;
    if (!EMAIL_RE.test(form.email.trim())) e.email = t.cta.errors.email;
    if (form.role <= 0) e.role = t.cta.errors.role;
    if (form.region <= 0) e.region = t.cta.errors.region;
    return e;
  }, [form, t]);

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
              {t.cta.eyebrow}
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {t.cta.subtitle}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              {t.cta.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl">
              {done ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-600" />
                  <h3 className="mt-4 font-headline text-2xl font-extrabold text-gray-900">
                    {t.cta.successTitle}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-600">
                    {t.cta.successGreeting}, {form.name.split(" ")[0]}.{" "}
                    {t.cta.successRest}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                      {t.cta.fullName}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      onBlur={() => setTouched({ ...touched, name: true })}
                      placeholder={t.cta.fullNamePlaceholder}
                      className={fieldClass("name")}
                    />
                    {show("name") && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                      {t.cta.email}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      onBlur={() => setTouched({ ...touched, email: true })}
                      placeholder={t.cta.emailPlaceholder}
                      className={fieldClass("email")}
                    />
                    {show("email") && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        {t.cta.role}
                      </label>
                      <select
                        value={form.role}
                        onChange={(e) =>
                          setForm({ ...form, role: Number(e.target.value) })
                        }
                        onBlur={() => setTouched({ ...touched, role: true })}
                        className={fieldClass("role")}
                      >
                        <option value={0}>{t.cta.selectRole}</option>
                        {t.cta.roleOptions.map((label, i) => (
                          <option key={label} value={i + 1}>
                            {label}
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
                        {t.cta.region}
                      </label>
                      <select
                        value={form.region}
                        onChange={(e) =>
                          setForm({ ...form, region: Number(e.target.value) })
                        }
                        onBlur={() => setTouched({ ...touched, region: true })}
                        className={fieldClass("region")}
                      >
                        <option value={0}>{t.cta.selectRegion}</option>
                        {t.cta.regionOptions.map((label, i) => (
                          <option key={label} value={i + 1}>
                            {label}
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
                    {t.cta.submit}
                    <ArrowRight className="h-5 w-5" />
                  </CtaButton>

                  <p className="text-center text-xs text-gray-400">
                    {t.cta.privacy}
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
