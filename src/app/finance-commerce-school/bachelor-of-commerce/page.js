import React from 'react'
import Bcom from '@/components/BachelorOfCommerce'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Top Commerce Colleges in Bangalore | AIMS BCom"
            description="AIMS Institutes offers one of the best BCom programs in Bengaluru. Industry-linked curriculum, strong placements, and career-ready training."
            path="/finance-commerce-school/bachelor-of-commerce"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <Bcom />
    </>
)

export default page
