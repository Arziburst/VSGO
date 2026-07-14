import type { Metadata } from "next";
import { FileText } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
  ContentTitle,
  ContentSubtitle,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates",
  alternates: { canonical: "/news" },
  openGraph: { url: "/news", title: "News | VSGO" },
};

export default function Page() {
  return (
    <PageShell>
      <PageHeading title="Новини" icon={FileText} />

      <PageCard className="p-5 md:p-6 space-y-5">
        <div className="space-y-2 text-center">
          <ContentTitle>
            Соціальні послуги без черг та зайвих витрат
          </ContentTitle>
          <ContentSubtitle>
            Електронний кабінет особи з інвалідністю
          </ContentSubtitle>
        </div>

        <div className="space-y-4 border-t border-border pt-4 text-base leading-relaxed text-gray-700 md:text-lg dark:text-white">
          <p>
            Інформація розміщена на офіційній сторінці Фонду{" "}
            <a
              href="https://www.ispf.gov.ua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-link)] underline hover:opacity-80"
            >
              https://www.ispf.gov.ua/
            </a>{" "}
            в рубриці «Електронний кабінет особи з інвалідністю» та на
            офіційному веб-сайті Міністерства соціальної політики України{" "}
            <a
              href="https://ek-cbi.msp.gov.ua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-link)] underline hover:opacity-80"
            >
              https://ek-cbi.msp.gov.ua/
            </a>
          </p>

          <p>
            Електронний кабінет особи з інвалідністю розроблено на виконання
            постанови Кабінету Міністрів України від 5 квітня 2012 р. № 321 «Про
            затвердження Порядку забезпечення технічними та іншими засобами
            реабілітації осіб з інвалідністю, дітей з інвалідністю та інших
            окремих категорій населення і виплати грошової компенсації вартості
            за самостійно придбані технічні та інші засоби реабілітації,
            переліків таких засобів» (в редакції постанови Кабінету Міністрів
            України від 14 квітня 2021 р. № 362) та постанови Кабінету Міністрів
            України від 16 лютого 2011 р. № 121 «Про затвердження Положення про
            централізований банк даних з проблем інвалідності» (зі змінами).
          </p>

          <p>
            Електронний кабінет особи з інвалідністю забезпечує зручний
            оперативний спосіб подачі пакету документів для забезпечення
            технічними та іншими засобами реабілітації (далі - ТЗР) онлайн.
          </p>
        </div>

        <div className="pt-4 border-t border-border">
          <ContentSubtitle className="mb-3 text-left">
            Електронний кабінет особи з інвалідністю забезпечує:
          </ContentSubtitle>
          <ul className="space-y-2 text-base md:text-lg text-gray-700 dark:text-gray-300">
            {[
              "доступ громадянам до електронного кабінету за кваліфікованим електронним підписом (КЕП);",
              "особам, зареєстрованим в ЦБІ, можливість подачі заяв про потребу в забезпеченні ТЗР та пакету документів шляхом заповнення стандартизованих форм, прикріпленні сканованих копій документів та підписання КЕП;",
              "особам, які відсутні в ЦБІ, можливість подачі заяви на первинну реєстрацію в ЦБІ із заповненням стандартної форми реєстрації, прикріпленням сканованих копій необхідних документів та підписом документів КЕП;",
              "можливість надсилання особам з інвалідністю в електронний кабінет повідомлень про результат розгляду заяви про забезпечення ТЗР та пакету документів;",
              "доступ до інтерактивного каталогу ТЗР з розширеними фільтрами, виробників ТЗР, надавачів соціальних послуг;",
              "можливість надсилання інформаційних повідомлень з ЦБІ на електронну скриньку при виникненні подій, про які необхідно повідомити особу з інвалідністю;",
              "проведення опитування осіб з інвалідністю щодо стану забезпечення технічними та іншими засобами реабілітації та оцінки якості наданих послуг;",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--nav-active)] mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-sky)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageCard>
    </PageShell>
  );
}
