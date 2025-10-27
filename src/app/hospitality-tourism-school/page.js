import React from "react"
import SchoolOfHospitality from "@/components/SchoolOfHospitality"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Best BHM Colleges in Bangalore | AIMS Institutes"
      description="Ranked among the best BHM colleges in Bangalore, AIMS offers a hotel management course in Bangalore with placement service at top hotel management colleges."
      path="/hospitality-tourism-school"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <div>
      <SchoolOfHospitality />
    </div>
  </>
)

export default page
