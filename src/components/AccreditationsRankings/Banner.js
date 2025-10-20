import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const Banner = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/accreditations/accreditations_converted.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/accreditations/accreditations-mobile-banner_converted.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        <div className="absolute top-2 left-0 right-0 px-4 lg:px-8">
          <div className="container mx-auto py-4 ">
            <div>
              <h6 className="tracking-[0.25em] !font-[500] text-[13px] text-black">
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
        <div className="absolute md:bottom-10 bottom-0 left-0 right-0  px-4 lg:px-8 ">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-0">
              <div className="flex items-center">
                <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 md:text-start text-center">
                  Recognised Excellence.
                  <br className="hidden lg:block" />
                  <span className="playfair-400 text-[#D7FCF4]  block lg:inline">
                    Accredited Ambitions.
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

export default Banner
