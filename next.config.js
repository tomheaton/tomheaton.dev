// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/tom-heaton-39b107220/',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig;