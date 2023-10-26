/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // typedRoutes: true,
  },
  images: {
    domains: [
      "opengraph.githubassets.com",
      // TODO: check me
      "e-cdns-images.dzcdn.net",
    ],
  },
  async redirects() {
    return [
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
        source: "/email",
        destination: "mailto:tom@tomheaton.dev",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
