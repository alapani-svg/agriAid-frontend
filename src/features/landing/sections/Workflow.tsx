import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { steps } from "../constants/landing.constants";

export default function Workflow() {
  return (
    <Section id="workflow" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          kicker="How it works"
          title="From daily activity to a loan in four steps"
          subtitle="No paperwork marathon. Producers build credit simply by documenting the work they already do."
        />

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on large screens */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#8FE3A7] to-transparent lg:block" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-[#2EAD53]/20">
                    <Icon className="h-7 w-7 text-[#1B6D35]" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2EAD53] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#124925]">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
