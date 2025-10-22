import React from "react"
import Table from "@/components/shared/Faculty/Table"

const SchoolOfCommerceAndFinance = () => {
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
      "Dr B A Karunakar Reddy",
      "B.Com, M.Com, MBA, PhD",
      "Professor",
      "Marketing",
    ],
    [
      "2",
      "Mr Lakshminarayana S",
      "B.Com, M.Com, M.Phil, MBA(PhD)",
      "Assistant Professor",
      "Finance & Accounting",
    ],
    [
      "3",
      "Mr Prabhakar G",
      "B.Com, M.Com, MBA, (PhD)",
      "Associate Professor",
      "Costing and Taxation",
    ],
    [
      "4",
      "Dr Guravaiah Pellur",
      "PhD, Net, Set, M.Com, MBA, B.Com",
      "Associate Professor",
      "Accounting",
    ],
    [
      "5",
      "Ms Srividya H",
      "M.Com, NET, B.Ed, PGDHRM, (MBA), (PhD)",
      "Assistant Professor",
      "Accounting & Taxation",
    ],
    [
      "6",
      "Dr Basavarja K P",
      "BA, B.Ed, MA, PhD, UGC-NET",
      "Associate Professor",
      "Kannada",
    ],
    [
      "7",
      "Mr K Harinath",
      "M.Com, M.Phil",
      "Assistant Professor",
      "Costing and Taxation",
    ],
    [
      "8",
      "Mr Jagadeesha H B",
      "B.Com, M.Com",
      "Assistant Professor",
      "Accounting",
    ],
    [
      "9",
      "Mr Mujawar Jainu Hamid",
      "BA, MA, M.Phil, UGC NET, (PhD)",
      "Assistant Professor",
      "Hindi",
    ],
    [
      "10",
      "Mr Siddesh D",
      "B.Com, M.Com, Kset",
      "Assistant Professor",
      "Accounting and Taxation",
    ],
  ]

  return (
    <Table
      title="AIMS School of Commerce and Finance"
      headers={headers}
      data={data}
    />
  )
}

export default SchoolOfCommerceAndFinance
