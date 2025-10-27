import HomeComponents from "@/components/HomeComponents";
import { generateMetadataFromProps, generateStructuredData } from "@/shared/SeoComponents/generateMetadata";
import { StructuredData } from "@/shared/SeoComponents/StructuredData";
import { headers } from "next/headers";

export async function generateMetadata() {
  return generateMetadataFromProps({
    title: "Top Colleges in Bangalore | AIMS Institutes",
    description: "Looking for the top colleges in Bangalore? AIMS is a trusted choice, ranked among the best business colleges and best hospitality colleges in Bangalore.",
    path: "/",

    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  });
}

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const structuredData = generateStructuredData({
    title: "Top Colleges in Bangalore | AIMS Institutes",
    description: "Looking for the top colleges in Bangalore? AIMS is a trusted choice, ranked among the best business colleges and best hospitality colleges in Bangalore.",
    path: "/",
    baseUrl,
    pageType: "EducationalOrganization",
  });

  return (
    <>
      <StructuredData data={structuredData} />
      <HomeComponents />
    </>
  );
}