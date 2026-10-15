import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { proxy } from "@/proxy";

function request(path: string, accept?: string) {
  return new NextRequest(`https://tomheaton.dev${path}`, {
    headers: accept === undefined ? {} : { accept },
  });
}

function rewriteTarget(response: Response) {
  const rewrite = response.headers.get("x-middleware-rewrite");
  return rewrite ? new URL(rewrite).pathname : null;
}

const BROWSER_ACCEPT =
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";

describe("proxy content negotiation", () => {
  it.each([
    ["text/markdown", "/api/markdown"],
    ["text/markdown, text/html", "/api/markdown"],
    ["text/html;q=0.5, text/markdown", "/api/markdown"],
    ["TEXT/MARKDOWN; charset=utf-8", "/api/markdown"],
    ["text/plain, text/markdown;q=0.9, */*;q=0.1", "/api/markdown"],
    [BROWSER_ACCEPT, null],
    ["text/html, text/markdown", null],
    ["text/markdown;q=0.5, text/html", null],
    ["text/markdown;q=0, */*", null],
    ["text/markdown;q=0, text/html;q=0", null],
    ["*/*", null],
    ["application/json", null],
    ["", null],
    [undefined, null],
  ])("Accept %j on / rewrites to %s", (accept, target) => {
    expect(rewriteTarget(proxy(request("/", accept)))).toBe(target);
  });

  it("rewrites nested pages to the matching Markdown path", () => {
    const response = proxy(request("/work/sparklayer", "text/markdown"));
    expect(rewriteTarget(response)).toBe("/api/markdown/work/sparklayer");
  });

  it("rewrites unknown pages too, so the handler can answer with a Markdown 404", () => {
    const response = proxy(request("/__missing", "text/markdown"));
    expect(rewriteTarget(response)).toBe("/api/markdown/__missing");
  });

  it.each([
    ["/index.md", "/api/markdown"],
    ["/about.md", "/api/markdown/about"],
    ["/work/carry-naloxone.md", "/api/markdown/work/carry-naloxone"],
  ])("serves %s as Markdown even for a browser Accept header", (path, target) => {
    expect(rewriteTarget(proxy(request(path, BROWSER_ACCEPT)))).toBe(target);
  });

  it.each(["/llms.txt", "/robots.txt", "/avatar.jpg"])(
    "leaves the static file %s alone when Markdown is requested",
    (path) => {
      expect(rewriteTarget(proxy(request(path, "text/markdown")))).toBeNull();
    },
  );

  it.each([
    ["text/markdown", "Markdown"],
    [BROWSER_ACCEPT, "HTML"],
  ])("adds Vary: Accept for %j (%s)", (accept) => {
    expect(proxy(request("/", accept)).headers.get("vary")).toBe("Accept");
  });
});
