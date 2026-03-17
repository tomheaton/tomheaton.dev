import type { Metadata } from "next";
import { RepoCard } from "@/components/repo-card";
import { type Repo, repoSchema } from "@/utils/types";

export const metadata: Metadata = {
  title: "Projects | Tom Heaton",
};

async function getProjects() {
  const response = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=tomheaton",
  );
  const data = await response.json();

  if (!data?.length) {
    return [];
  }

  return data.flatMap((r: unknown) => {
    const repo = repoSchema.safeParse(r);
    return repo.success ? repo.data : [];
  }) as Repo[];
}

export default async function Page() {
  const data = await getProjects();

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <h2 className="font-bold text-2xl tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {data?.map((repo, index) => (
          <RepoCard key={index} repo={repo} />
        ))}
        {data && data.length === 0 && <p>no projects found</p>}
        {!data && <p>loading</p>}
      </div>
    </main>
  );
}
