import React from "react"
import AccreditationsRankings from "../../components/AccreditationsRankings"
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "NAAC A Grade College | AIMS Institutes Latest Rankings",
    description: "Explore AIMS Institutes latest rankings as a NAAC A Grade College, recognized as a Top Private Business School in South India for excellence and career success",
    path: "/accreditations-rankings",
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
    title: "NAAC A Grade College | AIMS Institutes Latest Rankings",
    description: "Explore AIMS Institutes latest rankings as a NAAC A Grade College, recognized as a Top Private Business School in South India for excellence and career success",
    path: "/accreditations-rankings",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        <AccreditationsRankings />
      </div>
    </>
  )
}
