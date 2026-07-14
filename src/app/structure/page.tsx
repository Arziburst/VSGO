import { Network } from "lucide-react";
import { Metadata } from "next";
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "Structure",
  description: "Confederation structure",
};

export default function Page() {
  const managementOrgans = [
    "Загальні Збори ВСГО «Конфедерація ГОІУ»",
    "Рада ВСГО «Конфедерація ГОІУ»",
    "Президент ВСГО «Конфедерація ГОІУ»",
    "Виконавчий секретар ВСГО «Конфедерація ГОІУ»",
    "Виконавчий комітет ВСГО «Конфедерація ГОІУ»",
  ];

  return (
    <PageShell>
      <PageHeading title="Структура" icon={Network} />

      <PageCard tone="soft" className="p-5 md:p-6 space-y-5">
        <div>
          <PageBadge className="mb-3">Органи управління</PageBadge>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Органи управління ВСГО «Конфедерація ГОІУ» є:
          </p>
          <ul className="space-y-2 text-base md:text-lg text-gray-700 dark:text-gray-300">
            {managementOrgans.map((organ) => (
              <li key={organ} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-sky)] flex-shrink-0" />
                <span>{organ};</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[var(--brand-primary)]/15">
          <h3 className="text-base font-black text-[var(--brand-heading)] mb-2">
            Загальні Збори
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Загальні Збори є вищим статутним органом ВСГО «Конфедерація ГОІУ»
            та збираються не менш як раз на п&apos;ять років.
          </p>
          <div className="rounded-lg border border-[var(--brand-secondary)]/40 bg-white/70 dark:bg-black/20 p-4">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              У період між Загальними Зборами ВСГО «Конфедерація ГОІУ» керує Рада
              ВСГО «Конфедерація ГОІУ», яка забезпечує виконання статутних
              завдань, регламентуючих документів ВСГО «Конфедерація ГОІУ»,
              прийнятих Загальними Зборами ВСГО «Конфедерація ГОІУ», наказів та
              розпоряджень.
            </p>
          </div>
        </div>
      </PageCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PageCard className="p-5">
          <h3 className="text-base font-black text-[var(--brand-heading)] mb-2">
            Президент ВСГО
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Президент ВСГО «Конфедерація ГОІУ» очолює ВСГО «Конфедерація ГОІУ»,
            обирається Загальними Зборами ВСГО «Конфедерація ГОІУ» терміном на
            п&apos;ять років, підзвітний Загальним Зборам ВСГО «Конфедерація
            ГОІУ» та головує на засіданнях Ради ВСГО «Конфедерація ГОІУ».
          </p>
        </PageCard>
        <PageCard className="p-5">
          <h3 className="text-base font-black text-[var(--brand-heading)] mb-2">
            Віце-Президент ВСГО
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Віце-Президент ВСГО «Конфедерація ГОІУ» обирається Загальними Зборами
            ВСГО «Конфедерація ГОІУ» терміном на п&apos;ять років, підзвітний
            Загальним Зборам ВСГО «Конфедерація ГОІУ».
          </p>
        </PageCard>
        <PageCard className="p-5">
          <h3 className="text-base font-black text-[var(--brand-heading)] mb-2">
            Виконавчий секретар
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Виконавчий секретар ВСГО «Конфедерація ГОІУ» обирається Загальними
            Зборами ВСГО «Конфедерація ГОІУ» терміном на п&apos;ять років,
            підзвітний Загальним Зборам ВСГО «Конфедерація ГОІУ».
          </p>
        </PageCard>
        <PageCard className="p-5">
          <h3 className="text-base font-black text-[var(--brand-heading)] mb-2">
            Виконавчий комітет
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            Виконавчий комітет ВСГО «Конфедерація ГОІУ» призначається Радою ВСГО
            «Конфедерація ГОІУ» строком на п&apos;ять років, підзвітний Загальним
            Зборам ВСГО «Конфедерація ГОІУ».
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Виконавчий секретар ВСГО «Конфедерація ГОІУ» виконує
            контрольно-ревізійні функції та діє згідно із Положенням про
            Виконавчий секретар ВСГО «Конфедерація ГОІУ» затвердженим Радою ВСГО
            «Конфедерація ГОІУ».
          </p>
        </PageCard>
      </div>

      <PageCard className="p-5 md:p-6">
        <PageBadge className="mb-3">Важливо</PageBadge>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Виконавчий комітет ВСГО «Конфедерація ГОІУ» призначається Радою ВСГО
          «Конфедерація ГОІУ» строком на п&apos;ять років, підзвітний Загальним
          Зборам ВСГО «Конфедерація ГОІУ», та Раді ВСГО «Конфедерація ГОІУ», діє
          згідно із Положенням про Виконавчий комітет ВСГО «Конфедерація ГОІУ»
          затвердженим Радою ВСГО «Конфедерація ГОІУ».
        </p>
      </PageCard>
    </PageShell>
  );
}
