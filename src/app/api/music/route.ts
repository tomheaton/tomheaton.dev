import { trackSchema } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.deezer.com/user/844148065/flow");
  const data = await response.json();

  if (!data?.data?.length) {
    return NextResponse.json({ data: [] });
  }

  const trackData = data.data.flatMap((t: unknown) => {
    const track = trackSchema.safeParse(t);
    return track.success ? track.data : [];
  });

  return NextResponse.json({ data: trackData });
}
