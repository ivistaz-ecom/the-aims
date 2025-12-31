/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'docs.theaims.ac.in',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'docs-aims.ivista.biz',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'www.docs.theaims.ac.in',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
    
    eslint: {
        ignoreDuringBuilds: true, // ✅ Skip ESLint (no TypeScript needed)
    },
    async headers() {
        return [
            // Cache all fonts under public/font/** for 1 year
            {
                source: '/font/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
            // Also cache font files anywhere in the app (defensive)
            {
                source: '/:path*.woff2',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
            {
                source: '/:path*.woff',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
            {
                source: '/:path*.ttf',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Specific redirects - must come before catch-all
            {
                source: '/aims-institutes',
                destination: '/aims-overview',
                permanent: true,
            },
            {
                source: '/phd',
                destination: '/phd-doctoral-programs',
                permanent: true,
            },
            {
                source: '/bba',
                destination: '/business-school/bachelor-business-administration',
                permanent: true,
            },
            {
                source: '/bba-aviation-management',
                destination: '/business-school/bachelor-business-administration-aviation-management',
                permanent: true,
            },
            {
                source: '/mcom',
                destination: '/finance-commerce-school/master-of-commerce',
                permanent: true,
            },
            {
                source: '/bcom',
                destination: '/finance-commerce-school/bachelor-of-commerce',
                permanent: true,
            },
            {
                source: '/bhm',
                destination: '/hospitality-tourism-school/bachelor-hotel-management',
                permanent: true,
            },
            {
                source: '/mca',
                destination: '/information-technology-school/master-computer-applications',
                permanent: true,
            },
            {
                source: '/bca',
                destination: '/information-technology-school/bachelor-computer-applications',
                permanent: true,
            },
            {
                source: '/integrated-pcmb/pcmc',
                destination: '/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee',
                permanent: true,
            },
            {
                source: '/science-pcmb/pcmc',
                destination: '/pre-university-college/science-pcmb-pcmc',
                permanent: true,
            },
            {
                source: '/commerce-ceba',
                destination: '/pre-university-college/commerce-ceba',
                permanent: true,
            },
            {
                source: '/puc',
                destination: '/pre-university-college',
                permanent: true,
            },
            {
                source: '/bangalore-university-previous-question-papers',
                destination: '/library-and-information-centre',
                permanent: true,
            },
            // Catch-all redirect for www subdomain
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
