"use client";

import { useState } from "react";

export function Logo({ src, name, size = 44 }: { src?: string; name: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface"
      style={{ width: size, height: size }}
    >
      {showImage ? (
        // biome-ignore lint/performance/noImgElement: graceful onError fallback to neutral tile
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}
