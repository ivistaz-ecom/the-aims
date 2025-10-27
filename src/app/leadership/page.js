import React from 'react'
import FoundersMessage from '../../components/FoundersMessage'
import { generateMetadataFromProps, generateStructuredData } from '@/shared/SeoComponents/generateMetadata'
import { StructuredData } from '@/shared/SeoComponents/StructuredData'
import { headers } from 'next/headers'

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Leadership at AIMS Institutes | Vision of AIMS Institutes leadership",
    description: "Discover the vision of AIMS Institutes leadership. Meet the Principal of AIMS, Founder of AIMS, Executive Director, and CEO who shape the future with strong leadership.",
    path: "/leadership",
    metaImage: "/images/aims-logo.png",
    pageType: "Organization",
  });
}

export default async function page() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const structuredData = generateStructuredData({
    title: "Leadership at AIMS Institutes | Vision of AIMS Institutes leadership",
    description: "Discover the vision of AIMS Institutes leadership. Meet the Principal of AIMS, Founder of AIMS, Executive Director, and CEO who shape the future with strong leadership.",
    path: "/leadership",
    baseUrl,
    pageType: "Organization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        <FoundersMessage />
      </div>
    </>
  )
}