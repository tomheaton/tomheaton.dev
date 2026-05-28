import type { Repo } from "@/utils/types";

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.link}
      target="_blank"
      rel="external noopener noreferrer"
      className="group flex items-center gap-3.5 rounded-xl px-3 py-3 no-underline transition-colors duration-150 hover:bg-black/[0.02]"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[15px] text-ink tracking-[-0.01em] transition-colors duration-150 group-hover:text-ink-strong">
            {repo.repo}
          </span>
          {repo.language && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-soft">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: repo.languageColor }}
              />
              {repo.language}
            </span>
          )}
        </div>
        {repo.description && (
          <p className="mt-0.5 truncate text-[13px] text-ink-soft">{repo.description}</p>
        )}
      </div>
      <span className="shrink-0 font-mono text-[12px] text-ink-faint tabular-nums">
        ⭐ {repo.stars.toLocaleString()}
      </span>
      <span
        aria-hidden
        className="shrink-0 text-ink-faint transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-dark"
      >
        ↗
      </span>
    </a>
  );
}
