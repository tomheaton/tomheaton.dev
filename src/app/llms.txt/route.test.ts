import { afterEach, describe, expect, it, vi } from "vitest";
import { GET as getMarkdown } from "@/app/api/markdown/[[...path]]/route";
import { GET } from "./route";

async function llmsTxt() {
  const response = GET();
  return { response, body: await response.text() };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("/llms.txt", () => {
  it("is served as plain text", async () => {
    const { response } = await llmsTxt();
    expect(response.headers.get("content-type")).toBe("text/plain; charset=utf-8");
  });

  // https://llmstxt.org/#format
  it("follows the llms.txt section order: H1, blockquote, details, then H2 file lists", async () => {
    const { body } = await llmsTxt();
    const lines = body.split("\n").filter((line) => line.trim() !== "");

    expect(lines[0]).toBe("# Tom Heaton");
    expect(lines[1]?.startsWith("> ")).toBe(true);

    const firstH2 = lines.findIndex((line) => line.startsWith("## "));
    expect(firstH2).toBeGreaterThan(1);
    expect(lines.slice(1, firstH2).some((line) => line.startsWith("#"))).toBe(false);
    expect(lines.slice(firstH2).filter((line) => /^#{3,} /.test(line))).toEqual([]);

    const fileListItems = lines.slice(firstH2).filter((line) => !line.startsWith("## "));
    const malformed = fileListItems.filter(
      (line) => !/^- \[[^\]]+\]\([^)\s]+\)(: .+)?$/.test(line),
    );
    expect(malformed).toEqual([]);
    expect(lines.at(-1)).not.toBe("## Optional");
  });

  it("tells agents when to use the site and how to read it", async () => {
    const { body } = await llmsTxt();
    expect(body).toContain("**When to use this site:**");
    expect(body).toContain("`Accept: text/markdown`");
    expect(body).toContain("tom@tomheaton.dev");
  });

  it("only links to Markdown pages that exist", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { body } = await llmsTxt();
    const paths = [...body.matchAll(/\(https:\/\/tomheaton\.dev(\/[^)]*)\.md\)/g)].map(
      ([, path]) => (path === "/index" ? "/" : path),
    );

    expect(paths.length).toBeGreaterThanOrEqual(10);
    for (const path of paths) {
      const segments = path.split("/").filter(Boolean);
      const response = await getMarkdown(new Request("https://tomheaton.dev"), {
        params: Promise.resolve({ path: segments }),
      });
      expect({ path, status: response.status }).toEqual({ path, status: 200 });
    }
  });
});
