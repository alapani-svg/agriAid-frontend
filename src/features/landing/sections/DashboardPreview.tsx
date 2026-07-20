import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import GlassCard from "../../../shared/ui/GlassCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { scoreWeights } from "../constants/landing.constants";

export default function DashboardPreview() {
  return (
    <Section id="dashboard" className="bg-gradient-to-b from-[#EAF7EE] to-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Credibility score"
              title="A transparent score — never a black box"
              subtitle="Producers and institutions see exactly how the score is built. It rewards real, verified, consistent activity, and it maps directly to how long a financing term can run."
            />

            <div className="mt-8 space-y-4">
              {scoreWeights.map((w, i) => (
                <Reveal key={w.label} delay={i * 0.06}>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">{w.label}</span>
                      <span className="font-bold text-[#1B6D35]">{w.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-white/70">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#2EAD53] to-[#1B6D35]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${w.pct * 2.6}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#F4C542]/40 bg-[#FFF9EB] p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#B38700]" />
                <p className="text-sm leading-relaxed text-[#8E6A00]">
                  The credibility score <strong>informs</strong> lending decisions — it does
                  not replace an institution's own underwriting. Final approval always rests
                  with the financing partner.
                </p>
              </div>
            </Reveal>
          </div>

          {/* score tiers visual */}
          <Reveal delay={0.1}>
            <GlassCard className="bg-white/70">
              <h3 className="text-lg font-bold text-[#124925]">Score unlocks longer terms</h3>
              <p className="mt-1 text-sm text-slate-500">
                Higher, well-earned scores graduate producers to longer financing.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { tier: "Emerging", range: "0–49", term: "Up to 2 yrs", w: "28%", c: "#94A3B8" },
                  { tier: "Building", range: "50–69", term: "Up to 7 yrs", w: "52%", c: "#F4C542" },
                  { tier: "Established", range: "70–84", term: "Up to 14 yrs", w: "78%", c: "#2EAD53" },
                  { tier: "High", range: "85–100", term: "Up to 20 yrs", w: "100%", c: "#1B6D35" },
                ].map((t, i) => (
                  <div key={t.tier} className="rounded-2xl bg-slate-50/80 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#124925]">
                        {t.tier}{" "}
                        <span className="font-mono text-xs font-normal text-slate-400">
                          {t.range}
                        </span>
                      </span>
                      <span className="text-sm font-bold" style={{ color: t.c }}>
                        {t.term}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: t.c }}
                        initial={{ width: 0 }}
                        whileInView={{ width: t.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
