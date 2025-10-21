"use client"
import React from "react"

const Aboutpage = () => {
  return (
    <section className="py-10 ">
      {/* Empowering Minds Section */}
      <div>
        <div className="lg:px-8 px-4">
          <h3 className="container mx-auto  text-[#0C2165] playfair-300 mb-3 md:mb-6 pb-5 leading-tight">
            Empowering Minds <br /> Since 1994
          </h3>
        </div>

        <div className="bg-[#E0F7F4] py-10  rounded-md  lg:px-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <p>
                At AIMS Institutes, education is not a routine, it is a
                deliberate pursuit. Since our founding in 1994, we&apos;ve
                focused on helping students set clear goals and build the
                precision, discipline, and confidence required to reach them.
              </p>
              <p>
                Recognised as one of the top business & hospitality colleges in
                Bangalore, AIMS offers industry-relevant programs,
                outcome-focused lectures, and a strong commitment to student
                transformation. Our ecosystem supports every learner, from
                first-generation students to future entrepreneurs, with a clear
                roadmap to success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="pt-5  px-4 lg:px-8">
        <div className="container mx-auto ">
          <h3 className="   text-[#0C2165] playfair-300 leading-tight ">
            What Sets Us Apart
          </h3>

          <p>
            Our learning culture promotes enquiry, innovation, and impact. As
            one of the best MBA colleges in Bangalore, our management programs
            are designed to deliver both breadth and depth, equipping students
            to lead in a competitive, globalised world. Meanwhile, our
            hospitality, commerce, and other professional courses sharpen
            critical thinking, build soft skills, and prepare graduates to
            thrive across sectors.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Aboutpage
