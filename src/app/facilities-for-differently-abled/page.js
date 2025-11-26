import React from "react"
import DocumentPageTemplate from "@/shared/DocumentPageTemplate"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | Facilities for Differently Abled"
        description="AIMS Institutes provides barrier-free access and support facilities for differently-abled students, in line with accessibility and inclusivity norms. Ramps, accessible restrooms, assistive features, and supportive services ensure that every student can navigate and benefit from the campus without obstacles."
        path="/facilities-for-differently-abled"
        metaImage="/images/aims-logo.png"
      />
      <DocumentPageTemplate
        heading="Facilities for Differently Abled"
        paragraph="AIMS Institutes provides barrier-free access and support facilities for differently-abled students, in line with accessibility and inclusivity norms. Ramps, accessible restrooms, assistive features, and supportive services ensure that every student can navigate and benefit from the campus without obstacles."
        buttonName="Download accessibility facilities list"
        pdfLink="/pdf/fda/Barrier-Free-Environment.pdf"
      />
    </>
  )
}

export default page
