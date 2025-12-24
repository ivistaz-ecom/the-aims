import React from "react"
import Link from "next/link"
import Button from "@/shared/Button"

const JobDetail = ({ job }) => {
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Job Not Found</h1>
          <p className="text-black mb-4">
            The job you're looking for doesn't exist.
          </p>
          <Link href="/careers">
            <Button variant="primary">Back to Careers</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section with Background Color */}
      <div className="bg-[#E1F9F4] relative">
        <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Back Link, Title, Institution */}
            <div className="space-y-4">
              {/* Back Link */}
              <div>
                <Link
                  href="/careers"
                  className="text-[#0C2165] hover:text-[#A22877] transition-colors inline-flex items-center gap-2 cursor-pointer monser-400"
                >
                  <span className="text-xl font-semibold">&lt;</span>
                  <span>Back to Careers page</span>
                </Link>
              </div>

              {/* Job Title */}
              <div>
                <h1 className="text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight">
                  {job.title.includes("–") ? (
                    <>
                      {job.title.split("–")[0]}–<br />
                      {job.title.split("–")[1]}
                    </>
                  ) : (
                    job.title
                  )}
                </h1>
              </div>

              {/* Institution */}
              <div>
                <p className="text-base lg:text-lg text-black monser-400">
                  <span className="monser-600 text-xl">Institution:</span>{" "}
                  {job.institution}
                </p>
              </div>
            </div>

            {/* Right Column - Job Summary/Description */}
            <div className="flex items-center justify-center">
              {job.summary && job.summary.type === "box" && (
                <div className="text-base lg:text-lg text-black leading-relaxed monser-400">
                  {job.summary.content.split("\n").map((line, index) => (
                    <p key={index} className={index > 0 ? "mt-4" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the Content with White Background */}
      <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Job Sections */}
        <div className="space-y-8">
          {job.sections?.map((section, index) => (
            <div key={index}>
              {section.type === "heading" && (
                <>
                  <h2
                    className={`mb-4 monser-600 font-bold ${
                      section.title ===
                      "Subject-Specific Expectations as per BU:"
                        ? "text-2xl text-black"
                        : "text-3xl text-[#A22877]"
                    }`}
                  >
                    {section.title}
                  </h2>
                  {section.items && (
                    <ul className="space-y-3 ml-6">
                      {section.items.map((item, itemIndex) => {
                        // Handle object with bold label and text
                        if (
                          typeof item === "object" &&
                          item.bold &&
                          item.text
                        ) {
                          return (
                            <li key={itemIndex} className="list-disc">
                              <span className="monser-600 text-black">
                                {item.bold}
                              </span>{" "}
                              <span className="text-black">{item.text}</span>
                            </li>
                          )
                        }
                        // Handle object with parts array (for inline bold text)
                        if (typeof item === "object" && item.parts) {
                          return (
                            <li
                              key={itemIndex}
                              className="list-disc text-black"
                            >
                              {item.parts.map((part, partIndex) => {
                                if (typeof part === "object" && part.bold) {
                                  return (
                                    <span
                                      key={partIndex}
                                      className="monser-600 font-bold"
                                    >
                                      {part.bold}
                                    </span>
                                  )
                                }
                                return <span key={partIndex}>{part}</span>
                              })}
                            </li>
                          )
                        }
                        // Handle plain string
                        return (
                          <li key={itemIndex} className="list-disc text-black">
                            {item}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Application Instructions - Full Width */}
      <div className="bg-[#A22877] text-white py-4 mb-10 lg:mb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-lg">
            Interested candidates can send resume to{" "}
            <a
              href={`mailto:${job.applicationEmail}`}
              className="font-semibold underline hover:text-white"
            >
              {job.applicationEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
