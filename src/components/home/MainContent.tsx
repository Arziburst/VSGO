import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function MainContent() {
  const partnerOrganizations = [
    {
      title: "Fund for Social Protection of Persons with Disabilities",
      image: "/partners/fund-social-protection.jpg",
      url: "https://www.ispf.gov.ua/",
    },
    {
      title: "Ministry of Social Policy of Ukraine",
      image: "/partners/MinistrySocial.jpg",
      url: "https://www.msp.gov.ua/",
    },
    {
      title: "Government Portal",
      image: "/partners/government-portal.jpg",
      url: "https://www.kmu.gov.ua/",
    },
    {
      title: "Fund for Social Protection of Persons with Disabilities",
      image: "/partners/Prez.jpg",
      url: "https://www.president.gov.ua/",
    },
    {
      title: "Fund for Social Protection of Persons with Disabilities",
      image: "/partners/Rada.jpg",
      url: "https://www.rada.gov.ua/", // TODO: don't work url
    },
    {
      title: "Fund for Social Protection of Persons with Disabilities",
      image: "/partners/Prozoro.jpg",
      url: "https://prozorro.gov.ua/uk",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] via-purple-50 to-violet-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--brand-primary)]">
            Шановні друзі!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Вітаємо Вас на сайті Всеукраїнської спілки громадських організацій
            «Конфедерація громадських організацій інвалідів України». Створення
            нашого ресурсу є необхідним та цілеспрямованим кроком для надання
            інформаційної та консультаційної допомоги людям з особливими
            потребами.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Internet є невід’ємною частиною інвалідного руху в усьому світі. Ми
            також вирішили приділити особливу увагу цьому процесу. І сьогодні
            нами зроблено ще один крок, спрямований на покращення спілкування та
            обміну інформацією між інвалідами в кожному куточку нашої країни та
            далеко за її межами. Сподіваємось, що наш ресурс стане корисним
            джерелом цікавої та актуальної інформації.
          </p>
        </CardContent>
      </Card>

      {/* Partner Organizations Grid */}
      <div>
        <h2 className="text-xl text-[var(--brand-primary)] mb-6">
          Partner organizations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerOrganizations.map((org, index) => (
            <a
              key={index}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="h-[180px] w-full">
                <Image
                  src={org.image}
                  alt={org.title}
                  width={250}
                  height={300}
                  className="object-contain w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out will-change-transform"
                  sizes="450px"
                />
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                <ExternalLink className="h-5 w-5 text-white bg-black/50 rounded-full p-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] to-purple-50 dark:from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:to-purple-900/20">
        {" "}
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] to-purple-100 dark:from-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] dark:to-purple-800/30 text-[var(--brand-primary)]"
            >
              Інформація
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Our organization works to improve the lives of people with
            disabilities in Ukraine through the development of public
            initiatives, protection of human rights and the creation of equal
            opportunities for all citizens.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
