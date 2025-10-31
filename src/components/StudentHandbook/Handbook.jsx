import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const Handbook = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 md:py-10 py-6 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Column - Image */}
          <div className="flex flex-col gap-4 col-span-1">
            <Image
              src="/student-handbook/student.webp"
              alt="Alumni Network"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col md:gap-4 lg:gap-6">
            <h2 className="text-4xl md:text-6xl lg:text-6xl playfair-300 text-[#0C2165] leading-tight">
              Student Handbook
            </h2>

            <div className="text-gray-800 leading-relaxed space-y-4">
              <p className="text-lg">
                Please download the student handbook to understand various
                resources and facilities available to you as a student of this
                institution including mentoring, focus centres, grievances,
                feedback process, and many more.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
              <Button
                variant="placement"
                href="/student-handbook/Student-Handbook/Student-Handbook-2021.pdf"
              >
                Download Student Handbook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Handbook
