import React from "react"
import Image from "next/image"

const ValueAddedPrograms = () => {
  const programs = [
    {
      id: 1,
      image: "/mba-landing/value-added-1.webp",
      title: "Personal Finance Literacy",
    },
    {
      id: 2,
      image: "/mba-landing/value-added-2.webp",
      title: "Gig Economy Insights",
    },
    {
      id: 3,
      image: "/mba-landing/value-added-3.webp",
      title: "Public Speaking, Communication, & Critical Thinking Skills",
    },
    {
      id: 4,
      image: "/mba-landing/value-added-4.webp",
      title: "Interview Preparation",
    },
    {
      id: 5,
      image: "/mba-landing/value-added-5.webp",
      title: "Advanced Readiness & Industry Integration",
    },
    {
      id: 6,
      image: "/mba-landing/value-added-6.webp",
      title: "MS Office & Analytics Training",
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6">
            Value Added Programs (VAP)
          </h5>
          <p className="text-lg md:text-xl lg:monser-500 monser-400 leading-relaxed max-w-4xl mx-auto">
            Every semester at AIMS Institutes adds real-world value to your
            resume through our Value Added Programs, to build comprehensive
            profiles aligning with modern corporate needs:
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="text-center bg-white rounded-t-lg overflow-hidden"
            >
              {/* Program Image */}
              <div className="relative w-full h-50">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Program Title */}
              <div className="bg-[#DAF4EF] px-4 py-3 min-h-[80px] flex items-center justify-center">
                <h6 className="text-base monser-500 leading-tight text-center">
                  {program.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueAddedPrograms
