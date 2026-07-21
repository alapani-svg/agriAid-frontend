import Container from "../../../../shared/ui/Container";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { useT } from "../../../../shared/i18n/context";
import { roleIcons } from "../../constants/landing.constants";

export default function Roles() {
  const t = useT();
  return (
    <section id="roles" className="bg-[#f0f7f0] py-24">
      <Container>
        <SectionHeading
          eyebrow={t.roles.eyebrow}
          title={t.roles.title}
          subtitle={t.roles.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.roles.items.map((role, i) => {
            const Icon = roleIcons[i];
            return (
              <Reveal key={role.name} delay={(i % 3) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-gray-900">
                      {role.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {role.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
