import React from "react"
import Table from "@/components/shared/Faculty/Table"

const SchoolOfInformationTechnology = () => {
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
      "Dr Jayashree Nair",
      "BE, M.Tech, PhD",
      "Professor & Director AIQAC",
      "Theory of Computation",
    ],
    [
      "2",
      "Mr S Sunil Kumar",
      "BSC, MCA",
      "Assistant Professor",
      "Operating System",
    ],
    [
      "3",
      "Dr Dhivakar Kaliyan",
      "B.Sc, M.SC, PhD",
      "Assistant Professor",
      "Statistics",
    ],
    [
      "4",
      "Mr Majeti Sai Sasank",
      "B.Sc, M.Sc",
      "Assistant Professor",
      "Applied Statistics, Data Science and Artificial Intelligence",
    ],
    [
      "5",
      "Mr Mithun D Souza",
      "B.Sc, MCA, (PhD Pursuing)",
      "Assistant Professor",
      "Computer Architecture",
    ],
    [
      "6",
      "Dr Govindaraj Padith T G",
      "BSC, MSC, PhD",
      "Associate Professor",
      "Object Oriented Programming using C++",
    ],
    [
      "7",
      "Mr Sreenivasa H V",
      "BSC, MCA, M.Phil, M.Tech",
      "Assistant Professor",
      "Java Programming",
    ],
    [
      "8",
      "Ms Bidisha Pal",
      "DEE, PDCA, AMIE, M.TECH",
      "Assistant Professor",
      "Digital fluency",
    ],
    [
      "9",
      "Ms Vidyarani B V",
      "B.Sc, M.Sc",
      "Assistant Professor",
      "Mathematics",
    ],
    [
      "10",
      "Ms Sumana Basavaraj Arali",
      "BCA, MCA",
      "Assistant Professor",
      "Computer Science",
    ],
    [
      "11",
      "Mr Naveen S",
      "B.Sc, MCA",
      "Assistant Professor",
      "C Programming Lab",
    ],
  ]

  return (
    <Table
      title="AIMS School of Information Technology"
      headers={headers}
      data={data}
    />
  )
}

export default SchoolOfInformationTechnology
