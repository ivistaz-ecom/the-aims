import React from "react"
import CentreForCommunityService from "@/components/CentreForCommunityService"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const CentreForCommunityServicePage = () => (
  <>
    <SeoMetadata
      title="College Community Service Programs in Bangalore"
      description="AIMS Institutes fosters community engagement with impactful service programs in Bengaluru, building social responsibility among students."
      path="/centre-for-community-service"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <CentreForCommunityService />
  </>
)

export default CentreForCommunityServicePage
