"use client";

import React, { useEffect, useRef, useState } from "react";
import { UA_REGION_TRANSLATIONS } from "@/constants";
import ukraine from "@svg-maps/ukraine";

type SvgMap = {
  label: string;
  viewBox: string;
  locations: { id: string; name: string; path: string }[];
};

export default function UkraineStaticMap() {
  const map = ukraine as unknown as SvgMap;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [labelPos, setLabelPos] = useState<
    Record<string, { x: number; y: number }>
  >({});

  useEffect(() => {
    if (!svgRef.current) return;
    const paths =
      svgRef.current.querySelectorAll<SVGPathElement>("path[data-id]");
    const next: Record<string, { x: number; y: number }> = {};
    paths.forEach((p) => {
      try {
        const b = p.getBBox();
        next[p.dataset.id || ""] = {
          x: b.x + b.width / 2,
          y: b.y + b.height / 2,
        };
      } catch (e) {
        // ignore getBBox failures in SSR or hidden nodes
      }
    });
    setLabelPos(next);
  }, [map.viewBox]);

  const isKyivCity = (name: string) => /kyiv[^a-z]*city/i.test(name);
  const isKyivOblast = (name: string) =>
    /kyiv/i.test(name) && !isKyivCity(name);

  const toUA = (name: string) =>
    UA_REGION_TRANSLATIONS[name.toLowerCase()] ?? name;

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-[#7a97e3]/10 dark:from-blue-900/20 dark:to-[#7a97e3]/20 p-4 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <svg
          ref={svgRef}
          viewBox={map.viewBox}
          className="w-full h-auto"
          role="img"
          aria-label="Ukraine regions"
        >
          <title>{map.label}</title>
          <g>
            {map.locations.map((loc) => {
              if (isKyivCity(loc.name)) return null;
              return (
                <path
                  key={loc.id}
                  data-id={loc.id}
                  d={loc.path}
                  className={
                    isKyivOblast(loc.name)
                      ? "fill-yellow-300 dark:fill-yellow-400 stroke-[#7a97e3] [stroke-width:1.2]"
                      : "fill-[#22a2ff] dark:fill-[#3b4a73] stroke-[#7a97e3] [stroke-width:1.2]"
                  }
                >
                  <title>{toUA(loc.name)}</title>
                </path>
              );
            })}

            {map.locations.map((loc) => {
              if (isKyivCity(loc.name)) return null;
              const p = labelPos[loc.id];
              if (!p) return null;
              return (
                <text
                  key={`${loc.id}-label`}
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={
                    isKyivOblast(loc.name)
                      ? "fill-black font-semibold select-none pointer-events-none"
                      : "fill-white dark:fill-gray-100 select-none pointer-events-none"
                  }
                  style={{ fontSize: isKyivOblast(loc.name) ? 14 : 12 }}
                >
                  {toUA(loc.name)}
                </text>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
