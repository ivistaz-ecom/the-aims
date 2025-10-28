import React from "react"

const EligibilityAndDates = () => {
  const eligibilityData = [
    "Graduate degree (10+2+3 or 10+2+4 pattern) with minimum 60% aggregate marks",
    "Valid scores in PGCET, CAT, MAT, XAT, ATMA, or other recognised admission tests",
    "Selection includes a detailed online application, AI-based behavioral interview, SWOC presentation, and final panel interview",
  ]

  const datesData = [
    "Application Deadline: February 2, 2026",
    "Online Interview by February 9, 2026",
    "SWOC & Personal Interviews: February 21, 2026",
  ]

  const Card = ({ title, gradient, iconColor, data }) => (
    <div
      className="mb-8 overflow-hidden"
      style={{
        borderRadius: "16px",
        border: "1px solid #F0A2B8",
        background: "#FFF",
        boxShadow: "0 4px 6px 2px rgba(199, 199, 199, 0.25)",
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Header Section */}
        <div className="md:w-1/4 relative">
          <div
            className="p-6 flex items-center justify-center h-full"
            style={{
              background: gradient,
              borderRadius: "16px 0 0 0",
            }}
          >
            <div className="text-center">
              <h6 className="text-xl monser-600 mb-2 text-black">{title}</h6>
            </div>
          </div>
          {/* Arrow pointer - Desktop: after square */}
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full w-0 h-0 hidden md:block"
            style={{
              borderTop: "18px solid transparent",
              borderBottom: "18px solid transparent",
              borderLeft: `18px solid ${iconColor}`,
            }}
          ></div>
          {/* Mobile triangle - after square */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 md:hidden"
            style={{
              borderLeft: "18px solid transparent",
              borderRight: "18px solid transparent",
              borderTop: `18px solid ${iconColor}`,
            }}
          ></div>
        </div>

        {/* Content Section */}
        <div className="md:w-3/4 p-6">
          <ul className="space-y-3  list-disc pl-6">
            {data.map((item, index) => (
              <li key={index} className="lg:monser-500 monser-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  return (
    <section className="pb-4 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <Card
          title="Eligibility & Selection"
          gradient="linear-gradient(135deg, #E8B4F0 0%, #F0A2B8 100%)"
          iconColor="#F0A2B8"
          data={eligibilityData}
        />

        <Card
          title="Important Dates"
          gradient="linear-gradient(135deg, #62C9B5 0%, #7DD3C0 100%)"
          iconColor="#7DD3C0"
          data={datesData}
        />
      </div>
    </section>
  )
}

export default EligibilityAndDates
