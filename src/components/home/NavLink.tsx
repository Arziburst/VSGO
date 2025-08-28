"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  const Icon = ICONS[iconKey];
  const pathname = usePathname();
  const isActive = pathname === href;

  if (sub) {
    return (
      <Button
        asChild
        variant={isActive ? "default" : "ghost"}
        className={`w-full justify-start gap-3 h-auto py-2 px-4 ml-6 text-sm ${
          isActive
            ? "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[color-mix(in_oklab,var(--brand-primary)_90%,transparent)] hover:to-[color-mix(in_oklab,var(--brand-secondary)_90%,transparent)] text-white"
            : "text-[var(--brand-primary)]/80 hover:bg-[var(--brand-primary-10)]"
        }`}
        data-active={isActive || undefined}
      >
        <Link href={href} aria-current={isActive ? "page" : undefined}>
          <Icon className="h-4 w-4 flex-shrink-0" />
          <span className="text-left leading-tight">{label}</span>
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant={isActive ? "default" : "ghost"}
      className={`w-full justify-start gap-3 h-auto py-3 px-4 ${
        isActive
          ? "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[color-mix(in_oklab,var(--brand-primary)_90%,transparent)] hover:to-[color-mix(in_oklab,var(--brand-secondary)_90%,transparent)] text-white"
          : "text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)]"
      }`}
      data-active={isActive || undefined}
    >
      <Link href={href} aria-current={isActive ? "page" : undefined}>
        <Icon className="h-5 w-5 flex-shrink-0" />
        <span className="text-left">{label}</span>
      </Link>
    </Button>
  );
}
