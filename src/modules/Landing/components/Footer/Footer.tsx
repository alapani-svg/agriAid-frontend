import { Link } from "react-scroll";

import Container from "../../../../shared/ui/Container";
import LogoBadge from "../shared/LogoBadge";
import { useT } from "../../../../shared/i18n/context";
import { NAV_OFFSET } from "../../utils/scroll";

const platformTargets = ["platform", "features", "workflow", "credibility"];
const audienceTargets = ["roles", "roles", "roles", "roles"];

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0b1f12] py-16 text-emerald-50">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoBadge
              badgeClassName="h-12 w-12"
              wordmarkClassName="text-xl text-white"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-emerald-100/70">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">
              {t.footer.platformTitle}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {t.footer.platformLinks.map((name, i) => (
                <li key={name}>
                  <Link
                    to={platformTargets[i]}
                    smooth
                    duration={600}
                    offset={NAV_OFFSET}
                    className="cursor-pointer text-emerald-100/70 transition hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">
              {t.footer.audienceTitle}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {t.footer.audienceLinks.map((name, i) => (
                <li key={name}>
                  <Link
                    to={audienceTargets[i]}
                    smooth
                    duration={600}
                    offset={NAV_OFFSET}
                    className="cursor-pointer text-emerald-100/70 transition hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-emerald-100/60">
            © {year} AgriAid. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-emerald-100/70 transition hover:text-white">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-emerald-100/70 transition hover:text-white">
              {t.footer.terms}
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
