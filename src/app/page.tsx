import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";
import { Building2, Landmark, Scale, ScrollText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-0px)] bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3">
            <Card className="sticky top-6 p-0 overflow-hidden">
              <div className="bg-primary/10 px-6 py-4">
                <div className="text-sm font-semibold">Головна</div>
              </div>
              <CardContent className="p-0">
                <nav className="flex flex-col gap-0.5 p-3">
                  {[
                    "Головна",
                    "Меню",
                    "Про Конфедерацію",
                    "Статут Конфедерації",
                    "Керівні органи",
                    "Громадські організації",
                    "Законодавство",
                    "Контакти",
                    "Пошук",
                  ].map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className="justify-start px-3 h-9"
                    >
                      {item}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main content */}
          <section className="col-span-12 md:col-span-9">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="size-12 rounded-full bg-primary text-primary-foreground grid place-items-center text-xl font-semibold">
                  ★
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">
                  Всеукраїнська спілка громадських організацій
                </div>
                <h1 className="text-xl font-semibold leading-snug">
                  «Конфедерація громадських організацій інвалідів України»
                </h1>
              </div>
            </div>

            {/* Welcome card */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="text-lg font-semibold">Шановні друзі!</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Вітаємо Вас на сайті Всеукраїнської спілки громадських
                    організацій «Конфедерація громадських організацій інвалідів
                    України». Сьогодні наша веб-ресурс є авторизованим джерелом
                    та ексклюзивною інтерактивною службою для надання інформації
                    та обслуговування громад України.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Головні і найбільш статутних повноважних осіб по складу
                    загал. Ми також здійснюємо організацію технічної безпеки з
                    основу інтернет системам. Зацікавлені ми співпрацюємо із
                    членством до складу інформаційні по виконаням наступником
                    правової краї настанними службами, що будуть створювати
                    умови для якісного надання послуг громади. Ми також
                    підтримуємо державною політики наступника програми ресурсів
                    права від різними державах віками та загальнодержавною
                    інформацією.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Links tiles */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Ministry */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="grid place-items-center">
                      <div className="size-12 grid place-items-center rounded-full bg-white/20">
                        <Building2 className="size-6" />
                      </div>
                    </div>
                    <div className="text-center space-y-1">
                      <div className="text-sm tracking-wide">МІНІСТЕРСТВО</div>
                      <div className="text-xs opacity-90">
                        СОЦІАЛЬНОЇ ПОЛІТИКИ УКРАЇНИ
                      </div>
                    </div>
                    <div className="grid place-items-center">
                      <Button
                        variant="outline"
                        className="bg-white text-blue-700 hover:bg-white/90"
                      >
                        Organization Logo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Government portal */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="grid place-items-center">
                      <div className="size-12 grid place-items-center rounded-full bg-white/20">
                        <Landmark className="size-6" />
                      </div>
                    </div>
                    <div className="text-center space-y-1">
                      <div className="text-sm tracking-wide">
                        Урядовий портал
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-2">
                      <Button variant="secondary" className="justify-center">
                        Верховна Рада України
                      </Button>
                      <div className="self-center size-2 rounded-full bg-yellow-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prozorro */}
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-2 place-items-center">
                    <div className="text-2xl font-semibold">proz</div>
                    <div className="text-destructive">erro</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Footer bar */}
            <div className="mt-10 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                <div className="col-span-2">
                  <div className="text-sm opacity-90">
                    Нормативно-правова спілька коментарі та організація
                  </div>
                  <div className="text-sm font-medium">
                    «Конфедерація громадських організацій інвалідів України»
                  </div>
                </div>
                <div className="justify-self-end text-right text-sm opacity-90">
                  <div>Наша адреса:</div>
                  <div>«Дорогиничне дня»</div>
                  <div>E-mail: vgpri@ukr.net</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
