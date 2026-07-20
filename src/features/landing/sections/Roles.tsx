import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { roles } from "../constants/landing.constants";

export default function Roles() {
  return (
    <Section id="roles" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          kicker="Who it's for"
          title="One ecosystem, every actor in the chain"
          subtitle="AgriAid connects the people who grow, store, buy, finance and oversee agriculture — each with a tailored, role-based view."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <div className="group flex h-full gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2EAD53]/40 hover:bg-white hover:shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#124925] transition-colors duration-300 group-hover:bg-[#2EAD53]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#124925]">{r.name}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
