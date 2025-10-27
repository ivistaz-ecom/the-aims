import React from "react";
import CentreForSustainability from "@/components/CentreForSustainability";
import SeoMetadata from "@/components/shared/Seo/SeoMetadata";

const page = () => (
  <>
    <SeoMetadata
      title="Sustainability Learning in Higher Education Bangalore"
      description="AIMS Institutes promotes sustainability through education programs in Bengaluru. Explore eco-initiatives, research, and student-driven green projects."
      path="/centre-for-sustainability"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <CentreForSustainability />
  </>
);

export default page;
