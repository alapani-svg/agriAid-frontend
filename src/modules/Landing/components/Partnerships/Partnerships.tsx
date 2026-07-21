import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import { useT } from "../../../../shared/i18n/context";
import { partnerNames } from "../../constants/landing.constants";

export default function Partnerships() {
  const t = useT();
  return (
    <section className="border-y border-emerald-100 bg-white py-10">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
            {t.partnersIntro}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {partnerNames.map((name, i) => (
              <div
                key={name}
                className="flex items-baseline gap-2"
                title={t.partnersFull[i]}
              >
                <span className="font-headline text-lg font-extrabold text-gray-800">
                  {name}
                </span>
                <span className="hidden text-xs text-gray-400 sm:inline">
                  {t.partnersFull[i]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
