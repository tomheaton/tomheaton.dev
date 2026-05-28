import Image from "next/image";
import type { Track } from "@/utils/types";

export function TrackCard({ track }: { track: Track }) {
  return (
    <a
      href={track.link}
      target="_blank"
      rel="external noopener noreferrer"
      className="group flex items-center gap-3.5 rounded-xl px-3 py-2.5 no-underline transition-colors duration-150 hover:bg-black/[0.02]"
    >
      <Image
        src={track.image}
        height={600}
        width={600}
        alt={track.title}
        className="h-11 w-11 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="truncate font-semibold text-[15px] text-ink tracking-[-0.01em] transition-colors duration-150 group-hover:text-ink-strong">
          {track.title}
        </div>
        <div className="truncate text-[13px] text-ink-soft">{track.artist}</div>
      </div>
      <span
        aria-hidden
        className="shrink-0 text-ink-faint transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-dark"
      >
        ↗
      </span>
    </a>
  );
}
