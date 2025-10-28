"use client"
import React, { useState } from "react"
import Image from "next/image"

const ValueAddedPrograms = ({
  programsData,
  title,
  description,
  disclaimer,
}) => {
  const [expandedSection, setExpandedSection] = useState(
    programsData?.[0]?.title || null
  )

  // Handle case when programsData is undefined or empty
  if (!programsData || programsData.length === 0) {
    return (
      <div className="pt-20 pb-10 bg-white px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h3
              className="text-[#0C2165] playfair-300"
              dangerouslySetInnerHTML={{
                __html: title || "Value Added Programs",
              }}
            ></h3>
          </div>
        </div>
      </div>
    )
  }

  const handleItemClick = (item) => {
    setExpandedSection(expandedSection === item ? null : item)
  }

  return (
    <>
      <div className="py-6 md:py-10 bg-white px-4 lg:px-8">
        <div className="hidden lg:block absolute right-0">
          <Image
            src="/MBA/semi-circle.svg"
            alt="Semicircle"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-0">
          <div>
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-0">
              <div className="">
                <h3
                  className="text-[#0C2165] playfair-300 text-2xl md:text-[60px] text-start"
                  dangerouslySetInnerHTML={{
                    __html: title || "Value Added Programs",
                  }}
                ></h3>
              </div>

              <div className="">
                <p className="text-base md:text-lg lg:text-[20px] leading-relaxed text-start">
                  {description ||
                    "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester."}
                </p>
              </div>
            </div>

            {/* Program Sections */}
            <div className="space-y-4 md:space-y-6 md:mt-8 mt-6">
              {programsData.map((program, index) => (
                <div key={program.id} className="relative">
                  {/* Partial border for non-first items */}
                  {index !== 0 && (
                    <div className="absolute bottom-0 left-0 w-full md:w-11/12 h-px bg-black"></div>
                  )}

                  <button
                    onClick={() => handleItemClick(program.title)}
                    className="w-full flex items-center justify-between text-left cursor-pointer px-0 md:px-4 py-3"
                  >
                    <h5 className="flex items-center gap-2 md:gap-4 w-full md:flex-wrap">
                      <span className="break-words monser-500 text-[20px] lg:text-[24px] leading-snug">
                        {program.title}
                      </span>
                      <Image
                        src="/nirf/arrow.svg"
                        alt="Arrow"
                        width={20}
                        height={20}
                        className={`w-3 h-3 md:w-4 md:h-4 flex-shrink-0 transition-transform duration-200 ${
                          expandedSection === program.title ? "rotate-90" : ""
                        }`}
                      />
                    </h5>
                  </button>

                  {/* Partial border for first item */}
                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 w-11/12 h-px bg-black"></div>
                  )}

                  {/* Content with proper bullet points */}
                  {expandedSection === program.title && (
                    <div className="my-3 md:my-4 mb-10 md:mb-12 ml-0 md:ml-4">
                      <ul
                        className="space-y-2 sm:space-y-3 list-disc list-outside ml-2 lg:ml-8 lg:pl-2 pl-0 "
                        style={{ fontSize: "0.7em" }}
                      >
                        {program.content.map((item, contentIndex) => (
                          <li
                            key={`${program.id}-content-${contentIndex}`}
                            className={`text-[18px] lg:text-[20px] monser-400 text-black leading-relaxed ${
                              contentIndex === program.content.length - 1
                                ? "mb-8"
                                : ""
                            }`}
                          >
                            {typeof item === "object" ? (
                              // Handle object with title and sub-items
                              <div>
                                <div className="font-semibold mb-1 monser-600 text-[18px] md:text-[20px]">
                                  {item.title}
                                </div>
                                {item.subItems && (
                                  <ul className="space-y-just 2">
                                    {item.subItems.map((subItem, subIndex) => (
                                      <li
                                        key={subIndex}
                                        className="text-[18px] pb-3"
                                      >
                                        {subItem}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ) : (
                              // Handle simple string
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Disclaimer */}
            {disclaimer && (
              <div className="mt-4 md:mt-6">
                <p className="text-sm md:text-[20px] monser-400">
                  {disclaimer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ValueAddedPrograms
