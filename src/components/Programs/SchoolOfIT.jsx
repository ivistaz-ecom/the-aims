"use client"

import React from "react"
import Image from "next/image"
import ProgramButton from "./ProgramButton"

const itPrograms = [
  {
    title: "Master of Computer Application MCA",
    href: "/information-technology-school/master-computer-applications",
  },
  {
    title: "Bachelor of Computer Application BCA",
    href: "/information-technology-school/bachelor-computer-applications",
  },
 /* {
    title: "AI/ML | Data Science | Full-Stack Development BCA+",
    href: "/information-technology-school/bachelor-computer-applications",
  },*/
]

const SchoolOfIT = () => {
  return (
    <div className="relative w-full h-[100vh] lg:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/programs/it-desktop.webp"
        alt="School of Information & Technology at AIMS Institutes"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Mobile & Tablet Background Image */}
      <Image
        src="/programs/it-mobile.webp"
        alt="School of Information & Technology at AIMS Institutes"
        fill
        className="block lg:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col lg:justify-center justify-end px-4 pb-4 lg:pb-16 pt-12 md:px-12 lg:px-0 lg:items-end">
        <div className="max-w-2xl space-y-6 text-white lg:pl-14 pl-0">
          <div className="space-y-3">
            <h5 className="monser-600 text-2xl leading-tight lg:text-5xl lg:text-left text-center">
              School of Information <br className="hidden lg:block" /> &
              Technology
            </h5>
            <span className="monser-400 leading-relaxed text-white lg:text-base  max-w-lg text-sm">
              Programs designed to equip students for tomorrow’s digital
              demands, combining core computing skills with applied data
              science.
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {itPrograms.map((program) => (
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

export default SchoolOfIT
