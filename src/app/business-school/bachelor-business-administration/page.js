import React from 'react'
import BbaComponents from '../../../components/BbaComponents'
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Best Colleges for BBA in Bangalore - AIMS Institutes",
    description: "Explore one of the best colleges for BBA in Bangalore, offering BBA programs with CA and ACCA options and proven placement success in Bangalore.",
    path: "/business-school/bachelor-business-administration",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  });
}

export default async function BachelorBusinessAdministration() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const structuredData = generateStructuredData({
    title: "Best Colleges for BBA in Bangalore - AIMS Institutes",
    description: "Explore one of the best colleges for BBA in Bangalore, offering BBA programs with CA and ACCA options and proven placement success in Bangalore.",
    path: "/business-school/bachelor-business-administration",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        <BbaComponents />
      </div>
    </>
  )
}
