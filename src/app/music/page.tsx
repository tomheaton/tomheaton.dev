import type { Metadata } from "next";
import { TrackCard } from "@/components/track-card";
import { type Track, trackSchema } from "@/utils/types";

export const metadata: Metadata = {
  title: "Music | Tom Heaton",
};

async function getMusic() {
  const response = await fetch("https://api.deezer.com/user/844148065/flow");
  const data = await response.json();

  if (!data?.data?.length) {
    return [];
  }

  return data.data.flatMap((t: unknown) => {
    const track = trackSchema.safeParse(t);
    return track.success ? track.data : [];
  }) as Track[];
}

export default async function Page() {
  const data = await getMusic();

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <h2 className="font-bold text-2xl tracking-tight">Music</h2>
      {data?.map((music, index) => (
        <TrackCard key={index} track={music} />
      ))}
      {data && data.length === 0 && <p>no music found</p>}
      {!data && <p>loading</p>}
    </main>
  );
}
