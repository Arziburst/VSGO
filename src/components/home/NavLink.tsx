"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType, SVGProps } from "react";
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

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type IconKey =
  | "home"
  | "info"
  | "users"
  | "building2"
  | "scrollText"
  | "settings"
  | "camera"
  | "newspaper"
  | "phone"
  | "fileText"
  | "network"
  | "userCheck"
  | "scale"
  | "target";

const ICONS: Record<IconKey, IconType> = {
  home: Home,
  info: Info,
  users: Users,
  building2: Building2,
  scrollText: ScrollText,
  settings: Settings,
  camera: Camera,
  newspaper: Newspaper,
  phone: Phone,
  fileText: FileText,
  network: Network,
  userCheck: UserCheck,
  scale: Scale,
  target: Target,
};

interface NavLinkProps {
  href: string;
  label: string;
  iconKey: IconKey;
  sub?: boolean;
}

export function NavLink({ href, label, iconKey, sub }: NavLinkProps) {
  const Icon = ICONS[iconKey] as ComponentType<{ className?: string }>;
  const pathname = usePathname();
  const isActive = pathname === href;

  if (sub) {
    return (
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`flex items-center gap-2 pl-11 pr-4 py-2.5 text-xs transition-colors ${
          isActive
            ? "text-[var(--nav-submenu-text)] font-semibold"
            : "text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-[var(--nav-hover)]"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-sky)] flex-shrink-0" />
        <span className="leading-tight whitespace-normal break-words">{label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-3 px-4 py-3 uppercase transition-colors ${
        isActive
          ? "bg-[var(--nav-active)] text-[var(--nav-active-text)] font-bold"
          : "text-[var(--nav-text)] hover:bg-[var(--nav-hover)]"
      }`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="text-sm leading-snug whitespace-normal break-words">{label}</span>
    </Link>
  );
}
