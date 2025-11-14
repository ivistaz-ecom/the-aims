import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerCoC = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image */}
        {/* <Image
                    src="/code-of-conduct/code-of-conduct-banner.png"
                    alt="Code of Conduct"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                /> */}

        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/code-of-conduct/code-of-conduct-banner.png')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/code-of-conduct/code-of-conduct-banner.png')]" />

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
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                  Code of Conduct
                </h1>
              </div>
              {/* <div className="flex items-center">
                                <Image
                                    src="/school-of-business/iacbe.png"
                                    alt="IACBE"
                                    width={400}
                                    height={100}
                                    className="object-contain"
                                />
                            </div> */}
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

export default HeroBannerCoC
