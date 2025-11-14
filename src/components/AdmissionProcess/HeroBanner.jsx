import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/admission-process/hero-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/admission-process/mobile-banner-new1.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 bottom-12 md:bottom-15 lg:mx-10 mx-0">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-center lg:text-left">
                  {/* Hero Text */}
                  <h1 className="text-white text-4xl leading-tight">
                    <span className="playfair-500 text-4xl md:text-[60px]">
                      Your Goal. <br className="block md:hidden" />
                      Your AIM. <br className="block md:hidden md:inline" />
                      Your Future.
                    </span>
                  </h1>
                  <h5 className="playfair-300 text-[#C9FFF4] text-3xl md:text-[50px] leading-tight  -mt-2 md:-mt-4">
                    Admissions Process at <br /> AIMS Institutes
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empower Image*/}
        <div className="absolute top-5 left-0 right-0 lg:mx-10 mx-0">
          <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0 ">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/white-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
