"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function Page() {
  const pdfDocuments = [
    {
      title: "Документ 1",
      src: "/docs/Legislation_1.pdf",
      pages: "4 сторінки",
    },
    {
      title: "Документ 2",
      src: "/docs/Legislation_2.pdf",
      pages: "4 сторінки",
    },
    {
      title: "Документ 3",
      src: "/docs/Legislation_3.pdf",
      pages: "4 сторінки",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <FileText className="h-8 w-8" />
            Законодавство
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Нормативно-правові акти та документи, що регулюють діяльність ВСГО
            «Конфедерація ГОІУ».
          </p>
        </CardContent>
      </Card>

      {pdfDocuments.map((doc, index) => (
        <Card
          key={index}
          className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)]"
        >
          <CardContent className="p-0">
            <div className="bg-gray-100 dark:bg-gray-900 flex justify-center items-center min-h-[800px] p-8">
              <div className="bg-white dark:bg-gray-100 shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl">
                <iframe
                  src={doc.src}
                  title={doc.title}
                  className="w-full h-[80vh]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
