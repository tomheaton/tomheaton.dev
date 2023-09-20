import TrackCard from "@/components/TrackCard";
import { trackSchema, type Track } from "@/utils/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Tom Heaton",
};

const getMusic = async () => {
  const response = await fetch("https://api.deezer.com/user/844148065/flow");
  const data = await response.json();

  if (!data || !data.data || !data.data.length) {
    return [];
  }

  return data.data.flatMap((t: unknown) => {
    const track = trackSchema.safeParse(t);
    return track.success ? track.data : [];
  });
};

export default async function Page() {
  const data = await getMusic();

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <h2 className="text-3xl font-bold tracking-tight">Music</h2>
      <div className="mt-8 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-4 md:w-2/5">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {data &&
            data.map((music: Track, index: number) => <TrackCard key={index} track={music} />)}
          {data && data.length === 0 && <p className="col-span-2">no music found</p>}
          {!data && <p className="col-span-2">loading</p>}
        </div>
      </div>
    </main>
  );
}
