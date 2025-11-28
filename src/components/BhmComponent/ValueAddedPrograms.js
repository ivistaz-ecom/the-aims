import React from "react"
import ValueAddedProgramsCommon from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import ValueAddedPrograms from "../shared/ValueAddedProgramsProps"
import Image from "next/image"
import BhmCompanies from "../shared/BhmCompanies"

const BbaValueAddedPrograms = () => {
  return (
    <>
      <ValueAddedProgramsCommon programKey="bhm" />
      {/* Student Image with Overlay */}
      <div className="relative mx-auto">
        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <div className="w-full h-[700px]">
            <Image
              src="/bhm-img/BHM-new-Desktop-image.webp"
              alt="AIMS Students"
              width={1400}
              height={1400}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(270deg, var(--Aims-Blue, #F5BBBC) 0%, var(--Aims-Blue, #F5BBBC) 25%, rgba(12, 33, 101, 0.00) 25%)",
            }}
          ></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-2/5 md:px-10">
              <h3 className="text-[#010066] text-xl md:text-lg playfair-300 mb-3 md:mb-6 leading-tight">
                Employers Who
                <br /> Hire Our BHM
                <br /> Graduates
              </h3>
              <p className="text-[#010066] text-xs sm:text-sm md:text-base monser-400 leading-relaxed">
                AIMS BHM graduates have been placed at:
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="block lg:hidden relative">
          <div className="w-full h-[700px] md:h-[100vh]">
            <Image
              src="/bhm-img/BHM-new-Mobile-image.webp"
              alt="AIMS Students"
              width={2400}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 top-[400px] md:top-[50vh]">
            <div className="w-full">
              <h3 className="text-[#010066] text-lg sm:text-2xl playfair-300 mb-3 leading-tight">
                Employers Who Hire Our BHM Graduates
              </h3>
              <p className="text-[#010066] text-sm monser-400 leading-relaxed">
                AIMS BHM graduates have been placed at:
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Companies Grid */}
      <BhmCompanies />
    </>
  )
}

export default BbaValueAddedPrograms
