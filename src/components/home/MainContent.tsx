import { ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  PageShell,
  PageHeading,
  PageCard,
  PageBadge,
} from "@/components/home/PageChrome";

export function MainContent() {
  const partnerOrganizations = [
    {
      title: "Фонд соціального захисту осіб з інвалідністю",
      image: "/partners/fund-social-protection.jpg",
      url: "https://www.ispf.gov.ua/",
    },
    {
      title: "Міністерство соціальної політики України",
      image: "/partners/MinistrySocial.jpg",
      url: "https://www.msp.gov.ua/",
    },
    {
      title: "Урядовий портал",
      image: "/partners/government-portal.jpg",
      url: "https://www.kmu.gov.ua/",
    },
    {
      title: "Президент України",
      image: "/partners/Prez.jpg",
      url: "https://www.president.gov.ua/",
    },
    {
      title: "Верховна Рада України",
      image: "/partners/Rada.jpg",
      url: "https://www.rada.gov.ua/",
    },
    {
      title: "Prozorro",
      image: "/partners/Prozoro.jpg",
      url: "https://prozorro.gov.ua/uk",
    },
  ];

  return (
    <PageShell>
      <PageHeading title="Головна" />

      <PageCard tone="soft" className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-[var(--brand-primary)] mb-3">
          Шановні друзі!
        </h3>
        <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Вітаємо Вас на сайті Всеукраїнської спілки громадських організацій
            «Конфедерація громадських організацій інвалідів України». Створення
            нашого ресурсу є необхідним та цілеспрямованим кроком для надання
            інформаційної та консультаційної допомоги людям з особливими
            потребами.
          </p>
          <p>
            Internet є невід&apos;ємною частиною інвалідного руху в усьому світі.
            Ми також вирішили приділити особливу увагу цьому процесу. І сьогодні
            нами зроблено ще один крок, спрямований на покращення спілкування та
            обміну інформацією між інвалідами в кожному куточку нашої країни та
            далеко за її межами. Сподіваємось, що наш ресурс стане корисним
            джерелом цікавої та актуальної інформації.
          </p>
        </div>
      </PageCard>

      <div>
        <h3 className="text-lg md:text-xl font-extrabold text-[var(--brand-primary)] uppercase tracking-wide mb-4">
          Партнерські організації
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partnerOrganizations.map((org, index) => (
            <a
              key={index}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl border border-border bg-white dark:bg-gray-900 shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="h-[140px] w-full">
                <Image
                  src={org.image}
                  alt={org.title}
                  width={250}
                  height={300}
                  className="object-contain w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out will-change-transform"
                  sizes="450px"
                />
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <ExternalLink className="h-5 w-5 text-white bg-black/50 rounded-full p-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <PageCard className="p-5 md:p-6">
        <PageBadge className="mb-3">Інформація</PageBadge>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Наша організація працює над покращенням життя людей з інвалідністю в
          Україні через розвиток громадських ініціатив, захист прав людини та
          створення рівних можливостей для всіх громадян.
        </p>
      </PageCard>
    </PageShell>
  );
}
