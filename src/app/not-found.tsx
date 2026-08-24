import type { Metadata } from "next";
import Link from "next/link";
import { Dock } from "@/components/dock";

export const metadata: Metadata = {
  title: "Not found · Tom Heaton",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-135 flex-col justify-center px-6 pb-32">
      <div className="animate-fade-up">
        <p className="font-mono text-[13px] text-ink-label tracking-tight">404</p>

        <h1 className="mt-4 font-bold text-[24px] text-ink-strong leading-tight tracking-[-0.03em] sm:text-[28px]">
          Page not found
        </h1>
        <p className="mt-2 text-[15px] text-ink-muted leading-[1.7]">
          This page has been moved, renamed, or never existed in the first place.
        </p>

        <Link
          href="/"
          className="group mt-10 inline-flex h-9 items-center gap-1.5 rounded-xl border border-line px-4 font-medium text-[13px] text-ink-soft no-underline transition-all duration-150 hover:border-line-strong hover:bg-black/2 hover:text-ink"
        >
          <span
            aria-hidden
            className="transition-transform duration-150 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back home
        </Link>
      </div>

      <Dock />
    </main>
  );
}
