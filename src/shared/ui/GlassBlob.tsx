import { motion } from "framer-motion";

export default function GlassBlob() {
  return (
    <motion.div
      aria-hidden
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className="pointer-events-none absolute -left-20 -top-16 w-[420px] h-[220px] rounded-full"
      style={{
        background: "radial-gradient(closest-side, rgba(16,185,129,0.22), rgba(16,185,129,0.06) 60%, transparent 70%)",
        filter: "blur(28px)",
        mixBlendMode: "normal",
      }}
    />
  );
}
