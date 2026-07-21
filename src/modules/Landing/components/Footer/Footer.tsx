import { Link } from "react-scroll";

import Container from "../../../../shared/ui/Container";
import { NAV_OFFSET } from "../../utils/scroll";

const platformLinks = [
  { name: "Platform", to: "platform" },
  { name: "Features", to: "features" },
  { name: "How it works", to: "workflow" },
  { name: "Credibility score", to: "credibility" },
];

const roleLinks = [
  { name: "Farmers & CIGs", to: "roles" },
  { name: "Financing institutions", to: "roles" },
  { name: "Warehouse managers", to: "roles" },
  { name: "Buyers & traders", to: "roles" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0b1f12] py-16 text-emerald-50">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/agriAid-logo.png"
                alt="AgriAid logo"
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-headline text-xl font-extrabold text-white">
                AgriAid
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-emerald-100/70">
              AgriAid turns everyday farm activity into verifiable credit 
              documenting harvests, certifying stock and connecting Cameroon's
              producers to financing.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Platform</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {platformLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.to}
                    smooth
                    duration={600}
                    offset={NAV_OFFSET}
                    className="cursor-pointer text-emerald-100/70 transition hover:text-white"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Who it's for</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {roleLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.to}
                    smooth
                    duration={600}
                    offset={NAV_OFFSET}
                    className="cursor-pointer text-emerald-100/70 transition hover:text-white"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-emerald-100/60">
            © {year} AgriAid. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-emerald-100/70 transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-emerald-100/70 transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-emerald-100/70 transition hover:text-white">
            Alapani Corantin & Tsehoule Ngalock
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
