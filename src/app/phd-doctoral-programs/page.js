import React from 'react'
import PhdHospitrolComponents from '@/components/PhdHospitrolComponents/index'
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Colleges for Ph.D in Management, Commerce | Best Ph.D Bangalore",
    description: "Colleges for Ph.D in Management and Commerce - AIMS, one of the best colleges for Ph.D in Bangalore, offers rigorous research programs in both fields.",
    path: "/phd-doctoral-programs",
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
    title: "Colleges for Ph.D in Management, Commerce | Best Ph.D Bangalore",
    description: "Colleges for Ph.D in Management and Commerce - AIMS, one of the best colleges for Ph.D in Bangalore, offers rigorous research programs in both fields.",
    path: "/phd-doctoral-programs",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        <PhdHospitrolComponents />
      </div>
    </>
  )
}