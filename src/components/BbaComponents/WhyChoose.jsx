import React from "react"
import InfoBoxes from "../shared/BBA-MBA-BBA-Aviation/InfoBoxes"
import Button from "@/shared/Button"

const WhyChoose = () => {
  const naacBoxes = [
    {
      number: "01",
      title: "NAAC 'A' Grade Institution",
      description:
        "Recognised among the Top B-Schools in India, with over 25 years of academic excellence",
    },
    {
      number: "02",
      title: "Focus on Industry Readiness",
      description:
        "Hands-on training, real-world projects, business simulations, and cross-border case studies",
    },
    {
      number: "03",
      title: "Entrepreneurship & Innovation",
      description:
        "Mentorship and incubation support for students ready to launch",
    },
    {
      number: "04",
      title: "Advanced Learning Tools",
      description:
        "Digital classrooms, practical casework, and access to global business platforms",
    },
    {
      number: "05",
      title: "Global Exposure Opportunities",
      description: "International collaborations and global exchange programs",
    },
  ]

  return (
    <div className="py-6 md:py-10 px-4 lg:px-0">
      <div className="container mx-auto">
        <p className="text-base md:text-xl max-w-4xl md:max-w-5xl monser-400 text-center mx-auto leading-relaxed">
          Experience the foundation of business leadership at AIMS Institutes,
          acknowledged as one of the Top B schools in India where precision,
          focus, and ambition drive every student's journey. The Bachelor of
          Business Administration (BBA) program is crafted for emerging leaders
          who aspire to chart a clear path in the world of business.
        </p>
        {/* Header */}
        <div className="text-center py-4 md:py-6">
          <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-4 playfair-300 leading-tight">
            Why Choose the <br />{" "}
            <span className="text-[#A22877] italic playfair-400 ">
              AIMS BBA?
            </span>
          </h2>
        </div>
      </div>
      <InfoBoxes boxes={naacBoxes} />

      {/* Apply Now Button */}
      <div className="flex justify-center lg:mt-10 mt-5 mb-2 lg-mb-0">
        <Button
          variant="placement"
          showArrow={true}
          href="https://apply.theaims.ac.in/login"
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default WhyChoose
