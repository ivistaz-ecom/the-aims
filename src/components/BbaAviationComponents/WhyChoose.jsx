import React from "react"
import Image from "next/image"
import InfoBoxes from "../shared/BBA-MBA-BBA-Aviation/InfoBoxes"
import Button from "@/shared/Button"

const WhyChoose = () => {
  const naacBoxes = [
    {
      number: "01",
      title: "Industry-Aligned Curriculum",
      description: "Designed with aviation sector standards in mind",
    },
    {
      number: "02",
      title: "Strategic Industry Exposure",
      description: "Build hands-on skills for airlines, airports, and MROs",
    },
    {
      number: "03",
      title: "Career-Ready Soft Skills",
      description: "Communication, leadership, and teamwork from Day 1",
    },
    {
      number: "04",
      title: "Faculty with Field Experience",
      description: "Learn from mentors who've worked in aviation",
    },
    {
      number: "05",
      title: "Operational Readiness",
      description: "Focus on real-world roles from ground to management",
    },
  ]

  return (
    <>
      <div className="bg-[#FFEFE3] py-6 md:py-10">
        <div className="container mx-auto">
          <p className="text-base md:text-xl max-w-4xl monser-400 text-center mx-auto px-4 md:px-0">
            BBA Aviation Management program at AIMS is designed for students
            aiming to take flight in a competitive global market. With strong
            academic grounding and industry links, our course equips you with
            the tools to navigate the aviation sector from day one. Considered
            as one of the Best BBA Aviation Management College in Bengaluru, you
            will graduate with the expertise to soar in one of the world's
            fastest-growing industries.
          </p>
        </div>
      </div>
      <div className="py-6 md:py-10 px-4 lg:px-0">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16 px-4 md:px-0">
            <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-4 playfair-300">
              Why Choose the <br />{" "}
              <span className="text-[#A22877] aviation-heading-2">
                BBA in Aviation Management
              </span>{" "}
              <span className="text-[#A22877] playfair-400">at AIMS</span>
            </h2>
          </div>
        </div>
        <InfoBoxes boxes={naacBoxes} />

        {/* Apply Now Button */}
        <div className="flex justify-center mt-10">
          <Button
            variant="placement"
            showArrow={true}
            href="https://apply.theaims.ac.in/login"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
