import type { Repo } from "@/utils/types";

const GITHUB_ORIGIN = "https://github.com";
const REVALIDATE_SECONDS = 60 * 60;

const entities: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
};

export async function getPinnedRepos(username = "tomheaton"): Promise<Repo[]> {
  try {
    const response = await fetch(`${GITHUB_ORIGIN}/${encodeURIComponent(username)}`, {
      headers: {
        "User-Agent": "tomheaton.dev",
      },
      next: {
        revalidate: REVALIDATE_SECONDS,
      },
    });

    if (!response.ok) {
      return [];
    }

    return parsePinnedRepos(await response.text());
  } catch {
    return [];
  }
}

function parsePinnedRepos(html: string): Repo[] {
  const pinnedList = html.match(
    /<ol\b(?=[^>]*class="[^"]*js-pinned-items-reorder-list[^"]*")[\s\S]*?<\/ol>/,
  )?.[0];
  if (!pinnedList) {
    return [];
  }

  const items =
    pinnedList.match(/<li\b(?=[^>]*class="[^"]*js-pinned-item-list-item[^"]*")[\s\S]*?<\/li>/g) ??
    [];

  return items.flatMap((item) => {
    const link = extractRepoLink(item);
    if (!link) {
      return [];
    }

    const { owner, repo } = link;

    return {
      owner,
      repo,
      link: `${GITHUB_ORIGIN}/${owner}/${repo}`,
      description: extractDescription(item),
      language: extractLanguage(item),
      languageColor: extractLanguageColor(item),
      stars: extractStars(item),
    };
  });
}

function extractRepoLink(item: string) {
  const repoLink = item.match(
    /<a\b(?=[^>]*href="\/[^/"]+\/[^/"]+")[^>]*class="[^"]*text-bold[^"]*"[\s\S]*?<\/a>/,
  )?.[0];
  if (!repoLink) {
    return undefined;
  }

  const href = extractAttribute(repoLink, "href");

  const match = href?.match(/^\/([^/]+)\/([^/]+)$/);
  if (!match) {
    return undefined;
  }

  const [, owner, repo] = match;

  return {
    owner: decodeURIComponent(owner),
    repo: decodeURIComponent(repo),
  };
}

function extractDescription(item: string) {
  return optionalText(
    item.match(/<p\b(?=[^>]*class="[^"]*pinned-item-desc[^"]*")[\s\S]*?<\/p>/)?.[0],
  );
}

function extractLanguage(item: string) {
  return optionalText(
    item.match(/<span\b[^>]*itemprop="programmingLanguage"[^>]*>[\s\S]*?<\/span>/)?.[0],
  );
}

function extractLanguageColor(item: string) {
  const colorMatch = item.match(/<span\b(?=[^>]*class="[^"]*repo-language-color[^"]*")[^>]*>/);
  const colorTag = colorMatch?.[0];
  const style = colorTag ? extractAttribute(colorTag, "style") : undefined;
  return style?.match(/background-color:\s*([^;]+)/)?.[1]?.trim();
}

function extractStars(item: string) {
  const starsMatch = item.match(/<a\b(?=[^>]*href="[^"]*\/stargazers")[\s\S]*?<\/a>/);
  const starsLink = starsMatch?.[0];
  return parseGitHubCount(stripTags(starsLink ?? ""));
}

function optionalText(html: string | undefined) {
  const text = stripTags(html ?? "");
  return text.length > 0 ? text : undefined;
}

function stripTags(html: string) {
  return decodeHtml(html.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

function extractAttribute(html: string, attribute: string) {
  const match = html.match(new RegExp(`${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`));
  const value = match?.[1] ?? match?.[2];
  return value ? decodeHtml(value).trim() : undefined;
}

function decodeHtml(value: string) {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
    const key = code.toLowerCase();

    if (key.startsWith("#x")) {
      return decodeCodePoint(Number.parseInt(key.slice(2), 16), entity);
    }

    if (key.startsWith("#")) {
      return decodeCodePoint(Number.parseInt(key.slice(1), 10), entity);
    }

    return entities[key] ?? entity;
  });
}

function decodeCodePoint(codePoint: number, fallback: string) {
  if (!Number.isFinite(codePoint)) {
    return fallback;
  }

  try {
    return String.fromCodePoint(codePoint);
  } catch {
    return fallback;
  }
}

function parseGitHubCount(value: string) {
  const match = value.replace(/,/g, "").match(/(\d+(?:\.\d+)?)\s*([km]?)/i);
  if (!match) {
    return 0;
  }

  const amount = Number.parseFloat(match[1]);
  const suffix = match[2]?.toLowerCase();

  if (!Number.isFinite(amount)) {
    return 0;
  }

  if (suffix === "m") {
    return Math.round(amount * 1_000_000);
  }

  if (suffix === "k") {
    return Math.round(amount * 1_000);
  }

  return Math.round(amount);
}
