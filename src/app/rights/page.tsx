import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  Shield,
  AlertTriangle,
  Users,
  FileText,
  CheckCircle,
  XCircle,
} from "lucide-react";

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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-[#7a97e3]/10 via-purple-50 to-violet-50 dark:from-[#7a97e3]/20 dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[#7a97e3] flex items-center gap-3">
            <Scale className="h-8 w-8" />
            Права та обов'язки
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Члени (учасники) ВСГО «Конфедерація ГОІУ» мають права та обов'язки,
            які регламентуються Статутом організації та внутрішніми положеннями.
          </p>
        </CardContent>
      </Card>

      {/* Member Rights */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-br from-[#7a97e3]/5 to-purple-25 dark:from-[#7a97e3]/15 dark:to-purple-900/15">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-[#7a97e3]" />
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[#7a97e3]/20 to-purple-100 dark:from-[#7a97e3]/30 dark:to-purple-800/30 text-[#7a97e3]"
            >
              Права членів
            </Badge>
          </div>
          <CardTitle className="text-xl text-[#7a97e3]">
            Члени (учасники) ВСГО «Конфедерація ГОІУ» мають право:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memberRights.map((right, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-[#7a97e3]/20"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {right}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Rights */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-br from-blue-50 to-[#7a97e3]/10 dark:from-blue-900/20 dark:to-[#7a97e3]/20">
        <CardHeader>
          <CardTitle className="text-xl text-[#7a97e3] flex items-center gap-3">
            <Users className="h-6 w-6" />
            Додаткові права
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {memberResponsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800/50 rounded-lg border border-[#7a97e3]/20"
              >
                <Shield className="h-5 w-5 text-[#7a97e3] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-[#7a97e3]/5 dark:from-yellow-900/20 dark:to-[#7a97e3]/10 p-4 rounded-lg border border-[#7a97e3]/20">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              У заходах, які проводить ВСГО «Конфедерація ГОІУ», мають право
              брати участь тільки його члени (учасники). Інші організації осіб з
              інвалідністю беруть участь у таких заходах тільки за згодою Ради
              ВСГО «Конфедерація ГОІУ».
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Member Obligations */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-br from-orange-50 to-[#7a97e3]/10 dark:from-orange-900/20 dark:to-[#7a97e3]/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-[#7a97e3]" />
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-orange-200 to-[#7a97e3]/20 dark:from-orange-800/50 dark:to-[#7a97e3]/30 text-[#7a97e3]"
            >
              Обов'язки членів
            </Badge>
          </div>
          <CardTitle className="text-xl text-[#7a97e3]">
            Члени (учасники) ВСГО «Конфедерація ГОІУ» зобов'язані:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {obligations.map((obligation, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-[#7a97e3]/20"
              >
                <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {obligation}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Obligations */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-green-50 to-[#7a97e3]/10 dark:from-green-900/20 dark:to-[#7a97e3]/20">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-green-200 to-[#7a97e3]/20 dark:from-green-800/50 dark:to-[#7a97e3]/30 text-[#7a97e3]"
            >
              Важливо
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ВСГО «Конфедерація ГОІУ» здійснює свою діяльність без втручання у
            питання, що входять виключно до компетенції її членів (учасників).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            За порушення Статуту або неналежне виконання своїх членських
            обов'язків, вчинення дій, які завдали або можуть завдати матеріальну
            чи моральну шкоду честі, гідності та діловій репутації ВСГО
            «Конфедерація ГОІУ», її членам (учасникам), іншим учасникам
            громадського руху осіб з інвалідністю, членство (участь) у ВСГО
            «Конфедерація ГОІУ» може бути призупинено на деякий термін за
            рішенням Ради ВСГО «Конфедерація ГОІУ».
          </p>
        </CardContent>
      </Card>

      {/* Disciplinary Measures */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-red-50 to-[#7a97e3]/10 dark:from-red-900/20 dark:to-[#7a97e3]/20">
        <CardHeader>
          <CardTitle className="text-xl text-[#7a97e3] flex items-center gap-3">
            <AlertTriangle className="h-6 w-6" />
            Дисциплінарні санкції
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            До членів (учасників) ВСГО «Конфедерація ГОІУ» можуть бути
            застосовані такі дисциплінарні санкції:
          </p>
          <div className="space-y-4">
            {disciplinaryMeasures.map((measure, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-red-200 dark:border-red-800/50"
              >
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-red-600 dark:text-red-400 mb-1">
                    {measure.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {measure.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Membership Termination */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-purple-50 to-[#7a97e3]/10 dark:from-purple-900/20 dark:to-[#7a97e3]/20">
        <CardHeader>
          <CardTitle className="text-xl text-[#7a97e3] flex items-center gap-3">
            <XCircle className="h-6 w-6" />
            Припинення членства
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Членство (участь) припиняється у випадках:
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800/50 p-4 rounded-lg border border-[#7a97e3]/20">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#7a97e3] text-sm">•</span>
                <span className="text-sm">
                  Виходу за власним бажанням — члени (учасники) ВСГО
                  «Конфедерація ГОІУ» мають право добровільно у будь-який час
                  припинити членство (участь) у ВСГО «Конфедерація ГОІУ» шляхом
                  подання заяви до органів управління ВСГО «Конфедерація ГОІУ»
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7a97e3] text-sm">•</span>
                <span className="text-sm">
                  З подання такої заяви не потребує платежних рішень. З цього
                  самого дня припиняється перебування члена (учасника) ВСГО
                  «Конфедерація ГОІУ»
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7a97e3] text-sm">•</span>
                <span className="text-sm">
                  На підставі керівника ВСГО «Конфедерація ГОІУ», обраних на
                  посаді керівника ВСГО «Конфедерація ГОІУ», що поширюється на
                  членів (учасників) ВСГО «Конфедерація ГОІУ»
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7a97e3] text-sm">•</span>
                <span className="text-sm">
                  Виключення зі ВСГО «Конфедерація ГОІУ» здійснюється тільки з
                  рішенням Ради ВСГО «Конфедерація ГОІУ» (по 3-х схвалених
                  обставин)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7a97e3] text-sm">•</span>
                <span className="text-sm">
                  Ліквідації ВСГО «Конфедерація ГОІУ»
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
