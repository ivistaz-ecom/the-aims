import React from "react"
import Button from "@/shared/Button"

const ExclusiveAccess = () => {
  const swissDiplomas = [
    {
      title: "Culinary Professional Diploma:",
      description:
        "Swiss-certified training in global culinary techniques and kitchen operations",
    },
    {
      title: "Food & Beverage Service Professional Diploma:",
      description:
        "Professional diploma in international service and restaurant operations",
    },
    {
      title: "Rooms Professional Diploma:",
      description:
        "Swiss-accredited program in front office and housekeeping management",
    },
  ]

  return (
    <section className="pb-4 px-4 bg-white">
      <div className="container mx-auto max-w-6xl ">
        {/* Main Title */}
        <h2
          className="font-bold text-black mb-8 monser-600 text-center"
          style={{ fontSize: "26px" }}
        >
          Students gain exclusive access to:
        </h2>

        {/* Swiss-certified Diplomas Box */}
        <div
          className="mb-6 rounded-lg overflow-hidden"
          style={{
            background: "#F0FDFD",
            border: "1px solid #B2E0E0",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div
              className="md:w-2/5 p-6 md:border-r md:border-gray-300 flex flex-col justify-center"
              style={{
                borderRight: "1px solid #E0E0E0",
                background: "#E1F9F4",
              }}
            >
              <div className="text-xl font-bold text-black mb-3 monser-600 text-[18px]">
                Swiss-certified professional diplomas through VET by EHL:
              </div>
              <div className="text-base text-black monser-400 text-[18px]">
                <span className=" monser-600">Duration:</span> 6 months on
                campus + 12 months in the industry
              </div>
            </div>

            {/* Right Column */}
            <div
              className="md:w-3/5  px-4 py-5"
              style={{ background: "#FFFFFF" }}
            >
              <ul className="space-y-1 list-disc pl-6">
                {swissDiplomas.map((diploma, index) => (
                  <li key={index} className="list-item">
                    <div
                      className="font-bold text-lg monser-600"
                      style={{ color: "#531675" }}
                    >
                      {diploma.title}
                    </div>
                    <p
                      className="text-black monser-400"
                      style={{ fontSize: "18px" }}
                    >
                      {diploma.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* QSR Certificate Box */}
        <div
          className="rounded-lg overflow-hidden"
          style={{
            background: "#F0FDFD",
            border: "1px solid #B2E0E0",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div
              className="md:w-2/5 p-6 md:border-r md:border-gray-300"
              style={{
                borderRight: "1px solid #E0E0E0",
                background: "#E1F9F4",
              }}
            >
              <div className="text-xl font-bold text-black mb-3 monser-600 text-[18px] flex items-center justify-center">
                Vocational Certificate in QSR (Quick Service Restaurant)
              </div>
              <div className="text-base text-black monser-400 text-[18px]">
                <span className=" monser-600">Duration:</span> 3 months on
                campus hands-on
              </div>
            </div>

            {/* Right Column */}
            <div
              className="md:w-3/5 p-6 flex items-center justify-center"
              style={{ background: "#FFFFFF" }}
            >
              <ul className="list-disc pl-6">
                <li className="list-item">
                  <p
                    className="text-black monser-400"
                    style={{ fontSize: "18px" }}
                  >
                    Developed with Chai Point, preparing students for
                    high-growth roles in modern café and restaurant chains
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="py-10 space-y-5 text-center max-w-4xl mx-auto">
          <div className="text-black monser-400 " style={{ fontSize: "18px" }}>
            <span className="monser-600 text-[18px] px-1">
              Globally recognised credentials
            </span>
            that add international credibility to your degree and open doors to
            premium hospitality brands worldwide.
          </div>
          <p className="text-black monser-400" style={{ fontSize: "18px" }}>
            Every student's learning journey culminates in a guaranteed{" "}
            <span className="monser-600 text-[18px]">
              paid internship with the Taj Group of Hotels
            </span>
            , providing hands-on exposure to five-star hospitality standards and
            operational excellence.
          </p>
        </div>

        {/* Real Industry Learning Section */}
        <div className=" mb-4">
          <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6 text-center">
            Real Industry Learning
          </h5>
          <p
            className="text-black text-center lg:mb-8 mb-4 monser-400"
            style={{ fontSize: "18px" }}
          >
            Your classroom extends far beyond campus:
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {/* Column 1 */}
            <div className="md:w-1/3 px-6 lg:py-4 py-2 text-center md:text-left">
              <div className="h-full md:border-r border-gray-300 md:pr-6 border-b md:border-b-0 pb-4 md:pb-0">
                <p
                  className="text-black monser-400"
                  style={{ fontSize: "18px" }}
                >
                  State-of-the-art training kitchens, mock front office, and
                  restaurant simulation labs
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="md:w-1/3 px-6 lg:py-4 py-2 text-center md:text-left">
              <div className="h-full md:border-r border-gray-300 md:pr-6 border-b md:border-b-0 pb-4 md:pb-0">
                <p
                  className="text-black monser-400"
                  style={{ fontSize: "18px" }}
                >
                  Direct mentorship from industry professionals and visiting
                  experts
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="md:w-1/3 px-6 lg:py-4 py-2 text-center md:text-left">
              <div className="h-full border-gray-300 pb-0">
                <p
                  className="text-black monser-400"
                  style={{ fontSize: "18px" }}
                >
                  Soft skills, financial literacy, and entrepreneurial modules
                  that prepare you to lead, not just serve
                </p>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  )
}

export default ExclusiveAccess
