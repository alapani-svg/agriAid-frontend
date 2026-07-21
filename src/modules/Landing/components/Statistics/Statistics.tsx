import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import { stats, statsSource } from "../../constants/landing.constants";

export default function Statistics() {
  return (
    <section id="impact" className="bg-emerald-700 py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-50">
            Why it matters
          </span>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            A financing gap holding back a whole economy
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-emerald-50/90">
            Agriculture powers Cameroon — yet most producers can't reach the
            credit that would let them grow.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <p className="font-headline text-4xl font-extrabold">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-emerald-100/70">
          {statsSource}
        </p>
      </Container>
    </section>
  );
}
