import React from 'react'
import PreUniversityCollegeComponent from '@/components/PreUniversityCollegeComponent'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Top PU Colleges in Bangalore | AIMS Institutes"
            description="Understand AIMS Institutes' placement policies. Learn about recruiter engagement, student eligibility, and guidelines for 100% placement support."
            path="/pre-university-college"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <div>
            <PreUniversityCollegeComponent />
        </div>
    </>
)

export default page
