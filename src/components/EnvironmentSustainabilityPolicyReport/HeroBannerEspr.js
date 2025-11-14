import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerEspr = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/environment-sustainability-policy-report/environment-sustainability-policy-report-banner.webp"
          alt="Patents"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 px-4 lg:px-8">
          <div className="container mx-auto py-4 ">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-10 gap-4">
              <div className="flex items-center lg:items-start w-full">
                <h1 className="text-white text-center lg:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16 w-full">
                  AIMS Environmental and <br className="hidden md:block" />
                  Sustainability Policy
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
        <div className="absolute top-5 left-0 right-0 md:block hidden py-4 lg:px-8">
          <div className="container mx-auto">
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
        <div className="absolute top-5 left-0 right-0 md:hidden block">
          <div className="container mx-auto py-4 px-6 lg:px-0">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <Image
                  src="/iacbe/since-black.svg"
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

export default HeroBannerEspr
