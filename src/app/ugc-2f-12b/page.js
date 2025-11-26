import React from "react"
import DocumentPageTemplate from "@/shared/DocumentPageTemplate"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | UGC 2(f) & 12B Recognition"
        description="AIMS Institutes is recognised under Section 2(f) and 12B of the University Grants Commission (UGC) Act, enabling the institution to receive central assistance for academic and developmental initiatives."
        path="/ugc-2f-12b"
        metaImage="/images/aims-logo.png"
      />
      <DocumentPageTemplate
        heading="UGC 2 (f) & 12B"
        paragraph="AIMS Institutes is recognised under Section 2(f) and 12B of the University Grants Commission (UGC) Act, enabling the institution to receive central assistance for academic and developmental initiatives. This recognition affirms AIMS' commitment to maintaining quality standards in teaching, research, and institutional governance."
        buttonName="UGC 2(f) & 12B"
        pdfLink="https://www.theaims.ac.in/ugc/2f_and_12b_certificate.pdf"
      />
    </>
  )
}

export default page
