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
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-[#7a97e3]/10 via-purple-50 to-violet-50 dark:from-[#7a97e3]/20 dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[#7a97e3] flex items-center gap-3">
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
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-[#7a97e3]/5 to-purple-25 dark:from-[#7a97e3]/15 dark:to-purple-900/15">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-6 w-6 text-[#7a97e3]" />
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[#7a97e3]/20 to-purple-100 dark:from-[#7a97e3]/30 dark:to-purple-800/30 text-[#7a97e3]"
            >
              Правові засади
            </Badge>
          </div>
          <CardTitle className="text-xl text-[#7a97e3]">
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
        <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-br from-[#7a97e3]/10 to-purple-50 dark:from-[#7a97e3]/20 dark:to-purple-900/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-[#7a97e3]" />
              <CardTitle className="text-lg text-[#7a97e3]">
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

        <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-br from-purple-50 to-[#7a97e3]/10 dark:from-purple-900/20 dark:to-[#7a97e3]/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-6 w-6 text-[#7a97e3]" />
              <CardTitle className="text-lg text-[#7a97e3]">
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
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-yellow-50 to-[#7a97e3]/10 dark:from-yellow-900/20 dark:to-[#7a97e3]/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-yellow-200 to-[#7a97e3]/20 dark:from-yellow-800/50 dark:to-[#7a97e3]/30 text-[#7a97e3]"
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
