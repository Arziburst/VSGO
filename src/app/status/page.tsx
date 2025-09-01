import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, FileText, Scale, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Status",
  description: "Confederation status",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <FileText className="h-8 w-8" />
            Статус
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Всеукраїнська спілка громадських організацій «Конфедерація
            громадських організацій інвалідів України» є Громадською спілкою,
            яка об'єднує Громадські об'єднання (засновниками яких є громадяни
            України з особи приватного права) на основі спільності інтересів для
            реалізації мети та завдань.
          </p>
        </CardContent>
      </Card>

      {/* Legal Framework Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] to-purple-25 dark:from-[color-mix(in_oklab,var(--brand-primary)_15%,transparent)] dark:to-purple-900/15">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-6 w-6 text-[var(--brand-primary)]" />
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
            >
              Правові засади
            </Badge>
          </div>
          <CardTitle className="text-xl text-[var(--brand-primary)]">
            Діяльність у відповідності із законодавством
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ВСГО «Конфедерація ГОІУ» створена та діє у відповідності з
            Конституцією України, Законами України «Про основи соціального
            захищеності інвалідів в Україні», «Про громадські об'єднання», цього
            Статуту, керується Конвенцією про права осіб з інвалідністю, іншими
            законодавчими та нормативними актами, що діють в Україні.
          </p>
        </CardContent>
      </Card>

      {/* Organization Principles Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] to-purple-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:to-purple-900/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-[var(--brand-primary)]" />
              <CardTitle className="text-lg text-[var(--brand-primary)]">
                Принципи діяльності
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Діяльність ВСГО «Конфедерація ГОІУ» здійснюється за принципом
              самоврядування та співробітництва з державними та громадськими та
              іншими організаціями, на засадах незалежності та добропіялі.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-purple-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-purple-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-6 w-6 text-[var(--brand-primary)]" />
              <CardTitle className="text-lg text-[var(--brand-primary)]">
                Організаційна форма
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ВСГО «Конфедерація ГОІУ» є неприбутковим громадським об'єднанням,
              що не має на меті отримання прибутку.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-yellow-50 to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] dark:from-yellow-900/20 dark:to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-yellow-200 to-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:from-yellow-800/50 dark:to-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] text-[var(--brand-primary)]"
            >
              Важлива інформація
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ВСГО «Конфедерація ГОІУ» є неприбутковим громадським об'єднанням, що
            не має на меті отримання прибутку. Основним призначенням організації
            є захист прав та інтересів людей з інвалідністю, сприяння їх
            соціальній інтеграції та покращення якості життя.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
