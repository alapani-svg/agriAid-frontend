import { motion } from "framer-motion";
import { Info } from "lucide-react";

import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { useT } from "../../../../shared/i18n/context";
import { scoreWeightPcts, tierRanges } from "../../constants/landing.constants";

export default function CredibilityScore() {
  const t = useT();
  return (
    <section id="credibility" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow={t.credibility.eyebrow}
          title={t.credibility.title}
          subtitle={t.credibility.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-gray-900">
                {t.credibility.weightsTitle}
              </h3>
              <div className="mt-6 space-y-5">
                {t.credibility.weights.map((label, i) => {
                  const pct = scoreWeightPcts[i];
                  return (
                    <div key={label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{label}</span>
                        <span className="font-semibold text-emerald-700">
                          {pct}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-emerald-50">
                        <motion.div
                          className="h-full rounded-full bg-emerald-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct * 3.2}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-gray-900">
                {t.credibility.tiersTitle}
              </h3>
              <div className="mt-6 space-y-3">
                {t.credibility.tiers.map((tier, i) => (
                  <div
                    key={tier.tier}
                    className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{tier.tier}</p>
                      <p className="text-xs text-gray-500">
                        {t.credibility.scoreLabel} {tierRanges[i]}
                      </p>
                    </div>
                    <span className="text-right text-sm font-semibold text-emerald-700">
                      {tier.term}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-2 rounded-xl bg-gray-50 p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                <p className="text-xs leading-relaxed text-gray-500">
                  {t.credibility.disclaimer}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
