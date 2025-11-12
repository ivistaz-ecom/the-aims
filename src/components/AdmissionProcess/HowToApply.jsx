import React from "react"
import Image from "next/image"

const HowToApply = () => {
  const deadlines = [
    {
      program: "MBA Program (Non-PGCET)",
      deadline: "2nd February 2026",
    },
    {
      program: "Postgraduate Programs (Non-MBA)",
      deadline: "Closed for 2025",
    },
    {
      program: "Undergraduate Programs",
      deadline: "Closed for 2025",
    },
  ]

  return (
    <>
      {/* Hero Banner Text */}
      <div className="bg-[#FCE1E1] py-6 md:py-10">
        <p className="text-base md:text-xl  max-w-5xl monser-400 text-center mx-auto px-4 md:px-8 text-[#0C2165]">
          Every future begins with a first step, and at AIMS, we make sure that
          step is clear, structured, and supportive. Whether you're aiming to
          enter an undergraduate course, a postgraduate program, or our flagship
          MBA, our admission process is designed to help you make confident,
          well-informed choices.
        </p>
      </div>

      {/* How to Apply */}
      <div className="lg:px-8 px-0 ">
        <div className="container mx-auto px-4 md:px-0 py-6 md:py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-12  w-full">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 flex flex-col justify-center">
              <h2 className="text-4xl  md:text-6xl  text-[#A22877] mb-3  playfair-300 leading-tight">
                How to Apply
              </h2>

              <p className="text-base md:text-xl  monser-400">
                You can apply for admission online by clicking the{" "}
                <a
                  href="https://apply.theaims.ac.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A22877] underline monser-600 hover:text-[#8b1f5f]"
                >
                  Apply Now
                </a>{" "}
                button at the top-right of this website. The application is
                straightforward and designed to support students at every stage.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] monser-600">
                  Before you begin, we recommend reviewing:
                </h5>

                <ul className="space-y-2 sm:space-y-3 list-disc ml-4 md:ml-0">
                  <li className="text-base md:text-lg monser-400 leading-relaxed pl-2">
                    The <span className="monser-600">eligibility criteria</span>{" "}
                    on your chosen program page
                  </li>
                  <li className="text-base md:text-lg monser-400 leading-relaxed pl-2">
                    The <span className="monser-600">documents required</span>{" "}
                    for applying to UG or PG courses
                  </li>
                  <li className="text-base md:text-lg monser-400 leading-relaxed pl-2">
                    The{" "}
                    <span className="monser-600">
                      important deadlines for college admissions 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pl-8">
              <Image
                src="/admission-process/apply-new.svg"
                alt="Admission Process"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Important Deadlines */}
      <div className="bg-[#E1F9F4] py-6 md:py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-10 -mt-4">
            <h2 className="text-[#A22877] text-4xl md:text-6xl playfair-300 mb-2 leading-tight">
              Important Deadlines
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Mobile Scrollable Table */}
            <div className="block sm:hidden overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Table Header */}
                <div className="grid grid-cols-2 gap-3 mb-3 text-white">
                  <div className="bg-[#002561] p-3 rounded-[10px] text-center monser-600 text-lg">
                    Admission Type
                  </div>
                  <div className="bg-[#002561] p-3 rounded-[10px] text-center monser-600 text-lg">
                    Application Deadline
                  </div>
                </div>

                {/* Table Rows */}
                <div className="space-y-3">
                  {deadlines.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-[10px] text-center monser-400 text-sm leading-relaxed">
                        {item.program}
                      </div>
                      <div
                        className={`bg-white p-3 rounded-[10px] text-center monser-400 text-sm ${
                          item.deadline.includes("Closed")
                            ? "text-red-600 font-semibold"
                            : "font-semibold"
                        }`}
                      >
                        {item.deadline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop/Tablet Table */}
            <div className="hidden sm:block">
              {/* Table Header */}
              <div className="grid grid-cols-2 gap-3 mb-3 text-white">
                <div className="bg-[#002561] p-3 rounded-[10px] text-center monser-600 text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                  Admission Type
                </div>
                <div className="bg-[#002561] p-3 rounded-[10px] text-center monser-600 text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                  Application Deadline
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-3 sm:space-y-4">
                {deadlines.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white p-3 sm:p-4 rounded-[10px] text-center monser-400 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed">
                      {item.program}
                    </div>
                    <div
                      className={`bg-white p-3 sm:p-4 rounded-[10px] text-center monser-400 text-sm sm:text-base md:text-lg lg:text-[20px] ${
                        item.deadline.includes("Closed")
                          ? "text-red-600 font-semibold"
                          : "font-semibold"
                      }`}
                    >
                      {item.deadline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToApply
