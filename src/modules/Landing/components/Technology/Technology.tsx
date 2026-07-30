import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { useT } from "../../../../shared/i18n/context";
import { techIcons } from "../../constants/landing.constants";

export default function Technology() {
  const t = useT();
  return (
    <section id="technology" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow={t.tech.eyebrow}
          title={t.tech.title}
          subtitle={t.tech.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.tech.items.map((item, i) => {
            const Icon = techIcons[i];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-emerald-100 bg-[#f0f7f0] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-headline text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
