"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Search,
  Building2,
  Eye,
  EyeOff,
  Filter,
  Users,
} from "lucide-react";
import UkraineStaticMap from "./UkraineStaticMap";
import { regionalOffices } from "@/constants";

function findOffice(selectedRegion: string | null) {
  if (!selectedRegion) return null;
  const q = selectedRegion.toLowerCase();
  return (
    regionalOffices.find((o) => {
      const r = o.region.toLowerCase().replace(" область", "");
      return r === q || o.region.toLowerCase().includes(q) || q.includes(r);
    }) ?? null
  );
}

interface RightPanelProps {
  selectedRegion: string | null;
  onClear: () => void;
}

function RightPanel({ selectedRegion, onClear }: RightPanelProps) {
  const office = findOffice(selectedRegion);

  if (!selectedRegion) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-12 px-4 text-center bg-gray-50 dark:bg-gray-900/50 border-l border-border">
        <MapPin className="h-10 w-10 text-gray-300 dark:text-gray-600" />
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Оберіть область або місто на карті
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-l border-border bg-white dark:bg-gray-900 min-h-[400px]">
      <div
        className="px-3 py-2.5 flex items-center gap-2"
        style={{ background: "var(--nav-active)" }}
      >
        <MapPin className="h-4 w-4 text-[var(--nav-active-text)] flex-shrink-0" />
        <span className="text-[var(--nav-active-text)] text-base font-bold uppercase tracking-wide">
          Обрана область / місто
        </span>
        <button
          onClick={onClear}
          className="ml-auto text-[var(--nav-active-text)]/60 hover:text-[var(--nav-active-text)] text-base"
          aria-label="Clear selection"
        >
          ✕
        </button>
      </div>

      <div className="px-3 pt-3 pb-2 border-b border-border">
        <p className="text-2xl font-black text-[var(--brand-primary)] dark:text-white uppercase">
          {office?.region ?? selectedRegion}
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-base text-gray-500 dark:text-gray-400">
          <Users className="h-4 w-4" />
          Організацій у регіоні: {office ? 1 : 0}
        </p>
      </div>

      {office ? (
        <div className="mx-3 my-3 rounded-lg border border-[var(--brand-sky)]/30 bg-[var(--brand-sky)]/10 px-3 py-3 space-y-2">
          <div className="flex items-start gap-2">
            <Building2 className="h-4 w-4 text-[var(--brand-primary)] mt-0.5 flex-shrink-0" />
            <p className="text-lg font-semibold leading-snug text-[var(--brand-primary)] dark:text-sky-200">
              {office.contact}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-[var(--brand-sky)] mt-0.5 flex-shrink-0" />
            <span className="text-lg text-gray-600 dark:text-gray-400 leading-snug">
              {office.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[var(--brand-sky)] flex-shrink-0" />
            <span className="text-lg text-gray-600 dark:text-gray-400">
              {office.phone}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="text-base text-gray-400 text-center">
            Представництво не знайдено
          </p>
        </div>
      )}
    </div>
  );
}

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
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl font-black text-[var(--brand-primary)] dark:text-white uppercase tracking-wide">
            Відокремлені підрозділи
          </h2>
          <Badge className="bg-[var(--brand-surface)] text-white border-0 text-base">
            <Users className="h-3 w-3 mr-1" />
            {regionalOffices.length} представництв
          </Badge>
          <Badge
            variant="outline"
            className="border-[var(--brand-primary)] text-[var(--brand-primary)] dark:border-gray-500 dark:text-gray-300 text-base"
          >
            <MapPin className="h-3 w-3 mr-1" />
            24 областей України
          </Badge>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Пошук за областю, містом або назвою організації..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg w-64 lg:w-80"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-12 gap-1.5 text-lg border-gray-300 dark:border-gray-600"
          >
            <Filter className="h-4 w-4" />
            Фільтри
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-gray-50 dark:bg-gray-800/50">
          <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-[var(--brand-primary)] dark:text-gray-300">
            <MapPin className="h-5 w-5" />
            Інтерактивна карта підрозділів
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMap(!showMap)}
            className="h-9 text-base gap-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {showMap ? (
              <EyeOff className="h-3.5 w-3.5" />
            ) : (
              <Eye className="h-3.5 w-3.5" />
            )}
            {showMap ? "Сховати карту" : "Показати карту"}
          </Button>
        </div>

        {showMap && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
            <div className="p-3">
              <UkraineStaticMap
                selectedRegion={selectedRegion ?? undefined}
                onRegionSelect={(r) => setSelectedRegion(r || null)}
              />
            </div>
            <RightPanel
              selectedRegion={selectedRegion}
              onClear={() => setSelectedRegion(null)}
            />
          </div>
        )}
      </div>

      <div className="space-y-3">
        {searchQuery && (
          <p className="text-base text-gray-500 dark:text-gray-400">
            Знайдено: {filteredOffices.length} з {regionalOffices.length}
          </p>
        )}

        {filteredOffices.map((office, index) => (
          <div
            key={office.region}
            className={`rounded-xl border bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all hover:shadow-md ${
              selectedRegion &&
              (office.region.includes(selectedRegion) ||
                selectedRegion.includes(
                  office.region.replace(" область", "")
                ))
                ? "border-[var(--nav-active)] ring-1 ring-[var(--nav-active)]/20"
                : "border-border"
            }`}
          >
            <div className="p-4">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brand-surface)] text-white text-base font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <Badge
                      variant="secondary"
                      className="text-base bg-[var(--brand-primary-10)] text-[var(--brand-primary)] dark:bg-white/10 dark:text-white"
                    >
                      {office.region}
                    </Badge>
                  </div>

                  <p className="text-lg font-semibold text-[var(--brand-primary)] dark:text-gray-200 mb-3 leading-snug">
                    {office.contact}
                  </p>

                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-[var(--brand-sky)] mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        {office.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[var(--brand-sky)] flex-shrink-0" />
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        {office.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-base border-[var(--brand-primary)]/30 text-[var(--brand-primary)] dark:border-gray-600 dark:text-gray-300 hover:bg-[var(--brand-primary-10)] dark:hover:bg-white/10"
                    onClick={() => {
                      const phoneNumber = office.phone
                        .split(",")[0]
                        .replace(/[^\d+]/g, "");
                      window.open(`tel:${phoneNumber}`, "_self");
                    }}
                  >
                    <Phone className="h-3.5 w-3.5 mr-1" />
                    Подзвонити
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredOffices.length === 0 && (
          <div className="text-center py-12 rounded-xl border border-border bg-white dark:bg-gray-900">
            <Building2 className="h-10 w-10 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
            <p className="text-gray-500 dark:text-gray-400 text-base mb-1">
              Представництв не знайдено
            </p>
            <p className="text-gray-400 dark:text-gray-600 text-base mb-4">
              Спробуйте змінити пошуковий запит
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="text-base"
            >
              Очистити пошук
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
