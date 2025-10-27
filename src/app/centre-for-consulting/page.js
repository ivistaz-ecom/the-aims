import React from 'react'
import CentreForConsulting from '@/components/CentreForConsulting'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Management Consulting Services in Bangalore Colleges"
            description="The Centre for Consulting at AIMS connects students with corporate projects, offering real-world experience in strategy, research, and management."
            path="/centre-for-consulting"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <CentreForConsulting />
    </>
)

export default page
