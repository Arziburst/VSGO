"use client";

import React, { useMemo } from "react";
import {
  Home,
  Info,
  Users,
  Building2,
  ScrollText,
  Settings,
  Camera,
  Newspaper,
  Phone,
  FileText,
  Network,
  UserCheck,
  Scale,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/home/NavLink";
import { useSidebarSearch } from "@/context/SidebarSearchContext";
import {
  ROUTE_MEMBERS,
  ROUTE_OFFICES,
  ROUTE_LEGISLATION,
  ROUTE_ACTIVITIES,
  ROUTE_GALLERY,
  ROUTE_NEWS,
  ROUTE_CONTACTS,
  ROUTE_STATUS,
  ROUTE_STRUCTURE,
  ROUTE_MEMBERSHIP,
  ROUTE_RIGHTS,
  ROUTE_TASKS,
} from "@/constants";

const menuItems = [
  { icon: Home, label: "Головна", active: true },
  { icon: Info, label: "Про Конфедерацію", expandable: true },
  { icon: Users, label: "Члени Конфедерації" },
  { icon: Building2, label: "Відокремлені підрозділи" },
  { icon: ScrollText, label: "Законодавство" },
  { icon: Settings, label: "Наша діяльність" },
  { icon: Camera, label: "Фотогалерея" },
  { icon: Newspaper, label: "Новини" },
  { icon: Phone, label: "Контакти" },
];

const confederationSubItems = [
  { icon: FileText, label: "Статус" },
  { icon: Network, label: "Структура" },
  { icon: UserCheck, label: "Умови вступу" },
  { icon: Scale, label: "Права та обов’язки" },
  { icon: Target, label: "Завдання Конфедерації" },
];

export function Sidebar() {
  const { query } = useSidebarSearch();
  const q = query.trim().toLowerCase();
  const routeByLabel: Record<string, string> = {
    "Члени Конфедерації": ROUTE_MEMBERS,
    "Відокремлені підрозділи": ROUTE_OFFICES,
    Законодавство: ROUTE_LEGISLATION,
    "Наша діяльність": ROUTE_ACTIVITIES,
    Фотогалерея: ROUTE_GALLERY,
    Новини: ROUTE_NEWS,
    Контакти: ROUTE_CONTACTS,
  };

  const aboutRouteByLabel: Record<string, string> = {
    Статус: ROUTE_STATUS,
    Структура: ROUTE_STRUCTURE,
    "Умови вступу": ROUTE_MEMBERSHIP,
    "Права та обов’язки": ROUTE_RIGHTS,
    "Завдання Конфедерації": ROUTE_TASKS,
  };

  const getSubIconKey = (label: string) => {
    switch (label) {
      case "Статус":
        return "fileText" as const;
      case "Структура":
        return "network" as const;
      case "Умови вступу":
        return "userCheck" as const;
      case "Права та обов’язки":
        return "scale" as const;
      default:
        return "target" as const;
    }
  };

  const getIconKey = (label: string) => {
    switch (label) {
      case "Члени Конфедерації":
        return "users" as const;
      case "Відокремлені підрозділи":
        return "building2" as const;
      case "Законодавство":
        return "scrollText" as const;
      case "Наша діяльність":
        return "settings" as const;
      case "Фотогалерея":
        return "camera" as const;
      case "Новини":
        return "newspaper" as const;
      default:
        return "phone" as const;
    }
  };

  const filteredConfederationSubItems = useMemo(() => {
    if (!q) return confederationSubItems;
    return confederationSubItems.filter((s) =>
      s.label.toLowerCase().includes(q)
    );
  }, [q]);

  const filteredMenuItems = useMemo(() => {
    if (!q) return menuItems.filter((m) => !m.expandable && !m.active);
    return menuItems
      .filter((m) => !m.expandable && !m.active)
      .filter((m) => m.label.toLowerCase().includes(q));
  }, [q]);

  return (
    <div className="pt-0 px-4 pb-4">
      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--brand-primary)_35%,transparent)]/70">
        <Card className="p-4 shadow-lg border-0 rounded-2xl bg-card">
          <h3 className="text-lg text-[var(--brand-primary)] mb-4 text-center">
            Меню
          </h3>

          <nav className="space-y-2">
            {/* Home */}
            <NavLink href="/" label="Головна" iconKey="home" />

            {/* About Confederation always expanded */}
            <div>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start gap-3 h-auto py-3 px-4 text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)]"
              >
                <div className="flex items-center w-full">
                  <Info className="h-5 w-5 flex-shrink-0" />
                  <span className="text-left flex-1">Про Конфедерацію</span>
                </div>
              </Button>
              <div className="space-y-1 mt-1">
                {filteredConfederationSubItems.map((subItem, subIndex) => (
                  <NavLink
                    key={subIndex}
                    href={aboutRouteByLabel[subItem.label] ?? "/"}
                    label={subItem.label}
                    iconKey={getSubIconKey(subItem.label)}
                    sub
                  />
                ))}
              </div>
            </div>

            {/* Other menu items */}
            {filteredMenuItems.map((item, index) => (
              <NavLink
                key={index}
                href={routeByLabel[item.label] ?? "/"}
                label={item.label}
                iconKey={getIconKey(item.label)}
              />
            ))}
          </nav>
        </Card>
      </div>
    </div>
  );
}
