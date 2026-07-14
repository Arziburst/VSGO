"use client";

import { FileText } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
} from "@/components/home/PageChrome";

export default function Page() {
  const pdfDocuments = [
    {
      title: "Документ 1",
      src: "/docs/Legislation_1.pdf",
    },
    {
      title: "Документ 2",
      src: "/docs/Legislation_2.pdf",
    },
    {
      title: "Документ 3",
      src: "/docs/Legislation_3.pdf",
    },
  ];

  return (
    <PageShell>
      <PageHeading title="Законодавство" icon={FileText} />

      <PageCard tone="soft" className="p-5 md:p-6">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Нормативно-правові акти та документи, що регулюють діяльність ВСГО
          «Конфедерація ГОІУ».
        </p>
      </PageCard>

      {pdfDocuments.map((doc) => (
        <PageCard key={doc.src}>
          <div className="bg-gray-50 dark:bg-gray-950 flex justify-center items-center min-h-[800px] p-4 md:p-6">
            <div className="bg-white dark:bg-gray-100 shadow-sm rounded-lg overflow-hidden w-full max-w-5xl border border-border">
              <iframe
                src={doc.src}
                title={doc.title}
                className="w-full h-[80vh]"
              />
            </div>
          </div>
        </PageCard>
      ))}
    </PageShell>
  );
}
