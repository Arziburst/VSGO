"use client";

import { Users } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

export default function Page() {
  return (
    <PageShell>
      <PageHeading title="Члени Конфедерації" icon={Users}>
        <PageBadge>PDF Документ</PageBadge>
        <PageBadge variant="outline">4 сторінки</PageBadge>
      </PageHeading>

      <PageCard tone="soft" className="p-5 md:p-6">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Повний список громадських об&apos;єднань - членів ВСГО «Конфедерація
          ГОІУ» з назвами організацій та веб-сторінками.
        </p>
      </PageCard>

      <PageCard>
        <div className="bg-gray-50 dark:bg-gray-950 flex justify-center items-center min-h-[800px] p-4 md:p-6">
          <div className="bg-white dark:bg-gray-100 shadow-sm rounded-lg overflow-hidden w-full max-w-5xl border border-border">
            <iframe
              src="/docs/chleni-konfederatsii.pdf"
              title="Члени Конфедерації"
              className="w-full h-[80vh]"
            />
          </div>
        </div>
      </PageCard>
    </PageShell>
  );
}
