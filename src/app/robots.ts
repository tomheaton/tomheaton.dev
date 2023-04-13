import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://tomheaton.dev/sitemap.xml",
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
