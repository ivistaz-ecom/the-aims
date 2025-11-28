import React from "react"
import Image from "next/image"
import { bhmCompanyData } from "@/utils/bhmCompanyData"

const BhmCompanies = () => {
  // Don't render if no data
  if (!bhmCompanyData || bhmCompanyData.length === 0) {
    return null
  }

  return (
    <>
      <div className="bg-white py-10 px-4 lg:px-8">
        <div className="container mx-auto md:p-6 shadow-lg rounded-lg">
          {/* Companies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-8">
            {bhmCompanyData.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-2 lg:p-4 flex items-center justify-center"
              >
                <div className="relative w-full h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={1170}
                    height={1160}
                    className="w-full h-full object-contain max-w-full max-h-full"
                    priority={company.id <= 6} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BhmCompanies
