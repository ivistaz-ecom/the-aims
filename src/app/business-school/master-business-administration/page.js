import React from "react"
import MBA from "@/components/Mba"
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Top MBA Colleges in India | Best MBA in Bangalore",
    description: "Discover AIMS - one of the Top MBA colleges in India. Among the best colleges for MBA in Bangalore, offering MBA programs with placements in Bangalore.",
    path: "/business-school/master-business-administration",
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
    title: "Top MBA Colleges in India | Best MBA in Bangalore",
    description: "Discover AIMS - one of the Top MBA colleges in India. Among the best colleges for MBA in Bangalore, offering MBA programs with placements in Bangalore.",
    path: "/business-school/master-business-administration",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <MBA />
    </>
  )
}
