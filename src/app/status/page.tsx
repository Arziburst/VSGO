import type { Metadata } from "next";
import { Building2, FileText, Scale, Users } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "Status",
  description: "Confederation status",
};

export default function Page() {
  return (
    <PageShell>
      <PageHeading title="Статус" icon={FileText} />

      <PageCard tone="soft" className="p-5 md:p-6 space-y-5">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Всеукраїнська спілка громадських організацій «Конфедерація громадських
          організацій інвалідів України» є Громадською спілкою, яка
          об&apos;єднує Громадські об&apos;єднання (засновниками яких є громадяни
          України з особи приватного права) на основі спільності інтересів для
          реалізації мети та завдань.
        </p>

        <div className="pt-4 border-t border-[var(--brand-primary)]/15">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="h-5 w-5 text-[var(--brand-primary)]" />
            <PageBadge>Правові засади</PageBadge>
          </div>
          <h3 className="text-base font-black text-[var(--brand-heading)] mb-2">
            Діяльність у відповідності із законодавством
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            ВСГО «Конфедерація ГОІУ» створена та діє у відповідності з Конституцією
            України, Законами України «Про основи соціального захищеності інвалідів
            в Україні», «Про громадські об&apos;єднання», цього Статуту,
            керується Конвенцією про права осіб з інвалідністю, іншими
            законодавчими та нормативними актами, що діють в Україні.
          </p>
        </div>
      </PageCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PageCard className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-[var(--brand-primary)]" />
            <h3 className="text-base font-black text-[var(--brand-heading)]">
              Принципи діяльності
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Діяльність ВСГО «Конфедерація ГОІУ» здійснюється за принципом
            самоврядування та співробітництва з державними та громадськими та
            іншими організаціями, на засадах незалежності та добропіялі.
          </p>
        </PageCard>

        <PageCard className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-5 w-5 text-[var(--brand-primary)]" />
            <h3 className="text-base font-black text-[var(--brand-heading)]">
              Організаційна форма
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            ВСГО «Конфедерація ГОІУ» є неприбутковим громадським об&apos;єднанням,
            що не має на меті отримання прибутку.
          </p>
        </PageCard>
      </div>

      <PageCard className="p-5 md:p-6">
        <PageBadge className="mb-3">Важлива інформація</PageBadge>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          ВСГО «Конфедерація ГОІУ» є неприбутковим громадським об&apos;єднанням,
          що не має на меті отримання прибутку. Основним призначенням організації
          є захист прав та інтересів людей з інвалідністю, сприяння їх соціальній
          інтеграції та покращення якості життя.
        </p>
      </PageCard>
    </PageShell>
  );
}
