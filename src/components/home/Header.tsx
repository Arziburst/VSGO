"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, Eye } from "lucide-react";
import { useTheme } from "next-themes";
import { A11Y_STORAGE_KEY, FONT_SCALE_STORAGE_KEY } from "@/constants";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const FONT_STEPS = [1, 1.15, 1.3, 1.45] as const;

function applyFontScale(scale: number) {
  if (scale === 1) {
    document.documentElement.style.removeProperty("--font-scale");
  } else {
    document.documentElement.style.setProperty("--font-scale", String(scale));
  }
}

function applyA11y(enabled: boolean) {
  document.documentElement.classList.toggle("a11y", enabled);
}

function resetFontToDefault() {
  applyFontScale(FONT_STEPS[0]);
  window.localStorage.setItem(FONT_SCALE_STORAGE_KEY, String(FONT_STEPS[0]));
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [a11yOn, setA11yOn] = useState(false);
  const [fontStep, setFontStep] = useState(0);

  useEffect(() => {
    setMounted(true);
    const storedA11y = window.localStorage.getItem(A11Y_STORAGE_KEY) === "1";
    const storedScale = Number(
      window.localStorage.getItem(FONT_SCALE_STORAGE_KEY) ?? "1",
    );
    const found = FONT_STEPS.findIndex(
      (value) => Math.abs(value - storedScale) < 0.001,
    );
    const nextStep = !storedA11y || found === -1 ? 0 : found;
    setA11yOn(storedA11y);
    setFontStep(nextStep);
    applyA11y(storedA11y);
    applyFontScale(FONT_STEPS[nextStep]);
    if (!storedA11y) {
      resetFontToDefault();
    }
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleA11y = () => {
    if (a11yOn) {
      setA11yOn(false);
      applyA11y(false);
      setFontStep(0);
      resetFontToDefault();
      window.localStorage.setItem(A11Y_STORAGE_KEY, "0");
      return;
    }

    setA11yOn(true);
    applyA11y(true);
    setFontStep(0);
    resetFontToDefault();
    window.localStorage.setItem(A11Y_STORAGE_KEY, "1");
  };

  const changeFontStep = (delta: number) => {
    const next = Math.min(FONT_STEPS.length - 1, Math.max(0, fontStep + delta));
    setFontStep(next);
    applyFontScale(FONT_STEPS[next]);
    window.localStorage.setItem(
      FONT_SCALE_STORAGE_KEY,
      String(FONT_STEPS[next]),
    );
  };

  return (
    <header
      className="relative w-full bg-white dark:bg-black"
      style={{
        backgroundImage: `url(${isDark ? "/fonDark.png" : "/fon.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-3 py-3 sm:px-4 md:py-4">
        <div className="relative flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
          <div className="flex shrink-0 items-center justify-between gap-2 lg:justify-start">
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-[var(--brand-primary)] dark:text-white/80 lg:hidden"
              onClick={onMenuToggle}
            >
              <Menu className="h-6 w-6" />
            </Button>

            <div className="relative h-20 w-20 shrink-0 sm:h-28 sm:w-28 md:h-[150px] md:w-[150px] lg:h-[170px] lg:w-[170px] xl:h-[190px] xl:w-[190px] 2xl:h-[210px] 2xl:w-[210px]">
              <Image
                src={isDark ? "/stork-dark.png" : "/stork.png"}
                alt="VSGO confederation logo"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 150px, (max-width: 1280px) 170px, (max-width: 1536px) 190px, 210px"
                priority
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="shrink-0 text-[var(--brand-primary)] dark:text-white/80 lg:hidden"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div
            className="flex min-w-0 flex-1 justify-center px-2 sm:px-3 lg:px-2 lg:pl-5 lg:pr-[230px] xl:pl-8 xl:pr-[250px]"
            style={{ containerType: "inline-size" }}
          >
            <div className="flex w-full max-w-full flex-col items-center text-center">
              <h1
                className="w-full max-w-full font-[family-name:var(--font-e-ukraine)] font-black uppercase leading-[1.15] tracking-[0.01em] text-[var(--brand-primary)] dark:text-[var(--brand-secondary)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.75),0_0_2px_rgba(0,0,0,0.55)]"
                style={{
                  fontSize: "clamp(0.68rem, 3.2cqi + 0.2rem, 2.1rem)",
                  WebkitTextStroke: "0.6px currentColor",
                  paintOrder: "stroke fill",
                }}
              >
                <span className="block text-balance md:whitespace-nowrap">
                  Конфедерація громадських
                </span>
                <span className="block text-balance md:whitespace-nowrap">
                  організацій осіб з інвалідністю України
                </span>
              </h1>
              <p
                className="mt-2 max-w-full px-1 font-[family-name:var(--font-e-ukraine)] font-black uppercase tracking-[0.08em] text-[var(--brand-heading)] sm:tracking-[0.12em] dark:text-[var(--brand-secondary)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.75),0_0_2px_rgba(0,0,0,0.55)]"
                style={{
                  fontSize: "clamp(0.65rem, 2.2cqi + 0.15rem, 1.45rem)",
                  WebkitTextStroke: "0.35px currentColor",
                  paintOrder: "stroke fill",
                }}
              >
                Єдність. Підтримка. Можливості.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 sm:gap-3 lg:absolute lg:right-0 lg:top-0 lg:flex-row lg:items-start lg:justify-end xl:gap-3">
            <div className="flex flex-col items-center gap-1.5 lg:items-start">
              <button
                type="button"
                onClick={toggleA11y}
                aria-pressed={a11yOn}
                aria-label={a11yOn ? "Стандартна версія" : "Доступність"}
                className="inline-flex items-center gap-1.5 rounded-sm bg-[var(--brand-surface)] px-2.5 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90 sm:px-3 sm:text-sm"
              >
                <Eye className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                <span className="whitespace-nowrap">
                  {a11yOn ? "Стандартна версія" : "Доступність"}
                </span>
              </button>

              {a11yOn ? (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Зменшити шрифт"
                    disabled={fontStep <= 0}
                    onClick={() => changeFontStep(-1)}
                    className="flex h-8 w-8 items-center justify-center border-2 border-[var(--brand-primary)] text-sm font-black text-[var(--brand-primary)] transition-colors hover:bg-black/5 disabled:border-gray-300 disabled:text-gray-300"
                  >
                    A-
                  </button>
                  <button
                    type="button"
                    aria-label="Збільшити шрифт"
                    disabled={fontStep >= FONT_STEPS.length - 1}
                    onClick={() => changeFontStep(1)}
                    className="flex h-8 w-8 items-center justify-center border-2 border-[var(--brand-primary)] text-sm font-black text-[var(--brand-primary)] transition-colors hover:bg-black/5 disabled:border-gray-300 disabled:text-gray-300"
                  >
                    A+
                  </button>
                </div>
              ) : null}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <Sun
                className={`h-4 w-4 shrink-0 ${
                  isDark ? "text-amber-500/50" : "text-amber-500"
                }`}
              />
              <button
                type="button"
                aria-label="Toggle theme"
                aria-pressed={isDark}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative h-6 w-11 shrink-0 rounded-full bg-[var(--brand-surface)] transition-colors duration-200 dark:bg-sky-700"
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all duration-200 ${
                    isDark ? "left-6" : "left-1"
                  }`}
                />
              </button>
              <Moon
                className={`h-4 w-4 shrink-0 ${
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
