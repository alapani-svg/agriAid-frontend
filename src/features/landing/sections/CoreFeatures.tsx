import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { features } from "../constants/landing.constants";

export default function CoreFeatures() {
  return (
    <Section id="features" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          kicker="Everything in one place"
          title="Built around what producers and lenders actually need"
          subtitle="Each feature exists to make activity visible, stock verifiable and financing reachable."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2EAD53]/40 hover:shadow-[0_24px_50px_-24px_rgba(18,73,37,0.4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7EE] transition-colors duration-300 group-hover:bg-[#2EAD53]">
                    <Icon className="h-6 w-6 text-[#1B6D35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#124925]">{f.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
