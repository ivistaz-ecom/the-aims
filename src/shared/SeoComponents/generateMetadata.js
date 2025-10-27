import { headers } from 'next/headers';

/**
 * Generate metadata for Next.js App Router from SEO props
 * @param {Object} options - SEO configuration
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.path - Page path (e.g., "/about-aims")
 * @param {string} options.metaImage - Image URL (defaults to "/images/aims-logo.png")
 * @param {string} options.pageType - Schema.org type (defaults to "EducationalOrganization")
 * @returns {Promise<Object>} Next.js metadata object
 */
export async function generateMetadataFromProps({
    title,
    description,
    path,
    metaImage = "/images/aims-logo.png",
    pageType = "EducationalOrganization"
}) {
    // Get the host from the request headers
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;

    const url = path.startsWith('http') ? path : `${baseUrl}${path}`;
    const canonicalUrl = url;
    const imageUrl = metaImage.startsWith('http') ? metaImage : `${baseUrl}${metaImage}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "AIMS Institutes",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: "AIMS Institutes",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

/**
 * Generate structured data schema
 * @param {Object} options - SEO configuration
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.path - Page path (e.g., "/about-aims")
 * @param {string} options.pageType - Schema.org type (defaults to "EducationalOrganization")
 * @param {string} options.baseUrl - Base URL of the site
 * @returns {Object} JSON-LD structured data
 */
export function generateStructuredData({
    title,
    description,
    path,
    baseUrl,
    pageType = "EducationalOrganization"
}) {
    const canonicalUrl = path.startsWith('http') ? path : `${baseUrl}${path}`;

    return {
        "@context": "https://schema.org/",
        "@type": pageType,
        "name": "AIMS Institutes",
        "url": canonicalUrl,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressCountry": "IN"
        },
        ...(path === '/' ? {
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${canonicalUrl}/{search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        } : {})
    };
}

