import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { useT } from "../../../../shared/i18n/context";
import { stepIcons } from "../../constants/landing.constants";

export default function HowItWorks() {
  const t = useT();
  return (
    <section
      id="workflow"
      className="bg-gradient-to-b from-emerald-50 to-white py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          subtitle={t.how.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.how.items.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <span className="absolute right-5 top-5 font-headline text-4xl font-extrabold text-emerald-100">
                    {i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-headline text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.text}
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
