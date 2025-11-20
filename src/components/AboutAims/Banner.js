import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerSoH = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/about-aims/About-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/about-aims/About-aims-mobile-banner.webp')]" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* ✅ Top Content Container */}
        <div className="absolute top-5 md:right-20 left-0">
          <div className="">
            <div className="container mx-auto py-4 px-4 lg:px-8">
              <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
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

        {/* Bottom Content Container */}
        <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 px-4 lg:px-8">
          <div className="container mx-auto py-4 ">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-10 gap-4">
              <div className="flex items-center lg:items-start w-full ">
                <h1 className="text-white text-center lg:text-left text-2xl lg:text-[60px] playfair-300  w-full">
                  <span className="playfair-400 block lg:inline ">
                    AIMS Institutes
                  </span>
                  <span className="playfair-400 text-[#D7FCF4] block lg:-mt-3 ">
                    Your Top Business School
                  </span>
                  <span className="playfair-400 text-[#D7FCF4] block lg:-mt-3 px-1">
                    in Bengaluru
                  </span>
                </h1>
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

export default HeroBannerSoH
