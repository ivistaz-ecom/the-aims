import React from "react"

const NaacAccreditationSection = () => {
  return (
    <div className="bg-[#E0F8F3] py-4 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-6xl lg:text-6xl text-[#0C2165] playfair-300 mb-6">
            NAAC Accreditation
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="mr-3 mt-1">•</span>
            <div className="flex-1">
              <span className=" monser-400 text-base md:text-[20px]">
                NAAC Certificate -{" "}
                <a
                  href="/naac/AIMS-NAAC-Certificate-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer"
                >
                  View
                </a>
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <span className="mr-3 mt-1">•</span>
            <div className="flex-1">
              <span className="monser-400 text-base md:text-[20px]">
                AIMS NAAC Visit 16 & 17 March 2022 -{" "}
                <a
                  href="https://www.youtube.com/watch?v=17UP0CqEtPE&source_ve_path=MTc4NDI0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#0C2165] underline hover:text-[#091843] transition-colors"
                >
               play video
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NaacAccreditationSection
