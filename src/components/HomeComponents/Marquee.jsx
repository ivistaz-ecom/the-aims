import React from 'react'

const Marquee = () => {
  const marqueeContent = [
    "AIMS - Empowering Minds Since 1994",
    "Choose Your Goal • AIM for The Future",
    "Average Package: ₹8 LPA • Highest Package: ₹23 LPA",
    "IACBE Accredited • NAAC 'A' Grade • VET by EHL",
    "Transform Your Career with AIMS",
    "Quality Education • Professional Excellence"
  ]

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 py-4 overflow-hidden shadow-lg border-t border-purple-500/20">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        {marqueeContent.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-white font-semibold text-lg tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </marquee>
    </div>
  )
}

export default Marquee
