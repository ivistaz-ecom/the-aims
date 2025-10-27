import React from "react"
import CenterForStudentDev from "@/components/CenterForStudentDev"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const CenterForStudentDevPage = () => (
  <>
    <SeoMetadata
      title="Student Mentorship Programs in Bangalore Colleges"
      description="Discover AIMS Centre for Student Development. Personalized mentorship, leadership training, and career guidance to help students thrive academically."
      path="/centre-for-student-development"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <CenterForStudentDev />
  </>
)

export default CenterForStudentDevPage
