import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates",
  alternates: { canonical: "/news" },
  openGraph: { url: "/news", title: "News | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Combined Information Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--brand-primary)] flex items-center gap-3">
            <FileText className="h-8 w-8" />
            Новини
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Title */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-3 text-center">
              СОЦІАЛЬНІ ПОСЛУГИ БЕЗ ЧЕРГ ТА ЗАЙВИХ ВИТРАТ
            </h2>
            <h3 className="text-xl font-bold text-[var(--brand-primary)] mb-4 text-center">
              Електронний кабінет особи з інвалідністю
            </h3>
          </div>

          {/* Introduction */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Інформація розміщена на офіційній сторінці Фонду{" "}
              <a
                href="https://www.ispf.gov.ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-primary)] underline hover:opacity-80"
              >
                https://www.ispf.gov.ua/
              </a>{" "}
              в рубриці «Електронний кабінет особи з інвалідністю» та на
              офіційному веб-сайті Міністерства соціальної політики України{" "}
              <a
                href="https://ek-cbi.msp.gov.ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-primary)] underline hover:opacity-80"
              >
                https://ek-cbi.msp.gov.ua/
              </a>
            </p>
          </div>

          {/* Development Information */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Електронний кабінет особи з інвалідністю розроблено на виконання
              постанови Кабінету Міністрів України від 5 квітня 2012 р. № 321
              «Про затвердження Порядку забезпечення технічними та іншими
              засобами реабілітації осіб з інвалідністю, дітей з інвалідністю та
              інших окремих категорій населення і виплати грошової компенсації
              вартості за самостійно придбані технічні та інші засоби
              реабілітації, переліків таких засобів» (в редакції постанови
              Кабінету Міністрів України від 14 квітня 2021 р. № 362) та
              постанови Кабінету Міністрів України від 16 лютого 2011 р. № 121
              «Про затвердження Положення про централізований банк даних з
              проблем інвалідності» (зі змінами).
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Електронний кабінет особи з інвалідністю забезпечує зручний
              оперативний спосіб подачі пакету документів для забезпечення
              технічними та іншими засобами реабілітації (далі - ТЗР) онлайн.
            </p>
          </div>

          {/* Features List */}
          <div className="pt-4 border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]">
            <h3 className="text-xl text-[var(--brand-primary)] mb-4 font-semibold">
              Електронний кабінет особи з інвалідністю забезпечує:
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  доступ громадянам до електронного кабінету за кваліфікованим
                  електронним підписом (далі- КЕП);
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  особам, зареєстрованим в ЦБІ, можливість подачі заяв про
                  потребу в забезпеченні ТЗР та пакету документів шляхом
                  заповнення стандартизованих форм, прикріпленні сканованих копій
                  документів та підписання КЕП;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  особам, які відсутні в ЦБІ, можливість подачі заяви на
                  первинну реєстрацію в ЦБІ із заповненням стандартної форми
                  реєстрації, прикріпленням сканованих копій необхідних
                  документів та підписом документів КЕП;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  можливість надсилання особам з інвалідністю в електронний
                  кабінет повідомлень про результат розгляду заяви про
                  забезпечення ТЗР та пакету документів;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  доступ до інтерактивного каталогу ТЗР з розширеними фільтрами,
                  виробників ТЗР, надавачів соціальних послуг;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  можливість надсилання інформаційних повідомлень з ЦБІ на
                  електронну скриньку при виникненні подій, про які необхідно
                  повідомити особу з інвалідністю;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">•</span>
                <span>
                  проведення опитування осіб з інвалідністю щодо стану
                  забезпечення технічними та іншими засобами реабілітації та
                  оцінки якості наданих послуг;
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
