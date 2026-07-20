import { Link } from "react-scroll";
import Container from "../../../shared/ui/Container";
import Logo from "../../../shared/ui/Logo";
import { NAV_OFFSET } from "../utils/scroll";

const columns = [
  {
    title: "Platform",
    links: [
      { name: "Features", to: "features" },
      { name: "How it works", to: "workflow" },
      { name: "Credibility score", to: "dashboard" },
      { name: "Technology", to: "technology" },
    ],
  },
  {
    title: "Who it's for",
    links: [
      { name: "Farmers & CIGs", to: "roles" },
      { name: "Institutions", to: "roles" },
      { name: "Warehouses", to: "roles" },
      { name: "Buyers & traders", to: "roles" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              AgriAid turns everyday farm activity into verifiable credit — giving Cameroon's
              producers the visibility and credibility to access financing.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#124925]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.to}
                      smooth
                      duration={600}
                      offset={NAV_OFFSET}
                      className="cursor-pointer text-sm text-slate-500 transition hover:text-[#2EAD53]"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} AgriAid. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-400 transition hover:text-[#2EAD53]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-400 transition hover:text-[#2EAD53]">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
