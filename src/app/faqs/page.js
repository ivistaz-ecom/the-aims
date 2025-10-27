import React from "react"
import AdmissionsFAQs from "@/components/AdmissionsFAQs"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const FAQsPage = () => (
  <>
    <SeoMetadata
      title="AIMS Institutes FAQs for Admissions & Courses"
      description="Get answers to frequently asked questions about AIMS Institutes. Learn about admissions, application fees, scholarships, placements, and student life"
      path="/faqs"
      metaImage="/images/aims-logo.png"
      schemaType="WebSite"
    />
    <AdmissionsFAQs />
  </>
)

export default FAQsPage
