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
import { NavLink } from "@/components/home/NavLink";
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
    Members: ROUTE_MEMBERS,
    "Regional Offices": ROUTE_OFFICES,
    Legislation: ROUTE_LEGISLATION,
    "Our Activities": ROUTE_ACTIVITIES,
    "Photo Gallery": ROUTE_GALLERY,
    News: ROUTE_NEWS,
    Contacts: ROUTE_CONTACTS,
  };

  const aboutRouteByLabel: Record<string, string> = {
    Status: ROUTE_STATUS,
    Structure: ROUTE_STRUCTURE,
    "Membership conditions": ROUTE_MEMBERSHIP,
    "Rights and obligations": ROUTE_RIGHTS,
    "Confederation tasks": ROUTE_TASKS,
  };

  const getSubIconKey = (label: string) => {
    switch (label) {
      case "Status":
        return "fileText" as const;
      case "Structure":
        return "network" as const;
      case "Membership conditions":
        return "userCheck" as const;
      case "Rights and obligations":
        return "scale" as const;
      default:
        return "target" as const;
    }
  };

  const getIconKey = (label: string) => {
    switch (label) {
      case "Members":
        return "users" as const;
      case "Regional Offices":
        return "building2" as const;
      case "Legislation":
        return "scrollText" as const;
      case "Our Activities":
        return "settings" as const;
      case "Photo Gallery":
        return "camera" as const;
      case "News":
        return "newspaper" as const;
      default:
        return "phone" as const;
    }
  };

  return (
    <div className="p-4">
      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--brand-primary)_35%,transparent)]/70">
        <Card className="p-4 shadow-lg border-0 rounded-2xl bg-card">
          <h3 className="text-lg text-[var(--brand-primary)] mb-4 text-center">
            Menu
          </h3>

          <nav className="space-y-2">
            {/* Home */}
            <NavLink href="/" label="Home" iconKey="home" />

            {/* About Confederation with native details/summary for SSR */}
            <details className="group">
              <summary className="list-none">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto py-3 px-4 text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)]"
                >
                  <div className="flex items-center w-full">
                    <Info className="h-5 w-5 flex-shrink-0" />
                    <span className="text-left flex-1">
                      About Confederation
                    </span>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 group-open:hidden" />
                    <ChevronDown className="h-4 w-4 flex-shrink-0 hidden group-open:block" />
                  </div>
                </Button>
              </summary>
              <div className="space-y-1 mt-1">
                {confederationSubItems.map((subItem, subIndex) => (
                  <NavLink
                    key={subIndex}
                    href={aboutRouteByLabel[subItem.label] ?? "/"}
                    label={subItem.label}
                    iconKey={getSubIconKey(subItem.label)}
                    sub
                  />
                ))}
              </div>
            </details>

            {/* Other menu items */}
            {menuItems
              .filter((m) => !m.expandable && !m.active)
              .map((item, index) => (
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
