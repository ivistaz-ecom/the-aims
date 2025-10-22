import React from "react"
import Table from "@/components/shared/Faculty/Table"

const LibraryAndPhysicalEducation = () => {
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
      "Mr Vidya Sagar R J",
      "BA, MLISC",
      "Assistant Professor & Librarian",
      "-",
    ],
    [
      "2",
      "Ms Roopa V",
      "BA, MLIS",
      "Assistant Professor & Librarian",
      "Kannada",
    ],
    [
      "3",
      "Dr Shiva Prasad N S",
      "BsDIP, BA, MPES, NET, PhD",
      "Assistant Professor & Physical Director",
      "Physical Education",
    ],
  ]

  return (
    <Table
      title="AIMS Library and Physical Education"
      headers={headers}
      data={data}
    />
  )
}

export default LibraryAndPhysicalEducation
