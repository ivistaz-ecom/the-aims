import React from 'react'
import BbaAviationComponents from '@/components/BbaAviationComponents'
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Best BBA Aviation Colleges in Bangalore - AIMS",
    description: "Best colleges for BBA aviation in Bangalore. India's best college for BBA in Aviation delivers industry-ready graduates with placement excellence.",
    path: "/business-school/bachelor-business-administration-aviation-management",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  });
}

export default async function BbaAviationPage() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const structuredData = generateStructuredData({
    title: "Best BBA Aviation Colleges in Bangalore - AIMS",
    description: "Best colleges for BBA aviation in Bangalore. India's best college for BBA in Aviation delivers industry-ready graduates with placement excellence.",
    path: "/business-school/bachelor-business-administration-aviation-management",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        <BbaAviationComponents />
      </div>
    </>
  )
}
