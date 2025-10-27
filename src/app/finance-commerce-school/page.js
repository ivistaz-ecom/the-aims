import React from 'react'
import SchoolOfFinanceCommerce from '@/components/SchoolOfFinanceCommerce'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="AIMS BCom Application Process Bengaluru | MCA Benefits"
            description="Explore the AIMS Institutes BCom application process Bengaluru and discover the benefits of doing an MCA from a private college with good infrastructure."
            path="/finance-commerce-school"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <div>
            <SchoolOfFinanceCommerce />
        </div>
    </>
)

export default page
