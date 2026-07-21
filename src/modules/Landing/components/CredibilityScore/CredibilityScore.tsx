import { motion } from "framer-motion";
import { Info } from "lucide-react";

import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { scoreWeights, tiers } from "../../constants/landing.constants";

export default function CredibilityScore() {
  return (
    <section id="credibility" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Credibility score"
          title="A transparent score, not a black box"
          subtitle="Producers and lenders see exactly what drives the score, and how it maps to financing terms."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-gray-900">
                How the score is weighted
              </h3>
              <div className="mt-6 space-y-5">
                {scoreWeights.map((w, i) => (
                  <div key={w.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{w.label}</span>
                      <span className="font-semibold text-emerald-700">
                        {w.pct}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-emerald-50">
                      <motion.div
                        className="h-full rounded-full bg-emerald-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${w.pct * 3.2}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-gray-900">
                Score to financing terms
              </h3>
              <div className="mt-6 space-y-3">
                {tiers.map((t) => (
                  <div
                    key={t.tier}
                    className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{t.tier}</p>
                      <p className="text-xs text-gray-500">Score {t.range}</p>
                    </div>
                    <span className="text-right text-sm font-semibold text-emerald-700">
                      {t.term}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-2 rounded-xl bg-gray-50 p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                <p className="text-xs leading-relaxed text-gray-500">
                  The score informs lending decisions but does not replace an
                  institution's own underwriting. Final terms remain at the
                  discretion of each financing partner.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
