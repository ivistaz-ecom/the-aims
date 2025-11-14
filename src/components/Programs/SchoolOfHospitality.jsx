import React from "react"
import Image from "next/image"
import ProgramButton from "./ProgramButton"

const hospitalityPrograms = [
  {
    title: "BHM Bachelor of Hotel Management",
    href: "/hospitality-tourism-school/bachelor-hotel-management",
  },
  {
    title:
      "Certificate in Vocational Studies in QSR (Quick Service Restaurant)",
    href: "https://www.aimsenrich.com/vocational-certificate-qsr-chaipoint",
  },
]

const swissInternationalPrograms = [
  {
    title: "Culinary Professional Diploma (VET by EHL)",
    href: "https://www.aimsenrich.com/swiss-international-culinary-professional-diploma",
  },
  {
    title: "Food & Beverage Service Professional Diploma (VET by EHL)",
    href: "https://www.aimsenrich.com/swiss-international-food-beverage-service-professional-diploma",
  },
  {
    title: "Rooms Professional Diploma (VET by EHL)",
    href: "https://www.aimsenrich.com/swiss-professional-diploma-rooms-cii-vet",
  },
]

const SchoolOfHospitality = () => {
  return (
    <div className="relative w-full h-[110vh] md:h-[90vh] lg:h-[85vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/programs/tourism-desktop.webp"
        alt="School of Hospitality & Tourism at AIMS Institutes"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Mobile & Tablet Background Image */}
      <Image
        src="/programs/tourism-mobile.webp"
        alt="School of Hospitality & Tourism at AIMS Institutes"
        fill
        className="block lg:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col lg:justify-center justify-end px-4 lg:pb-16 pb-4 pt-12  md:px-12 lg:px-0 lg:items-end ">
        <div className="max-w-2xl space-y-6 text-white lg:pl-10 pl-0">
          <div className="space-y-3">
            <h5 className="monser-600 text-2xl leading-tight lg:text-5xl lg:text-left text-center">
              School of <br className="hidden lg:block" /> Hospitality & Tourism
            </h5>
            <span className="monser-400 leading-relaxed text-white lg:text-base text-sm max-w-lg">
              Recognised as one of the top hospitality and tourism management
              institutes in Karnataka, AIMS blends practical training with
              international exposure.
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {hospitalityPrograms.map((program) => (
              <ProgramButton key={program.title} href={program.href}>
                {program.title}
              </ProgramButton>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <p className="monser-700 text-xl">Swiss International</p>
            <div className="flex flex-wrap gap-3">
              {swissInternationalPrograms.map((program) => (
                <ProgramButton key={program.title} href={program.href}>
                  {program.title}
                </ProgramButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolOfHospitality
