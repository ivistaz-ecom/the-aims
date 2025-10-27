import React from 'react'
import SchoolOfInformationTechnology from '@/components/SchoolOfInformationTechnology'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Top MCA & BCA Colleges in Bangalore | AIMS Institutes"
            description="Among leading MCA colleges in Bangalore, AIMS also ranks among top colleges for BCA in Bangalore, offering benefits of doing an MCA from a private college with good infrastructure."
            path="/information-technology-school"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <SchoolOfInformationTechnology />
    </>
)

export default page
