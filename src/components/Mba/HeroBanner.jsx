"use client"
import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"
import dynamic from "next/dynamic"
import "react-multi-carousel/lib/styles.css"

// Fallback component to show first banner while Carousel loads
const BannerFallback = () => {
  return (
    <div className="relative w-full h-[83vh] md:h-[100vh] lg:h-[76vh] overflow-hidden">
      <div className="hidden lg:block w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/MBA/mba-herobanner.webp')]" />
      <div className="hidden md:block lg:hidden w-full h-full bg-cover bg-bottom bg-no-repeat bg-[url('/MBA/mobile-banner.svg')]" />
      <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/MBA/mobile-banner.svg')]" />
    </div>
  )
}
// Dynamically import Carousel with SSR disabled to avoid hydration mismatch
const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
  loading: () => <BannerFallback />,
})

const HeroBanner = ({ announcements, pageType = "admissions" }) => {
  // Add or modify slides here - each slide has its own images and content
  const slides = [
    {
      id: 1,
      desktop: "/MBA/mba-herobanner.webp",
      tablet: "/MBA/mobile-banner.svg",
      mobile: "/MBA/mobile-banner.svg",
      logo: "/black-empower.svg",
      title: (
        <>
          Learn the Skills.
          <br />
          Build the Career.
        </>
      ),
      subtitle: "MBA at AIMS",
      highlight: "Placement Snapshot",
      packageDesktop: "/MBA/MBA-LPADesktop.svg",
      packageMobile: "/MBA/MBA-LPAmobile.svg",
      iacbeDesktop: "/MBA/iacbe-destktop-new.webp",
      iacbeMobile: "/MBA/iacbe-mobile.svg",
    },
    {
      id: 2,
      desktop: "/MBA/MBA_ADMISSSION_DESKTOP.webp",
      tablet: "/home/tab-home-banner-slider-2nd.webp",
      mobile: "/home/mobile-home-banner-slider-2nd.webp",
      iacbeMobile: "/MBA/MBA_Details.svg",
    }
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  }

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        arrows={true}
        customLeftArrow={
          <div className="z-20 absolute md:top-[45%] left-4 lg:left-10 cursor-pointer top-1/2 -translate-y-1/2 bg-white hover:bg-[#A22877] hover:text-white text-black p-3 rounded-full shadow transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 17"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        }
        customRightArrow={
          <div className="z-20 absolute right-4 md:top-[45%] lg:right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-white hover:bg-[#A22877] hover:text-white text-black p-3 rounded-full shadow transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        }
        showDots={false}
        dotListClass="!bottom-4 lg:!bottom-8"
        pauseOnHover={false}
        swipeable={true}
        draggable={true}
        className="relative"
      >
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div className="relative w-full h-[83vh] md:h-[100vh] lg:h-[76vh] xl:h-[77vh] 2xl:h-[90vh] lg:top[60%] xl:top[60%] overflow-clip">
              {/* Background Images */}
              {index === 0 ? (
                <>
                  {/* Desktop Image - Priority for first slide */}
                  <Image
                    src={slide.desktop}
                    alt="MBA Hero Banner"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    className="hidden lg:block object-cover object-center"
                    sizes="100vw"
                  />
                  {/* Tablet Image - Priority */}
                  <Image
                    src={slide.tablet}
                    alt="MBA Hero Banner"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    className="hidden md:block lg:hidden object-cover object-bottom"
                    sizes="100vw"
                  />
                  {/* Mobile Image - Priority */}
                  <Image
                    src={slide.mobile}
                    alt="MBA Hero Banner"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    className="md:hidden object-cover object-top"
                    sizes="100vw"
                  />
                </>
              ) : (
                <>
                  {/* Background Image - Desktop */}
                  <div
                    className="hidden lg:block w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.desktop})` }}
                  />
                  {/* Background Image - Tablet */}
                  <div
                    className="hidden md:block lg:hidden w-full h-full bg-cover bg-bottom bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.tablet})` }}
                  />
                  {/* Background Image - Mobile */}
                  <div
                    className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.mobile})` }}
                  />
                </>
              )}

              {/* Empower Logo - only show if slide has logo */}
              {slide.logo && (
                <div className="absolute top-2 md:top-5 left-0 right-0 lg:mx-10 mx-0 mb-4 md:mb-0 lg:mb-0">
                  <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0">
                    <div className="flex lg:flex-row flex-col md:items-end md:justify-end items-start justify-start md:gap-10 gap-4">
                      <div className="flex items-center">
                        <Image
                          src={slide.logo}
                          alt="Empower Logo"
                          width={200}
                          height={200}
                          className="w-32 md:w-[200px] h-auto md:pb-0 lg:pb-0"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Container - only show if slide has content */}
              {slide.title && (
                <div className="absolute left-0 right-0 px-4 md:px-8 lg:px-8 top-13 md:top-20 lg:top-10">
                  <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-4 gap-4">
                      <div className="flex items-center">
                        <div className="text-center lg:text-left">
                          {/* Hero Text */}
                          <h5 className="text-[#002561] text-4xl md:!text-[50px] lg:text-[60px] playfair-500 lg:leading-tight">
                            {slide.title}
                          </h5>
                          {slide.subtitle && (
                            <h2 className="monser-500 text-3xl lg:text-[40px] leading-tight text-[#002561] lg:text-black">
                              {slide.subtitle}
                            </h2>
                          )}
                          {slide.highlight && (
                            <h2 className="text-[#A22877] text-xl lg:text-[34px] monser-400 leading-tight">
                              {slide.highlight}
                            </h2>
                          )}

                          {/* Package */}
                          {(slide.packageMobile || slide.packageDesktop) && (
                            <div className="mt-4 sm:mt-6 md:mt-6 lg:mt-6">
                              {/* Mobile Package SVG */}
                              {slide.packageMobile && (
                                <div className="block md:hidden">
                                  <Image
                                    src={slide.packageMobile}
                                    alt="Package Information"
                                    width={398}
                                    height={96}
                                    className="w-full h-auto px-4"
                                  />
                                </div>
                              )}

                              {/* Tablet Package SVG */}
                              {slide.packageMobile && (
                                <div className="hidden md:block lg:hidden">
                                  <Image
                                    src={slide.packageMobile}
                                    alt="Package Information"
                                    width={398}
                                    height={96}
                                    className="w-full h-auto px-4"
                                  />
                                </div>
                              )}

                              {/* Desktop Package SVG */}
                              {slide.packageDesktop && (
                                <div className="hidden lg:block">
                                  <Image
                                    src={slide.packageDesktop}
                                    alt="Package Information"
                                    width={418}
                                    height={94}
                                    className="w-80 h-auto object-contain"
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop IACBE Accreditation Box - only show if slide has it */}
              {slide.iacbeDesktop && (
                <div className="hidden lg:block absolute bottom-0 left-0 z-30">
                  <div className="flex items-center justify-center">
                    <Image
                      src={slide.iacbeDesktop}
                      alt="IACBE"
                      width={700}
                      height={250}
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Apply Now Button - only for slide 2 (index 1) */}
              {index === 1 && (
                <div className="absolute top-[55%] md:top-[45%] lg:top-auto lg:bottom-44 left-1/2 lg:left-44 px-4 lg:px-0 z-40 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 lg:translate-x-0">
                  <a
                    href="https://apply.theaims.ac.in/login"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-[26.5px] border-4 md:border-6 border-[#D8BFD8] bg-[#A22977] px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-lg font-semibold uppercase tracking-wide text-white transition hover:bg-[#ff6c01] hover:text-white"
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </div>

            {/* Mobile and Tablet IACBE - only show if slide has it */}
            {slide.iacbeMobile && (
              <div className="block lg:hidden">
                <Image
                  src={slide.iacbeMobile}
                  alt="Mobile Banner and IACBE"
                  width={440}
                  height={574}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </Carousel>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
