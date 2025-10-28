import React from "react"
import Image from "next/image"

const AccreditationSection = () => {
  const accreditations = [
    {
      id: 1,
      logo: "/mba-landing/Bangalore_University_logo 1.svg",
      alt: "Bangalore University Logo",
      text: "Affiliated with\nBangalore University",
    },
    {
      id: 2,
      logo: "/mba-landing/All_India_Council_for_Technical_Education_logo 1.svg",
      alt: "AICTE Logo",
      text: "Recognised by AICTE",
    },
    {
      id: 3,
      logo: "/mba-landing/NAAC-Logo.svg",
      alt: "NAAC Logo",
      text: "NAAC 'A' Grade (3.25/4)",
    },
    {
      id: 4,
      logo: "/mba-landing/iacbe_member_logo.svg",
      alt: "IACBE Logo",
      text: "IACBE accredited,\nreaffirming our commitment\nto global standards",
    },
  ]

  return (
    <section
      className="py-10 px-4"
      style={{
        background: "linear-gradient(90deg, #531675 0.12%, #7C35A4 97.69%)",
      }}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h5 className="text-white text-3xl md:text-4xl lg:text-5xl playfair-600 text-center mb-12">
          Accreditation and Recognition
        </h5>

        {/* Accreditation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {accreditations.map((accreditation) => (
            <div key={accreditation.id} className="text-center">
              {/* Mobile: Side by side layout */}
              <div className="md:hidden flex items-center gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 shadow-lg shrink-0 w-32 h-22 flex items-center justify-center">
                  <Image
                    src={accreditation.logo}
                    alt={accreditation.alt}
                    width={48}
                    height={48}
                    className="w-20 h-16 object-contain"
                  />
                </div>
                <p className="monser-500 text-white text-sm leading-tight whitespace-pre-line text-left flex-1">
                  {accreditation.text}
                </p>
              </div>

              {/* Desktop: Original layout */}
              <div className="hidden md:block">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow mb-4">
                  <div className="flex justify-center items-center h-20">
                    <Image
                      src={accreditation.logo}
                      alt={accreditation.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="monser-500 text-white text-sm leading-tight whitespace-pre-line">
                  {accreditation.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccreditationSection
