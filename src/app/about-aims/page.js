import React from 'react'
import AboutAims from '../../components/AboutAims'
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Best Business School in India | AIMS Bangalore",
    description: "Discover AIMS, the Best business school in Bangalore and among the top business schools in India for postgraduate studies. Shape your career with us.",
    path: "/about-aims",
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
    title: "Best Business School in India | AIMS Bangalore",
    description: "Discover AIMS, the Best business school in Bangalore and among the top business schools in India for postgraduate studies. Shape your career with us.",
    path: "/about-aims",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <AboutAims />
    </>
  );
}