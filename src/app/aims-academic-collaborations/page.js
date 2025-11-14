import React from "react"
import AcadamicCollaborations from "@/components/AcadamicCollaborations"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Academic Collaborations | AIMS Institutes"
        description="Explore the strategic academic collaborations of AIMS Institutes that deliver global exposure, industry partnerships, and research opportunities."
        path="/aims-academic-collaborations"
        metaImage="/images/aims-logo.png"
      />
      <AcadamicCollaborations />
    </>
  )
}

export default page
