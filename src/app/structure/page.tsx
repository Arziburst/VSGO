import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";
import { Metadata } from "next";

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
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Combined Information Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <Network className="h-8 w-8" />
            Структура
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Management Organs */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
              >
                Органи управління
              </Badge>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-3">
              Органи управління ВСГО «Конфедерація ГОІУ» є:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              {managementOrgans.map((organ, index) => (
                <li key={index}>
                  <span>{organ};</span>
                </li>
              ))}
            </ul>
          </div>

          {/* General Assembly */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <h3 className="text-xl text-[var(--brand-primary)] mb-3">
              Загальні Збори
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Загальні Збори є вищим статутним органом ВСГО «Конфедерація ГОІУ»
              та збираються не менш як раз на п&#39;ять років.
            </p>
            <div className="bg-gradient-to-r from-yellow-50 to-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] dark:from-yellow-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] p-4 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                У період між Загальними Зборами ВСГО «Конфедерація ГОІУ» керує
                Рада ВСГО «Конфедерація ГОІУ», яка забезпечує виконання
                статутних завдань, регламентуючих документів ВСГО «Конфедерація
                ГОІУ», прийнятих Загальними Зборами ВСГО «Конфедерація ГОІУ»,
                наказів та розпоряджень.
              </p>
            </div>
          </div>

          {/* Management Structure */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* President */}
              <div>
                <h3 className="text-lg text-[var(--brand-primary)] mb-3">
                  Президент ВСГО
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Президент ВСГО «Конфедерація ГОІУ» очолює ВСГО «Конфедерація
                  ГОІУ», обирається Загальними Зборами ВСГО «Конфедерація ГОІУ»
                  терміном на п&#39;ять років, підзвітний Загальним Зборам ВСГО
                  «Конфедерація ГОІУ» та головує на засіданнях Ради ВСГО
                  «Конфедерація ГОІУ».
                </p>
              </div>

              {/* Vice-President */}
              <div>
                <h3 className="text-lg text-[var(--brand-primary)] mb-3">
                  Віце-Президент ВСГО
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Віце-Президент ВСГО «Конфедерація ГОІУ» обирається Загальними
                  Зборами ВСГО «Конфедерація ГОІУ» терміном на п&#39;ять років,
                  підзвітний Загальним Зборам ВСГО «Конфедерація ГОІУ».
                </p>
              </div>
            </div>
          </div>

          {/* Executive Structure */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Executive Secretary */}
              <div>
                <h3 className="text-lg text-[var(--brand-primary)] mb-3">
                  Виконавчий секретар
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Виконавчий секретар ВСГО «Конфедерація ГОІУ» обирається
                  Загальними Зборами ВСГО «Конфедерація ГОІУ» терміном на
                  п&#39;ять років, підзвітний Загальним Зборам ВСГО
                  «Конфедерація ГОІУ».
                </p>
              </div>

              {/* Executive Committee */}
              <div>
                <h3 className="text-lg text-[var(--brand-primary)] mb-3">
                  Виконавчий комітет
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Виконавчий комітет ВСГО «Конфедерація ГОІУ» призначається
                    Радою ВСГО «Конфедерація ГОІУ» строком на п&#39;ять років,
                    підзвітний Загальним Зборам ВСГО «Конфедерація ГОІУ».
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Виконавчий секретар ВСГО «Конфедерація ГОІУ» виконує
                    контрольно-ревізійні функції та діє згідно із Положенням про
                    Виконавчий секретар ВСГО «Конфедерація ГОІУ» затвердженим
                    Радою ВСГО «Конфедерація ГОІУ».
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-blue-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-blue-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-200 to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:from-blue-800/50 dark:to-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] text-[var(--brand-primary)]"
            >
              Важливо
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Виконавчий комітет ВСГО «Конфедерація ГОІУ» призначається Радою ВСГО
            «Конфедерація ГОІУ» строком на п&#39;ять років, підзвітний Загальним
            Зборам ВСГО «Конфедерація ГОІУ», та Раді ВСГО «Конфедерація ГОІУ»,
            діє згідно із Положенням про Виконавчий комітет ВСГО «Конфедерація
            ГОІУ» затвердженим Радою ВСГО «Конфедерація ГОІУ».
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
