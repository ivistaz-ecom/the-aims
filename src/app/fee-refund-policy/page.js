import React from "react"
import DocumentPageTemplate from "@/shared/DocumentPageTemplate"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | Fee Refund Policy"
        description="AIMS Institutes follows a transparent fee refund policy in accordance with regulatory guidelines. Refund eligibility is based on the timing of admission withdrawal and the terms outlined in the official refund document."
        path="/fee-refund-policy"
        metaImage="/images/aims-logo.png"
      />
      <DocumentPageTemplate
        heading="Fee Refund Policy"
        paragraph="AIMS Institutes follows a transparent fee refund policy in accordance with regulatory guidelines. Refund eligibility is based on the timing of admission withdrawal and the terms outlined in the official refund document. Students are encouraged to review the policy carefully to understand applicable timelines, conditions, and documentation requirements."
        buttonName="Download the Fee Refund Policy"
        pdfLink="fee-refund-policy/fee-payment-terms-and-conditions.pdf"
      />
    </>
  )
}

export default page
