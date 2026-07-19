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

const MAP_BLUE = "#18bfe7";
const MAP_YELLOW = "#fff200";
const MAP_BORDER = "#f4f315";
const MAP_POINT = "#fff200";
const MAP_KYIV_POINT = "#e31b23";

const MAP_LABELS: Record<string, string> = {
  volyn: "ЛУЦЬК",
  rivne: "РІВНЕ",
  lviv: "ЛЬВІВ",
  zakarpattia: "УЖГОРОД",
  "ivano-frankivsk": "ІВАНО-ФРАНКІВСЬК",
  ternopil: "ТЕРНОПІЛЬ",
  chernivtsi: "ЧЕРНІВЦІ",
  khmelnytskyi: "ХМЕЛЬНИЦЬКИЙ",
  zhytomyr: "ЖИТОМИР",
  vinnytsia: "ВІННИЦЯ",
  kyiv: "КИЇВ",
  chernihiv: "ЧЕРНІГІВ",
  sumy: "СУМИ",
  poltava: "ПОЛТАВА",
  cherkasy: "ЧЕРКАСИ",
  kirovohrad: "КІРОВОГРАД",
  dnipropetrovsk: "ДНІПРОПЕТРОВСЬК",
  zaporizhia: "ЗАПОРІЖЖЯ",
  kharkiv: "ХАРКІВ",
  luhansk: "ЛУГАНСЬК",
  donetsk: "ДОНЕЦЬК",
  mykolaiv: "МИКОЛАЇВ",
  odessa: "ОДЕСА",
  kherson: "ХЕРСОН",
  crimea: "СІМФЕРОПОЛЬ",
};

const LABEL_OFFSETS: Record<string, { x?: number; y?: number }> = {
  "ivano-frankivsk": { y: -10 },
  odessa: { y: -40, x: 30 },
  khmelnytskyi: { y: -5 },
  zakarpattia: { y: 12 },
  sumy: { x: -10, y: 10 },
  cherkasy: { y: 8 },
  chernivtsi: { x: -22 },
};

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
            const kyivCity = isKyivCity(loc.name);
            const selected = isSelected(loc.name);
            const hovered = hoveredRegion === loc.id;
            const fill =
              selected || (!kyivCity && hovered) ? MAP_YELLOW : MAP_BLUE;

            return (
              <path
                key={loc.id}
                data-id={loc.id}
                d={loc.path}
                fill={fill}
                stroke={kyivCity ? fill : MAP_BORDER}
                strokeWidth={kyivCity ? 6 : 2}
                className="cursor-pointer transition-colors duration-150 [stroke-linejoin:round]"
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
            const label = MAP_LABELS[loc.id.toLowerCase()] ?? toUA(loc.name);
            const isIvanoFrankivsk = /ivano-frankivsk/i.test(loc.id);
            const lineHeight = 17;
            const offset = LABEL_OFFSETS[loc.id.toLowerCase()] ?? {};
            const offsetX = offset.x ?? 0;
            const offsetY = offset.y ?? 0;
            const pointOffsetY =
              loc.id === "kyiv"
                ? -18
                : loc.id === "odessa"
                  ? -18
                  : isIvanoFrankivsk
                    ? 25
                    : 18;
            return (
              <React.Fragment key={`${loc.id}-label`}>
                <circle
                  cx={p.x + offsetX}
                  cy={p.y + offsetY + pointOffsetY}
                  r={5}
                  fill={loc.id === "kyiv" ? MAP_KYIV_POINT : MAP_POINT}
                  className="pointer-events-none"
                />
                <text
                  x={0}
                  y={0}
                  textAnchor="middle"
                  dominantBaseline="central"
                  transform={`translate(${p.x + offsetX} ${p.y + offsetY}) scale(0.78 1)`}
                  className="pointer-events-none select-none fill-black font-medium dark:fill-white"
                  style={{
                    fontSize: lineHeight,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {isIvanoFrankivsk ? (
                    <>
                      <tspan x={0} dy={-lineHeight * 0.45}>
                        ІВАНО-
                      </tspan>
                      <tspan x={0} dy={lineHeight * 0.95}>
                        ФРАНКІВСЬК
                      </tspan>
                    </>
                  ) : (
                    label
                  )}
                </text>
              </React.Fragment>
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
    </div>
  );
}
