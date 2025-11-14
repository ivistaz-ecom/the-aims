import React from "react"
import Image from "next/image"
import ProgramButton from "./ProgramButton"

const programs = [
  { title: "PhD in Management", href: "/phd-doctoral-programs" },
  {
    title: "MBA Master of Business Administration",
    href: "/business-school/master-business-administration",
  },
  {
    title: "BBA Bachelor of Business Administration",
    href: "/business-school/bachelor-business-administration",
  },
  {
    title: "BBA Aviation",
    href: "/business-school/bachelor-business-administration-aviation-management",
  },
  {
    title: "BBA+ CA/ACCA",
    href: "/upcoming-page",
  },
]

const SchoolOfBusiness = () => {
  return (
    <div className="relative w-full h-[120vh] md:h-[90vh] lg:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/programs/businees-school-desktop.webp"
        alt="School of Business at AIMS Institutes"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Mobile & Tablet Background Image */}
      <Image
        src="/programs/business-mobile.webp"
        alt="School of Business at AIMS Institutes"
        fill
        className="block lg:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col lg:justify-center justify-end px-4 pb-4 lg:pb-16 pt-12 md:px-12 lg:px-16 ">
        <div className="max-w-xl space-y-6 text-white">
          <div className="space-y-3">
            <h5 className="monser-600 text-2xl leading-tight lg:text-5xl lg:text-left text-center ">
              School of Business
            </h5>
            <span className="monser-400  text-white lg:text-xl text-sm">
              Where future leaders are forged. Our business programs build
              strategic thinking, industry readiness, and entrepreneurial
              vision.
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {programs.map((program) => (
              <ProgramButton key={program.title} href={program.href}>
                {program.title}
              </ProgramButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolOfBusiness
