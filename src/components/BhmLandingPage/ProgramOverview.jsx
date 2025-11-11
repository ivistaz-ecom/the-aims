"use client"
import Image from "next/image"
import React from "react"

const ProgramOverview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 px-6 md:px-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 bottom-11 hidden w-[680px] lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/bhm-landing/Program-img-003.svg"
            alt=""
            fill
            className="object-contain object-left"
            sizes="(min-width: 1024px) 420px, 0px"
            priority
          />
        </div>
      </div>

      <div className="relative">
        {/* Title and Description */}
        <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-16">
          <h5 className="playfair-500 mb-6 text-4xl text-[#002561] md:text-5xl lg:text-6xl">
            Program Overview
          </h5>
          <p className="text-lg leading-relaxed text-gray-700">
            The Hospitality program at AIMS Institutes integrates culinary arts,
            front office operations, marketing, and entrepreneurship to equip
            graduates for global success in the service economy.
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row">
          {/* Image Section */}
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="h-full w-full">
              <Image
                src="/bhm-landing/section02.webp"
                alt="AIMS Hospitality Students"
                width={1500}
                height={1400}
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <div className="monser-600 mb-4 text-[24px]">
              Powered by AIMSENRICH & VET by EHL
            </div>
            <div className="leading-relaxed text-gray-700">
              Our curriculum is enhanced through
              <span className="monser-600 px-1">AIMSENRICH</span>, a hands-on
              skill development platform offering globally benchmarked training
              programs in partnership with
              <span className="monser-600 px-1">
                EHL (École hôtelière de Lausanne)
              </span>
              , the world’s No.1 hospitality management school.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
