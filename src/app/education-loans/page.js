import React from 'react'
import Educationloan from '@/components/Educationloan/index'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
  <>
    <SeoMetadata
      title="Education Loan Assistance in Bangalore Colleges"
      description="AIMS Institutes helps students with education loan assistance. Find student-friendly options, low interest rates, and guidance for financing your studies."
      path="/education-loans"
      metaImage="/images/aims-logo.png"
      schemaType="WebSite"
    />
    <div>
      <Educationloan />
    </div>
  </>
)

export default page