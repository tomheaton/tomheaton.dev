import type { Track } from "@/utils/types";
import Image from "next/image";

export function TrackCard({ track }: { track: Track }) {
  return (
    <a
      href={track.link}
      target="_blank"
      rel="external noopener noreferrer"
      className="hover:text-inherit"
    >
      <div className="m-4 flex items-center gap-x-4 rounded-lg border-2 border-my-green p-4 transition-all hover:scale-105 active:scale-95">
        <Image
          src={track.image}
          height={600}
          width={600}
          alt={track.title}
          className="h-16 w-16 rounded-lg"
        />
        <div>
          <p className="text-xl font-semibold">{track.title}</p>
          <p className="text-base">{track.artist}</p>
        </div>
      </div>
    </a>
  );
}
