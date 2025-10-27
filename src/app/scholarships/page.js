import React from "react"
import Scholarship from "@/components/Scholarship/index"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="AIMS Bangalore Scholarship Application Guide"
      description="Learn how to apply for scholarships at AIMS Institutes, Bengaluru. Explore eligibility, benefits, and support for students seeking affordable higher education."
      path="/scholarships"
      metaImage="/images/aims-logo.png"
      schemaType="WebSite"
    />
    <div>
      <Scholarship />
    </div>
  </>
)

export default page
