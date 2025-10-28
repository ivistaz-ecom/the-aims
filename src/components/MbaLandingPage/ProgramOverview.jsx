import React from "react"
import Image from "next/image"

const ProgramOverview = () => {
  const features = [
    {
      id: 1,
      icon: "/mba-landing/building.svg",
      text: "Recognised among India's best private business schools (Business Today 2024)",
      boldWords: ["best private business schools"],
    },
    {
      id: 2,
      icon: "/mba-landing/cap.svg",
      text: "Dual specialisations across Marketing, Finance, HR, Business Analytics, and Logistics",
      boldWords: ["Dual specialisations"],
    },
    {
      id: 3,
      icon: "/mba-landing/book.svg",
      text: "Industry-driven curriculum co-designed with leading corporates",
      boldWords: ["Industry-driven curriculum"],
    },
    {
      id: 4,
      icon: "/mba-landing/people.svg",
      text: "Strong alumni network across the country",
      boldWords: ["Strong alumni network"],
    },
    {
      id: 5,
      icon: "/mba-landing/calender.svg",
      text: "Duration:<br/>2 years (4 semesters)",
      boldWords: ["Duration:"],
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6">
            Program Overview
          </h5>
          <p className="text-lg md:text-xl lg:monser-500 monser-400 leading-relaxed max-w-6xl">
            At AIMS Institutes, one of the best Colleges for MBA in Bangalore,
            our MBA is built for career outcomes. We blend classroom learning
            with live industry projects, corporate mentorship, and the freedom
            to choose your specialisation path.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 lg:gap-12 gap-6 ">
          {features.map((feature, index) => (
            <div key={feature.id} className="relative">
              {/* Vertical Separator Line */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-[#D7D7D7]"></div>
              )}

              <div className="text-left px-2">
                {/* Icon */}
                <div className="mb-4">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Single Paragraph with Bold Words */}
                <p
                  className="text-sm monser-400 text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: feature.boldWords.map((boldWord) => {
                      const parts = feature.text.split(boldWord)
                      return (
                        parts[0] +
                        `<span class="monser-700">${boldWord}</span>` +
                        parts[1]
                      )
                    })[0],
                  }}
                />

                {/* Mobile Horizontal Line */}
                {index < features.length - 1 && (
                  <div className="md:hidden border-b border-[#D7D7D7] mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
