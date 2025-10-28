import React from "react"
import Image from "next/image"

const PlacementHighlights = () => {
  const highlights = [
    {
      id: 1,
      icon: "/mba-landing/runner.svg", // Runner icon
      text: "Consistent 85%+ placement record across MBA streams",
      highlightWords: ["85%+", "placement record"],
    },
    {
      id: 2,
      icon: "/mba-landing/company.svg", // Company buildings icon
      text: "Top recruiters include Deloitte, Infosys, EY, Accenture, TCS, and more",
      highlightWords: ["Deloitte, Infosys, EY, Accenture, TCS,"],
    },
    {
      id: 3,
      icon: "/mba-landing/money.svg", // Money icon
      text: "Average package:<br/> ₹8 LPA | Highest: ₹27 LPA",
      highlightWords: ["₹8 LPA ", "₹27 LPA"],
    },
    {
      id: 4,
      icon: "/mba-landing/percent.svg", // Percentage icon
      text: "Dedicated career mentorship and live corporate projects",
      highlightWords: ["career mentorship"],
    },
  ]

  return (
    <section className="relative py-16 px-4">
      {/* Full Background Cover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Full pink background including curve */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-[200px] md:h-[400px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFEDF2"
            d="M0,128 C480,0 960,0 1440,128 L1440,320 L0,320 Z"
          ></path>
        </svg>

        {/* Bottom fill to cover rest area */}
        <div
          className="absolute bottom-0 left-0 w-full h-[calc(100%-200px)] md:h-[calc(100%-400px)]"
          style={{
            background: "#FFEDF2",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center md:py-16 py-10">
          <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6">
            Placement Highlights
          </h5>
          <p className="text-lg md:text-xl lg:monser-500 monser-400 leading-relaxed max-w-4xl mx-auto">
            At AIMS Institutes, every student is guided toward measurable
            success. Our strong corporate network ensures you’re not just
            placed, you’re prepared to perform from day one.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="bg-white rounded-lg  p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="text-center relative px-3 py-4 lg:py-0"
              >
                {/* Vertical divider for desktop */}
                {index < highlights.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-[#D1C3DB] -mr-2"></div>
                )}

                {/* Horizontal divider for mobile */}
                {index < highlights.length - 1 && (
                  <div className="lg:hidden absolute bottom-0 left-0 w-full h-px bg-[#D1C3DB] -mb-3"></div>
                )}

                <div className="mb-3 flex justify-center">
                  <Image
                    src={highlight.icon}
                    alt={`${highlight.text} icon`}
                    width={50}
                    height={50}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <p
                  className="text-xs md:text-sm monser-500 leading-relaxed px-1 pb-3 lg:pb-0"
                  dangerouslySetInnerHTML={{
                    __html: highlight.highlightWords.reduce((text, word) => {
                      // Special case for company names - keep them black
                      if (word === "Deloitte, Infosys, EY, Accenture, TCS,") {
                        return text.replace(
                          word,
                          `<span class="monser-600 text-black">${word}</span>`
                        )
                      }
                      // All other words get orange highlight
                      return text.replace(
                        word,
                        `<span class="monser-600 text-[#FF6C02]">${word}</span>`
                      )
                    }, highlight.text),
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Placement Highlights Image */}
        <div className="flex justify-center -mb-16">
          {/* Mobile Image */}
          <Image
            src="/mba-landing/placements-mobile.svg"
            alt="Placement Highlights"
            width={1200}
            height={400}
            className="w-full max-w-6xl h-auto object-contain lg:hidden pb-10 md:pb-0"
          />
          {/* Desktop Image */}
          <Image
            src="/mba-landing/placements-2.svg"
            alt="Placement Highlights"
            width={1200}
            height={400}
            className="w-full max-w-6xl h-auto object-contain hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}

export default PlacementHighlights
