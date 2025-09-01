import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Network,
  Users,
  UserCheck,
  Crown,
  Briefcase,
  Settings,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structure",
  description: "Confederation structure",
};

export default function Page() {
  const managementOrgans = [
    {
      title: "Загальні Збори ВСГО «Конфедерація ГОІУ»",
      icon: Users,
      description: "Вищий статутний орган ВСГО «Конфедерація ГОІУ»",
    },
    {
      title: "Рада ВСГО «Конфедерація ГОІУ»",
      icon: UserCheck,
      description: "Колегіальний орган управління організацією",
    },
    {
      title: "Президент ВСГО «Конфедерація ГОІУ»",
      icon: Crown,
      description: "Одноосібний керівник організації",
    },
    {
      title: "Виконавчий секретар ВСГО «Конфедерація ГОІУ»",
      icon: Briefcase,
      description: "Виконавчий орган організації",
    },
    {
      title: "Виконавчий комітет ВСГО «Конфедерація ГОІУ»",
      icon: Settings,
      description: "Колегіальний виконавчий орган",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <Network className="h-8 w-8" />
            Структура
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
              >
                Органи управління
              </Badge>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Органи управління ВСГО «Конфедерація ГОІУ» є:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {managementOrgans.map((organ, index) => (
                <li key={index} className="flex items-center gap-3">
                  <organ.icon className="h-4 w-4 text-[var(--brand-primary)] flex-shrink-0" />
                  <span>{organ.title};</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* General Assembly Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] to-purple-25 dark:from-[color-mix(in_oklab,var(--brand-primary)_15%,transparent)] dark:to-purple-900/15">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-6 w-6 text-[var(--brand-primary)]" />
            <CardTitle className="text-xl text-[var(--brand-primary)]">
              Загальні Збори
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Загальні Збори є вищим статутним органом ВСГО «Конфедерація ГОІУ» та
            збираються не менш як раз на п&#39;ять років.
          </p>
          <div className="bg-gradient-to-r from-yellow-50 to-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] dark:from-yellow-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] p-4 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              У період між Загальними Зборами ВСГО «Конфедерація ГОІУ» керує
              Рада ВСГО «Конфедерація ГОІУ», яка забезпечує виконання статутних
              завдань, регламентуючих документів ВСГО «Конфедерація ГОІУ»,
              прийнятих Загальними Зборами ВСГО «Конфедерація ГОІУ», наказів та
              розпоряджень.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Management Structure Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* President */}
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] to-purple-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:to-purple-900/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Crown className="h-6 w-6 text-[var(--brand-primary)]" />
              <CardTitle className="text-lg text-[var(--brand-primary)]">
                Президент ВСГО
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Президент ВСГО «Конфедерація ГОІУ» очолює ВСГО «Конфедерація
              ГОІУ», обирається Загальними Зборами ВСГО «Конфедерація ГОІУ»
              терміном на п&#39;ять років, підзвітний Загальним Зборам ВСГО
              «Конфедерація ГОІУ» та головує на засіданнях Ради ВСГО
              «Конфедерація ГОІУ».
            </p>
          </CardContent>
        </Card>

        {/* Vice-President */}
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-purple-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-purple-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <UserCheck className="h-6 w-6 text-[var(--brand-primary)]" />
              <CardTitle className="text-lg text-[var(--brand-primary)]">
                Віце-Президент ВСГО
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Віце-Президент ВСГО «Конфедерація ГОІУ» обирається Загальними
              Зборами ВСГО «Конфедерація ГОІУ» терміном на п&#39;ять років,
              підзвітний Загальним Зборам ВСГО «Конфедерація ГОІУ».
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Executive Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Executive Secretary */}
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-green-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-green-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-6 w-6 text-[var(--brand-primary)]" />
              <CardTitle className="text-lg text-[var(--brand-primary)]">
                Виконавчий секретар
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Виконавчий секретар ВСГО «Конфедерація ГОІУ» обирається Загальними
              Зборами ВСГО «Конфедерація ГОІУ» терміном на п&#39;ять років,
              підзвітний Загальним Зборам ВСГО «Конфедерація ГОІУ».
            </p>
          </CardContent>
        </Card>

        {/* Executive Committee */}
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-orange-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-orange-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Settings className="h-6 w-6 text-[var(--brand-primary)]" />
              <CardTitle className="text-lg text-[var(--brand-primary)]">
                Виконавчий комітет
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Виконавчий комітет ВСГО «Конфедерація ГОІУ» призначається Радою
                ВСГО «Конфедерація ГОІУ» строком на п&#39;ять років, підзвітний
                Загальним Зборам ВСГО «Конфедерація ГОІУ».
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                Виконавчий секретар ВСГО «Конфедерація ГОІУ» виконує
                контрольно-ревізійні функції та діє згідно із Положенням про
                Виконавчий секретар ВСГО «Конфедерація ГОІУ» затвердженим Радою
                ВСГО «Конфедерація ГОІУ».
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

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
