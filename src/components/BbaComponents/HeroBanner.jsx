import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] lg:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/bba/bba-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/bba/mobile-banner-new.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0  bottom-10 md:bottom-15 lg:mx-10 mx-0">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-center lg:text-left">
                  {/* Hero Text */}
                  <h1 className="text-white text-4xl leading-tight">
                    <span className="italic playfair-300 text-4xl md:text-[60px]">
                      BBA
                    </span>{" "}
                    <span className="text-4xl md:text-[60px] playfair-300">
                      at AIMS
                    </span>
                  </h1>
                  <h5 className="playfair-300 text-[#C9FFF4] text-3xl md:text-[50px] leading-tight tracking-wider -mt-2 md:-mt-6 ">
                    Sharpen Your Aim. <br />
                    Step Into Business With Confidence.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empower Image*/}
        <div className="absolute top-5 left-0 right-0 lg:mx-10 mx-0">
          <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0">
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
