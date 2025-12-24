"use client"
import React from "react"
import { useParams } from "next/navigation"
import JobDetail from "@/components/Careers/JobDetail"
import { getJobBySlug } from "@/components/Careers/jobsData"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const JobDetailPage = () => {
  const params = useParams()
  const slug = params?.slug

  // Try to find job in both academic and non-teaching
  const job = getJobBySlug(slug, "academic") || getJobBySlug(slug, "non-teaching")

  return (
    <>
      <SeoMetadata
        title={`${job?.title || "Job"} | AIMS Institutes Careers`}
        description={job?.summary?.content || "View job details and apply at AIMS Institutes"}
        path={`/careers/${slug}`}
        metaImage="/images/aims-logo.png"
      />
      <JobDetail job={job} />
    </>
  )
}

export default JobDetailPage

