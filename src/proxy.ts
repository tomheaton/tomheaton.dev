import { type NextRequest, NextResponse } from "next/server";
import { appendVaryAccept, MARKDOWN, preferredType } from "@/utils/accept";

const MARKDOWN_ROUTE = "/api/markdown";

function rewriteToMarkdown(request: NextRequest, path: string) {
  const url = request.nextUrl.clone();
  url.pathname = path === "/" ? MARKDOWN_ROUTE : `${MARKDOWN_ROUTE}${path}`;

  const response = NextResponse.rewrite(url);
  appendVaryAccept(response.headers);
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // `/about.md` and `/index.md` always return Markdown, whatever the Accept header says.
  if (pathname.endsWith(".md")) {
    return rewriteToMarkdown(request, pathname === "/index.md" ? "/" : pathname.slice(0, -3));
  }

  // Static files (robots.txt, llms.txt, images, ...) only have one representation.
  if (/\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  // Clients that accept neither HTML nor Markdown still get HTML (RFC 9110 §12.5.1 allows
  // ignoring Accept), which keeps the site's behaviour for unusual clients unchanged.
  if (preferredType(request.headers.get("accept")) === MARKDOWN) {
    return rewriteToMarkdown(request, pathname);
  }

  const response = NextResponse.next();
  appendVaryAccept(response.headers);
  return response;
}

export const config = {
  matcher: ["/((?!api/|_next/|_vercel/).*)"],
};
