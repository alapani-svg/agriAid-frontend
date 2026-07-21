import { XCircle } from "lucide-react";

import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { useT } from "../../../../shared/i18n/context";
import { pillarIcons } from "../../constants/landing.constants";

export default function Problem() {
  const t = useT();
  return (
    <section id="platform" className="bg-[#f0f7f0] py-24">
      <Container>
        <SectionHeading
          eyebrow={t.problem.eyebrow}
          title={t.problem.title}
          subtitle={t.problem.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.problem.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-red-100 bg-white p-6">
                <XCircle className="h-8 w-8 text-red-400" />
                <h3 className="mt-4 font-headline text-lg font-bold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow={t.problem.solutionEyebrow}
            title={t.problem.solutionTitle}
            subtitle={t.problem.solutionSubtitle}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.problem.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <Reveal key={pillar.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-headline text-lg font-bold text-gray-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {pillar.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
