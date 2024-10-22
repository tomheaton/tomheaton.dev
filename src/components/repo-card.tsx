import type { Repo } from "@/utils/types";

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.link}
      target="_blank"
      rel="external noopener noreferrer"
      className="hover:text-inherit"
    >
      <div className="m-4 rounded-lg border-2 border-myGreen p-4 transition-all hover:scale-105 active:scale-95">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">{repo.repo}</p>
          <p>⭐ {repo.stars.toLocaleString()}</p>
        </div>
        <div
          className={`my-4 border-t-4`}
          style={{ borderColor: repo.languageColor }}
        />
      </div>
    </a>
  );
}
