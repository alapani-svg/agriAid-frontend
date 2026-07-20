import { motion } from "framer-motion";
import { Leaf, ShieldCheck } from "lucide-react";
import HeroButtons from "./HeroButtons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroContent() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.span
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-[#1B6D35]/15 bg-[#DDF7E4] px-3.5 py-1.5 text-[0.8rem] font-bold uppercase tracking-wide text-[#1B6D35]"
      >
        <Leaf className="h-3.5 w-3.5" />
        Built for Cameroon's agricultural producers
      </motion.span>

      <motion.h1
        variants={item}
        className="mt-5 text-[2.4rem] font-extrabold leading-[1.07] tracking-tight text-[#124925] sm:text-[3.2rem]"
      >
        Turn everyday farm activity into{" "}
        <span className="text-[#2EAD53]">verifiable credit</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate-600 sm:text-[1.15rem]"
      >
        AgriAid gives producers visibility and credibility. Document your harvests and
        stock, certify them in warehouses, and build an objective history that unlocks
        financing of up to 20 years from trusted institutions.
      </motion.p>

      <motion.div variants={item} className="mt-8">
        <HeroButtons />
      </motion.div>

      <motion.p
        variants={item}
        className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500"
      >
        <ShieldCheck className="h-4 w-4 text-[#2EAD53]" />
        No cost to join · Works on low-bandwidth connections · Your data stays yours
      </motion.p>
    </motion.div>
  );
}
