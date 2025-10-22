import React from "react"
import Table from "@/components/shared/Faculty/Table"

const SchoolOfBusiness = () => {
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
      "Dr Meka Kiran Reddy",
      "MA, MBA, PGDCA, PhD",
      "Professor & Principal",
      "Human Resource",
    ],
    [
      "2",
      "Dr Jayaprakash Reddy R",
      "MBA, M.Com, M.Phil, PhD",
      "Professor & Registrar",
      "Accounting",
    ],
    [
      "3",
      "Dr Kalpana Venugopal",
      "BBM, MBA, MHRM, PhD",
      "Professor/Director of MBA",
      "Human Resource",
    ],
    ["4", "Dr T N Anuradha", "MA, M.Phil, PhD", "Professor", "Economics"],
    [
      "5",
      "Dr V Saravana Kumar",
      "B.Com, M.Com, MBA, M.Phil, PhD",
      "Associate Professor",
      "Finance & Accounting",
    ],
    [
      "6",
      "Mr Prasad Swaminathan",
      "B.Com, DMAM, MBA, UGC NET",
      "Associate Professor",
      "Marketing",
    ],
    [
      "7",
      "Mr Meka Priyanandan Reddy",
      "B.Tech, MBA",
      "Assistant Professor",
      "Information Technology",
    ],
    [
      "8",
      "Dr Meka Roja Reddy",
      "B.E, MBA, PhD",
      "Assistant Professor",
      "Marketing",
    ],
    [
      "9",
      "Mr Meka Maneesh Reddy",
      "BA, MBA",
      "Assistant Professor",
      "Marketing",
    ],
    [
      "10",
      "Mr Chaco P J",
      "BAL, LLB, MBA",
      "Associate Professor",
      "Business Regulations and Law",
    ],
    [
      "11",
      "Dr Mohammad Javad",
      "BSC, MBA, PhD",
      "Assistant Professor",
      "Finance",
    ],
    [
      "12",
      "Ms Anushree Benerjee",
      "BBA, MBA, PGDLLAL (PhD)",
      "Assistant Professor",
      "Marketing",
    ],
    [
      "14",
      "Mr Gourav Koundal",
      "B.Com, MBA (PhD)",
      "Assistant Professor",
      "Human Rasource",
    ],
    [
      "15",
      "Ms Medini S Bhat",
      "BA, MA, IPCC (LLB)",
      "Assistant Professor",
      "Finance & Accounting",
    ],
    [
      "16",
      "Dr B M Rama Murthy",
      "MBA, M.Phil, NET PhD",
      "Associate Professor",
      "Finance & Accounting",
    ],
    [
      "16",
      "Dr Dara Yoganand",
      "BA, MA, M.PHIL, PhD",
      "Assistant Professor",
      "Hindi",
    ],
    [
      "17",
      "Ms Mala H S",
      "B.Com, MBA",
      "Asssistant Professor",
      "Finance & Accounting, Taxation & Costing",
    ],
    [
      "18",
      "Ms Divya A",
      "Mcom, AD-HRM, MHRD, (PhD)",
      "Assistant Professor",
      "Human Resource & Satistics",
    ],
    [
      "19",
      "Ms Sanjana Chinnu Jacob",
      "MBA, PGDBM (PhD)",
      "Assistant Professor",
      "Human Resource,Marketing",
    ],
    [
      "20",
      "Mr Bhaskar Sailesh",
      "BHM, MBA(TTM) UGC Net (PhD)",
      "Associate Professor",
      "Front Office",
    ],
    [
      "21",
      "Dr Pushpa B V",
      "B.Com, M.Com, MBA, M.Phil, UGC Net, PhD",
      "Associate Professor",
      "Finance & Accounting",
    ],
  ]

  return <Table title="AIMS School of Business" headers={headers} data={data} />
}

export default SchoolOfBusiness
