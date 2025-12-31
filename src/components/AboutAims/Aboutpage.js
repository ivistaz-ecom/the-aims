"use client"
import React from "react"

const Aboutpage = () => {
  return (
    <section className="py-10 ">
      {/* Empowering Minds Section */}
      <div>
        <div className="lg:px-8 px-4">
          <h3 className="container mx-auto  text-[#0C2165] playfair-300 mb-3 md:mb-6 pb-5 leading-tight text-center">
            <span className="text-[#531675] playfair-400"> About</span> <span className="text-[#A22877] italic playfair-400">AIMS Institutes</span>
          </h3>
        </div>
        <div className="bg-[#E1F9F4] py-10 lg:px-8 px-4">
          <div className="container mx-auto space-y-4">
            <div className="flex flex-col gap-4">
              <p>
                Established in 1994 by a group of visionary educationists and philanthropists, AIMS Institutes was founded with a mission to provide quality education and a vision to expand the horizons of teaching and learning. At AIMS, equal emphasis is placed on developing both the intrapersonal and interpersonal skills of students, preparing them to excel in their chosen fields and in life.
              </p>
              <p>
                Starting modestly with just two undergraduate programs and 60 students, AIMS has grown into a vibrant academic community offering five postgraduate programs, seven undergraduate programs, and three PhD programs, serving nearly 2,000 students on campus today.
              </p>
              <p>
                Accredited with an ‘A’ Grade by NAAC, AIMS also holds international recognition, the AIMS School of Business is accredited by the International Accreditation Council for Business Education (IACBE), USA, underscoring its global standards in
                management education.
              </p>
              <p>
                Over the years, AIMS has been consistently ranked among the top private institutions in India, recognised for academic excellence and innovation. Students from various programs have regularly achieved university ranks, setting new benchmarks of success. The institute has also been acknowledged among the Top 1% of B-Schools in India and awarded as the Best College for Entrepreneurship Education in national surveys. AIMS’ collaboration with ISB Hyderabad as a local delivery partner for the Goldman Sachs 10,000 Women Entrepreneurs Development Programme stands as a testament to its commitment to nurturing entrepreneurial talent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="pt-5  px-4 lg:px-8">
        <div className="container mx-auto ">
          <h3 className="   text-[#A22877] playfair-300 leading-tight ">
            What Sets Us Apart
          </h3>
          <div className="flex flex-col gap-4">
            <h4>Campus and Learning Environment</h4>
            <p>
              AIMS offers an environment that blends academic rigour with professional exposure. The institute provides world-class, state-of-the-art infrastructure, designed to foster innovation, creativity, and collaboration.
            </p>
            <p>
              At AIMS, education goes beyond textbooks. The institution invites experts from corporate and non-profit sectors to provide students with <br className="hidden md:block lg:block 2xl:hidden" /> real-world insights and practical learning experiences. In addition to the academic curriculum, special training programs by professional bodies are organised to enhance students’ presentation, communication, teamwork, leadership, and analytical skills, making them industry-ready professionals.
            </p>
            <p>
              Driven by the belief that true education nurtures both intellect and character, AIMS continues to create leaders, entrepreneurs, and changemakers who are equipped to meet the challenges of the modern world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutpage



