import React from 'react'
import CentreForInternationalLiaison from '@/components/CentreForInternationalLiaison'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Global Immersion Programs in Bangalore Colleges"
            description="Experience international student and faculty exchange at AIMS Institutes. Global immersion, joint research, and cross-border academic opportunities."
            path="/centre-for-international-liaison"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <CentreForInternationalLiaison />
    </>
)

export default page
