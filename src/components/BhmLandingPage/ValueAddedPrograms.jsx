"use client"
import React from "react"
import Image from "next/image"

const QualityPolicy = () => {
  return (
    <section
      className={`
        relative w-full mb-10 bg-cover bg-center flex items-center 
        h-[800px] md:h-[80vh] lg:h-[90vh] lg:mt-0 
      `}
    >
      {/* Background Images */}
      <div
        className={`
          absolute inset-0 
          bg-[url('/bhm-landing/intenship-mobile-002.webp')] 
          md:bg-[url('/bhm-landing/intenship-tab-002.webp')]
          lg:bg-[url('/bhm-landing/intenship-img-001.webp')]
          bg-cover bg-center
        `}
      />

      {/* Overlay Content */}
      <div className="relative z-10 w-full px-4 max-w-6xl mx-auto">
        <div className="container mx-auto ">
          <div className="flex justify-center lg:justify-start items-end lg:items-center h-[800px] md:h-[60vh] lg:h-[1px]">
            <div className="py-6 max-w-md sm:max-w-xl md:max-w-3xl lg:w-[500px] text-center lg:text-left text-white  space-y-6">
              <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#ffffff]">
                Internship
              </h5>
              <p className="text-sm md:text-base font-medium monser-400 max-w-md text-[#ffffff]">
                <strong className="monser-600">
                  Guaranteed paid internship with the Taj Group of Hotels,
                </strong>
                offering hands-on experience in five-star operations and guest
                service excellence.
              </p>
              <div className="rounded-md p-3 mt-4 flex justify-center lg:justify-start">
                <Image
                  src="/bhm-landing/Taj-01.svg"
                  alt="Taj Logo"
                  width={150}
                  height={150}
                  className="object-contain lg:w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityPolicy
