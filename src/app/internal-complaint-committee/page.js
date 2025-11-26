import React from "react"
import DocumentPageTemplate from "@/shared/DocumentPageTemplate"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | Internal Complaint Committee"
        description="The Internal Complaint Committee at AIMS Institutes ensures a safe, respectful, and inclusive environment for all members of the campus. The ICC addresses complaints related to sexual harassment in accordance with the POSH Act, ensuring confidentiality, fairness, and timely redressal."
        path="/internal-complaint-committee"
        metaImage="/images/aims-logo.png"
      />
      <DocumentPageTemplate
        heading="Internal Complaint Committee"
        paragraph="The Internal Complaint Committee at AIMS Institutes ensures a safe, respectful, and inclusive environment for all members of the campus. The ICC addresses complaints related to sexual harassment in accordance with the POSH Act, ensuring confidentiality, fairness, and timely redressal."
        buttonName="View ICC members and report"
        pdfLink="/pdf/icc/ICC-website.pdf"
      />
    </>
  )
}

export default page
