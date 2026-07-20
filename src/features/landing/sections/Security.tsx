import { motion } from "framer-motion";
import Section from "../../../shared/ui/Section";
import Container from "../../../shared/ui/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { stats, statsSource } from "../constants/landing.constants";

export default function Security() {
  return (
    <Section id="security" className="relative overflow-hidden bg-[#124925] py-20 sm:py-24">
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(closest-side, rgba(46,173,83,0.35), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <Container>
        <SectionHeading
          center
          light
          kicker="Why it matters"
          title="Financing the people who feed Cameroon"
          subtitle="Agriculture carries the economy and employs most of the country — yet almost none of the formal credit reaches it. AgriAid exists to close that gap."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <div className="text-4xl font-extrabold text-[#8FE3A7]">{s.value}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs leading-relaxed text-white/45">{statsSource}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
