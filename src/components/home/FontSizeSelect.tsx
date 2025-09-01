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
    } catch {}
  }, []);

  const onChange = (next: FontScaleKey) => {
    setValue(next);
    const scale = SCALE_BY_KEY[next] ?? 1;
    document.documentElement.style.setProperty("--font-scale", String(scale));
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const label = useMemo(() => {
    switch (value) {
      case "large":
        return "Large font";
      case "xlarge":
        return "Huge font";
      default:
        return "Standard font";
    }
  }, [value]);

  return (
    <Select value={value} onValueChange={(v) => onChange(v as FontScaleKey)}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="normal">Standard font</SelectItem>
        <SelectItem value="large">Large font</SelectItem>
        <SelectItem value="xlarge">Huge font</SelectItem>
      </SelectContent>
    </Select>
  );
}
