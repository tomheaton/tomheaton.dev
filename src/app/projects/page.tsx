import type { Metadata } from "next";
import { BackLink } from "@/components/back-link";
import { Dock } from "@/components/dock";
import { RepoCard } from "@/components/repo-card";
import { getPinnedRepos } from "@/data/github";

export const metadata: Metadata = {
  title: "Projects · Tom Heaton",
  description: "Open source projects and pinned repositories.",
};

export default async function Page() {
  const data = await getPinnedRepos();

  return (
    <main className="mx-auto max-w-135 px-6 pt-16 pb-32 sm:pt-24">
      <BackLink />

      <header>
        <h1 className="font-bold text-[24px] text-ink-strong leading-tight tracking-[-0.03em] sm:text-[28px]">
          Open source
        </h1>
        <p className="mt-2 text-[15px] text-ink-muted leading-[1.7]">
          A few pinned repositories from{" "}
          <a
            href="https://github.com/tomheaton/"
            target="_blank"
            rel="me external noopener noreferrer"
            className="text-accent-dark no-underline hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </header>

      <div className="-mx-3 mt-10 flex flex-col">
        {data.map((repo) => (
          <RepoCard key={repo.link} repo={repo} />
        ))}
        {data.length === 0 && (
          <p className="text-[15px] text-ink-soft">No projects found right now.</p>
        )}
      </div>

      <Dock />
    </main>
  );
}
