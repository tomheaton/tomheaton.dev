import { musicSchema, type MusicType } from "@/utils/types";
import { NextResponse } from "next/server";

type Data = {
  data: MusicType[];
};

export async function GET() {
  const response = await fetch("https://api.deezer.com/user/844148065/flow");
  const data = await response.json();

  if (!data.data) {
    return NextResponse.json({ data: [] });
  }

  let musicData = data.data.flatMap((m: any) => {
    const music = musicSchema.safeParse(m);
    if (!music.success) {
      return [];
    }
    return music.data;
  });

  return NextResponse.json({ data: musicData });
}
