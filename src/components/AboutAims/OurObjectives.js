"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Objectives = () => {
  // Slider settings for mobile
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoslide: true,
    autoplay: true,

    autoplaySpeed: 1000,
  }

  // Mobile images (different ones)
  const mobileImages = [
    "/about-aims/Our (1).webp",
    "/about-aims/Our (3).webp",
    "/about-aims/Our.webp",
    "/about-aims/Our (2).webp",
  ]

  return (
    <>
      {/* Desktop + Tablet View */}

      <section className="bg-[#E1F9F4] py-10 hidden sm:block">
        <div className=" px-4 lg:px-8 mb-5">
          <div className="container mx-auto ">
            {/* Title */}
            <h3 className=" text-[#0C2165] playfair-300 mb-3 md:mb-6 leading-tight ">
              Our Objectives
            </h3>
            <p className=" mb-10 ">
              The primary objective of AIMS Institutes is to provide
              <br className="hidden lg:block" />
              quality education to create:
            </p>

            {/* Single Image for Desktop */}
            <div className="flex flex-col lg:flex-row ">
              <Image
                src="/about-aims/our-objective.svg"
                alt="Our Objective"
                width={1800}
                height={1200}
                className="w-full md:h-[250px] lg:h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View (Slider with different images) */}
      <section className="bg-teal-50 py-10 block sm:hidden">
        <div className=" px-4 lg:px-8 mb-5">
          <div className="container mx-auto ">
            {/* Title */}
            <h3 className="text-2xl text-[#0C2165] playfair-300 leading-tight">
              Our Objectives
            </h3>
            <p className=" mb-6">
              The primary objective of AIMS Institutes is to provide <br />
              quality education to create:
            </p>

            {/* Slider with different images */}
            <Slider {...settings}>
              {mobileImages.map((img, index) => (
                <div key={index} className="px-2">
                  <Image
                    src={img}
                    alt={`Our Objective ${index + 1}`}
                    width={1800}
                    height={1200}
                    className="w-full h-[250px] object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Objectives
