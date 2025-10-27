import React from 'react'
import EntrepreneurshipCentre from '@/components/EntrepreneurshipCentre'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Entrepreneurship Excellence Centre in Bangalore"
            description="AIMS supports student startups with mentoring, incubation, and networking. Explore entrepreneurship programs that inspire innovation in Bengaluru."
            path="/entrepreneurship-excellence-centre"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <EntrepreneurshipCentre />
    </>
)

export default page
