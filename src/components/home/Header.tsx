"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, Eye } from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header
      className="relative w-full bg-white dark:bg-[#071845]"
      style={{
        backgroundImage: "url(/fon.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 py-3 md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 md:gap-4">
          <div className="flex items-center justify-between gap-2 md:justify-start">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[var(--brand-primary)] dark:text-white/80 flex-shrink-0"
              onClick={onMenuToggle}
            >
              <Menu className="h-6 w-6" />
            </Button>

            <div className="relative flex-shrink-0 h-20 w-20 sm:h-28 sm:w-28 md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px] xl:h-[220px] xl:w-[220px] rounded-full dark:bg-white dark:p-1.5 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.95)]">
              <Image
                src="/stork.png"
                alt="VSGO confederation logo"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 160px, (max-width: 1280px) 200px, 220px"
                priority
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="md:hidden text-[var(--brand-primary)] dark:text-white/80 flex-shrink-0"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="justify-self-center w-full md:w-auto min-w-0 flex justify-center px-1">
            <div className="inline-flex flex-col items-center text-center">
              <h1 className="font-[family-name:var(--font-oswald)] font-bold text-[var(--brand-primary)] dark:text-white uppercase leading-[1.05] tracking-[0.01em] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.4rem] 2xl:text-[2.75rem]">
                <span className="block whitespace-nowrap text-center">
                  Конфедерація громадських
                </span>
                <span className="block whitespace-nowrap text-center">
                  організацій осіб з інвалідністю України
                </span>
              </h1>
              <p className="font-[family-name:var(--font-oswald)] text-sm sm:text-base md:text-lg lg:text-xl text-[var(--brand-primary)] dark:text-white mt-2 font-bold tracking-[0.18em] uppercase whitespace-nowrap">
                Єдність. Підтримка. Можливості.
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-start justify-end gap-3 self-start pt-1">
            <button
              type="button"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-sky-100/90 px-3 py-1.5 text-xs font-medium text-[var(--brand-primary)] hover:bg-sky-200 transition-colors dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
            >
              <Eye className="h-4 w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Версія для слабозорих</span>
            </button>

            <div className="flex items-center gap-2">
              <Sun
                className={`h-4 w-4 flex-shrink-0 ${
                  isDark ? "text-amber-500/50" : "text-amber-500"
                }`}
              />
              <button
                type="button"
                aria-label="Toggle theme"
                aria-pressed={isDark}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative h-6 w-11 flex-shrink-0 rounded-full bg-[var(--brand-primary)] dark:bg-sky-700 transition-colors duration-200"
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all duration-200 ${
                    isDark ? "left-6" : "left-1"
                  }`}
                />
              </button>
              <Moon
                className={`h-4 w-4 flex-shrink-0 ${
                  isDark ? "text-sky-300" : "text-[var(--brand-primary)]/50"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
