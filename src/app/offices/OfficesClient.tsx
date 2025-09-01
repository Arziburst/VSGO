"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Search, Building2, Eye, EyeOff } from "lucide-react";
import UkraineStaticMap from "./UkraineStaticMap";
import { regionalOffices } from "@/constants";

export default function OfficesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(true);

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, " ")
      .trim();

  const q = normalize(searchQuery);
  const qDigits = searchQuery.replace(/[^\d+]/g, "");

  const filteredOffices = regionalOffices.filter((office) => {
    const region = normalize(office.region);
    const address = normalize(office.address);
    const name = normalize(office.name);
    const contact = normalize(office.contact);
    const phone = office.phone.replace(/[^\d+]/g, "");
    return (
      region.includes(q) ||
      address.includes(q) ||
      name.includes(q) ||
      contact.includes(q) ||
      (qDigits.length > 1 && phone.includes(qDigits))
    );
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <Card className="shadow-xl border-[#7a97e3]/30 bg-gradient-to-r from-[#7a97e3]/10 via-purple-50 to-violet-50 dark:from-[#7a97e3]/20 dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-3xl text-[#7a97e3] flex items-center gap-3">
            <Building2 className="h-8 w-8" />
            Відокремлені підрозділи
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[#7a97e3]/20 to-purple-100 dark:from-[#7a97e3]/30 dark:to-purple-800/30 text-[#7a97e3]"
            >
              {regionalOffices.length} представництв
            </Badge>
            <Badge
              variant="outline"
              className="border-[#7a97e3]/30 text-[#7a97e3]"
            >
              24 області України
            </Badge>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
            Мережа представництв Всеукраїнської спілки громадських організацій
            «Конфедерація громадських організацій інвалідів України» охоплює всі
            області України.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#7a97e3]" />
              <Input
                placeholder="Пошук за областю, адресою або телефоном..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-[#7a97e3]/30 focus:ring-[#7a97e3]/20 focus:border-[#7a97e3]"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setShowMap(!showMap)}
              className="border-[#7a97e3]/30 text-[#7a97e3] hover:bg-[#7a97e3]/10"
            >
              {showMap ? (
                <EyeOff className="h-4 w-4 mr-2" />
              ) : (
                <Eye className="h-4 w-4 mr-2" />
              )}
              {showMap ? "Сховати карту" : "Показати карту"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {showMap && (
        <Card className="shadow-xl border-[#7a97e3]/30">
          <CardHeader>
            <CardTitle className="text-xl text-[#7a97e3] flex items-center gap-3">
              <MapPin className="h-6 w-6" />
              Інтерактивна карта представництв
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UkraineStaticMap />
          </CardContent>
        </Card>
      )}

      <Card className="shadow-xl border-[#7a97e3]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#7a97e3] flex items-center gap-3">
            <Building2 className="h-6 w-6" />
            Список всіх представництв
            {filteredOffices.length !== regionalOffices.length && (
              <Badge variant="secondary" className="ml-2">
                {filteredOffices.length} з {regionalOffices.length}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredOffices.map((office, index) => (
              <Card
                key={office.region}
                className={`transition-all duration-300 hover:shadow-lg ${
                  selectedRegion === office.region
                    ? "border-[#7a97e3] bg-gradient-to-r from-[#7a97e3]/5 to-purple-50 dark:from-[#7a97e3]/10 dark:to-purple-900/10"
                    : "border-border hover:border-[#7a97e3]/50"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant="outline"
                          className={`$
                            {selectedRegion === office.region
                              ? "border-[#7a97e3] text-[#7a97e3] bg-[#7a97e3]/10"
                              : "border-[#7a97e3]/30 text-[#7a97e3]"}
                          `}
                        >
                          #{index + 1}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-[#7a97e3]/20 to-purple-100 dark:from-[#7a97e3]/30 dark:to-purple-800/30 text-[#7a97e3]"
                        >
                          {office.region}
                        </Badge>
                      </div>

                      <h3 className="text-lg text-[#7a97e3] mb-2 leading-tight">
                        {office.name}
                      </h3>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {office.contact}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-[#7a97e3] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {office.address}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-[#7a97e3] flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {office.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:w-auto">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#7a97e3] hover:bg-[#7a97e3]/10"
                        onClick={() => {
                          const phoneNumber = office.phone
                            .split(",")[0]
                            .replace(/[^\d+]/g, "");
                          window.open(`tel:${phoneNumber}`, "_self");
                        }}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Подзвонити
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOffices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 mb-4">
                <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Представництв не знайдено</p>
                <p className="text-sm">Спробуйте змінити пошуковий запит</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="border-[#7a97e3]/30 text-[#7a97e3] hover:bg-[#7a97e3]/10"
              >
                Очистити пошук
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
