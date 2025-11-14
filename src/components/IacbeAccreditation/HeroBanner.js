import React from "react";
import ApplicationMarquee from "../../shared/ApplicationMarquee";
import Image from "next/image";

const HeroBanner = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/iacbe/banner-03.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/iacbe/mobile.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        <div className="absolute top-0 lg:top-10 left- lg:right-20 px-4 lg:px-0">
          <div className="container mx-auto py-4">
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

        {/* Bottom Content Container */}
        <div className="absolute bottom-5 left-0 lg:right-10 px-4 lg:px-0">
          <div className="lg:px-8 px-4">
          <div className="container mx-auto">
            <div className="flex items-center py-10">
              <Image
                src="/iacbe/iacbe.webp"
                alt="Recruiters"
                width={300}
                height={300}
                className="object-contain w-52 lg:w-64"
              />
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start md:gap-4 gap-4">
              <div className="flex items-center">
                <h1 className="text-white text-center lg:text-left md:text-left xl:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                  IACBE Accreditation
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

        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  );
};

export default HeroBanner;





