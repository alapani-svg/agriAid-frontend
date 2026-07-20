import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { techItems } from "../constants/landing.constants";

const stack = ["React", "Laravel", "MySQL", "REST API", "Sanctum auth"];

export default function Technology() {
  return (
    <Section id="technology" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          kicker="Technology & access"
          title="Serious infrastructure, built for the real field"
          subtitle="AgriAid is engineered to be trustworthy for institutions and usable for producers with basic phones and unreliable connections."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techItems.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-[#2EAD53]/40 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7EE]">
                    <Icon className="h-6 w-6 text-[#1B6D35]" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-[#124925]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-slate-500">Powered by</span>
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#1B6D35]"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
