"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Users,
  Building2,
  ScrollText,
  Activity,
  Camera,
  Newspaper,
  Phone,
  FileText,
  Network,
  UserCheck,
  Scale,
  Target,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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

const ABOUT_ITEMS = [
  { label: "Статус", href: ROUTE_STATUS, icon: FileText },
  { label: "Структура", href: ROUTE_STRUCTURE, icon: Network },
  { label: "Умови вступу", href: ROUTE_MEMBERSHIP, icon: UserCheck },
  { label: "Права та обов'язки", href: ROUTE_RIGHTS, icon: Scale },
  { label: "Завдання Конфедерації", href: ROUTE_TASKS, icon: Target },
];

const OFFICES_ITEMS = [{ label: "Обласні організації", href: ROUTE_OFFICES }];

const ABOUT_ROUTES = new Set<string>([
  ROUTE_STATUS,
  ROUTE_STRUCTURE,
  ROUTE_MEMBERSHIP,
  ROUTE_RIGHTS,
  ROUTE_TASKS,
]);

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  onSelect: () => void;
}

function NavItem({
  href,
  label,
  icon: Icon,
  isActive,
  onSelect,
}: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onSelect}
      className={`flex items-center gap-3 px-4 py-3 transition-colors uppercase ${
        isActive
          ? "bg-[var(--nav-active)] text-[var(--nav-active-text)] font-bold"
          : "text-[var(--nav-text)] hover:bg-[var(--nav-hover)]"
      }`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="text-sm leading-snug whitespace-normal break-words">
        {label}
      </span>
    </Link>
  );
}

interface ExpandableItemProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isHighlighted: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

function ExpandableItem({
  label,
  icon: Icon,
  isHighlighted,
  isExpanded,
  onToggle,
  children,
}: ExpandableItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center gap-3 px-4 py-3 transition-colors uppercase ${
          isHighlighted
            ? "bg-[var(--nav-active)] text-[var(--nav-active-text)] font-bold"
            : "text-[var(--nav-text)] hover:bg-[var(--nav-hover)]"
        }`}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        <span className="flex-1 text-left text-sm leading-snug">{label}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 flex-shrink-0 opacity-70" />
        ) : (
          <ChevronRight className="h-4 w-4 flex-shrink-0 opacity-70" />
        )}
      </button>
      {isExpanded && children && (
        <div className="bg-[var(--nav-submenu)]">{children}</div>
      )}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const isOnAbout = ABOUT_ROUTES.has(pathname);
  const isOnOffices = pathname === ROUTE_OFFICES;

  const [aboutOpen, setAboutOpen] = useState(isOnAbout);
  const [officesOpen, setOfficesOpen] = useState(isOnOffices);
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const currentPath = pendingPath ?? pathname;
  const accordionOpen = aboutOpen || officesOpen;

  useEffect(() => {
    setPendingPath(null);
    setAboutOpen(ABOUT_ROUTES.has(pathname));
    setOfficesOpen(pathname === ROUTE_OFFICES);
  }, [pathname]);

  const selectLeaf = (href: string) => {
    setAboutOpen(false);
    setOfficesOpen(false);
    setPendingPath(href);
  };

  const isLeafActive = (href: string) => currentPath === href && !accordionOpen;

  return (
    <div
      className="rounded-xl overflow-hidden shadow-md"
      style={{ background: "var(--nav-bg)" }}
    >
      <nav>
        <NavItem
          href={ROUTE_ROOT}
          label="Головна"
          icon={Home}
          isActive={isLeafActive(ROUTE_ROOT)}
          onSelect={() => selectLeaf(ROUTE_ROOT)}
        />

        <ExpandableItem
          label="Про Конфедерацію"
          icon={Info}
          isHighlighted={aboutOpen}
          isExpanded={aboutOpen}
          onToggle={() => {
            setPendingPath(null);
            setOfficesOpen(false);
            setAboutOpen((v) => !v);
          }}
        >
          {ABOUT_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setPendingPath(item.href)}
              className={`flex items-center gap-2 pl-11 pr-4 py-2.5 text-xs transition-colors ${
                currentPath === item.href
                  ? "text-[var(--nav-submenu-text)] font-semibold"
                  : "text-[var(--nav-submenu-text)]/80 hover:bg-black/5"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-sky)] flex-shrink-0" />
              {item.label}
            </Link>
          ))}
        </ExpandableItem>

        <NavItem
          href={ROUTE_MEMBERS}
          label="Члени Конфедерації"
          icon={Users}
          isActive={isLeafActive(ROUTE_MEMBERS)}
          onSelect={() => selectLeaf(ROUTE_MEMBERS)}
        />

        <ExpandableItem
          label="Відокремлені підрозділи"
          icon={Building2}
          isHighlighted={officesOpen}
          isExpanded={officesOpen}
          onToggle={() => {
            setPendingPath(null);
            setAboutOpen(false);
            setOfficesOpen((v) => !v);
          }}
        >
          {OFFICES_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setPendingPath(item.href)}
              className={`flex items-center gap-2 pl-11 pr-4 py-2.5 text-xs transition-colors ${
                currentPath === item.href
                  ? "text-[var(--nav-submenu-text)] font-semibold"
                  : "text-[var(--nav-submenu-text)]/85 hover:bg-black/5"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-sky)] flex-shrink-0" />
              {item.label}
            </Link>
          ))}
        </ExpandableItem>

        <NavItem
          href={ROUTE_LEGISLATION}
          label="Законодавство"
          icon={ScrollText}
          isActive={isLeafActive(ROUTE_LEGISLATION)}
          onSelect={() => selectLeaf(ROUTE_LEGISLATION)}
        />

        <NavItem
          href={ROUTE_ACTIVITIES}
          label="Наша діяльність"
          icon={Activity}
          isActive={isLeafActive(ROUTE_ACTIVITIES)}
          onSelect={() => selectLeaf(ROUTE_ACTIVITIES)}
        />

        <NavItem
          href={ROUTE_GALLERY}
          label="Фотогалерея"
          icon={Camera}
          isActive={isLeafActive(ROUTE_GALLERY)}
          onSelect={() => selectLeaf(ROUTE_GALLERY)}
        />

        <NavItem
          href={ROUTE_NEWS}
          label="Новини"
          icon={Newspaper}
          isActive={isLeafActive(ROUTE_NEWS)}
          onSelect={() => selectLeaf(ROUTE_NEWS)}
        />

        <NavItem
          href={ROUTE_CONTACTS}
          label="Контакти"
          icon={Phone}
          isActive={isLeafActive(ROUTE_CONTACTS)}
          onSelect={() => selectLeaf(ROUTE_CONTACTS)}
        />
      </nav>
    </div>
  );
}
