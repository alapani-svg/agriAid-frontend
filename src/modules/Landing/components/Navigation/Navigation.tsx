import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import clsx from "clsx";

import LogoBadge from "../shared/LogoBadge";
import CtaButton from "../shared/CtaButton";
import Container from "../../../../shared/ui/Container";
import LanguageSwitcher from "../../../../shared/ui/LanguageSwitcher";
import { useT } from "../../../../shared/i18n/context";
import { navTargets } from "../../constants/landing.constants";
import { scrollToId, NAV_OFFSET } from "../../utils/scroll";

export default function Navigation() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  const items = navTargets.map((to, i) => ({ to, name: t.nav[i] }));

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full"
    >
      <Container>
        <nav
          className={clsx(
            "mt-4 flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300",
            scrolled
              ? "border-emerald-100 bg-white/85 shadow-lg backdrop-blur-xl"
              : "border-white/60 bg-white/50 backdrop-blur-md",
          )}
          style={{ WebkitBackdropFilter: "blur(18px)" }}
        >
          <button
            onClick={() => scrollToId("top")}
            aria-label="AgriAid home"
            className="cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <LogoBadge badgeClassName="h-12 w-12" wordmarkClassName="text-xl text-gray-900" />
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={600}
                offset={NAV_OFFSET}
                activeClass="nav-active"
                className="nav-link cursor-pointer text-sm font-semibold text-gray-700 transition hover:text-emerald-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <CtaButton variant="outline" onClick={() => go("get-started")}>
              {t.actions.signIn}
            </CtaButton>
            <CtaButton variant="primary" onClick={() => go("get-started")}>
              {t.actions.getStarted}
            </CtaButton>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              className="text-gray-800"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 space-y-1 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl lg:hidden">
            {items.map((item) => (
              <button
                key={item.to}
                onClick={() => go(item.to)}
                className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {item.name}
              </button>
            ))}
            <div className="grid gap-2 pt-2">
              <CtaButton fullWidth variant="outline" onClick={() => go("get-started")}>
                {t.actions.signIn}
              </CtaButton>
              <CtaButton fullWidth variant="primary" onClick={() => go("get-started")}>
                {t.actions.getStarted}
              </CtaButton>
            </div>
          </div>
        )}
      </Container>
    </motion.header>
  );
}
