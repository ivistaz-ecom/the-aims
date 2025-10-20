import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const Banner = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/school-of-hospitality/school-of-hospitality-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/school-of-hospitality/Banner1-mob.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-0">
              <div className="flex items-center">
                <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 lg:text-start text-center">
                  AIMS School of <br className="block" />
                  <span className="italic playfair-400 text-[#D7FCF4]">
                    Hospitality and Tourism
                  </span>
                </h1>
              </div>
              <div className="flex items-center">
                <Image
                  src="/naac/nacc-logo.svg"
                  alt="IACBE"
                  width={200}
                  height={100}
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-5 left-0 right-0">
          <div className="px-4 lg:px-8">
          <div className="container mx-auto py-4 ">
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
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default Banner
