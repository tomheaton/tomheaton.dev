import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function Sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = "https://tomheaton.dev";

  return [
    { url: base, lastModified },
    { url: `${base}/projects`, lastModified },
    { url: `${base}/music`, lastModified },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified,
    })),
  ];
}
