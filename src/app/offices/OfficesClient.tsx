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
import {
  PageShell,
  PageHeading,
  PageBadge,
} from "@/components/home/PageChrome";
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
      <div className="flex flex-col items-center justify-center gap-3 border-t border-border bg-gray-50 px-4 py-8 text-center dark:bg-gray-900/50 lg:min-h-[400px] lg:border-l lg:border-t-0 lg:py-12">
        <MapPin className="h-10 w-10 text-gray-300 dark:text-gray-600" />
        <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg">
          Оберіть область або місто на карті
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-col border-t border-border bg-white dark:bg-gray-900 lg:min-h-[400px] lg:border-l lg:border-t-0">
      <div
        className="flex items-center gap-2 px-3 py-2.5"
        style={{ background: "var(--nav-active)" }}
      >
        <MapPin className="h-4 w-4 shrink-0 text-[var(--nav-active-text)]" />
        <span className="min-w-0 text-sm font-bold uppercase tracking-wide text-[var(--nav-active-text)] sm:text-base">
          Обрана область / місто
        </span>
        <button
          onClick={onClear}
          className="ml-auto shrink-0 text-base text-[var(--nav-active-text)]/60 hover:text-[var(--nav-active-text)]"
          aria-label="Clear selection"
        >
          ✕
        </button>
      </div>

      <div className="border-b border-border px-3 pb-2 pt-3">
        <p className="text-xl font-black uppercase text-[var(--brand-heading)] sm:text-2xl">
          {office?.region ?? selectedRegion}
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-base text-gray-500 dark:text-gray-400">
          <Users className="h-4 w-4 shrink-0" />
          Організацій у регіоні: {office ? 1 : 0}
        </p>
      </div>

      {office ? (
        <div className="mx-3 my-3 space-y-2 rounded-lg border border-[var(--brand-sky)]/30 bg-[var(--brand-sky)]/10 px-3 py-3">
          <div className="flex items-start gap-2">
            <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
            <p className="text-base font-semibold leading-snug text-[var(--brand-primary)] dark:text-sky-200 md:text-lg">
              {office.contact}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-sky)]" />
            <span className="text-base leading-snug text-gray-600 dark:text-gray-400 md:text-lg break-words">
              {office.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-[var(--brand-sky)]" />
            <span className="text-base text-gray-600 dark:text-gray-400 md:text-lg break-all">
              {office.phone}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center p-4">
          <p className="text-center text-base text-gray-400">
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
    <PageShell>
      <PageHeading title="Відокремлені підрозділи" icon={Building2}>
        <PageBadge>
          <Users className="h-3 w-3" />
          {regionalOffices.length} представництв
        </PageBadge>
        <PageBadge variant="outline">
          <MapPin className="h-3 w-3" />
          24 областей України
        </PageBadge>
      </PageHeading>

      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Пошук за областю, містом або назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full pl-10 text-base md:h-12 md:text-lg"
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-11 w-full shrink-0 gap-1.5 border-gray-300 text-base dark:border-gray-600 sm:h-12 sm:w-auto md:text-lg"
        >
          <Filter className="h-4 w-4" />
          Фільтри
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm dark:bg-gray-900">
        <div className="flex flex-col gap-2 border-b border-border bg-gray-50 px-3 py-2.5 dark:bg-gray-800/50 sm:flex-row sm:items-center sm:justify-between sm:px-4">
          <h3 className="flex min-w-0 items-center gap-2 text-base font-bold uppercase tracking-wide text-[var(--brand-primary)] dark:text-gray-300 md:text-lg">
            <MapPin className="h-5 w-5 shrink-0" />
            <span className="leading-snug">Інтерактивна карта підрозділів</span>
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMap(!showMap)}
            className="h-9 w-full shrink-0 gap-1.5 text-base text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 sm:w-auto"
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]">
            <div className="min-w-0 p-2 sm:p-3">
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
            className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-900 ${
              selectedRegion &&
              (office.region.includes(selectedRegion) ||
                selectedRegion.includes(
                  office.region.replace(" область", ""),
                ))
                ? "border-[var(--nav-active)] ring-1 ring-[var(--nav-active)]/20"
                : "border-border"
            }`}
          >
            <div className="p-3 sm:p-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-surface)] text-base font-bold text-white">
                      {index + 1}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-[var(--brand-primary-10)] text-base text-[var(--brand-primary)] dark:bg-white/10 dark:text-white"
                    >
                      {office.region}
                    </Badge>
                  </div>

                  <p className="mb-3 text-base font-semibold leading-snug text-[var(--brand-primary)] dark:text-gray-200 md:text-lg">
                    {office.contact}
                  </p>

                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-sky)]" />
                      <span className="break-words text-base text-gray-600 dark:text-gray-400 md:text-lg">
                        {office.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-[var(--brand-sky)]" />
                      <span className="break-all text-base text-gray-600 dark:text-gray-400 md:text-lg">
                        {office.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2 lg:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[var(--brand-primary)]/30 text-base text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)] dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/10 lg:w-auto"
                    onClick={() => {
                      const phoneNumber = office.phone
                        .split(",")[0]
                        .replace(/[^\d+]/g, "");
                      window.open(`tel:${phoneNumber}`, "_self");
                    }}
                  >
                    <Phone className="mr-1 h-3.5 w-3.5" />
                    Подзвонити
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredOffices.length === 0 && (
          <div className="rounded-xl border border-border bg-white py-12 text-center dark:bg-gray-900">
            <Building2 className="mx-auto mb-3 h-10 w-10 text-gray-300 dark:text-gray-600" />
            <p className="mb-1 text-base text-gray-500 dark:text-gray-400">
              Представництв не знайдено
            </p>
            <p className="mb-4 text-base text-gray-400 dark:text-gray-600">
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
    </PageShell>
  );
}
