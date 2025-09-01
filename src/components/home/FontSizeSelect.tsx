"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FontScaleKey = "normal" | "large" | "xlarge";

const SCALE_BY_KEY: Record<FontScaleKey, number> = {
  normal: 1,
  large: 1.3,
  xlarge: 1.5,
};

const STORAGE_KEY = "app-font-scale";

export function FontSizeSelect() {
  const [value, setValue] = useState<FontScaleKey>("normal");

  // Read persisted value on mount
  useEffect(() => {
    try {
      const stored =
        (localStorage.getItem(STORAGE_KEY) as FontScaleKey) || "normal";
      if (stored in SCALE_BY_KEY) {
        setValue(stored);
        document.documentElement.style.setProperty(
          "--font-scale",
          String(SCALE_BY_KEY[stored])
        );
      }
    } catch {
      /* ignore */
    }
  }, []);

  const onChange = (next: FontScaleKey) => {
    setValue(next);
    const scale = SCALE_BY_KEY[next] ?? 1;
    document.documentElement.style.setProperty("--font-scale", String(scale));
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const label = useMemo(() => {
    switch (value) {
      case "large":
        return "Великий шрифт";
      case "xlarge":
        return "Величезний шрифт";
      default:
        return "Звичайний шрифт";
    }
  }, [value]);

  return (
    <Select value={value} onValueChange={(v) => onChange(v as FontScaleKey)}>
      <SelectTrigger className="w-[220px] border border-[color-mix(in_oklab,var(--brand-primary)_35%,transparent)]/70 bg-card/80 shadow-sm hover:border-[var(--brand-primary)]/60 focus:ring-2 focus:ring-[var(--brand-primary-20)]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="normal">Звичайний шрифт</SelectItem>
        <SelectItem value="large">Великий шрифт</SelectItem>
        <SelectItem value="xlarge">Величезний шрифт</SelectItem>
      </SelectContent>
    </Select>
  );
}
