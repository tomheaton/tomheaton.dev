import { NextResponse } from "next/server";
import { getPinnedRepos } from "@/data/github";

export const revalidate = false;

export async function GET() {
  return NextResponse.json({ data: await getPinnedRepos() });
}
