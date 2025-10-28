import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"

const HeroBanner = ({ announcements, pageType = "mba" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[100vh] lg:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden lg:block w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/MBA/mba-herobanner.webp')]" />

        {/* Background Image - Tablet */}
        <div className="hidden md:block lg:hidden w-full h-full bg-cover bg-bottom bg-no-repeat bg-[url('/MBA/mobile-banner.svg')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/MBA/mobile-banner.svg')]" />

        {/* Gradient Overlay - Figma Design */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(230, 187, 215, 0.40) 0%, rgba(230, 187, 215, 0.40) 38.94%, var(--Color, rgba(83, 22, 117, 0.40)) 100%)",
          }}
        ></div> */}

        {/* Empower Image*/}
        <div className="absolute top-2 md:top-5 left-0 right-0 lg:mx-10 mx-0 mb-4 md:mb-0 lg:mb-0">
          <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0">
            <div className="flex lg:flex-row flex-col md:items-end md:justify-end items-start justify-start md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/black-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                  className="w-32 md:w-[200px] h-auto  md:pb-0 lg:pb-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 md:px-8 lg:px-8 top-13 md:top-20 lg:top-10">
          <div className="container mx-auto ">
            <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center lg:text-left">
                  {/* Hero Text */}
                  <h5 className="text-[#002561] text-4xl md:!text-[50px] lg:text-[60px]  playfair-500 lg:leading-tight">
                    Learn the Skills.
                    <br />
                    Build the Career.
                  </h5>
                  <h2 className="monser-500 text-3xl lg:text-[40px]  leading-tight text-[#002561] lg:text-black">
                    MBA at AIMS
                  </h2>
                  <h2 className="text-[#A22877] text-xl lg:text-[34px] monser-400 leading-tight">
                    Placement Snapshot
                  </h2>

                  {/* Package */}
                  <div className="mt-4 sm:mt-6 md:mt-6 lg:mt-6">
                    {/* Mobile Package SVG */}
                    <div className="block md:hidden">
                      <Image
                        src="/MBA/mobile-package.svg"
                        alt="Package Information"
                        width={398}
                        height={96}
                        className="w-full h-auto px-4"
                        priority
                      />
                    </div>

                    {/* Tablet Package SVG */}
                    <div className="hidden md:block lg:hidden">
                      <Image
                        src="/MBA/mobile-package.svg"
                        alt="Package Information"
                        width={398}
                        height={96}
                        className="w-full h-auto px-4"
                        priority
                      />
                    </div>

                    {/* Desktop Package SVG */}
                    <div className="hidden lg:block">
                      <Image
                        src="/MBA/desktop-pacakage.svg"
                        alt="Package Information"
                        width={418}
                        height={94}
                        className="w-80 h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop IACBE Accreditation Box - Absolute positioned */}
        <div className="hidden lg:block absolute bottom-0 left-0 z-40">
          <div className="flex items-center justify-center">
            <Image
              src="/MBA/iacbe-destktop-new.webp"
              alt="IACBE"
              width={700}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile and Tablet IACBE */}
      <div className="block lg:hidden">
        <Image
          src="/MBA/iacbe-mobile.svg"
          alt="Mobile Banner and IACBE"
          width={440}
          height={574}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
