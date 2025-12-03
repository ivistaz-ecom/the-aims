import React from "react"
import ReadyToDrawPage from "@/components/ReadyToDrawPage"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Ready to Take AIM? Let's Talk | AIMS Institutes"
        description="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
        path="/ready-to-draw"
        metaImage="/images/aims-logo.png"
      />
      <ReadyToDrawPage />
    </>
  )
}

export default page
