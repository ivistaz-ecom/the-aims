import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerSoH = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/alumni-association/alumni-association-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/alumni-association/alumni-association-banner-mobile.webp')]" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* ✅ Top Content Container */}
        <div className="absolute top-5 left-0 right-0 px-4 lg:px-8  ">
          <div className="container mx-auto py-4 lg:flex lg:justify-end lg:items-end ">
            <div>
              <h6 className="tracking-wider text-xs sm:text-sm lg:text-base text-black">
                EMPOWERING MINDS
              </h6>
              <h5
                className="text-lg sm:text-xl lg:text-2xl font-black text-black"
                style={{ fontWeight: "900" }}
              >
                SINCE 1994
              </h5>
            </div>
          </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 px-4 lg:px-8">
          <div className="container mx-auto py-4 ">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-10 gap-4">
              <div className="flex items-center lg:items-start w-full">
                <h1 className="text-white text-center lg:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16 w-full">
                  <span className="playfair-400 block lg:inline">
                    AIMS Institutes
                  </span>
                  <span className="playfair-400 text-[#D7FCF4] block ">
                    Your Top Business School
                  </span>
                  <span className="playfair-400 text-[#D7FCF4] block lg:inline">
                    {" "}
                    in Banglore
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
