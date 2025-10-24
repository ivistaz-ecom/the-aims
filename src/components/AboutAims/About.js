"use client"
import React from "react"
import Image from "next/image"

const GetInvolvedSection = () => {
  return (
    <section className="bg-[#FFFFFF] mb-10 ">
      <div className=" px-4 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="md:w-2/3">
            <h3 className=" text-[#A22877] playfair-300 mb-3 md:mb-6 leading-tight">
              A Clear Path.
              <br /> A Lasting Impact.
            </h3>
            <p className="">
              Every student who walks through our gates brings their own
              aspirations. Our role is to help them sharpen their aim, stay the
              course, and deliver on their potential. That&#39;s the AIMS
               approach-focused, forward-looking, and fiercely committed to
              long-term success.
            </p>
          </div>

          {/* Right Icon */}
          <div className="md:w-1/3 justify-center md:justify-end hidden md:flex">
            <Image
              src="/about-aims/arrows.svg"
              alt="Arrow"
              width={128}
              height={128}
              className=" w-44 h-44"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection
