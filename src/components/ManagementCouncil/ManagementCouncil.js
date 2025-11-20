import Link from "next/link"
import React from "react"

const ManagementCouncil = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Management Council of AIMS Institutes
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-2">
            <p className="text-lg">
              The Management Council handles academic operations and
              administrative coordination, ensuring smooth functioning across
              all departments.
            </p>
          </div>
          <div>
            {/* <h4 className="text-2xl text-bold">Governing Council Members</h4> */}
            <ul className="list-disc list-outside space-y-2 pl-6">
              <li className="text-[18px] text-[#A22877]">
                <Link
                  href="/pdf/management-council/Management-Council-Members.pdf"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  Management Council Members -{" "}
                  <span className="text-bold underline">View</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagementCouncil
