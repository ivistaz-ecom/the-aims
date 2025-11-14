"use client"

import React from "react"
import Image from "next/image"
import ProgramButton from "./ProgramButton"

const SchoolOfPUC = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[90vh] lg:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/programs/puc-desktop.webp"
        alt="Pre-University College students"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Mobile & Tablet Background Image */}
      <Image
        src="/programs/puc-mobile.webp"
        alt="Pre-University College students"
        fill
        className="block lg:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col  lg:justify-center justify-end px-4 pb-4 lg:pb-20 lg:pt-24 md:px-12 lg:px-16">
        <div className="max-w-xl space-y-6 text-white">
          <div className="space-y-3 text-left">
            <h5 className="monser-600 text-2xl leading-tight lg:text-5xl lg:text-left text-center">
              Pre-University <br className="hidden lg:block" /> College (PUC)
            </h5>
            <span className="monser-400 leading-relaxed text-white max-w-lg lg:text-xl text-sm">
              The foundation for students to define their path and prepare for
              undergraduate study, built on clarity, discipline, and direction.
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="monser-400 lg:text-xl text-base">Science</span>
              <div className="mt-2 flex flex-wrap gap-3">
                <ProgramButton href="/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee">
                  PCMB
                </ProgramButton>
                <ProgramButton href="/pre-university-college/science-pcmb-pcmc">
                  PCMC
                </ProgramButton>
              </div>
            </div>

            <div>
              <span className="monser-400 lg:text-xl text-base">Commerce</span>
              <div className="mt-2 flex flex-wrap gap-3">
                <ProgramButton href="/pre-university-college/commerce-ceba">
                  CEBA
                </ProgramButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolOfPUC
