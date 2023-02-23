/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        // typedRoutes: true,
    },
    async redirects() {
        return [
            {
                source: "/linkedin",
                destination: "https://www.linkedin.com/in/tomheaton7/",
                permanent: true,
            },
            {
                source: "/discord",
                destination: "https://discord.com/users/325306360004739072/",
                permanent: true,
            },
        ];
    },
    images: {
        domains: [
            "opengraph.githubassets.com",
            // TODO: check me
            "e-cdns-images.dzcdn.net",
        ],
    },
};

module.exports = nextConfig;
