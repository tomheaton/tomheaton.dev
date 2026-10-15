import type { Metadata } from "next";
import { BackLink } from "@/components/back-link";
import { Dock } from "@/components/dock";
import { TrackCard } from "@/components/track-card";
import { getMusic } from "@/data/music";
import { pageAlternates } from "@/utils/metadata";

export const metadata: Metadata = {
  title: "Music · Tom Heaton",
  description: "What I'm currently listening to.",
  alternates: pageAlternates("/music"),
};

export default async function Page() {
  const data = await getMusic();

  return (
    <main className="mx-auto max-w-135 px-6 pt-16 pb-32 sm:pt-24">
      <BackLink />

      <header>
        <h1 className="font-bold text-[24px] text-ink-strong leading-tight tracking-[-0.03em] sm:text-[28px]">
          Music
        </h1>
        <p className="mt-2 text-[15px] text-ink-muted leading-[1.7]">
          A live feed of what I've been listening to on Deezer.
        </p>
      </header>

      <div className="-mx-3 mt-10 flex flex-col">
        {data.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
        {data.length === 0 && (
          <p className="text-[15px] text-ink-soft">No tracks found right now.</p>
        )}
      </div>

      <Dock />
    </main>
  );
}
