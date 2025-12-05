import React from "react"
import Image from "next/image"

const InfoBoxes = ({
  boxes,
  className = "",
  boxBg = "bg-white",
  boxHoverBg = "hover:bg-[#C9FFF4]",
  numberColor = "text-[#A22877]",
  titleColor = "text-[#A22877]",
  descColor = "text-[#000000]",
}) => {
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className={`container mx-auto ${className}`}>
          <div>
            {/* Mobile: Column Layout */}
            <div className="flex flex-col gap-4 lg:hidden">
              {boxes.map((box, index) => (
                <div key={index}>
                  <div
                    className={`group relative ${boxBg} ${boxHoverBg} transition-all duration-300 transform hover:translate-y-1 hover:scale-[1.01] cursor-pointer w-full rounded-lg py-4 md:py-6 px-4 md:px-6 overflow-hidden`}
                  >
                    {/* Content */}
                    <div className="ml-2">
                      <div
                        className={`text-xl md:text-2xl font-bold mb-2 ${numberColor}`}
                        style={{
                          fontFamily: "Helvetica Neue, Arial, sans-serif",
                          fontWeight: "700",
                          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                          lineHeight: "1.2",
                        }}
                      >
                        {box.number}
                      </div>
                      <h5
                        className={`text-lg md:text-xl ${titleColor} mb-2 monser-600 leading-tight`}
                      >
                        {box.title}
                      </h5>
                      <p
                        className={`text-base md:text-lg ${descColor} monser-400 leading-relaxed`}
                      >
                        {box.description}
                      </p>
                    </div>
                  </div>
                  {/* Line below each box (except last one) - Mobile only */}
                  {index < boxes.length - 1 && (
                    <div className="border-t border-gray-500 mt-4 lg:hidden"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal Layout */}
            <div className="hidden lg:flex gap-1 xl:gap-2 2xl:gap-4 pb-4 overflow-x-auto">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`group relative ${boxBg} ${boxHoverBg} transition-all duration-300 transform hover:translate-y-1 hover:scale-[1.02] cursor-pointer rounded-lg min-h-[200px] flex flex-col justify-start flex-1 min-w-0 overflow-hidden`}
                >
                  {/* Arrow */}
                  <div className="absolute left-1 top-4 bottom-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center group-hover:hidden">
                    <Image
                      src="/bba/arrow.svg"
                      alt="Arrow"
                      width={8}
                      height={110}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-4 xl:ml-5 2xl:ml-6 px-2 py-3 pb-4 h-full flex flex-col">
                    <div
                      className={`text-base xl:text-lg 2xl:text-xl font-bold mb-1 ${numberColor}`}
                      style={{
                        fontFamily: "Helvetica Neue, Arial, sans-serif",
                        fontWeight: "700",
                        textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                        lineHeight: "1.2",
                      }}
                    >
                      {box.number}
                    </div>
                    <h5
                      className={`text-sm lg:text-base xl:text-lg 2xl:text-xl ${titleColor} mb-2 monser-600 leading-tight flex-shrink-0`}
                    >
                      {box.title}
                    </h5>
                    <p
                      className={`text-[11px] xl:text-[12px] 2xl:text-[13px] ${descColor} monser-400 leading-relaxed flex-grow mb-2`}
                    >
                      {box.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBoxes
