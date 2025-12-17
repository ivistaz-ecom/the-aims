"use client"
import React from "react"

const SchoolOfBusinessFacultyTable = () => {
    // Faculty data
    const facultyData = [
        { sno: 1, name: "Dr. Kiran Reddy", gender: "Female", designation: "Sr. Professor", department: "Management", qualification: "PhD" },
        { sno: 2, name: "Dr. Roja Reddy M", gender: "Female", designation: "Professor & Executive Director", department: "Management", qualification: "PhD" },
        { sno: 3, name: "Dr. Ramamurthy B.M", gender: "Male", designation: "Principal & Professor", department: "Management", qualification: "MBA, M.Phil, NET, Ph.D" },
        { sno: 4, name: "Dr. Hemanth Kumar S", gender: "Male", designation: "Dean / Professor", department: "Management", qualification: "BE, MBA, Ph.D" },
        { sno: 5, name: "Dr. Kalpana Venugopal", gender: "Female", designation: "Associate Dean / Professor", department: "Management", qualification: "BBM, MBA, MHRM, PhD" },
        { sno: 6, name: "Dr. Ramesh Raj Ayer", gender: "Male", designation: "Sr. Professor", department: "Management", qualification: "B.Sc, MBA, MA, DMS, PGDM, Ph.D" },
        { sno: 7, name: "Dr. Siddaiah", gender: "Male", designation: "Sr. Professor", department: "Management", qualification: "B.Com, M.Com, Ph.D" },
        { sno: 8, name: "Dr. V Saravana Kumar", gender: "Male", designation: "Professor", department: "Management", qualification: "B.Com, M.Com, MBA, M.Phil, Ph.D" },
        { sno: 9, name: "Dr. Jayaprakash Reddy R", gender: "Male", designation: "Professor", department: "Management", qualification: "B.Com, M.Com, MBA, M.Phil, Ph.D" },
        { sno: 10, name: "Dr. T N Anuradha", gender: "Female", designation: "Professor", department: "Management", qualification: "BA, MA, M.Phil, Ph.D" },
        { sno: 11, name: "Mr. L R S Mani", gender: "Male", designation: "Professor", department: "Management", qualification: "BBA, MBA" },
        { sno: 12, name: "Dr. Mohammad Javad Ghalambor", gender: "Male", designation: "Associate Professor", department: "Management", qualification: "BSc, MBA, Ph.D" },
        { sno: 13, name: "Dr. Guravaiah Pelluri", gender: "Male", designation: "Associate Professor", department: "Management", qualification: "M.Com, MBA, NET, SET, Ph.D" },
        { sno: 14, name: "Mr. Gourav Koundal", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "B.Com, MBA (Ph.D)" },
        { sno: 15, name: "Ms. Chandrika B K", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "BE, MBL, MBA (Ph.D)" },
        { sno: 16, name: "Ms. Rashmi Dhondale", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "BCA, MBA" },
        { sno: 17, name: "Mr. Harinath K", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "B.Com, M.Com, M.Phil" },
        { sno: 18, name: "Dr. Murali Mohan", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "PGDM, Ph.D" },
        { sno: 19, name: "Mr. Maneesh Reddy M", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "BA, MBA" },
        { sno: 20, name: "Dr. Lakshminarayana S", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "B.Com, M.Com, M.Phil, MBA, Ph.D" },
        { sno: 21, name: "Dr. Nirupama M P", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "BE, M.Tech, PGDHR, Ph.D" },
        { sno: 22, name: "Dr. Dara Yoganand", gender: "Male", designation: "Associate Professor", department: "Management", qualification: "BA, MA, M.Phil, Ph.D" },
        { sno: 23, name: "Ms. Sanjana Chinnu Jacob", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "BBM, MBA, PGDBM (Ph.D)" },
        { sno: 24, name: "Ms. Divya A", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "BSW, MHRD, M.Com (Ph.D)" },
        { sno: 25, name: "Ms. Kuncham Sujatha", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "B.Com, M.Com, MBA" },
        { sno: 26, name: "Mr. Megha Narayan Nayak", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "B.Com, M.Com, KSET" },
        { sno: 27, name: "Mr. Vijayaraj K S", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "BA, MA, M.Phil (Ph.D)" },
        { sno: 28, name: "Dr. Basavaraja K P", gender: "Male", designation: "Associate Professor", department: "Management", qualification: "BA, B.Ed, MA, Ph.D, UGC-NET" },
        { sno: 29, name: "Ms. Deepa V H", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "B.Sc, M.Sc, B.Ed, NET (Ph.D)" },
        { sno: 30, name: "Ms. Modugula Vidyullatha", gender: "Female", designation: "Assistant Professor", department: "Management", qualification: "BE, MBA" },
        { sno: 31, name: "Mr. Ramakrishna", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "BE" },
        { sno: 32, name: "Mr. Sunil Augustine", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "BE, MBA" },
        { sno: 33, name: "Mr. Dr Srinivas R", gender: "Male", designation: "Assistant Professor", department: "Management", qualification: "B.Com, MBS, UGC NET, KSET, PHD" },
    ]
    

    const headers = ["S.No", "Name of the Staff", "Gender", "Designation/Position", "Department", "Qualification"]

    return (
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0 bg-white">
            {/* Title */}
            <h2
                className="text-2xl md:text-4xl mb-4 monser-600 font-bold text-center"
                style={{ color: '#0C2165' }}
            >
                SCHOOL OF BUSINESS
            </h2>

            {/* Academic Year */}
            <div
                className="text-lg md:text-xl mb-6 monser-400 text-center"
                style={{ color: '#0C2165' }}
            >
                Academic Year: 2024 - 2025
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#808080]">
                    {/* Header */}
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="bg-[#531675] text-white text-xs md:text-sm lg:text-[20px] py-3 px-2 md:px-3 text-left border border-[#808080] monser-600"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {facultyData.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="hover:bg-gray-50"
                            >
                                <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                    {row.sno}
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                    {row.name}
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                    {row.gender}
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                    {row.designation}
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                    {row.department}
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                    {row.qualification}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SchoolOfBusinessFacultyTable
