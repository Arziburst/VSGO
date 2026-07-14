import type { Metadata } from "next";
import {
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "Rights and obligations",
  description: "Rights and obligations",
};

export default function Page() {
  const memberRights = [
    "Брати участь в заходах, що проводяться ВСГО «Конфедерація ГОІУ»",
    "Брати участь у плануванні і обговоренні діяльності ВСГО «Конфедерація ГОІУ»",
    "Вносити пропозиції щодо поліпшення роботи ВСГО «Конфедерація ГОІУ»",
    "Користуватися символікою ВСГО «Конфедерація ГОІУ»",
    "Отримувати відомості, що стосуються діяльності ВСГО «Конфедерація ГОІУ»",
    "Приймати участь у діяльності інших організацій осіб з інвалідністю",
  ];

  const memberResponsibilities = [
    "Вільно критикувати будь-який орган ВСГО «Конфедерація ГОІУ», подавати заперечення і скарги на прийняті рішення до Ради ВСГО «Конфедерація ГОІУ» та оскаржувати рішення скарг на Зборах Ради ВСГО «Конфедерація ГОІУ»",
    "Звертатися до органів ВСГО «Конфедерація ГОІУ» з запитами та пропозиціями з питань, пов'язаних з діяльністю ВСГО «Конфедерація ГОІУ», обґрунтувати відповіді",
    "Звертатися до органів ВСГО «Конфедерація ГОІУ» за допомогою у повному захисті своїх прав та законних інтересів",
  ];

  const obligations = [
    "Брати участь у діяльності ВСГО «Конфедерація ГОІУ»",
    "Сприяти успішному втіленню в життя цілей і завдань, визначених Статутом ВСГО «Конфедерація ГОІУ»",
    "Утримуватись від дій, які можуть завдати матеріальну чи моральну шкоду честі, гідності та діловій репутації ВСГО «Конфедерація ГОІУ», членам (учасникам) громадського руху осіб з інвалідністю",
    "Здійснювати практичне виконання усіх рішень і постанов Ради ВСГО «Конфедерація ГОІУ» та Президента ВСГО «Конфедерація ГОІУ»",
  ];

  const disciplinaryMeasures = [
    {
      title: "Попередження",
      description:
        "За порушення Статуту або неналежне виконання своїх членських обов'язків",
    },
    {
      title: "Припущення членство (участь)",
      description: "За повторні або серйозні порушення статутних норм",
    },
    {
      title: "Виключення з членів (учасників) ВСГО «Конфедерація ГОІУ»",
      description:
        "За систематичні порушення або дії, що завдають шкоди організації",
    },
  ];

  const terminationCases = [
    "Вихіду за власним бажанням — члени (учасники) ВСГО «Конфедерація ГОІУ» мають право добровільно у будь-який час припинити членство (участь) у ВСГО «Конфедерація ГОІУ» шляхом подання заяви до органів управління ВСГО «Конфедерація ГОІУ»",
    "З подання такої заяви не потребує платежних рішень. З цього самого дня припиняється перебування члена (учасника) ВСГО «Конфедерація ГОІУ»",
    "На підставі керівника ВСГО «Конфедерація ГОІУ», обраних на посаді керівника ВСГО «Конфедерація ГОІУ», що поширюється на членів (учасників) ВСГО «Конфедерація ГОІУ»",
    "Виключення зі ВСГО «Конфедерація ГОІУ» здійснюється тільки з рішенням Ради ВСГО «Конфедерація ГОІУ» (по 3-х схвалених обставин)",
    "Ліквідації ВСГО «Конфедерація ГОІУ»",
  ];

  return (
    <PageShell>
      <PageHeading title="Права та обов'язки" icon={Scale} />

      <PageCard tone="soft" className="p-5 md:p-6">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Члени (учасники) ВСГО «Конфедерація ГОІУ» мають права та обов&apos;язки,
          які регламентуються Статутом організації та внутрішніми положеннями.
        </p>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-[var(--brand-primary)]" />
          <PageBadge>Права членів</PageBadge>
        </div>
        <h3 className="text-base font-black text-[var(--brand-heading)]">
          Члени (учасники) ВСГО «Конфедерація ГОІУ» мають право:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {memberRights.map((right) => (
            <div
              key={right}
              className="flex items-start gap-2 rounded-lg border border-border p-3"
            >
              <CheckCircle className="h-4 w-4 text-[var(--brand-sky)] flex-shrink-0 mt-0.5" />
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {right}
              </p>
            </div>
          ))}
        </div>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-3">
        <h3 className="text-base font-black text-[var(--brand-heading)]">
          Додаткові права
        </h3>
        {memberResponsibilities.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 rounded-lg border border-border p-3"
          >
            <Shield className="h-4 w-4 text-[var(--brand-primary)] flex-shrink-0 mt-0.5" />
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
        <div className="rounded-lg border border-[var(--brand-secondary)]/40 bg-[var(--nav-submenu)] p-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            У заходах, які проводить ВСГО «Конфедерація ГОІУ», мають право брати
            участь тільки його члени (учасники). Інші організації осіб з
            інвалідністю беруть участь у таких заходах тільки за згодою Ради ВСГО
            «Конфедерація ГОІУ».
          </p>
        </div>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-4">
        <PageBadge>Обов&apos;язки членів</PageBadge>
        <h3 className="text-base font-black text-[var(--brand-heading)]">
          Члени (учасники) ВСГО «Конфедерація ГОІУ» зобов&apos;язані:
        </h3>
        <div className="space-y-3">
          {obligations.map((obligation) => (
            <div
              key={obligation}
              className="flex items-start gap-2 rounded-lg border border-border p-3"
            >
              <CheckCircle className="h-4 w-4 text-[var(--nav-active)] flex-shrink-0 mt-0.5" />
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {obligation}
              </p>
            </div>
          ))}
        </div>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-3">
        <PageBadge>Важливо</PageBadge>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          ВСГО «Конфедерація ГОІУ» здійснює свою діяльність без втручання у
          питання, що входять виключно до компетенції її членів (учасників).
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          За порушення Статуту або неналежне виконання своїх членських
          обов&apos;язків, вчинення дій, які завдали або можуть завдати
          матеріальну чи моральну шкоду честі, гідності та діловій репутації ВСГО
          «Конфедерація ГОІУ», її членам (учасникам), іншим учасникам громадського
          руху осіб з інвалідністю, членство (участь) у ВСГО «Конфедерація ГОІУ»
          може бути призупинено на деякий термін за рішенням Ради ВСГО
          «Конфедерація ГОІУ».
        </p>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-[var(--brand-primary)]" />
          <h3 className="text-base font-black text-[var(--brand-heading)]">
            Дисциплінарні санкції
          </h3>
        </div>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          До членів (учасників) ВСГО «Конфедерація ГОІУ» можуть бути застосовані
          такі дисциплінарні санкції:
        </p>
        <div className="space-y-3">
          {disciplinaryMeasures.map((measure) => (
            <div
              key={measure.title}
              className="flex items-start gap-2 rounded-lg border border-border p-3"
            >
              <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-black text-[var(--brand-heading)] mb-1">
                  {measure.title}
                </h4>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {measure.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-3">
        <h3 className="text-base font-black text-[var(--brand-heading)]">
          Припинення членства
        </h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Членство (участь) припиняється у випадках:
        </p>
        <ul className="space-y-2">
          {terminationCases.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-sky)] flex-shrink-0" />
              <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </PageCard>
    </PageShell>
  );
}
