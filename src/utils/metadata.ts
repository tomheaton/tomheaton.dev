import type { Metadata } from "next";
import { markdownPath } from "@/data/site";

/** Canonical URL plus a pointer to the page's Markdown representation. */
export function pageAlternates(path: string): Metadata["alternates"] {
  return {
    canonical: path,
    types: { "text/markdown": markdownPath(path) },
  };
}
