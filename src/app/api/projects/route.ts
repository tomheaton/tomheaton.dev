import { repoSchema } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=tomheaton",
  );
  const data = await response.json();

  if (!data?.length) {
    return NextResponse.json({ data: [] });
  }

  const repoData = data.flatMap((r: unknown) => {
    const repo = repoSchema.safeParse(r);
    return repo.success ? repo.data : [];
  });

  return NextResponse.json({ data: repoData });
}
