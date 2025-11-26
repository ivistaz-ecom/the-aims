import React from "react"
import DocumentPageTemplate from "@/shared/DocumentPageTemplate"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | NCC & NSS"
        description="The NSS unit at AIMS Institutes promotes student participation in community engagement, social responsibility, and nation-building activities. Through camps, awareness programs, and service initiatives, students learn leadership, teamwork, and civic responsibility."
        path="/ncc-nss"
        metaImage="/images/aims-logo.png"
      />
      <DocumentPageTemplate
        heading="NCC & NSS"
        paragraph="The NSS unit at AIMS Institutes promotes student participation in community engagement, social responsibility, and nation-building activities. Through camps, awareness programs, and service initiatives, students learn leadership, teamwork, and civic responsibility while contributing meaningfully to society."
        buttonName="About NSS"
        pdfLink="/pdf/nss/About-NSS.pdf"
      />
    </>
  )
}

export default page
