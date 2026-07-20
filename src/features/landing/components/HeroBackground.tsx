import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAF7EE] via-white to-slate-50" />

      {/* dotted texture */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(35,138,66,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      {/* soft green glows */}
      <motion.div
        className="absolute -top-24 -left-24 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(46,173,83,0.30), transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-10 right-[-6rem] h-[380px] w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(27,109,53,0.22), transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
