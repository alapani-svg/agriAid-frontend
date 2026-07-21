import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import { partners } from "../../constants/landing.constants";

export default function Partnerships() {
  return (
    <section className="border-y border-emerald-100 bg-white py-10">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
            Designed to work with the institutions farmers rely on
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-baseline gap-2"
                title={p.full}
              >
                <span className="font-headline text-lg font-extrabold text-gray-800">
                  {p.name}
                </span>
                <span className="hidden text-xs text-gray-400 sm:inline">
                  {p.full}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
