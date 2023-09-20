import RepoCard from "@/components/RepoCard";
import { repoSchema, type Repo } from "@/utils/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tom Heaton",
};

const getProjects = async () => {
  const response = await fetch("https://gh-pinned-repos.egoist.dev/?username=tomheaton");
  const data = await response.json();

  if (!data || !data.length) {
    return [];
  }

  return data.flatMap((r: unknown) => {
    const repo = repoSchema.safeParse(r);
    return repo.success ? repo.data : [];
  });
};

export default async function Page() {
  const data = await getProjects();

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="mt-8 flex flex-col rounded-md border-2 border-myGreen p-4">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {data && data.map((repo: Repo, index: number) => <RepoCard key={index} repo={repo} />)}
          {data && data.length === 0 && <p className="col-span-2">no projects found</p>}
          {!data && <p className="col-span-2">loading</p>}
        </div>
      </div>
    </main>
  );
}
