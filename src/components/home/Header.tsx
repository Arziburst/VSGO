"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, Eye } from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const titleInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const wrap = titleWrapRef.current;
    const inner = titleInnerRef.current;
    if (!wrap || !inner) return;

    const fit = () => {
      const available = wrap.clientWidth;
      inner.style.transform = "scale(1)";
      const needed = inner.scrollWidth;
      const next =
        needed > 0 && needed > available
          ? Math.max(0.45, available / needed)
          : 1;
      inner.style.transform = `scale(${next})`;
    };

    fit();
    void document.fonts?.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(wrap);
    window.addEventListener("resize", fit);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 py-2 md:py-2 flex flex-col gap-2 md:flex-row md:items-center md:gap-6 lg:gap-8 min-h-0 md:min-h-[180px] lg:min-h-[220px] xl:min-h-[250px]">
        <div className="flex items-center justify-between gap-2 md:contents">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[var(--brand-primary)] dark:text-white/80 flex-shrink-0"
            onClick={onMenuToggle}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="relative z-20 flex-shrink-0 h-20 w-20 sm:h-28 sm:w-28 md:h-[180px] md:w-[180px] lg:h-[220px] lg:w-[220px] xl:h-[240px] xl:w-[240px] rounded-full dark:bg-white dark:p-1.5 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.95)]">
            <Image
              src="/stork.png"
              alt="VSGO confederation logo"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 180px, (max-width: 1280px) 220px, 240px"
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
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div
          ref={titleWrapRef}
          className="relative z-10 w-full min-w-0 overflow-hidden flex items-center justify-center px-1 md:flex-1 md:px-2"
        >
          <div
            ref={titleInnerRef}
            className="text-center origin-center will-change-transform"
          >
            <h1 className="font-[family-name:var(--font-oswald)] font-bold text-[var(--brand-primary)] dark:text-white uppercase leading-[1.08] tracking-[0.02em] text-[clamp(0.8rem,3.8vw,2.35rem)] md:text-[clamp(0.85rem,2.6vw,2.35rem)]">
              <span className="block whitespace-nowrap">
                Конфедерація громадських
              </span>
              <span className="block whitespace-nowrap">
                організацій осіб з інвалідністю України
              </span>
            </h1>
            <p className="font-[family-name:var(--font-oswald)] text-[clamp(0.65rem,2.8vw,1.15rem)] md:text-[clamp(0.72rem,1.5vw,1.15rem)] text-[var(--brand-primary)] dark:text-white mt-1.5 md:mt-2.5 font-semibold tracking-[0.16em] md:tracking-[0.2em] uppercase whitespace-nowrap">
              Єдність. Підтримка. Можливості.
            </p>
          </div>
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
      </div>
    </header>
  );
}
