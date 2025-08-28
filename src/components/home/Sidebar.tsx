import React from "react";
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
import { Card } from "@/components/ui/card";
import Link from "next/link";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Info, label: "About Confederation", expandable: true },
  { icon: Users, label: "Members" },
  { icon: Building2, label: "Regional Offices" },
  { icon: ScrollText, label: "Legislation" },
  { icon: Settings, label: "Our Activities" },
  { icon: Camera, label: "Photo Gallery" },
  { icon: Newspaper, label: "News" },
  { icon: Phone, label: "Contacts" },
];

const confederationSubItems = [
  { icon: FileText, label: "Status" },
  { icon: Network, label: "Structure" },
  { icon: UserCheck, label: "Membership conditions" },
  { icon: Scale, label: "Rights and obligations" },
  { icon: Target, label: "Confederation tasks" },
];

export function Sidebar() {
  const routeByLabel: Record<string, string> = {
    Members: "/members",
    "Regional Offices": "/offices",
    Legislation: "/legislation",
    "Our Activities": "/activities",
    "Photo Gallery": "/gallery",
    News: "/news",
    Contacts: "/contacts",
  };

  const aboutRouteByLabel: Record<string, string> = {
    Status: "/status",
    Structure: "/structure",
    "Membership conditions": "/membership",
    "Rights and obligations": "/rights",
    "Confederation tasks": "/tasks",
  };

  return (
    <div className="p-4">
      <Card className="p-4 shadow-lg border-[#7a97e3]/30 bg-white dark:bg-background">
        <h3 className="text-lg text-[#7a97e3] mb-4 text-center">Menu</h3>

        <nav className="space-y-2">
          {/* Home */}
          <Button
            asChild
            variant="default"
            className="w-full justify-start gap-3 h-auto py-3 px-4 bg-gradient-to-r from-[#7a97e3] to-purple-600 hover:from-[#7a97e3]/90 hover:to-purple-700 text-white"
          >
            <Link href="/">
              <Home className="h-5 w-5 flex-shrink-0" />
              <span className="text-left">Home</span>
            </Link>
          </Button>

          {/* About Confederation with native details/summary for SSR */}
          <details className="group">
            <summary className="list-none">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start gap-3 h-auto py-3 px-4 text-[#7a97e3] hover:bg-[#7a97e3]/10"
              >
                <div className="flex items-center w-full">
                  <Info className="h-5 w-5 flex-shrink-0" />
                  <span className="text-left flex-1">About Confederation</span>
                  <ChevronRight className="h-4 w-4 flex-shrink-0 group-open:hidden" />
                  <ChevronDown className="h-4 w-4 flex-shrink-0 hidden group-open:block" />
                </div>
              </Button>
            </summary>
            <div className="space-y-1 mt-1">
              {confederationSubItems.map((subItem, subIndex) => {
                const SubIcon = subItem.icon;
                return (
                  <Button
                    asChild
                    key={subIndex}
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto py-2 px-4 ml-6 text-[#7a97e3]/80 hover:bg-[#7a97e3]/5 text-sm"
                  >
                    <Link href={aboutRouteByLabel[subItem.label] ?? "/about"}>
                      <SubIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-left leading-tight">
                        {subItem.label}
                      </span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </details>

          {/* Other menu items */}
          {menuItems
            .filter((m) => !m.expandable && !m.active)
            .map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  asChild
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto py-3 px-4 text-[#7a97e3] hover:bg-[#7a97e3]/10"
                >
                  <Link href={routeByLabel[item.label] ?? "/"}>
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="text-left">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
        </nav>
      </Card>
    </div>
  );
}
