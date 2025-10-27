import React from 'react'
import MasterOfCommerce from '@/components/MasterOfCommerce'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="MCom Colleges in Bangalore | AIMS Institutes"
            description="Study MCom at AIMS Institutes, Bengaluru. A leading commerce program with research, placements, and advanced learning opportunities."
            path="/finance-commerce-school/master-of-commerce"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <MasterOfCommerce />
    </>
)

export default page
