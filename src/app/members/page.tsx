"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <Users className="h-8 w-8" />
            Члени Конфедерації
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
            >
              PDF Документ
            </Badge>
            <Badge
              variant="outline"
              className="border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] text-[var(--brand-primary)]"
            >
              4 сторінки
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Повний список громадських об&apos;єднань - членів ВСГО «Конфедерація
            ГОІУ» з назвами організацій та веб-сторінками.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)]">
        <CardContent className="p-0">
          <div className="bg-gray-100 dark:bg-gray-900 flex justify-center items-center min-h-[800px] p-8">
            <div className="bg-white dark:bg-gray-100 shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl">
              <iframe
                src="/docs/chleni-konfederatsii.pdf"
                title="Члени Конфедерації"
                className="w-full h-[80vh]"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
