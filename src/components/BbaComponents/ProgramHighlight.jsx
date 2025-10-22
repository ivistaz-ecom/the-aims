import React from "react"
import Image from "next/image"

const ProgramHighlight = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] lg:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/bba/one-degree-new.webp"
        alt="BBA Program Highlight"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Tablet Background Image */}
      <Image
        src="/bba/mobile-one-degree-new.webp"
        alt="BBA Program Highlight"
        fill
        className="hidden md:block lg:hidden object-cover object-top"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/bba/mobile-one-degree-new1.webp"
        alt="BBA Program Highlight"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center mt-30 md:mt-80 lg:mt-0 ml-0  md:ml-0 lg:ml-20">
        <div className="container mx-auto px-4 md:px-0 lg:px-0">
          <div className="flex lg:justify-end  justify-end mt-42 md:mt-0 lg:mt-0">
            <div className="w-full md:max-w-xl lg:pl-20 pl-0">
              <h3
                className="text-white text-lg md:text-3xl lg:text-3xl playfair-300 leading-tight mb-3 md:mb-6 tracking-wider text-center md:text-center lg:text-left"
                dangerouslySetInnerHTML={{
                  __html: "One Degree. <br/> Multiple Targets.",
                }}
              />
              <p className="text-white text-sm md:text-lg lg:text-lg max-w-md text-center md:text-center lg:text-left ml-0 md:ml-15 lg:ml-0">
                Our graduates have been recruited by top companies across
                sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramHighlight
