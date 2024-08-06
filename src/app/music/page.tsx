import TrackCard from "@/components/TrackCard";
import { trackSchema, type Track } from "@/utils/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Tom Heaton",
};

async function getMusic() {
  const response = await fetch("https://api.deezer.com/user/844148065/flow");
  const data = await response.json();

  if (!data || !data.data || !data.data.length) {
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
      <h2 className="text-2xl font-bold tracking-tight">Music</h2>
      {data &&
        data.map((music, index) => <TrackCard key={index} track={music} />)}
      {data && data.length === 0 && <p>no music found</p>}
      {!data && <p>loading</p>}
    </main>
  );
}
