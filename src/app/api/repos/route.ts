import { repoSchema, type RepoType } from "@/utils/types";
import { NextResponse } from "next/server";

type Data = {
  data: RepoType[];
};

export async function GET() {
  const response = await fetch("https://gh-pinned-repos.egoist.dev/?username=tomheaton");
  const data = await response.json();

  if (!data.length) {
    return NextResponse.json({ data: [] });
  }

  let repoData = data.flatMap((r: any) => {
    const repo = repoSchema.safeParse(r);
    if (!repo.success) {
      return [];
    }
    return repo.data;
  });

  return NextResponse.json({ data: repoData });
}
