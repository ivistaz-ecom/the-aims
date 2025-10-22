import React from "react"
import Image from "next/image"

const OurRepository = () => {
  return (
    <>
      <div className="relative px-4 md:px-8 lg:px-10 py-6 md:py-10">
        <div className="container mx-auto">
          <div className="flex flex-col ">
            <h2 className="text-start text-4xl md:text-6xl text-[#0C2165] mb-6 playfair-300 leading-tight ">
              Our Repository of Scholarly <br /> Articles and Publications
            </h2>
            <div className="max-w-4xl">
              <p className="text-start text-base sm:text-lg md:text-[18px]  monser-400">
                Dive into expertly crafted research, insightful thought
                leadership, and innovative business perspectives that empower
                you to AIM higher and achieve precision in your academic and
                professional journey.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[0%] right-0 lg:block hidden">
          <Image
            src="/community-service/semi-circle.svg"
            alt="School Circle Background"
            width={150}
            height={150}
            className="-w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default OurRepository
