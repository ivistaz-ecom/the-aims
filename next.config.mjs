/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'docs-aims.ivista.biz',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'docs.theaims.ac.in',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'theaims.ac.in',
                    },
                ],
                destination: 'https://www.theaims.ac.in/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;