import { motion } from "framer-motion";
import { Warehouse, Check, TrendingUp } from "lucide-react";
import GlassCard from "../../../shared/ui/GlassCard";

function ScoreRing({ value }: { value: number }) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" className="shrink-0">
      <circle cx="42" cy="42" r={r} fill="none" stroke="#DDF7E4" strokeWidth="9" />
      <motion.circle
        cx="42"
        cy="42"
        r={r}
        fill="none"
        stroke="#2EAD53"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={circ}
        transform="rotate(-90 42 42)"
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <text
        x="42"
        y="48"
        textAnchor="middle"
        fill="#124925"
        fontSize="19"
        fontWeight="800"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        {value}
      </text>
    </svg>
  );
}

export default function FloatingCards() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlassCard className="bg-white/70 shadow-[0_30px_60px_-30px_rgba(18,73,37,0.45)]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Farmer credibility</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#DDF7E4] px-2 py-0.5 text-[0.7rem] font-bold text-[#1B6D35]">
              <Check className="h-3 w-3" /> HIGH
            </span>
          </div>

          <div className="mt-4 flex items-center gap-5">
            <ScoreRing value={86} />
            <div>
              <div className="text-3xl font-extrabold leading-none text-[#124925]">
                86<span className="text-lg text-slate-400">/100</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">Credibility score</div>
              <div className="mt-3">
                <div className="text-[1.35rem] font-extrabold leading-none text-[#2EAD53]">
                  20 yrs
                </div>
                <div className="text-xs text-slate-500">Max eligible term</div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B6D35]">
              <Warehouse className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-[#124925]">
                Warehouse receipt · Maize 12 MT
              </div>
              <div className="text-xs text-slate-500">Certified collateral · WR-2026-0481</div>
            </div>
            <span className="rounded-full bg-[#DDF7E4] px-2 py-1 text-[0.65rem] font-bold text-[#1B6D35]">
              ACTIVE
            </span>
          </div>
        </GlassCard>
      </motion.div>

      {/* small floating stat chip */}
      <motion.div
        className="absolute -bottom-6 -left-4 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DDF7E4]">
            <TrendingUp className="h-5 w-5 text-[#1B6D35]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#124925]">+18 pts</div>
            <div className="text-[0.7rem] text-slate-500">this season</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
