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
                permanent: true
            },
            {
                source: '/discord',
                destination: 'https://discord.com/users/325306360004739072/',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig;