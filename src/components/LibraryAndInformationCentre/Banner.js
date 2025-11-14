"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const CentreForResearchBanner = ({ announcements, pageType = "admissions" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/library-and-information-centre/information-centre.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/library-and-information-centre/library_and_information_centre_mob.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="px-4 lg:px-8">
            <div className="container mx-auto">
              <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
                <div className="flex items-center">
                  <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 lg:text-start text-center">
                    Library and <br className="hidden lg:block" />
                    Information Centre
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 left-0 right-0 ">
          <div className="px-4 lg:px-8">
            <div className="container mx-auto">
              <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                <div className="flex items-center">
                  <Image
                    src={
                      isMobile
                        ? "/pre-university-college/empowering_minds_since1994.webp"
                        : "/pre-university-college/empowering_minds_since1994.webp"
                    }
                    alt="Pre-University College Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
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

export default CentreForResearchBanner


