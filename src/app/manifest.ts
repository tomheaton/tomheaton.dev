import type { MetadataRoute } from "next";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: "Tom Heaton - Software Engineer",
    short_name: "Tom Heaton",
    start_url: "https://tomheaton.dev",
    display: "standalone",
    theme_color: "#66b193",
    background_color: "#212529",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
