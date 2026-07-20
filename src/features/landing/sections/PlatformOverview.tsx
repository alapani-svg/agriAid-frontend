import { X } from "lucide-react";
import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import GlassCard from "../../../shared/ui/GlassCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { problems, pillars, partners } from "../constants/landing.constants";

export default function PlatformOverview() {
  return (
    <Section id="platform" className="py-20 sm:py-24">
      <Container>
        {/* partner / trust strip */}
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            Designed to work with the institutions that finance agriculture
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {partners.map((p) => (
              <span
                key={p}
                className="text-base font-extrabold tracking-tight text-slate-400/70 sm:text-lg"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        {/* problem */}
        <div className="mt-20">
          <SectionHeading
            kicker="The problem"
            title="Hard-working producers are invisible to finance"
            subtitle="Across Cameroon's Northern and Southern regions, producers work the land every day, yet their activity leaves no record. Without documentation there is no credibility — and without credibility there is no access to loans."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.09}>
                <GlassCard className="h-full bg-white/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DC2626]/10">
                    <X className="h-5 w-5 text-[#DC2626]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#124925]">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{p.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* solution pillars */}
        <div className="mt-20">
          <SectionHeading
            kicker="The solution"
            title="One platform, three pillars no other system combines"
            subtitle="AgriAid is not just digital stock records. It builds an objective, verifiable history over time — then turns that history into financing power."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.09}>
                  <GlassCard className="group h-full bg-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2EAD53] shadow-lg shadow-[#2EAD53]/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-sm font-extrabold text-[#2EAD53]">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-[#124925]">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{p.text}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
