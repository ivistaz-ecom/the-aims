import React from "react"
import Table from "@/components/shared/Faculty/Table"

const SchoolOfHospitalityAndTourism = () => {
  const headers = [
    "Sl.No",
    "Faculty Name",
    "Qualification",
    "Designation",
    "Specialisation",
  ]
  const data = [
    [
      "1",
      "Mr Karthikeyan K",
      "B.Sc, MBA, PGDHA (PhD)",
      "Assistant Professor",
      "Food and Beverages Production",
    ],
    [
      "2",
      "Mr Ganesh L P",
      "Craft course in Bakery, B.Sc (HM & T)",
      "Assistant Professor",
      "Food and Beverages Production",
    ],
    [
      "3",
      "Mr Vishnu S Jingade",
      "BHM, MTM",
      "Assistant Professor",
      "Front Office",
    ],
    [
      "4",
      "Mr Sarat Chandra Bardhan",
      "Dip in Hotel Mgt, (M.Sc-HM)",
      "Assistant Professor",
      "Food and Beverages Services",
    ],
    ["5", "Mr Mridhul Sai PV", "BHM", "Assistant Professor", "Housekeeping"],
    [
      "6",
      "Ms Sangeetha Das",
      "BHM, MHM",
      "Assistant Professor",
      "Housekeeping",
    ],
  ]

  return (
    <Table
      title="AIMS School of Hospitality and Tourism"
      headers={headers}
      data={data}
    />
  )
}

export default SchoolOfHospitalityAndTourism
