import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import { useT } from "../../../../shared/i18n/context";
import { statValues } from "../../constants/landing.constants";

export default function Statistics() {
  const t = useT();
  return (
    <section id="impact" className="bg-emerald-700 py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-50">
            {t.stats.eyebrow}
          </span>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.stats.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-emerald-50/90">
            {t.stats.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statValues.map((value, i) => (
            <Reveal key={value} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <p className="font-headline text-4xl font-extrabold">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">
                  {t.stats.labels[i]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-emerald-100/70">
          {t.stats.source}
        </p>
      </Container>
    </section>
  );
}
