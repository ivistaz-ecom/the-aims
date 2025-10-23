import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerSoH = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[80vh] md:h-[76vh] lg:h-[75vh] xl:h-[76vh] 2xl:h-[80.5vh] 3xl:h-[90vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/bhm-img/banner-img_converted.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/bhm-img/bhm-mobile-banner_converted.webp')]" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* ✅ Top Content Container */}
        <div className="absolute top-2 left-0 right-0 px-4 lg:px-8">
          <div className="container mx-auto py-4 ">
            <div>
              <h6 className="tracking-[0.25em] !font-[500] text-[13px] text-white">
                EMPOWERING MINDS
              </h6>
              <h5
                className="text-lg sm:text-xl lg:text-2xl font-black text-white"
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
                  <span className="text-[#FF6C02] playfair-300 italic">
                    BHM
                  </span>
                  <span className="ml-2 playfair-300 italic">at AIMS</span>

                  <span className="inline-block lg:hidden ml-2"></span>

                  <span className="inline-block lg:hidden ml-2"></span>
                  <br className="hidden lg:block" />
                  <span className="playfair-400 text-[#D7FCF4]   block lg:inline">
                    The Right Training.
                  </span> 
                  <br className="hidden lg:block" />
                  <span className="playfair-400 text-[#D7FCF4]">
                    The Right Trajectory.
                  </span>
                </h1>
              </div>
              <div className="flex items-center">
                <Image
                  src="/bhm-img/NAAC VET.webp"
                  alt="IACBE"
                  width={200}
                  height={300}
                  className="h-[12vh] w-full"
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

export default HeroBannerSoH
