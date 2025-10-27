import React from 'react'
import SchoolOfBusiness from '@/components/SchoolOfBusiness'
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
    return generateMetadataFromProps({
        title: "Top B Schools in Bangalore | AIMS School of Business",
        description: "Among leading PGDM colleges Bangalore, AIMS guides you on how to choose the best MBA college in Bangalore with placement and future-focused learning.",
        path: "/business-school",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    });
}

export default async function page() {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;

    const structuredData = generateStructuredData({
        title: "Top B Schools in Bangalore | AIMS School of Business",
        description: "Among leading PGDM colleges Bangalore, AIMS guides you on how to choose the best MBA college in Bangalore with placement and future-focused learning.",
        path: "/business-school",
        baseUrl,
        pageType: "EducationalOrganization",
    });

    return (
        <>
            <StructuredData data={structuredData} />
            <SchoolOfBusiness />
        </>
    )
}
