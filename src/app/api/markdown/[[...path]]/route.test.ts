import { afterEach, describe, expect, it, vi } from "vitest";
import { GET } from "./route";

function get(path: string[]) {
  return GET(new Request("https://tomheaton.dev/api/markdown"), {
    params: Promise.resolve({ path }),
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Markdown route", () => {
  it.each([
    [[], "# Tom Heaton"],
    [["about"], "# About"],
    [["contact"], "# Contact"],
    [["privacy"], "# Privacy"],
    [["work", "carry-naloxone"], "# Carry Naloxone"],
  ])("serves %j as Markdown starting with %j", async (path, heading) => {
    const response = await get(path);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    expect(response.headers.get("vary")).toBe("Accept");
    expect((await response.text()).startsWith(`${heading}\n`)).toBe(true);
  });

  it("points Markdown responses at the HTML page as canonical", async () => {
    const response = await get(["work", "carry-naloxone"]);
    expect(response.headers.get("link")).toBe(
      '<https://tomheaton.dev/work/carry-naloxone>; rel="canonical"',
    );
  });

  it("answers unknown paths with a Markdown 404 that links to the site indexes", async () => {
    const response = await get(["__ora-404-probe"]);
    const body = await response.text();

    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    expect(response.headers.get("vary")).toBe("Accept");
    expect(body).toContain("# Page not found");
    expect(body).toContain("`/__ora-404-probe`");
    expect(body).toContain("(https://tomheaton.dev/llms.txt)");
    expect(body).toContain("(https://tomheaton.dev/sitemap.xml)");
  });

  it("returns 404 for a work slug that doesn't exist", async () => {
    expect((await get(["work", "nope"])).status).toBe(404);
  });

  it("strips Markdown and HTML syntax from the echoed path", async () => {
    const body = await (await get(["`<script>`"])).text();
    expect(body).toContain("There is no page at `/script` on tomheaton.dev.");
  });

  it.each([
    [["projects"], "No projects found right now."],
    [["music"], "No tracks found right now."],
  ])("still serves %j when the upstream API is down", async (path, fallback) => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));

    const response = await get(path);

    expect(response.status).toBe(200);
    expect(await response.text()).toContain(fallback);
  });

  it("lists tracks from Deezer as links", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          data: [
            {
              id: 42,
              type: "track",
              title: "Song",
              artist: { name: "Band" },
              album: { cover_xl: "https://e-cdns-images.dzcdn.net/cover.jpg" },
            },
          ],
        }),
      ),
    );

    const body = await (await get(["music"])).text();
    expect(body).toContain("- [Song by Band](https://deezer.com/en/track/42)");
  });
});
