"use client";

import { useEffect, useState } from "react";
import type { Screenshot } from "@/data/projects";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  if (screenshots.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="relative w-full overflow-hidden rounded-xl border border-line bg-surface-alt">
        <div
          className={`grid gap-3 p-5 ${screenshots.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(i)}
              className="relative w-full cursor-zoom-in overflow-hidden rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
            >
              {/* biome-ignore lint/performance/noImgElement: user screenshots, simple lightbox */}
              <img src={shot.src} alt={shot.alt} loading="lazy" className="block w-full" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <button
          type="button"
          aria-label="Close"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
        >
          {/* biome-ignore lint/performance/noImgElement: lightbox preview */}
          <img
            src={screenshots[active].src}
            alt={screenshots[active].alt}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
        </button>
      )}
    </div>
  );
}
