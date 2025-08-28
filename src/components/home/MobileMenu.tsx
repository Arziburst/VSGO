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
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", href: "/", active: true },
  { icon: Info, label: "About Confederation", expandable: true },
  { icon: Users, label: "Members", href: "/members" },
  { icon: Building2, label: "Regional Offices", href: "/offices" },
  { icon: ScrollText, label: "Legislation", href: "/legislation" },
  { icon: Settings, label: "Our Activities", href: "/activities" },
  { icon: Camera, label: "Photo Gallery", href: "/gallery" },
  { icon: Newspaper, label: "News", href: "/news" },
  { icon: Phone, label: "Contacts", href: "/contacts" },
];

const aboutItems = [
  { icon: FileText, label: "Status", href: "/status" },
  { icon: Network, label: "Structure", href: "/structure" },
  { icon: UserCheck, label: "Membership conditions", href: "/membership" },
  { icon: Scale, label: "Rights and obligations", href: "/rights" },
  { icon: Target, label: "Confederation tasks", href: "/tasks" },
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
          <SheetTitle className="text-[#7a97e3]">Menu</SheetTitle>
        </SheetHeader>

        <nav className="space-y-2 mt-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            if (item.expandable) {
              return (
                <div key={index} className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto py-3 px-4 text-[#7a97e3] hover:bg-[#7a97e3]/10"
                    onClick={() => setOpenAbout((v) => !v)}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="text-left flex-1">
                      About Confederation
                    </span>
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
                            className="w-full justify-start gap-3 h-auto py-2 px-4 ml-6 text-[#7a97e3]/80 hover:bg-[#7a97e3]/5 text-sm"
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
                    ? "bg-gradient-to-r from-[#7a97e3] to-purple-600 hover:from-[#7a97e3]/90 hover:to-purple-700 text-white"
                    : "text-[#7a97e3] hover:bg-[#7a97e3]/10"
                }`}
                onClick={onClose}
              >
                <Link
                  href={item.href ?? "/"}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-left">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
