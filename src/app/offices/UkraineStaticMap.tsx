"use client";

import React, { useEffect, useRef, useState } from "react";
import { UA_REGION_TRANSLATIONS } from "@/constants";
import ukraine from "@svg-maps/ukraine";

type SvgMap = {
  label: string;
  viewBox: string;
  locations: { id: string; name: string; path: string }[];
};

interface UkraineStaticMapProps {
  selectedRegion?: string;
  onRegionSelect?: (regionName: string) => void;
}

export default function UkraineStaticMap({
  selectedRegion,
  onRegionSelect,
}: UkraineStaticMapProps) {
  const map = ukraine as unknown as SvgMap;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [labelPos, setLabelPos] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [zoom, setZoom] = useState(1);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const [vbX, vbY, vbW, vbH] = map.viewBox.split(" ").map(Number);

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
      } catch {
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

  const isSelected = (name: string) => {
    if (!selectedRegion) return false;
    const ua = toUA(name);
    return (
      ua === selectedRegion ||
      selectedRegion.includes(ua) ||
      ua.includes(selectedRegion)
    );
  };

  const scaledVbW = vbW / zoom;
  const scaledVbH = vbH / zoom;
  const scaledVbX = vbX + (vbW - scaledVbW) / 2;
  const scaledVbY = vbY + (vbH - scaledVbH) / 2;
  const zoomedViewBox = `${scaledVbX} ${scaledVbY} ${scaledVbW} ${scaledVbH}`;

  return (
    <div className="relative bg-[#d6eaf8] dark:bg-blue-950/30 rounded-lg overflow-hidden">
      <svg
        ref={svgRef}
        viewBox={zoomedViewBox}
        className="w-full h-auto transition-all duration-300"
        role="img"
        aria-label="Ukraine regions map"
      >
        <title>{map.label}</title>
        <g>
          {map.locations.map((loc) => {
            if (isKyivCity(loc.name)) return null;
            const selected = isSelected(loc.name);
            const hovered = hoveredRegion === loc.id;

            let fillClass: string;
            if (selected) {
              fillClass = "fill-[var(--nav-active)]";
            } else if (hovered) {
              fillClass = "fill-[#5db8e8] dark:fill-[#4a7abf]";
            } else {
              fillClass = "fill-[var(--brand-sky)] dark:fill-[#2a4a78]";
            }

            return (
              <path
                key={loc.id}
                data-id={loc.id}
                d={loc.path}
                className={`${fillClass} stroke-white/70 [stroke-width:1] cursor-pointer transition-colors duration-150`}
                onClick={() => onRegionSelect?.(toUA(loc.name))}
                onMouseEnter={() => setHoveredRegion(loc.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <title>{toUA(loc.name)}</title>
              </path>
            );
          })}

          {map.locations.map((loc) => {
            if (isKyivCity(loc.name)) return null;
            const p = labelPos[loc.id];
            if (!p) return null;
            const selected = isSelected(loc.name);
            return (
              <text
                key={`${loc.id}-label`}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`select-none pointer-events-none font-medium ${
                  selected ? "fill-black" : "fill-white dark:fill-gray-100"
                }`}
                style={{ fontSize: isKyivOblast(loc.name) ? 14 : 11 }}
              >
                {toUA(loc.name)}
              </text>
            );
          })}
        </g>
      </svg>

      <div className="absolute bottom-3 left-3 flex flex-col gap-1">
        <button
          aria-label="Zoom in"
          onClick={() => setZoom((z) => Math.min(z + 0.3, 3))}
          className="w-7 h-7 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow text-gray-700 dark:text-gray-200 flex items-center justify-center text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          +
        </button>
        <button
          aria-label="Zoom out"
          onClick={() => setZoom((z) => Math.max(z - 0.3, 0.7))}
          className="w-7 h-7 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow text-gray-700 dark:text-gray-200 flex items-center justify-center text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          −
        </button>
      </div>

      {selectedRegion && (
        <button
          aria-label="Clear selection"
          onClick={() => onRegionSelect?.("")}
          className="absolute top-2 right-2 w-6 h-6 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-full text-gray-500 dark:text-gray-400 flex items-center justify-center text-xs hover:bg-white hover:text-gray-700 transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
}
