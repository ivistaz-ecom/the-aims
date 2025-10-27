import React from "react";
import LibraryAndInformationCentreBanner from "@/components/LibraryAndInformationCentre/";
import SeoMetadata from "@/components/shared/Seo/SeoMetadata";

const page = () => (
  <>
    <SeoMetadata
      title="Library & Information Centre | Top B School in India"
      description="Explore the Library & Information Centre at AIMS, a NAAC A grade B school. Private colleges with ICT-enabled library and e-resources in Bangalore."
      path="/library-and-information-centre"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <div>
      <LibraryAndInformationCentreBanner />
    </div>
  </>
);

export default page;
