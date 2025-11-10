import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Members",
  description: "Members of the Confederation",
  alternates: { canonical: "/members" },
  openGraph: { url: "/members", title: "Members | VSGO" },
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
      color:
        "from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] to-purple-50",
      darkColor:
        "dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:to-purple-900/20",
      description:
        "Членами (учасниками) ВСГО «Конфедерація ГОІУ» можуть бути інші юридичні особи, мета та завдання яких не суперечить зазначеним у Статуті положенням ВСГО «Конфедерація ГОІУ».",
    },
    {
      type: "Почесне членство",
      color:
        "from-yellow-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)]",
      darkColor:
        "dark:from-yellow-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]",
      description:
        "У ВСГО «Конфедерація ГОІУ» може бути почесне членство (участь). Діяльність почесних членів (учасників) ВСГО «Конфедерація ГОІУ» регулюється Положенням про почесних членів (учасників) ВСГО «Конфедерація ГОІУ», яке затверджується Радою ВСГО «Конфедерація ГОІУ».",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Combined Information Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <UserCheck className="h-8 w-8" />
            Умови вступу
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Admission Conditions */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Членами (учасниками) громадської ВСГО «Конфедерація ГОІУ» можуть
              бути юридичні особи приватного права, у тому числі громадські
              об&apos;єднання зі статусом юридичної особи.
            </p>
          </div>

          {/* Main Requirements */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
              >
                Основні вимоги
              </Badge>
            </div>
            <h3 className="text-xl text-[var(--brand-primary)] mb-4">
              Хто може бути членом організації
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {membershipRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]"
                >
                  <h4 className="text-sm text-[var(--brand-primary)] mb-3">
                    {requirement.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Requirements Details */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <h3 className="text-xl text-[var(--brand-primary)] mb-4">
              Кількісні вимоги до членства
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Кількість засновчих членів (учасників) ВСГО «Конфедерація ГОІУ» не
              повинна перевищувати 1/3 від кількості усіх членів (учасників)
              ВСГО «Конфедерація ГОІУ».
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] dark:from-orange-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] p-4 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                У ВСГО «Конфедерація ГОІУ» може бути почесне членство (участь).
                Діяльність почесних членів (учасників) ВСГО «Конфедерація ГОІУ»
                регулюється Положенням про почесних членів (учасників), яке
                затверджується Радою ВСГО.
              </p>
            </div>
          </div>

          {/* Membership Types */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {membershipTypes.map((membership, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br ${membership.color
                    .replace("#7a97e3", "var(--brand-primary)")
                    .replace(
                      "#7a97e3",
                      "var(--brand-primary)"
                    )} ${membership.darkColor.replace(
                    "#7a97e3",
                    "var(--brand-primary)"
                  )}`}
                >
                  <h3 className="text-lg text-[var(--brand-primary)] mb-3">
                    {membership.type}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {membership.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admission Process */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-green-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-green-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--brand-primary)]">
            Процедура вступу
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Для вступу до ВСГО «Конфедерація ГОІУ» організації осіб з
            інвалідністю подають до Ради ВСГО «Конфедерація ГОІУ» заяву про
            намір стати членами (учасниками) ВСГО «Конфедерація ГОІУ», копії
            документів, які свідчать про основні напрями стати членами
            (учасниками) ВСГО «Конфедерація ГОІУ», копії Статуту або Положення
            про діяльність членів членстві в ВСГО «Конфедерація ГОІУ», що
            приймається Радою ВСГО «Конфедерація ГОІУ».
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Рішення про прийняття організації до членства у ВСГО «Конфедерація
            ГОІУ» та затверджується Президентом ВСГО «Конфедерація ГОІУ».
            Рішення про членство (участь) у ВСГО «Конфедерація ГОІУ» набуває
            сили з часу його затвердження Президентом ВСГО «Конфедерація ГОІУ».
          </p>
        </CardContent>
      </Card>

      {/* Rights and Responsibilities Note */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-purple-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-purple-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-200 to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:from-purple-800/50 dark:to-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] text-[var(--brand-primary)]"
            >
              Додаткова інформація
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Організації, члени (учасники) ВСГО «Конфедерація ГОІУ», реалізують
            свої права та обов&apos;язки через своїх представників (за
            дорученням), які обираються ними самостійно, відповідно до їх
            Статуту.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
