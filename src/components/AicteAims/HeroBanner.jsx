import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerRc = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/aicte/hero-banner-new.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/aicte/mobile-banner-new.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 bottom-2 md:bottom-10 lg:mx-10 mx-0">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-center lg:text-left">
                  <div className="flex justify-center md:justify-center lg:justify-start mb-4">
                    <Image
                      src="/aicte/aicte-logo.svg"
                      alt="AICTE Logo"
                      width={200}
                      height={100}
                      className="w-40 h-20 md:w-2/3 md:h-2/3 object-cover rounded-lg"
                      priority
                    />
                  </div>
                  {/* Hero Text */}
                  <h1 className="text-white leading-tight tracking-wider">
                    <span className="playfair-300 text-5xl md:text-[60px]">
                      AICTE
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Empower Logo */}
        <div className="absolute top-5 left-0 right-0 md:hidden lg:mx-10 mx-0">
          <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0 ">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/black-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Black Empower Logo */}
        <div className="absolute top-5 left-0 right-0 hidden md:block lg:mx-10 mx-0">
          <div className="container mx-auto py-4">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/black-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                  priority
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

export default HeroBannerRc
