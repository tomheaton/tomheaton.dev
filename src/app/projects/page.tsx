import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RepoCard from "@/components/RepoCard";
import { repoSchema, type RepoType } from "@/utils/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tom Heaton",
};

const getProjects = async () => {
  const response = await fetch("https://gh-pinned-repos.egoist.dev/?username=tomheaton");
  const data = await response.json();

  if (!data || !data.length) return [];

  return data.flatMap((r: unknown) => {
    const repo = repoSchema.safeParse(r);
    return repo.success ? repo.data : [];
  });
};

export default async function Page() {
  const data = await getProjects();

  return (
    <div
      className={
        "flex min-h-screen flex-col justify-between bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
      }
    >
      <main className={"flex h-full w-full flex-col content-center items-center"}>
        <div
          className={
            "min-h-96 mt-20 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-10 md:w-2/5"
          }
        >
          <Header />
          <div className={"my-4 border-t-4 border-myGreen"} />
          <p className={"text-xl"}>Projects</p>
        </div>
        <div className={"mt-8 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-4 md:w-2/5"}>
          <div className={"grid grid-cols-1 xl:grid-cols-2"}>
            {data &&
              data.map((repo: RepoType, index: number) => <RepoCard key={index} repo={repo} />)}
            {data && data.length === 0 && <p className={"col-span-2"}>no projects found</p>}
            {!data && <p className={"col-span-2"}>loading</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
