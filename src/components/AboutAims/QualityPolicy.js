"use client"
import React from "react"

const QualityPolicy = () => {
  return (
    <section
      className={`
        relative w-full mb-10 bg-cover bg-center flex items-center 
        h-[800px] md:h-[90vh] lg:h-[600px]  
      `}
    >
      {/* Background Images */}
      <div
        className={`
          absolute inset-0 
          bg-[url('/about-aims/Quality-mobile-image-01.webp')] 
          md:bg-[url('/about-aims/Quality_tab-image-01.webp')]
          lg:bg-[url('/about-aims/Quality-desktop-image-01.webp')]
          bg-cover bg-center
        `}
      />

      {/* Overlay Content */}
      <div className="relative z-10 w-full px-4 lg:px-8">
        <div className="container mx-auto ">
          <div className="flex justify-center lg:justify-start items-end lg:items-center h-[800px] md:h-[60vh] lg:h-[1px]">
            <div className="py-6 max-w-md sm:max-w-xl md:max-w-3xl lg:w-[500px] text-center lg:text-left text-white rounded-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                Quality Policy
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                We at AIMS Institutes are committed to creating intellectual
                capital through an exemplary value-based system, which provides
                foundation for a lifetime of professional growth and personal
                development. This is achieved by adopting innovative teaching,
                providing international exposure, and encouraging continuous
                research and learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityPolicy
