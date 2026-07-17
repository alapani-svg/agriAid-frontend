import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Button from "../../../shared/ui/Button";
import Logo from "../../../shared/ui/Logo";
import Container from "../../../shared/ui/Container";
import GlassBlob from "../../../shared/ui/GlassBlob";

const navigation = [
  {
    name: "Platform",
    to: "platform",
  },
  {
    name: "Solutions",
    to: "solutions",
  },
  {
    name: "Marketplace",
    to: "marketplace",
  },
  {
    name: "Technology",
    to: "technology",
  },
  {
    name: "Contact",
    to: "footer",
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full"
    >
      <Container>
        <nav
          className="relative overflow-hidden mt-5 rounded-2xl border border-white/20 bg-[rgba(255,255,255,0.08)] backdrop-blur-[18px] shadow-md"
          style={{ WebkitBackdropFilter: "blur(18px)" }}
        >
          <div className="absolute inset-0 -z-10">
            <GlassBlob />
          </div>

          <div className="flex items-center justify-between px-6 py-4">
            <Logo className="h-12 w-auto" />

            <div className="hidden gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={600}
                  className="cursor-pointer font-medium text-slate-900 transition hover:text-green-700 drop-shadow-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="outline"
                glassy
                className="text-slate-950 font-semibold shadow-lg drop-shadow-md"
              >
                Sign In
              </Button>

              <Button
                variant="primary"
                size="lg"
                glassy
                className="shadow-lg drop-shadow-md"
              >
                Get Started
              </Button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="space-y-4 border-t p-6 lg:hidden">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={600}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}

              <Button
                fullWidth
                variant="primary"
                glassy
                className="mt-1"
              >
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </Container>
    </motion.header>
  );
}
