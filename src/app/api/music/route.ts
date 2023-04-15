import { trackSchema, type Track } from "@/utils/types";
import { NextResponse } from "next/server";

type Data = {
  data: Track[];
};

export async function GET() {
  const response = await fetch("https://api.deezer.com/user/844148065/flow");
  const data = await response.json();

  if (!data.data) {
    return NextResponse.json({ data: [] });
  }

  let trackData = data.data.flatMap((t: any) => {
    const track = trackSchema.safeParse(t);
    if (!track.success) {
      return [];
    }
    return track.data;
  });

  return NextResponse.json({ data: trackData });
}
