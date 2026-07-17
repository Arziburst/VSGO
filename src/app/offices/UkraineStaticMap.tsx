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

const MAP_BLUE = "#80b2ee";
const MAP_YELLOW = "#fece3c";
const MAP_SELECTED = "#0b54ca";
const MAP_CRIMEA = "#eae5e2";

const YELLOW_REGION_IDS = new Set([
  "kharkiv",
  "luhansk",
  "donetsk",
  "zaporizhia",
  "dnipropetrovsk",
  "kirovohrad",
  "mykolaiv",
  "kherson",
  "odessa",
]);

function isCrimeaRegion(name: string, id: string) {
  const key = `${id} ${name}`.toLowerCase();
  return /crimea|крим|sevastopol|севастополь/.test(key);
}

function baseFillForRegion(id: string, name: string) {
  if (isCrimeaRegion(name, id)) return MAP_CRIMEA;
  if (YELLOW_REGION_IDS.has(id.toLowerCase())) return MAP_YELLOW;
  return MAP_BLUE;
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
    <div className="relative overflow-hidden rounded-lg bg-[#f7f9fc] dark:bg-blue-950/30">
      <svg
        ref={svgRef}
        viewBox={zoomedViewBox}
        className="h-auto w-full transition-all duration-300"
        role="img"
        aria-label="Ukraine regions map"
      >
        <title>{map.label}</title>
        <g>
          {map.locations.map((loc) => {
            if (isKyivCity(loc.name)) return null;
            const selected = isSelected(loc.name);
            const hovered = hoveredRegion === loc.id;
            const fill =
              selected || hovered
                ? MAP_SELECTED
                : baseFillForRegion(loc.id, loc.name);

            return (
              <path
                key={loc.id}
                data-id={loc.id}
                d={loc.path}
                fill={fill}
                className="cursor-pointer stroke-white/80 transition-colors duration-150 [stroke-width:1]"
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
            const hovered = hoveredRegion === loc.id;
            const crimea = isCrimeaRegion(loc.name, loc.id);
            const labelFill =
              selected || hovered
                ? "#ffffff"
                : crimea
                  ? "#4b5563"
                  : "#ffffff";
            return (
              <text
                key={`${loc.id}-label`}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={labelFill}
                className="pointer-events-none select-none font-medium"
                style={{ fontSize: isKyivOblast(loc.name) ? 20 : 17 }}
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
          className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 bg-white text-base font-bold text-gray-700 shadow transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          +
        </button>
        <button
          aria-label="Zoom out"
          onClick={() => setZoom((z) => Math.max(z - 0.3, 0.7))}
          className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 bg-white text-base font-bold text-gray-700 shadow transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          −
        </button>
      </div>

      {selectedRegion && (
        <button
          aria-label="Clear selection"
          onClick={() => onRegionSelect?.("")}
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-xs text-gray-500 transition-colors hover:bg-white hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-400"
        >
          ✕
        </button>
      )}
    </div>
  );
}
