import React from 'react'
import CentreForResearchComponents from '@/components/CentreForResearchComponents'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const CentreForResearch = () => (
  <>
    <SeoMetadata
      title="Best Colleges in Bangalore for Research Projects"
      description="Explore AIMS Centre for Research in Bengaluru. A hub for academic innovation, student projects, and joint research with international institutions."
      path="/centre-for-research"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <div>
      <CentreForResearchComponents />
    </div>
  </>
)

export default CentreForResearch 