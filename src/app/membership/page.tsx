import type { Metadata } from "next";
import { UserCheck } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "Membership conditions",
  description: "Membership admission conditions",
  alternates: { canonical: "/membership" },
  openGraph: { url: "/membership", title: "Membership | VSGO" },
};

export default function Page() {
  const membershipRequirements = [
    {
      title: "Юридичні особи приватного права",
      description:
        "Членами (учасниками) громадської ВСГО «Конфедерація ГОІУ» можуть бути юридичні особи приватного права",
    },
    {
      title: "Громадські об'єднання зі статусом юридичної особи",
      description:
        "У тому числі громадські об'єднання зі статусом юридичної особи",
    },
    {
      title: "Статутні вимоги",
      description:
        "Членами (учасниками) ВСГО «Конфедерація ГОІУ» є організації осіб з інвалідністю, які визнають Статут ВСГО «Конфедерація ГОІУ»",
    },
  ];

  const membershipTypes = [
    {
      type: "Звичайне членство",
      description:
        "Членами (учасниками) ВСГО «Конфедерація ГОІУ» можуть бути інші юридичні особи, мета та завдання яких не суперечить зазначеним у Статуті положенням ВСГО «Конфедерація ГОІУ».",
    },
    {
      type: "Почесне членство",
      description:
        "У ВСГО «Конфедерація ГОІУ» може бути почесне членство (участь). Діяльність почесних членів (учасників) ВСГО «Конфедерація ГОІУ» регулюється Положенням про почесних членів (учасників) ВСГО «Конфедерація ГОІУ», яке затверджується Радою ВСГО «Конфедерація ГОІУ».",
    },
  ];

  return (
    <PageShell>
      <PageHeading title="Умови вступу" icon={UserCheck} />

      <PageCard tone="soft" className="p-5 md:p-6 space-y-5">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Членами (учасниками) громадської ВСГО «Конфедерація ГОІУ» можуть бути
          юридичні особи приватного права, у тому числі громадські
          об&apos;єднання зі статусом юридичної особи.
        </p>

        <div className="pt-4 border-t border-[var(--brand-primary)]/15">
          <PageBadge className="mb-3">Основні вимоги</PageBadge>
          <h3 className="text-base font-bold text-[var(--brand-primary)] mb-3">
            Хто може бути членом організації
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {membershipRequirements.map((requirement) => (
              <div
                key={requirement.title}
                className="rounded-lg border border-border bg-white dark:bg-gray-900 p-4"
              >
                <h4 className="text-sm font-bold text-[var(--brand-primary)] mb-2">
                  {requirement.title}
                </h4>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {requirement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--brand-primary)]/15">
          <h3 className="text-base font-bold text-[var(--brand-primary)] mb-2">
            Кількісні вимоги до членства
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Кількість засновчих членів (учасників) ВСГО «Конфедерація ГОІУ» не
            повинна перевищувати 1/3 від кількості усіх членів (учасників) ВСГО
            «Конфедерація ГОІУ».
          </p>
          <div className="rounded-lg border border-[var(--brand-secondary)]/40 bg-white/70 dark:bg-black/20 p-4">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              У ВСГО «Конфедерація ГОІУ» може бути почесне членство (участь).
              Діяльність почесних членів (учасників) ВСГО «Конфедерація ГОІУ»
              регулюється Положенням про почесних членів (учасників), яке
              затверджується Радою ВСГО.
            </p>
          </div>
        </div>
      </PageCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {membershipTypes.map((membership) => (
          <PageCard key={membership.type} className="p-5">
            <h3 className="text-base font-bold text-[var(--brand-primary)] mb-2">
              {membership.type}
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {membership.description}
            </p>
          </PageCard>
        ))}
      </div>

      <PageCard className="p-5 md:p-6 space-y-3">
        <h3 className="text-base font-bold text-[var(--brand-primary)]">
          Процедура вступу
        </h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Для вступу до ВСГО «Конфедерація ГОІУ» організації осіб з інвалідністю
          подають до Ради ВСГО «Конфедерація ГОІУ» заяву про намір стати членами
          (учасниками) ВСГО «Конфедерація ГОІУ», копії документів, які свідчать
          про основні напрями стати членами (учасниками) ВСГО «Конфедерація
          ГОІУ», копії Статуту або Положення про діяльність членів членстві в
          ВСГО «Конфедерація ГОІУ», що приймається Радою ВСГО «Конфедерація
          ГОІУ».
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Рішення про прийняття організації до членства у ВСГО «Конфедерація
          ГОІУ» та затверджується Президентом ВСГО «Конфедерація ГОІУ». Рішення
          про членство (участь) у ВСГО «Конфедерація ГОІУ» набуває сили з часу
          його затвердження Президентом ВСГО «Конфедерація ГОІУ».
        </p>
      </PageCard>

      <PageCard className="p-5 md:p-6">
        <PageBadge className="mb-3">Додаткова інформація</PageBadge>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Організації, члени (учасники) ВСГО «Конфедерація ГОІУ», реалізують свої
          права та обов&apos;язки через своїх представників (за дорученням), які
          обираються ними самостійно, відповідно до їх Статуту.
        </p>
      </PageCard>
    </PageShell>
  );
}
