import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const WhyChoose = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center py-6 md:py-10 lg:py-10 px-4 md:px-8 lg:px-8 ">
        <div className="bg-[#D7FFF7] w-[200px] md:w-[300px] lg:w-[300px] rounded-2xl p-2 md:p-4 lg:p-4">
          <Image
            src="/MBA/naac-logo.png"
            alt="NAAC Accredited A"
            width={400}
            height={400}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <p className="monser-400 w-full md:w-4/5 lg:w-4/5 py-4 md:py-8 lg:py-8 text-base md:text-[18px] lg:text-[18px] text-center md:px-4 leading-relaxed">
          At AIMS School of Business, ranked among the{" "}
          <span className="monser-600">top 1% B schools in India</span>,
          programs are crafted like arrows, each aimed at a specific career
          path. With industry-aligned curriculum, hands-on learning, and
          career-oriented tracks, we prepare students to lead with confidence in
          today's evolving business landscape.
        </p>
        <div className="w-full md:max-w-6xl px-2 max-w-5xl">
          {/* Mobile Version - Coded Design */}
          <div className="block md:hidden">
            <div className="text-center mb-8">
              <h2 className="text-[#531675] text-4xl playfair-500 mb-6">
                Why Choose the <br />{" "}
                <span className="playfair-500 italic">AIMS MBA?</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  text: "Approved by AICTE and accredited with NAAC 'A' Grade, assuring nationally trusted quality.",
                  bgColor: "bg-[#A22877]",
                  textColor: "text-white",
                },
                {
                  text: "Globally accredited by IACBE (USA), adding international recognition to your MBA.",
                  bgColor: "bg-[#B4408B]",
                  textColor: "text-white",
                },
                {
                  text: "Dual specialisations in Marketing, Finance, HR, Business Analytics, and Logistics for wider career choices.",
                  bgColor: "bg-[#FF6C02]",
                  textColor: "text-white",
                },
                {
                  text: "Integrates live simulations and mentorship projects for practical, real-world learning.",
                  bgColor: "bg-[#F5BBBC]",
                  textColor: "text-black",
                },
                {
                  text: "Backed by 300+ corporate tie-ups and 100+ recruiters including Deloitte, Accenture, Infosys & more",
                  bgColor: "bg-[#D264AB]",
                  textColor: "text-white",
                },
                {
                  text: "Includes Value Added Programs each semester to enhance employability and industry readiness.",
                  bgColor: "bg-[#F0A2B8]",
                  textColor: "text-black",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} ${item.textColor} p-4 rounded-xl`}
                >
                  <p className="text-sm monser-500 px-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image
              src="/MBA/Why-choose-AIMS-MBA.svg"
              alt="Why Choose Us"
              width={1200}
              height={1200}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>

          {/* Explore Placement Stories Button */}
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
      </div>
    </>
  )
}

export default WhyChoose
