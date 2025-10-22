import React from "react"
import Table from "@/components/shared/Faculty/Table"

const SchoolOfLiberalArtsAndSciences = () => {
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
      "Ms Anitha B",
      "MSW, KSET, NET (PhD)",
      "Assistant Professor",
      "Social Work",
    ],
    [
      "2",
      "Mr A J Thimma Reddy",
      "BA, MA (Economics)",
      "Assistant Professor",
      "Economics",
    ],
    [
      "3",
      "Ms Deepa V H",
      "B.Sc, M.Sc, B.Ed, NET (PhD)",
      "Assistant Professor",
      "Science",
    ],
    [
      "4",
      "Ms Vijayaraj K S",
      "MA, M.Phil, (PhD)",
      "Assistant Professor",
      "English Literature",
    ],
    ["5", "Ms Sheena V A", "MA, M.Phil", "Assistant Professor", "Psychology"],
    ["6", "Ms Bhavana Patel U", "B.Sc, M.Sc", "Assistant Professor", "Science"],
    ["7", "Ms Shruthi R", "MSW, KSET", "Assistant Professor", "Social Work"],
    ["8", "Ms Aishwarya L", "B.Sc, M.Sc", "Assistant Professor", "Science"],
  ]

  return (
    <Table
      title="AIMS School of Liberal Arts and Sciences"
      headers={headers}
      data={data}
    />
  )
}

export default SchoolOfLiberalArtsAndSciences
