"use client";

import { useState } from "react";
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
  ChevronDown,
  ChevronRight,
  FileText,
  Network,
  UserCheck,
  Scale,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
  ROUTE_ROOT,
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
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Головна", href: ROUTE_ROOT, active: true },
  { icon: Info, label: "Про Конфедерацію", expandable: true },
  { icon: Users, label: "Члени Конфедерації", href: ROUTE_MEMBERS },
  { icon: Building2, label: "Відокремлені підрозділи", href: ROUTE_OFFICES },
  { icon: ScrollText, label: "Законодавство", href: ROUTE_LEGISLATION },
  { icon: Settings, label: "Наша діяльність", href: ROUTE_ACTIVITIES },
  { icon: Camera, label: "Фотогалерея", href: ROUTE_GALLERY },
  { icon: Newspaper, label: "Новини", href: ROUTE_NEWS },
  { icon: Phone, label: "Контакти", href: ROUTE_CONTACTS },
];

const aboutItems = [
  { icon: FileText, label: "Статус", href: ROUTE_STATUS },
  { icon: Network, label: "Структура", href: ROUTE_STRUCTURE },
  { icon: UserCheck, label: "Умови вступу", href: ROUTE_MEMBERSHIP },
  { icon: Scale, label: "Права та обов’язки", href: ROUTE_RIGHTS },
  { icon: Target, label: "Завдання Конфедерації", href: ROUTE_TASKS },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openAbout, setOpenAbout] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 bg-white dark:bg-background">
        <SheetHeader>
          <SheetTitle className="text-[var(--brand-primary)]">Меню</SheetTitle>
        </SheetHeader>

        <nav className="space-y-2 mt-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            if (item.expandable) {
              return (
                <div key={index} className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto py-3 px-4 text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)]"
                    onClick={() => setOpenAbout((v) => !v)}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="text-left flex-1">Про Конфедерацію</span>
                    {openAbout ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {openAbout && (
                    <div className="space-y-1">
                      {aboutItems.map((sub, i) => {
                        const SubIcon = sub.icon;
                        return (
                          <Button
                            asChild
                            key={i}
                            variant="ghost"
                            className="w-full justify-start gap-3 h-auto py-2 px-4 ml-6 text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)] text-sm"
                            onClick={onClose}
                          >
                            <Link href={sub.href}>
                              <SubIcon className="h-4 w-4 flex-shrink-0" />
                              <span className="text-left leading-tight">
                                {sub.label}
                              </span>
                            </Link>
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            const isActive = (item.href ?? "/") === pathname;
            return (
              <Button
                asChild
                key={index}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-auto py-3 px-4 ${
                  isActive
                    ? "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[color-mix(in_oklab,var(--brand-primary)_90%,transparent)] hover:to-[color-mix(in_oklab,var(--brand-secondary)_90%,transparent)] text-white"
                    : "text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)]"
                }`}
                onClick={onClose}
              >
                <Link
                  href={item.href ?? "/"}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-start gap-3 w-full"
                >
                  <Icon className="h-5 w-5 flex-shrink-0 mt-[2px]" />
                  <span className="text-left whitespace-normal break-words flex-1">
                    {item.label}
                  </span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
