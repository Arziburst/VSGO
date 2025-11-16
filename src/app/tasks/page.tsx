import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  Shield,
  Heart,
  Building,
  Gavel,
  Lightbulb,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Confederation tasks",
  description: "Confederation tasks",
};

export default function Page() {
  const mainTasks = [
    {
      icon: Users,
      title: "Взаємодія з державними органами",
      description:
        "Взаємозв'язки з органами державної законодавчої та виконавчої влади щодо формування державної політики стосовно осіб з інвалідністю та вирішення соціально-економічних, політичних та інших життєво важливих проблем осіб з інвалідністю",
    },
    {
      icon: Shield,
      title: "Захист прав та інтересів",
      description:
        "Організація збору та аналізування інформації щодо діяльності організацій осіб з інвалідністю – членів (учасників) ВСГО «Конфедерація ГОІУ», їх підприємств, установ та організацій, сприяння обміну досвідом між ними з питань вирішення проблем осіб з інвалідністю",
    },
    {
      icon: Lightbulb,
      title: "Організаційно-правнича підтримка",
      description:
        "Сприяння створенню організаційно-правничих та економічних умов для становлення підприємницької діяльності підприємств, установ та організацій осіб з інвалідністю в Україні",
    },
    {
      icon: Building,
      title: "Відновна діяльність",
      description:
        "Проведення відновної роботи по використанню повних (чужих) щодо вдосконалення законодавства з питань соціального захисту осіб з інвалідністю, їх соціальної, медичної, психологічної, трудової, професійної реабілітації та інших сфер суспільних відносин, пов'язаних з життєдіяльністю осіб з інвалідністю",
    },
  ];

  const additionalTasks = [
    {
      icon: Heart,
      title: "Проведення фестивалів та культурних заходів",
      description:
        "Проведення фестивалів та культурних заходів ВСГО «Конфедерація ГОІУ»",
    },
    {
      icon: Globe,
      title: "Міжнародна співпраця",
      description:
        "Співпрацювання з іншими організаціями та міжнародними громадськими (неурядовими) організаціями осіб з інвалідністю",
    },
    {
      icon: Gavel,
      title: "Правотворча діяльність",
      description:
        "Сприяння правовідношанню та навчанню осіб з інвалідністю; створювати Представництва та Філії ВСГО «Конфедерація ГОІУ»",
    },
  ];

  const organizationalGoals = [
    "Одержувати від органів державної влади і управління та органів місцевого самоврядування інформацію, необхідну для реалізації своїх статутних цілей і завдань",
    "Приймати участь у розробці законодавчих та інших нормативних актів щодо захисту прав осіб з інвалідністю, вносити пропозиції до органів державної влади і управління та органів місцевого самоврядування стосовно змін і доповнень до законодавчих та інших нормативних актів щодо діяльності громадських об'єднань, їх підприємств, установ таorganizer",
    "Приймати участь у розробці законодавчих та інших нормативних актів щодо поліпшення життєдіяльності осіб з інвалідністю та вносити пропозиції до органів державної влади і управління та органів місцевого самоврядування стосовно змін і доповнень до законодавчих та інших нормативних актів щодо діяльності громадських об'єднань, їх підприємств, установ та організацій",
    "Співпрацювати з органами державної законодавчої та виконавчої влади, місцевими органами державної виконавчої влади, органами державної управління, органами місцевого самоврядування, засобами масової інформації, з іншими підприємствами, установами та організаціями в напрямку вирішення проблем осіб з інвалідністю",
    "Організовувати та проводити заходи (конференції, семінари, симпозіуми, форуми, виставки, концерти, спортивні змагання, тощо) з проблем осіб з інвалідністю та приймати участь в аналогічних заходах, які проводяться іншими громадськими об'єднаннями та громадськими (неурядовими) організаціями іноземних держав",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <Target className="h-8 w-8" />
            Завдання ВСГО «Конфедерація ГОІУ»
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            ВСГО «Конфедерація ГОІУ» створена з метою об&apos;єднання
            організацій осіб з інвалідністю для узгодження дій та консолідації
            їх зусиль, спрямованих на поліпшення становища осіб з інвалідністю в
            Україні, підвищенню ролі і соціального статусу організацій ВСГО з
            інвалідністю, утвердження та захисту конституційних прав осіб з
            інвалідністю, законних соціальних, економічних, творчих,
            національно-культурних та інших спільних інтересів своїх членів
            (учасників).
          </p>
        </CardContent>
      </Card>

      {/* Mission Statement */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] to-purple-25 dark:from-[color-mix(in_oklab,var(--brand-primary)_15%,transparent)] dark:to-purple-900/15">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
            >
              Місія організації
            </Badge>
          </div>
          <CardTitle className="text-xl text-[var(--brand-primary)]">
            ВСГО «Конфедерація ГОІУ» ставить перед собою наступні завдання:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mainTasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800/50 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-6 w-6 text-[var(--brand-primary)]" />
                    <h4 className="text-[var(--brand-primary)] text-lg">
                      {task.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {task.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Additional Tasks */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-green-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-green-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-green-200 to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:from-green-800/50 dark:to-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] text-[var(--brand-primary)]"
            >
              Додаткові завдання
            </Badge>
          </div>
          <CardTitle className="text-xl text-[var(--brand-primary)]">
            Інші важливі напрямки діяльності
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {additionalTasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-5 w-5 text-[var(--brand-primary)]" />
                    <h4 className="text-[var(--brand-primary)] text-sm">
                      {task.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {task.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Legal Framework */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-blue-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-blue-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--brand-primary)] flex items-center gap-3">
            <Gavel className="h-6 w-6" />
            Для реалізації своєї мети і завдань ВСГО «Конфедерація ГОІУ» у
            встановленому законодавством порядку може:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {organizationalGoals.map((goal, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800/50 rounded-lg border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]"
              >
                <div className="w-6 h-6 rounded-full bg-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[var(--brand-primary)] text-xs">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-purple-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-purple-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
          <CardHeader>
            <CardTitle className="text-lg text-[var(--brand-primary)] flex items-center gap-3">
              <Globe className="h-6 w-6" />
              Міжнародна діяльність
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Співпрацювання з іншими організаціями та міжнародними громадськими
              (неурядовими) організаціями осіб з інвалідністю; сприяти
              правовіданню та навчанню осіб з інвалідністю.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-orange-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-orange-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
          <CardHeader>
            <CardTitle className="text-lg text-[var(--brand-primary)] flex items-center gap-3">
              <Building className="h-6 w-6" />
              Розширення мережі
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Створювати Представництва та Філії ВСГО «Конфедерація ГОІУ» для
              розширення можливостей допомоги особам з інвалідністю у різних
              регіонах України.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Final Note */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-yellow-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-yellow-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-yellow-200 to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:from-yellow-800/50 dark:to-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] text-[var(--brand-primary)]"
            >
              Важливо
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Усі завдання та цілі ВСГО «Конфедерація ГОІУ» спрямовані на
            поліпшення якості життя осіб з інвалідністю в Україні, захист їх
            прав та інтересів, а також створення умов для повноцінної участі у
            суспільному житті.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
