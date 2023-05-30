/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },

    redirects: async () => ([
        {
            source: '/',
            destination: '/home',
            permanent: false,
        }
    ])
}

module.exports = nextConfig
