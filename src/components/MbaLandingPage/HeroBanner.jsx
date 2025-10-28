import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const HeroBanner = () => {
  return (
    <>
      <div className="relative w-full h-[88vh] lg:h-[88vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/mba-landing/herobanner-desktop.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/mba-landing/mobile-banner.webp')]" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Centered Content Container */}
        <div className="absolute inset-0 flex items-end justify-end lg:mb-10 mb-6 px-4 ">
          <div className="container mx-auto text-center">
            <div className="mx-auto">
              {/* Hero Heading */}
              <h5 className="text-white text-3xl md:text-5xl lg:text-6xl playfair-500 mb-6 tracking-wide">
                An MBA That Helps You Get Hired
              </h5>

              {/* Hero Paragraph */}
              <p className="text-white text-lg md:text-xl lg:text-2xl monser-400 mb-8 leading-relaxed max-w-3xl mx-auto">
                Among the top MBA Colleges in India, AIMS Institutes offers{" "}
                <span className="monser-700">
                  dual specialisations, global accreditations
                </span>
                , and 85%+ placements, to launch your career with confidence.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button
                  showReadMore={false}
                  variant="placement"
                  href="https://apply.theaims.ac.in/login"
                >
                  Start Your Application Today
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Empower Image - Top Left */}
        <div className="absolute top-5 left-0 right-0 lg:mx-10 mx-2">
          <div className="container mx-auto md:py-4 py-0">
            <div className="flex items-end justify-end pb-10 md:pb-0 lg:pb-0">
              <Image
                src="/white-empower.svg"
                alt="Empowering Minds"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
