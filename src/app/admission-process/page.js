import React from "react"
import AdmissionProcess from "@/components/AdmissionProcess"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Admission Process for UG & PG Courses in Bangalore"
      description="Step-by-step guide to AIMS Institutes admission process. Find eligibility, documents required for UG & PG programs, and how to apply in Bengaluru."
      path="/admission-process"
      metaImage="/images/aims-logo.png"
      schemaType="WebSite"
    />
    <AdmissionProcess />
  </>
)

export default page
