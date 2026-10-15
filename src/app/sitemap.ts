import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { infoPages } from "@/data/site";

export default function Sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = "https://tomheaton.dev";

  return [
    { url: base, lastModified },
    { url: `${base}/projects`, lastModified },
    { url: `${base}/music`, lastModified },
    ...infoPages.map((page) => ({ url: `${base}${page.path}`, lastModified })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified,
    })),
  ];
}
