import type { Metadata } from "next";
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
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

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
    <PageShell>
      <PageHeading title="Завдання Конфедерації" icon={Target} />

      <PageCard tone="soft" className="p-5 md:p-6">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          ВСГО «Конфедерація ГОІУ» створена з метою об&apos;єднання організацій
          осіб з інвалідністю для узгодження дій та консолідації їх зусиль,
          спрямованих на поліпшення становища осіб з інвалідністю в Україні,
          підвищенню ролі і соціального статусу організацій ВСГО з інвалідністю,
          утвердження та захисту конституційних прав осіб з інвалідністю,
          законних соціальних, економічних, творчих, національно-культурних та
          інших спільних інтересів своїх членів (учасників).
        </p>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-4">
        <PageBadge>Місія організації</PageBadge>
        <h3 className="text-base font-bold text-[var(--brand-primary)]">
          ВСГО «Конфедерація ГОІУ» ставить перед собою наступні завдання:
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {mainTasks.map((task) => {
            const Icon = task.icon;
            return (
              <div
                key={task.title}
                className="rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-5 w-5 text-[var(--brand-primary)]" />
                  <h4 className="text-sm font-bold text-[var(--brand-primary)]">
                    {task.title}
                  </h4>
                </div>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {task.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-4">
        <PageBadge>Додаткові завдання</PageBadge>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {additionalTasks.map((task) => {
            const Icon = task.icon;
            return (
              <div
                key={task.title}
                className="rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-[var(--brand-primary)]" />
                  <h4 className="text-sm font-bold text-[var(--brand-primary)]">
                    {task.title}
                  </h4>
                </div>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {task.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageCard>

      <PageCard className="p-5 md:p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Gavel className="h-5 w-5 text-[var(--brand-primary)]" />
          <h3 className="text-base font-bold text-[var(--brand-primary)]">
            Для реалізації своєї мети і завдань ВСГО «Конфедерація ГОІУ» може:
          </h3>
        </div>
        <div className="space-y-3">
          {organizationalGoals.map((goal, index) => (
            <div
              key={goal}
              className="flex items-start gap-3 rounded-lg border border-border p-3"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white text-xs font-bold flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </PageCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PageCard className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-5 w-5 text-[var(--brand-primary)]" />
            <h3 className="text-base font-bold text-[var(--brand-primary)]">
              Міжнародна діяльність
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Співпрацювання з іншими організаціями та міжнародними громадськими
            (неурядовими) організаціями осіб з інвалідністю; сприяти правовіданню
            та навчанню осіб з інвалідністю.
          </p>
        </PageCard>
        <PageCard className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Building className="h-5 w-5 text-[var(--brand-primary)]" />
            <h3 className="text-base font-bold text-[var(--brand-primary)]">
              Розширення мережі
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Створювати Представництва та Філії ВСГО «Конфедерація ГОІУ» для
            розширення можливостей допомоги особам з інвалідністю у різних
            регіонах України.
          </p>
        </PageCard>
      </div>

      <PageCard className="p-5 md:p-6">
        <PageBadge className="mb-3">Важливо</PageBadge>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Усі завдання та цілі ВСГО «Конфедерація ГОІУ» спрямовані на поліпшення
          якості життя осіб з інвалідністю в Україні, захист їх прав та
          інтересів, а також створення умов для повноцінної участі у суспільному
          житті.
        </p>
      </PageCard>
    </PageShell>
  );
}
