"use client"
import React, { useState } from "react"
import AllAcademicJobs from "./AllAcademicJobs"
import NonTeachingPositions from "./NonTeachingPositions"

const Careers = () => {
  const [activeTab, setActiveTab] = useState("academic")

  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">Careers</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 bg-white">
        <div className="container mx-auto py-10">
          {/* Top Section - Current Openings and Paragraph (no divider) */}
          <div className="flex flex-col lg:flex-row gap-0 items-center  mb-8">
            <h5 className="text-5xl text-[#0C2165] playfair-300">
              Current <br /> Openings
            </h5>
            <p className="text-lg flex-1 max-w-3xl mx-auto">
              At AIMS Institutes, teaching, administration, and support
              functions work together to create meaningful educational
              experiences. Explore current opportunities and join us in
              supporting learning that prepares students for real futures.
            </p>
          </div>

          {/* Bottom Section - Tabs and Content (with divider) */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Tabs */}
            <div className="lg:w-1/4 w-full lg:border-r lg:border-black lg:pr-8">
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab("academic")}
                  className={`w-full text-center px-4 py-3 rounded-full font-semibold transition-colors ${
                    activeTab === "academic"
                      ? "bg-[#A22877] text-white"
                      : "bg-white text-black border border-black"
                  }`}
                >
                  All Academic Jobs
                </button>
                <button
                  onClick={() => setActiveTab("non-teaching")}
                  className={`w-full text-center px-4 py-3 rounded-full font-semibold transition-colors ${
                    activeTab === "non-teaching"
                      ? "bg-[#A22877] text-white"
                      : "bg-white text-black border border-black"
                  }`}
                >
                  NON-TEACHING POSITIONS
                </button>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:w-3/4 w-full mx-auto">
              <div className="mb-6">
                {activeTab === "academic" ? (
                  <h5 className="text-4xl monser-600 mb-6">
                    All Academic Jobs
                  </h5>
                ) : (
                  <h5 className="text-4xl monser-600 mb-6">
                    Non-Teaching Positions
                  </h5>
                )}
              </div>
              {activeTab === "academic" ? (
                <AllAcademicJobs />
              ) : (
                <NonTeachingPositions />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers
