"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const Banner = ({ announcements, pageType = "admissions" }) => {
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
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/accreditations/accreditations_converted.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/accreditations/accreditations-mobile-banner_converted.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        <div className="absolute top-5 left-0 right-0 ">
          <div className="px-4 lg:px-8">
            <div className="container mx-auto">
              <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                <div className="flex items-center">
                  <Image
                    src={
                      isMobile
                        ? "/pre-university-college/empowering_minds_since1994_black.webp"
                        : "/pre-university-college/empowering_minds_since1994_black.webp"
                    }
                    alt="Pre-University College Logo"
                    width={200}
                    height={200}
                    unoptimized
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute md:bottom-10 bottom-0 left-0 right-0  px-4 lg:px-8 ">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-0">
              <div className="flex items-center">
                <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 md:text-start text-center">
                  Recognised Excellence.
                  <br className="hidden lg:block" />
                  <span className="playfair-400 text-[#D7FCF4]  block lg:inline">
                    Accredited Ambitions.
                  </span>
                </h1>
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

export default Banner
