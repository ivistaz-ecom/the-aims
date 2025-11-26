import Link from "next/link"
import React from "react"
import Button from "@/shared/Button"

const InstitutionalDevelopmentPlan = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Institutional Development Plan
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-2">
            <p className="text-lg">
              The Institutional Development Plan outlines AIMS Institutes’
              long-term academic, infrastructural, and administrative roadmap.
              It sets clear goals for curriculum strengthening, research
              advancement, faculty development, digital transformation, and
              student support systems. The IDP guides the institution’s
              continuous growth and aligns its initiatives with national quality
              benchmarks and future educational needs.
            </p>
          </div>
          <div>
           
            <div className="mt-4 w-fit">
              <Button href="/aims-ipd/aims-ipd.pdf" target="_blank" variant="secondary" showArrow={true}>
              Institutional Development Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstitutionalDevelopmentPlan
