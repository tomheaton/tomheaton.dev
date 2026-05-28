"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function BackLink({ href = "/", label = "Back" }: { href?: string; label?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Link
        href={href}
        className="mb-16 inline-flex items-center gap-1.5 text-[13px] text-ink-soft no-underline transition-colors duration-150 hover:text-ink"
      >
        <span aria-hidden>←</span>
        {label}
      </Link>
      <div
        className={`fixed top-5 left-5 z-50 transition-all duration-200 ${
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <Link
          href={href}
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/80 text-ink-soft shadow-sm backdrop-blur-md transition-all duration-150 hover:border-line-strong hover:text-ink"
        >
          <span aria-hidden>←</span>
        </Link>
      </div>
    </>
  );
}
