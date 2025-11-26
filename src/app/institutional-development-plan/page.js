import React from "react"
import InstitutionalDevelopmentPlan from "@/components/InstitutionalDevelopmentPlan"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | Institutional Development Plan"
        description="View AIMS Institutes' Institutional Development Plan (IDP) outlining strategic goals, action plans, and initiatives for academic excellence and institutional advancement."
        path="/institutional-development-plan"
        metaImage="/images/aims-logo.png"
      />
      <InstitutionalDevelopmentPlan />
    </>
  )
}

export default page
