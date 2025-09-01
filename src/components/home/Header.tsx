"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FontSizeSelect } from "./FontSizeSelect";
import { SearchInput } from "@/components/SearchInput";
import { useSidebarSearch } from "@/context/SidebarSearchContext";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { setQuery } = useSidebarSearch();

  const isDark = theme === "dark";

  return (
    <header className="bg-gradient-to-r from-[var(--brand-primary-10)] via-[var(--brand-secondary-10)] to-[var(--brand-primary-20)] border-b border-border/50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto flex items-center gap-4 lg:gap-6">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-[var(--brand-primary)] hover:bg-[var(--brand-primary-10)]"
          onClick={onMenuToggle}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {/* Logo Placeholder */}
        <Avatar className="h-20 w-20 rounded-full border-2 border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)]">
          <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary-20)] to-[var(--brand-secondary-10)] text-[var(--brand-primary)]">
            <div className="flex flex-col items-center">
              <div className="text-xs">CONF</div>
              <div className="text-xs">EDER</div>
            </div>
          </AvatarFallback>
        </Avatar>

        {/* Organization Name */}
        <div className="flex-1">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-[var(--brand-primary)] leading-tight">
            All-Ukrainian Union
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            of Public Organizations
          </h1>
          <h2 className="text-base md:text-xl lg:text-2xl text-[var(--brand-secondary)] mt-1">
            &quot;Confederation of
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Organizations of Persons with Disabilities of Ukraine&quot;
          </h2>
          <div className="mt-3 flex items-center gap-2 md:hidden">
            <FontSizeSelect />
          </div>
          {/* Optional: mobile search below title */}
          {/* <div className="mt-3 md:hidden">
            <SearchInput placeholder="Search menu..." onSearch={setQuery} />
          </div> */}
        </div>

        <div className="ml-auto hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="icon-theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <FontSizeSelect />
        </div>
      </div>
    </header>
  );
}
