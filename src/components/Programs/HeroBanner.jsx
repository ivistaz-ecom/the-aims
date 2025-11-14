import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({
  announcements,
  pageType = "centreForInternationalLiaison",
}) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/programs/programs-desktop-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/programs/programs-mobile-banner.webp')]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 bottom-10 lg:mx-10 mx-0">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center gap-6">
              <h5 className="playfair-500 text-3xl leading-tight text-white lg:text-6xl">
                Programs Built to <br /> Advance Your Journey
              </h5>
            </div>
          </div>
        </div>

        {/* Empower Image*/}
        <div className="absolute top-5 left-0 right-0 lg:mx-10 mx-0">
          <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0 flex justify-start lg:justify-end">
            <Image
              src="/white-empower.svg"
              alt="Empowering Minds"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
