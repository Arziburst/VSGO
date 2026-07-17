"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? images[activeIndex] : null;

  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-heading)] dark:bg-gray-900"
            aria-label={`Open photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-h-[94vh] w-auto max-w-[min(98vw,1280px)] gap-0 overflow-visible border-0 bg-transparent p-0 shadow-none sm:max-w-[min(98vw,1280px)]"
        >
          <DialogTitle className="sr-only">
            {active?.alt ?? "Gallery photo"}
          </DialogTitle>
          {active ? (
            <div className="relative flex items-center justify-center gap-2 sm:gap-4">
              {images.length > 1 ? (
                <button
                  type="button"
                  onClick={goPrev}
                  className="shrink-0 rounded-full bg-black/60 p-2 text-white transition-opacity hover:opacity-90"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              ) : null}
              <div className="relative min-w-0">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute -right-1 -top-1 z-10 rounded-full bg-black/60 p-2 text-white transition-opacity hover:opacity-90 sm:right-0 sm:top-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[90vh] max-w-[min(calc(98vw-7rem),1100px)] object-contain"
                  draggable={false}
                />
              </div>
              {images.length > 1 ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="shrink-0 rounded-full bg-black/60 p-2 text-white transition-opacity hover:opacity-90"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              ) : null}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
