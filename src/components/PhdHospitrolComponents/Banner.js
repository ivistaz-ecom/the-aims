"use client"
import React from "react"
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'

const PhdBanner = ({ announcements, pageType = 'phd' }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image (people included in bg) */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-top bg-no-repeat md:bg-[url('/business_school/phd/phd_banner.webp')] bg-[url('/business_school/phd/phd_mobile_banner.webp')]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto h-full flex flex-col md:justify-between justify-center px-4 lg:px-6">

          {/* Top-right Logo */}
          <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-20">
            <Image
              src="/pre-university-college/empowering_minds_since1994.webp"
              alt="Empowering Minds Since 1994"
              width={200}
              height={200}
              className="object-contain h-auto w-50 "
              priority
            />
          </div>

          {/* Headline */}
          <div className="pt-20 lg:pt-0 text-white text-center md:text-left lg:mt-5">
            <h1 className="font-bold leading-tight md:text-left text-center text-3xl sm:text-4xl lg:text-5xl">
              Focused Research.<br /> Real-World Impact.
            </h1>
          </div>

          {/* Program Description */}
          <div className="max-w-xl mx-auto md:mx-0 text-white text-center md:text-left">
            <h5 className="text-xl sm:text-2xl lg:text-3xl font-semibold " style={{ fontWeight: "600" }}>
              PhD <span className="hidden md:inline"><br /></span> Doctoral Program
            </h5>
            <p className="mt-3 lg:mt-1 text-sm sm:text-base lg:text-lg max-w-md mx-auto md:mx-0">
              A doctoral journey designed for scholars who aim to go beyond the expected,
              through structured research, academic rigour, and a future-ready mindset.
            </p>

            {/* Accreditation Logos (responsive for desktop) */}
            <div className="hidden md:block mt-4 mx-auto md:mx-0 w-full max-w-[230px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              <Image
                src="/business_school/phd/phd_logo.webp"
                alt="Accreditations"
                width={200}
                height={100}
                className="w-[350px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile-only Logo at Bottom (inside container for consistent alignment) */}
          <div className="mt-auto md:hidden w-[200px] sm:w-[250px] mx-auto">
            <Image
              src="/business_school/phd/phd_logo.webp"
              alt="Accreditations"
              width={400}
              height={100}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default PhdBanner
