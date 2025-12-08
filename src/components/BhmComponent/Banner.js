"use client"
import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"
import dynamic from "next/dynamic"
import "react-multi-carousel/lib/styles.css"

// Fallback component to show first banner while Carousel loads
const BannerFallback = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-[90vh] lg:h-[85vh] xl:h-[88vh] 2xl:h-[90vh] overflow-hidden bg-[#0a1628]">
      {/* Desktop Image */}
      <Image
        src="/bhm-img/banner-img_converted.webp"
        alt="BHM Banner"
        fill
        priority
        fetchPriority="high"
        quality={90}
        className="hidden lg:block object-cover object-center"
        sizes="100vw"
      />
      {/* Tablet Image */}
      <Image
        src="/bhm-img/banner-img_converted.webp"
        alt="BHM Banner"
        fill
        priority
        fetchPriority="high"
        quality={90}
        className="hidden md:block lg:hidden object-cover object-center"
        sizes="100vw"
      />
      {/* Mobile Image */}
      <Image
        src="/bhm-img/bhm-mobile-banner_converted.webp"
        alt="BHM Banner"
        fill
        priority
        fetchPriority="high"
        quality={90}
        className="md:hidden object-cover object-center"
        sizes="100vw"
      />
    </div>
  )
}

// Dynamically import Carousel with SSR disabled to avoid hydration mismatch
const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
  loading: () => <BannerFallback />,
})

const HeroBannerSoH = ({ announcements, pageType = "admissions" }) => {
  // You can add as many banner slides as you want here
  const banners = [
    {
      desktop: "/bhm-img/banner-img_converted.webp",
      tablet: "/bhm-img/banner-img_converted.webp",
      mobile: "/bhm-img/bhm-mobile-banner_converted.webp",
    },
    {
      desktop: "/bhm-img/bhmBannerDesktop.webp",
      tablet: "/bhm-img/bhmBannerTab.webp",
      mobile: "/bhm-img/bhmBannerMobile.webp",
    },
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  }

  return (
    <>
      <div className="relative">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          arrows={true}
          customLeftArrow={
            <div className="z-10 absolute left-4 lg:left-10 cursor-pointer top-1/2 -translate-y-1/2 bg-white hover:bg-[#FF6C02] hover:text-white text-black p-3 rounded-full shadow transition-colors duration-300">
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
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          customRightArrow={
            <div className="z-10 absolute right-4 lg:right-10 cursor-pointer top-1/2 -translate-y-1/2 bg-white hover:bg-[#FF6C02] hover:text-white text-black p-3 rounded-full shadow transition-colors duration-300">
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
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          showDots={false}
          pauseOnHover={false}
          swipeable={true}
          draggable={true}
          className="relative"
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative w-full h-[85vh] md:h-[90vh] lg:h-[85vh] xl:h-[78vh] 2xl:h-[90vh] lg:top[60%] xl:top[60%] overflow-hidden bg-[#0a1628]"
            >
              {/* First slide uses Next.js Image with priority for LCP optimization */}
              {index === 0 ? (
                <>
                  {/* Desktop Image - Priority */}
                  <Image
                    src={banner.desktop}
                    alt="BHM Banner"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    className="hidden lg:block object-cover object-top"
                    sizes="100vw"
                  />
                  {/* Tablet Image - Priority */}
                  <Image
                    src={banner.tablet}
                    alt="BHM Banner"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    className="hidden md:block lg:hidden object-cover object-center"
                    sizes="100vw"
                  />
                  {/* Mobile Image - Priority */}
                  <Image
                    src={banner.mobile}
                    alt="BHM Banner"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    className="md:hidden object-cover object-center"
                    sizes="100vw"
                  />
                </>
              ) : (
                <>
                  {/* Background Image - Desktop */}
                  <div
                    className="hidden lg:block w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${banner.desktop})` }}
                  />
                  {/* Background Image - Tablet */}
                  <div
                    className="hidden md:block lg:hidden w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${banner.tablet})` }}
                  />
                  {/* Background Image - Mobile */}
                  <div
                    className="md:hidden w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${banner.mobile})` }}
                  />
                </>
              )}

              {/* Gradient Overlay */}
              {/* <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
                }}
              ></div> */}

              {/* Top Content Container - Inside each slide */}
              {index === 0 && (
                <div className="absolute top-2 left-0 right-0 px-4 lg:px-8 z-10">
                  <div className="container mx-auto py-4">
                    <div>
                      <h6 className="tracking-[0.25em] !font-[500] text-[13px] text-white">
                        EMPOWERING MINDS
                      </h6>
                      <h5
                        className="text-lg sm:text-xl lg:text-2xl font-black text-white"
                        style={{ fontWeight: "900" }}
                      >
                        SINCE 1994
                      </h5>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Content Container - Inside each slide */}
              {index === 0 && (
                <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 px-4 lg:px-8 z-10">
                  <div className="container mx-auto py-4">
                    <div className="flex lg:flex-row flex-col items-center justify-between md:gap-10 gap-4">
                      <div className="flex items-center lg:items-start w-full">
                        <h1 className="text-white text-center lg:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16 w-full">
                          <span className="text-[#FF6C02] playfair-300 italic">
                            BHM
                          </span>
                          <span className="ml-2 playfair-300 italic">at AIMS</span>

                          <span className="inline-block lg:hidden ml-2"></span>

                          <span className="inline-block lg:hidden ml-2"></span>
                          <br className="hidden lg:block" />
                          <span className="playfair-400 text-[#D7FCF4] block lg:inline">
                            The Right Training.
                          </span>
                          <br className="hidden lg:block" />
                          <span className="playfair-400 text-[#D7FCF4]">
                            The Right Trajectory.
                          </span>
                        </h1>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/bhm-img/NAAC VET.webp"
                          alt="IACBE"
                          width={200}
                          height={300}
                          className="h-[12vh] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBannerSoH
