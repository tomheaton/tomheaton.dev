import { absoluteUrl } from "@/data/site";
import { renderMarkdown, renderNotFoundMarkdown } from "@/utils/markdown";

type Params = { params: Promise<{ path?: string[] }> };

function markdownResponse(body: string, status: number, canonical?: string) {
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    "Cache-Control":
      status === 200
        ? "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
        : "public, max-age=0, s-maxage=60",
    Vary: "Accept",
  });
  if (canonical) {
    headers.set("Link", `<${canonical}>; rel="canonical"`);
  }

  return new Response(body, { status, headers });
}

export async function GET(_request: Request, { params }: Params) {
  const { path = [] } = await params;
  const pathname = `/${path.join("/")}`;

  const body = await renderMarkdown(pathname);
  if (body === null) {
    return markdownResponse(renderNotFoundMarkdown(pathname), 404);
  }

  return markdownResponse(body, 200, absoluteUrl(pathname));
}
