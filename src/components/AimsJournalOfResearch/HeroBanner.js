import React from "react";
import ApplicationMarquee from "../../shared/ApplicationMarquee";
import Image from "next/image";

const HeroBanner = ({ announcements, pageType = "admissions" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/aims-journal-of-research/banner-02.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/aims-journal-of-research/mobile-02.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>
        <div className="absolute lg:top-10 top-10 right-15 px-4 lg:px-0">
         <div className="lg:px-8 px-4">
         <div className="container mx-auto py-4">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <Image
                  src="/black-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
         </div>
        </div>
        <div className="absolute lg:top-10 top-0 left-0 px-4 lg:px-0">
         <div className="lg:px-8 px-4">
         <div className="container mx-auto py-4">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <Image
                  src="/white-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                  className="lg:hidden"
                />
              </div>
            </div>
          </div>
         </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-0">
        <div className="lg:px-8 px-4">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <h1 className="text-white text-center lg:text-left md:text-left xl:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                  AIMS JOURNAL OF
                  <br className="" />
                  RESEARCH
                </h1>
              </div>
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
