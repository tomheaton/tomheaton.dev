import type { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tomheaton.dev",
    },
    // {
    //   url: "https://tomheaton.dev/music",
    // },
    // {
    //   url: "https://tomheaton.dev/projects",
    // },
  ];
}
