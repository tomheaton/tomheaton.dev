const HTML = "text/html";
export const MARKDOWN = "text/markdown";

const PRODUCES = [HTML, MARKDOWN] as const;

type Produced = (typeof PRODUCES)[number];

type AcceptEntry = { type: string; q: number; specificity: number };

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw) => {
      const [type = "", ...params] = raw.split(";").map((s) => s.trim());
      let q = 1;
      for (const param of params) {
        const [name, value] = param.split("=").map((s) => s.trim());
        if (name?.toLowerCase() === "q") {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
        }
      }
      const lower = type.toLowerCase();
      const specificity = lower === "*/*" ? 0 : lower.endsWith("/*") ? 1 : 2;
      return { type: lower, q, specificity };
    })
    .filter((entry) => entry.type.length > 0);
}

function matches(entry: AcceptEntry, candidate: string) {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

/**
 * Picks the representation to serve for an Accept header (RFC 9110 §12.5.1).
 * The most specific matching range sets each candidate's q-value, the highest q wins,
 * and ties go to whichever the client listed first. Returns null when the client
 * accepts neither HTML nor Markdown.
 */
export function preferredType(header: string | null): Produced | null {
  if (!header?.trim()) return HTML;

  const entries = parseAccept(header);
  if (entries.length === 0) return HTML;

  let best: Produced | null = null;
  let bestQ = -1;
  let bestPosition = Number.POSITIVE_INFINITY;

  for (const candidate of PRODUCES) {
    let matched: AcceptEntry | null = null;
    let matchedPosition = Number.POSITIVE_INFINITY;

    entries.forEach((entry, index) => {
      if (!matches(entry, candidate)) return;
      if (matched === null || entry.specificity > matched.specificity) {
        matched = entry;
        matchedPosition = index;
      }
    });

    if (matched === null) continue;
    const { q } = matched as AcceptEntry;
    if (q <= 0) continue;

    if (q > bestQ || (q === bestQ && matchedPosition < bestPosition)) {
      best = candidate;
      bestQ = q;
      bestPosition = matchedPosition;
    }
  }

  return best;
}

export function appendVaryAccept(headers: Headers) {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }

  const tokens = existing.split(",").map((s) => s.trim().toLowerCase());
  if (!tokens.includes("accept") && !tokens.includes("*")) {
    headers.set("Vary", `${existing}, Accept`);
  }
}
