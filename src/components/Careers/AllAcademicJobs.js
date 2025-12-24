import React from "react"
import Button from "@/shared/Button"
import { getAllJobs } from "./jobsData"

const AllAcademicJobs = () => {
  const academicJobs = getAllJobs("academic")

  return (
    <div className="w-full">
      <div className="space-y-4">
        {academicJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <h5 className="text-[24px] monser-600 text-[#A22877] mb-2">
                  {job.title}
                </h5>
                <p className="monser-400 mb-1">{job.department}</p>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <p className="monser-400">
                  {job.experience} | {job.location}
                </p>
                <div className="flex-shrink-0">
                  <Button
                    href={`/careers/${job.slug}`}
                    variant="primary"
                    showArrow={true}
                    className="cursor-pointer"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAcademicJobs
