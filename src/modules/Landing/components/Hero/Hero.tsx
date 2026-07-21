import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, BadgeCheck, Warehouse, QrCode } from "lucide-react";

import Container from "../../../../shared/ui/Container";
import CtaButton from "../shared/CtaButton";
import { useT } from "../../../../shared/i18n/context";
import { scrollToId } from "../../utils/scroll";

function ScoreVisual() {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl" />
      <div className="absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-teal-300/40 blur-3xl" />

      <div className="liquid-glass relative rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              {t.hero.scoreEyebrow}
            </p>
            <p className="mt-1 text-sm text-gray-600">{t.hero.scoreOverview}</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            <BadgeCheck className="h-3.5 w-3.5" /> {t.hero.highTier}
          </span>
        </div>

        <div className="mt-6 flex items-center gap-6">
          <div className="relative h-32 w-32 shrink-0">
            <svg viewBox="0 0 120 120" className="h-32 w-32">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#DDF7E4"
                strokeWidth="12"
              />
              <circle
                className="score-ring"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#2EAD53"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDashoffset={339.29 * (1 - 0.86)}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-3xl font-extrabold text-gray-900">
                86
              </span>
              <span className="text-xs text-gray-500">/ 100</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500">{t.hero.maxTerm}</p>
              <p className="font-headline text-2xl font-extrabold text-gray-900">
                {t.hero.years}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">{t.hero.repayment}</p>
              <p className="text-sm font-semibold text-emerald-700">
                {t.hero.onTime}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/70 p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <Warehouse className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              {t.hero.receiptTitle}
            </p>
            <p className="text-xs text-emerald-700">{t.hero.activeCollateral}</p>
          </div>
          <QrCode className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const t = useT();
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {t.hero.badge}
            </span>

            <h1 className="mt-5 font-headline text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t.hero.headlinePre}
              <span className="text-emerald-600">{t.hero.headlineHighlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                size="lg"
                onClick={() => scrollToId("get-started")}
              >
                {t.actions.getStartedFree}
                <ArrowRight className="h-5 w-5" />
              </CtaButton>
              <CtaButton
                size="lg"
                variant="outline"
                onClick={() => scrollToId("workflow")}
              >
                <PlayCircle className="h-5 w-5" />
                {t.actions.seeHow}
              </CtaButton>
            </div>

            <p className="mt-5 text-sm text-gray-500">{t.hero.microcopy}</p>
          </motion.div>

          <ScoreVisual />
        </div>
      </Container>
    </section>
  );
}
