import type { NextConfig } from "next";

export default {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "*.dzcdn.net",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/linkedin",
      destination: "https://linkedin.com/in/tomheaton7/",
      permanent: true,
    },
    {
      source: "/github",
      destination: "https://github.com/tomheaton/",
      permanent: true,
    },
    {
      source: "/twitter",
      destination: "https://twitter.com/tomheaton_/",
      permanent: true,
    },
    {
      source: "/x",
      destination: "https://x.com/tomheaton_/",
      permanent: true,
    },
    {
      source: "/email",
      destination: "mailto:tom@tomheaton.dev",
      permanent: true,
    },
  ],
} satisfies NextConfig;
