"use client"
import React from "react"

const scholarships = [
  {
    slno: 1,
    category: "Smt. Nagarathnamma Scholarship (Max 2 Candidates per Programme)",
    eligibility:
      "90% or above in 12th / A Level (for UG) or Graduation (for PG)",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Evidence of community service",
      "Certificates of national/international achievements (if any)",
      "2 Letters of Recommendation",
      "Aadhar Card / PAN Card copies",
      "2 Passport size photographs",
    ],
    scholarship: "100%",
  },
  {
    slno: 2,
    category: "AIMS Merit Scholarship (Max 2 Candidates per Programme)",
    eligibility:
      "90% or above in 12th / A Level (for UG) or Graduation (for PG)",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Evidence of community service",
      "Certificates of national/international achievements (if any)",
      "2 Letters of Recommendation",
      "Aadhar Card / PAN Card copies",
      "2 Passport size photographs",
    ],
    scholarship: "50%",
  },
  {
    slno: 3,
    category: "AIMS Scholarship for Sports (Max 2 Candidates per Programme)",
    eligibility:
      "Recognized District/Zonal /State/National level performer + 60% marks in 12th / A Level (for UG) or Graduation (for PG)",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Sports achievement certificates",
      "2 Letters of Recommendation",
      "Aadhar Card / PAN Card copies",
      "2 Passport size photographs",
    ],
    scholarship:
      "National/State Level Representation - 90%, District/Zonal Level Representation - 50%",
  },
  {
    slno: 4,
    category: "AIMS Existing Student for Continuing Study for UG/PG",
    eligibility:
      "Completion of 12th/'A' Level for UG and graduation for PG from AIMS",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Aadhar Card",
      "PAN Card",
      "2 passport photos",
    ],
    scholarship: "20%",
  },
  {
    slno: 5,
    category:
      "AIMS Alumni / Staff Referral / Student Referral / AIMERS Siblings",
    eligibility:
      "Completion of 12th/'A' Level for UG and graduation for PG from a recognized institution",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Aadhar Card",
      "PAN Card",
      "2 passport photos",
    ],
    scholarship: "10%",
  },
  {
    slno: 6,
    category:
      "Defence & Armed Forces / Peenya Industrial Association Employees",
    eligibility:
      "Indian citizen; Completion of 12th/'A' Level for UG and graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Defence ID Proof",
      "Aadhar",
      "PAN",
      "2 passport photos",
    ],
    scholarship: "12%",
  },
  {
    slno: 7,
    category: "SC / ST Karnataka Students",
    eligibility:
      "Indian citizen; Completion of 12th/'A' Level for UG and graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Caste Certificate",
      "Aadhar",
      "PAN",
      "2 passport photos",
    ],
    scholarship: "25%",
  },
  {
    slno: 8,
    category: "EWC",
    eligibility:
      "Completion of 12th/'A' Level for UG and graduation for PG; Family income < INR 2L per annum",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Income Certificate",
      "Aadhar",
      "PAN",
      "2 passport photos",
    ],
    scholarship: "8%",
  },
]

const FeeconcessionTable = () => {
  return (
    <>
      <div className="bg-[#E6F8F6]  text-center py-5">
        <h1 className="text-2xl md:text-3xl playfair-300 text-[#9B2564] -mt-2">
          AIMS Commitment to Affordability
        </h1>
        <h5 className="text-lg md:text-4xl playfair-300 text-[#3B2A7B] -mt-6">
          Fee Concession for Eligible Students
        </h5>
      </div>
      <div className="lg:px-8">
        <div className="container mx-auto p-6 mb-5">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-6 monser-500 ">
            Fee Concession Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="p-3 border border-gray-300">Category</th>
                  <th className="p-3 border border-gray-300">Eligibility</th>
                  <th className="p-3 border border-gray-300">
                    Documents Required
                  </th>
                  <th className="p-3 border border-gray-300 text-center">
                    Scholarships % on Tuition fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((item, index) => (
                  <tr key={index} className="align-top">
                    {/* Category */}
                    <td className="p-3 border border-gray-300 font-medium">
                      {item.category}
                    </td>

                    {/* Eligibility - Gray */}
                    <td className="p-3 border border-gray-300 bg-[#F3F3F3]">
                      {item.eligibility}
                    </td>

                    {/* Required Documents */}
                    <td className="p-3 border border-gray-300 align-top">
                      {item.slno >= 4 ? (
                        // Paragraph format for entries 4-8
                        <span>{item.documents.join(", ")}.</span>
                      ) : (
                        // Bullet list for entries 1-3
                        <div>
                          <ul className="list-disc pl-5 text-sm">
                            {item.documents.map((doc, idx) => (
                              <li key={idx}>{doc}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </td>

                    {/* Scholarship Percentage */}
                    <td className="p-3 border border-gray-300 text-center align-middle bg-[#E0F9F4] font-medium">
                      {item.scholarship}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeeconcessionTable
