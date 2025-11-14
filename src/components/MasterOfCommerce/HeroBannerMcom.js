import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBannerMcom = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] lg:h-[76vh] md:h-[76vh] overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 z-30"
          style={{
            background:
              "linear-gradient(135deg, #E6BBD7 0%, #E6BBD7 39%, #531574 100%)",
            opacity: 0.4,
          }}
        />

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col lg:flex-row z-30">
          {/* Left Content */}
          <div className="px-4 lg:px-8 w-full lg:w-1/2 flex flex-col justify-between h-full md:py-10 py-4">
            <div className=" lg:text-start md:text-center text-center">
              <h6 className=" font-light tracking-wider text-[12px]">
                EMPOWERING MINDS
              </h6>
              <p className="text-2xl lg:text-3xl font-bold text-black monser-900">
                SINCE 1994
              </p>

              <h1 className="text-4xl lg:text-6xl font-light text-[#002561] playfair-300 leading-tight lg:mt-10 mt-6">
                Master Finance.
                <br />
                Shape Your Future.
              </h1>

              <div className="space-y-6">
                <h5 className="text-3xl font-bold text-[#0C2165] monser-600">
                  M.COM at AIMS
                </h5>
                <p className="text-lg lg:text-xl  max-w-lg mx-auto lg:mx-0">
                  Sharpen your edge with an M.Com degree that combines academic
                  rigour with practical exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Circular Image */}
          <div className="flex justify-center items-end md:justify-end w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative">
              {/* Mobile Circular Image */}
              <div className="w-96 h-64  rounded-full overflow-hidden lg:hidden flex flex-col items-end justify-end">
                <Image
                  src="/mcom/mcom-hero-banner-mobile.webp"
                  alt="M.Com Student"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Desktop Circular Image */}
              <div className="hidden lg:block w-[700px] h-[550px] rounded-full overflow-hidden">
                <Image
                  src="/mcom/mcom-hero-banner.webp"
                  alt="M.Com Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop NAAC Accreditation Box - Absolute positioned */}
        <div className="hidden lg:block absolute bottom-0 left-0 z-30">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="flex items-center justify-center">
              <Image
                src="/mcom/naac.svg"
                alt="NAAC Accreditation"
                width={550}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NAAC Accreditation Box - Mobile */}
      <div className="lg:hidden bg-white/90 backdrop-blur-sm rounded-2xl max-w-md shadow-lg mx-auto mt-4">
        <div className="flex items-center justify-center">
          <Image
            src="/mcom/naac.svg"
            alt="NAAC Accreditation"
            width={200}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBannerMcom
