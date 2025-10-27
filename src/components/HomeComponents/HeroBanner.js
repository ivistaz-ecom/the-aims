"use client";
import React from "react";
import ApplicationMarquee from "../../shared/ApplicationMarquee";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroBannerSoB = ({ announcements, pageType = "engineering" }) => {
  // You can add as many banner slides as you want here
  const banners = [
    {
      desktop: "/home/banner-003.webp",
      tablet: "/home/home-banner-tab-02.webp",
      mobile: "/home/mobile-mask.webp",
      logo: "/white-empower.svg",
    },
    {
      desktop: "/home/banner-004.webp",
      tablet: "/home/home-banner-tab-03.webp",
      mobile: "/home/mobile-carousel-02.webp",
      logo: "/white-empower.svg",
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={true}
        customLeftArrow={
          <div className="z-auto absolute left-10 top-1/2 -translate-y-1/2 bg-white hover:bg-[#A22877] hover:text-white text-black p-3 rounded-full shadow">
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
          <div className="z-auto absolute right-10 top-1/2 -translate-y-1/2 bg-white hover:bg-[#A22877] hover:text-white text-black p-3 rounded-full shadow">
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
            className="relative w-full h-[83vh] md:h-[100vh] overflow-hidden"
          >
            {/* Background Image - Desktop */}
            <div
              className="hidden lg:block w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${banner.desktop})` }}
            />

            {/* Background Image - Tablet */}
            <div
              className="hidden md:block lg:hidden w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${banner.tablet})` }}
            />

            {/* Background Image - Mobile */}
            <div
              className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${banner.mobile})` }}
            />

            {/* Top Logo Section */}
            <div className="absolute lg:top-10 top-0 lg:right-0 -right-5">
              <div className="container mx-auto py-4 px-6 lg:px-8">
                <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                  <div className="flex items-center">
                    <Image
                      src={banner.logo}
                      alt="Empower Logo"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-0">
              <div className="container mx-auto">
                <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  );
};

export default HeroBannerSoB;
