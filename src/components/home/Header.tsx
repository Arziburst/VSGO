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
      className="relative w-full overflow-hidden bg-white dark:bg-[#071845]"
      style={{
        backgroundImage: "url(/fon.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center gap-4 min-h-[120px] md:min-h-[170px] lg:min-h-[200px]">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-[var(--brand-primary)] dark:text-white/80 flex-shrink-0"
          onClick={onMenuToggle}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className="relative flex-shrink-0 h-[104px] w-[104px] sm:h-[136px] sm:w-[136px] md:h-[156px] md:w-[156px] lg:h-[184px] lg:w-[184px]">
          <Image
            src="/stork.png"
            alt="VSGO confederation logo"
            fill
            sizes="(max-width: 640px) 104px, (max-width: 768px) 136px, (max-width: 1024px) 156px, 184px"
            priority
            className="object-contain"
          />
        </div>

        <div className="flex-1 text-center px-2">
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-[1.85rem] xl:text-[2.15rem] font-black text-[var(--brand-primary)] dark:text-white uppercase leading-[1.15] tracking-wide">
            Конфедерація громадських
            <br />
            організацій
            <br className="hidden sm:block" />
            осіб з інвалідністю України
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[var(--brand-primary)] dark:text-sky-200 mt-2 font-semibold tracking-[0.18em] uppercase">
            Єдність. Підтримка. Можливості.
          </p>
        </div>

        <div className="hidden md:flex items-start gap-3 flex-shrink-0 self-start pt-1">
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

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="md:hidden text-[var(--brand-primary)] dark:text-white/80"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}
