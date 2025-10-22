import React from "react"
import Table from "@/components/shared/Faculty/Table"

const PartTimeFaculty = () => {
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
      "Dr Ramesh Raj Ayer",
      "MBA, MA, DMS, PGDM, B.Sc, PhD",
      "Professor",
      "Economics/Marketing",
    ],
    ["2", "Ms Meka Anagha Reddy", "BA, MA", "Assistant Professor", "---"],
    [
      "3",
      "Mr Manjunath K M",
      "MSc - Electronic Media",
      "Assistant Professor",
      "Journalism",
    ],
    ["4", "Ms Ramya Jaganathan", "MA", "Assistant Professor", "French"],
    [
      "5",
      "Ms Vasanthi Pandith",
      "MA English",
      "Assistant Professor",
      "English Literature",
    ],
  ]

  return <Table title="AIMS Part Time Faculty" headers={headers} data={data} />
}

export default PartTimeFaculty
