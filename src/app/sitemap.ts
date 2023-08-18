import type { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tomheaton.dev",
      lastModified: new Date(),
    },
    {
      url: "https://tomheaton.dev/music",
      lastModified: new Date(),
    },
    {
      url: "https://tomheaton.dev/projects",
      lastModified: new Date(),
    },
  ];
}
