import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"

const HeroBannerMca = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[76vh] overflow-hidden">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(180deg, #DCF5F0 0%, #D377B3 70%, #D377B3 20%)",
            opacity: 0.4,
          }}
        />

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col lg:flex-row z-30">
          <div className="px-4 lg:px-8 w-full lg:w-1/2 flex flex-col justify-between h-full md:py-10 py-4">
            {/* Left Content */}
            <div className=" md:text-center text-center lg:text-start">
              <h6 className=" text-gray-700 font-light tracking-wider text-[12px]">
                EMPOWERING MINDS
              </h6>
              <p className="text-2xl lg:text-3xl font-bold text-black monser-900">
                SINCE 1994
              </p>

              <h1 className="text-4xl lg:text-6xl font-light text-[#002561] playfair-300 leading-tight mt-10">
                The Right Code.
                <br />
                The Right Career.
              </h1>

              <div className="space-y-2 ">
                <h5 className="text-3xl font-bold text-[#0C2165] monser-600">
                  MCA at AIMS
                </h5>
                <p className="text-lg lg:text-xl text-gray-700 max-w-lg md:text-center lg:text-start md:mx-auto lg:mx-0">
                  Sharpen your tech edge with a future-focused MCA at one of the
                  Top Colleges for MCA in India.
                </p>
              </div>
            </div>

            {/* Desktop NAAC Logo */}
            <div className=" md:text-center lg:block hidden">
              <Image
                src="/naac-logo.svg"
                alt="NAAC Accreditation"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content - Circular Image */}
          <div className="flex justify-center items-center md:justify-end md:items-end w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative">
              {/* Mobile Circular Image */}
              <div className="w-96 h-96 rounded-full overflow-hidden lg:hidden">
                <Image
                  src="/mca/mca-banner-mobile.webp"
                  alt="Mca Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Desktop Circular Image */}
              <div className="hidden lg:block w-[700px] h-[550px] rounded-full overflow-hidden">
                <Image
                  src="/mca/mca-banner-new.webp"
                  alt="Mca Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile NAAC Logo */}
      <div className="flex justify-center items-center bg-[#ECECEC] lg:hidden p-4">
        <Image
          src="/naac-logo.svg"
          alt="NAAC Accreditation"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBannerMca
