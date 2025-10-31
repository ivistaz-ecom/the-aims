import React from "react"
import Image from "next/image"

const Aiming = () => {
  const objectives = [
    "Identify each student's unique needs and offer relevant support or intervention",
    "Collaborate with the academic and Corporate & Public Relations teams to deliver competency-building workshops for college students in Bangalore",
    "Provide a platform for cross-cultural, academic, and experiential learning exchanges",
    "Foster a strong sense of ethical leadership and social responsibility among students",
    "Support the long-term vision of AIMS by helping students grow into well-rounded professionals with a deep concern for society",
  ]
  return (
    <>
      <div className="px-4 md:px-8 lg:px-8 py-6 md:py-10">
        <div className="container mx-auto">
          {/* Row 1: Left Content, Right Image */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-16 pb-6 md:pb-10 ">
            {/* Left Side - Content */}
            <div className="flex flex-col  md:flex-col lg:flex-row gap-4 md:gap-10">
              <div className="space-y-4 md:space-y-6 lg:space-y-6 lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-6 md:mb-10 playfair-300">
                  AIMing for All Round <br /> Development
                </h2>
                <p className="text-base md:text-base lg:text-base monser-400">
                  For queries and support, write to us at{" "}
                  <a
                    href="mailto:acsd@theaims.ac.in"
                    className="text-[#A22877] monser-600 underline"
                  >
                    acsd@theaims.ac.in
                  </a>
                </p>
                <p className="text-base  md:text-base lg:text-base monser-400">
                  Founded in 2007, the AIMS Centre for Student Development
                  (ACSD) is built on a singular principle, to walk alongside
                  students through every phase of their academic and personal
                  journey. At the heart of ACSD lies a belief in the power of
                  mentorship and personalised attention, enabling students to
                  build confidence, self-awareness, and meaningful life skills.
                </p>
                <p className="text-base  md:text-base lg:text-base monser-400">
                  With structured guidance and consistent support, ACSD helps
                  students align their strengths with their goals, preparing
                  them for a future of responsible leadership and professional
                  success. From student mentorship programs in Bangalore
                  colleges to pre-placement training for graduates, every
                  initiative is designed to foster holistic growth. Because at
                  AIMS, we don't just prepare students to graduate we prepare
                  them to thrive.
                </p>
              </div>

              {/* Image positioned absolutely */}
              <div className="lg:p-2 p-0 lg:mt-20 mt-0 lg:w-1/2">
                <Image
                  src="/student-development/aiming-new.webp"
                  alt="Student Development"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Left Image, Right Content */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-0 pb-6 md:pb-10 ">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/3 flex pb-0 md:pb-6 lg:pb-0">
              <Image
                src="/student-development/our-approach-new.webp"
                alt="Career Guidance"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-2/3 space-y-4 md:space-y-6 lg:space-y-6 px-0 lg:px-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300">
                Our Approach
              </h2>
              <p className="text-base md:text-base lg:text-base  monser-400">
                Through one-on-one mentoring and group activities, ACSD supports
                the personal and social development of students in Bangalore,
                enabling them to better understand themselves and their
                aspirations. By helping them navigate both opportunities and
                challenges, ACSD ensures that each student experiences their
                time at AIMS as a transformative journey, not just an academic
                one.
              </p>
              <p className="text-base sm:text-lg md:text-base lg:text-base monser-400">
                Whether a student needs career guidance, skill-building support,
                or simply someone to talk to, ACSD provides a consistent
                touchpoint for care, structure, and encouragement. The emphasis
                is always on student well-being initiatives in Bangalore
                colleges that are practical, human, and future-focused.
              </p>
            </div>
          </div>

          {/* Row 3: Left Content, Right Image */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-16">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-6 playfair-300 ">
                Objectives
              </h2>
              <h4 className="text-lg sm:text-xl md:text-[20px] lg:text-[20px] text-[#0C2165] monser-600">
                ACSD works to:
              </h4>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-3 list-disc list-outside ml-4 lg:ml-6">
                {objectives.map((objective, index) => (
                  <li key={index} className="text-[18px] monser-400">
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2 px-4 md:px-0">
              <Image
                src="/student-development/objectives-new.webp"
                alt="Success Achievement"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aiming
