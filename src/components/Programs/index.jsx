import React from "react"
import HeroBanner from "./HeroBanner"
import ProgramsContent from "./ProgramsContent"
import SchoolOfBusiness from "./SchoolOfBusiness"
import SchoolOfHospitality from "./SchoolOfHospitality"
import SchoolOfFinance from "./SchoolOfFinance"
import SchoolOfIT from "./SchoolOfIT"
import SchoolOfPUC from "./SchoolOfPUC"
import ChartYourCourse from "./ChartYourCourse"

const index = () => {
  return (
    <div>
      <HeroBanner />
      <ProgramsContent />
      <SchoolOfBusiness />
      <SchoolOfHospitality />
      <SchoolOfFinance />
      <SchoolOfIT />
      <SchoolOfPUC />
      <ChartYourCourse />
    </div>
  )
}

export default index
