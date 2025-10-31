import React from "react"
import Image from "next/image"

const Aiming = () => {
  const objectives = [
    "Imbibe the feeling of reciprocity among the students, i.e. serving the community back as it serves us",
    "Involve all the departments and their students collectively in the work",
    "Bring about social change in the surrounding urban and rural communities",
    "Strengthen sense of civic responsibility of young people",
  ]
  return (
    <>
      <div className="relative px-4 md:px-8 lg:px-8 py-6 md:py-10">
        <div className="container mx-auto">
          {/* Row-1 */}
          <div className="max-w-6xl pb-6 md:pb-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300">
              Purpose in Action. <br /> AIM for a More Compassionate World.
            </h2>
            <div className="flex flex-col gap-4 w-full  lg:w-4/5">
              <p className="text-sm md:text-base  monser-400">
                For collaborations and support, write to us at{" "}
                <a
                  href="mailto:accs@theaims.ac.in"
                  className="text-[#A22877] monser-600 underline"
                >
                  accs@theaims.ac.in
                </a>
              </p>
              <p className="text-sm md:text-base  monser-400">
                Founded in 2009, the AIMS Centre for Community Service (ACCS)
                serves as a bridge between the classroom and the community.
                Designed to foster civic responsibility and empathy, the centre
                helps students turn learning into meaningful action through
                structured college community service programs in Bangalore.
              </p>
              <p className="text-sm md:text-base monser-400">
                From blood donation drives and health camps to sanitation
                campaigns and collaborations with NGOs in Bangalore, ACCS offers
                students opportunities to contribute to the world around them,
                not out of obligation, but out of purpose. These experiences
                build self-awareness, deepen social responsibility, and instil
                values that last well beyond the classroom.
              </p>
            </div>
          </div>

          {/* Row 2: Left Image, Right Content */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 pb-6 md:pb-10">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center md:justify-start lg:justify-start ">
              <Image
                src="/community-service/our-approach-new.webp"
                alt="Community Approach"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300 leading-tight">
                Our Approach
              </h2>
              <p className="text-sm md:text-base monser-400">
                At ACCS, we believe education must extend beyond campus walls.
                That's why we work closely with both urban and rural communities
                to design initiatives that reflect real needs and long-term
                impact.
              </p>
              <p className="text-sm md:text-base monser-400">
                Each initiative is hands-on and inclusive, helping students
                across departments take part in student-led social initiatives
                in Bangalore. Whether it's volunteering at rehabilitation
                centres or running HIV/AIDS awareness programs by colleges in
                Bangalore, ACCS encourages every student to AIM for a better
                tomorrow.
              </p>
            </div>
          </div>

          {/* Row 3: Left Content, Right Image */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-16">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300 leading-tight">
                Objectives
              </h2>
              <h4 className="text-md md:text-lg text-[#0C2165] monser-600 mb-3">
                ACCS works to:
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
            <div className="w-full lg:w-1/2">
              <Image
                src="/community-service/objectives-new.webp"
                alt="Community Objectives"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[10%] right-0 hidden lg:block">
          <Image
            src="/community-service/semi-circle.svg"
            alt="Community Service"
            width={230}
            height={150}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Aiming
