import React from 'react'
import Examinations from '@/components/Examinations'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="College Exam Pattern & Hall Ticket Process | AIMS"
                description="Understand the college exam pattern, evaluation system, internal assessments, and hall ticket procedure for AIMS university examinations."
                path="/examinations"
                metaImage="/images/aims-logo.png"
            />
            <Examinations />
        </>
    )
}

export default page
