'use client'
import React, { useState } from "react";

const OurAwardedScholars = () => {
    const scholarsData = {
        "Dr Kiran Reddy": [
            {
                year: "2022",
                entries: [
                    "Ms. Navya Bhanu - Microfinance for Urban Poor - An Evaluation of Self Help Groups in Bangalore",
                ],
            },
            {
                year: "2021",
                entries: [
                    "Ms. Harshitha S - Impact of Work-life Balance on Performance of Women Employees in Service Industry",
                ],
            },
            {
                year: "2020",
                entries: [
                    "Mr. Arijit Roy - Effectiveness of Advertising in Creating Brand Equity of Product Based E-Tailers",
                    "Ms. Maria Pramila Dsouza - Impact of Accountability of Non-Governmental Organizations (NGOs) on Social Development: A Study of Select NGO's in Karnataka",
                    "Ms. Bhavya Bhanu - Impact of Recruitment Process Outsourcing on Employee Performance in Select Information Technology Organizations",
                    "Mr. Somayeh Azoor - Marketing of Renewable Energy - A Study of Solar Energy Users in Mysore",
                ],
            },
            {
                year: "2018",
                entries: ["Mohammad Javad Ghalambor"],
            },
        ],
        "Dr Kavitha Desai": [
            {
                year: "2020",
                entries: ["Mr. Mehrdad Nazari - Strategic Planning and Performance: A Study of Select Companies in Indian Automobile Industry.",
                    "Mr. Abdolhamid Bidokht - An Evaluation of Financial Performance of Select Private Sector Banks in India.",
                    "Ms. Jyothi M.N - Human Resource Management in Banking Industry in India - A Comparative Study of Private and Foreign Banks."
                ]
            },
            {
                year: "2019",
                entries: ["Ms. Mahalakshmi S - Internet of Things in Management of Electronic Power Distribution at BESCOM.",
                    "Mr. Debopam Chakrabarti - Supply Chain Efficiency of Different Distribution Channels for Vegetables - A Study of Select Regions in Telangana.",
                ]
            },
        ],
        "Dr Somanath V.S": [
            {
                year: "2020",
                entries: ["Mr. Pramu Kumar Raje Urs M N - A Comparative Study of Green Human Resources Management Practices in Manufacturing and Information Technology Firms in Bangalore.",
                    "Ms. Satarupa Misra - Pension Plans as an Income Security - An Assessment of Employees Perception in Select Private Sector Firms.",
                    "Mr. Nagakrishna Raje Urs - Fringe Benefits and Employees Performance - A Comparative Study of Public and Private Sector Companies."

                ]
            },
        ],
        "Dr Renati Jayaprakash Reddy": [
            {
                year: "2022",
                entries: ["Ms. Hridhya.P.K - Financial Literacy and Personal Investment Decisions by Individual Investors of Kerala.",
                    "Ms. Anas Mohammad A'bad Alkasasbeh - Time Driven Activity Based Costing (TDABC) and Profit Maximization in Jordanian Cement Factories."
                ]
            },
            {
                year: "2021",
                entries: ["Ms. Geethanjali. G - Startups in India - A Study on Challenges and Prospects of Selected Units in Bengaluru.",
                ]
            },
            {
                year: "2019",
                entries: ["Mr. Davood Rismani - Role of Intellectual Capital in Value Creation through Organizational Performance - A Comparative Study of Selected Industries in India.",
                    "Mr. Papaiah - Challenges of MSMEs in Karnataka: A Study with Reference to Peenya Industrial Area, Bengaluru."
                ]
            },
        ],
        "Dr B.A.Karunakara Reddy": [
            {
                year: "2021",
                entries: ["Mr. Hariharan.R - A Study of price fixation Mechanism in Indian Commodity Market - A Special Reference to Selected Agricultural Commodities."]
            },
            {
                year: "2020",
                entries: ["Mr. Bardees Taher Ahmed Al Okab - Sustainable Development and Eco-Tourism in Yemen - A Study on IBB Province.",
                    "Mr. Mahmoud Fawzi Z. Ismail - A Study on the Modern Management Accounting Techniques for Competitive Advantage in the Jordanian Telecommunications.",
                ]
            },
        ],
    };

    const [selectedGuide, setSelectedGuide] = useState("Dr Kiran Reddy");

    return (
        <div className="border-b border-gray-500 md:mb-10 mb-6">
            <div className="lg:px-8 px-4">
                <div className="container mx-auto pb-10">
                    {/* Title */}
                    <div className="lg:w-1/2 items-center text-center lg:text-left mb-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c2165]">
                            Our Awarded
                        </h3>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#a22978] italic -mt-6 md:-mt-8">
                            Scholars
                        </h3>
                    </div>

                    {/* Layout */}
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20">
                        {/* Left Side */}
                        <div className="flex-1 w-full">
                            <div className="text-2xl font-bold mb-2.5">Management</div>
                            {["Dr Kiran Reddy", "Dr Kavitha Desai", "Dr Somanath V.S"].map(
                                (name) => (
                                    <button
                                        key={name}
                                        onClick={() => setSelectedGuide(name)}
                                        className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === name
                                            ? "bg-[#a2396e] text-white border-none"
                                            : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-none"
                                            }`}
                                    >
                                        {name}
                                    </button>
                                )
                            )}

                            <div className="text-2xl font-bold mb-2.5 mt-5">Commerce</div>
                            {["Dr Renati Jayaprakash Reddy", "Dr B.A.Karunakara Reddy"].map(
                                (name) => (
                                    <button
                                        key={name}
                                        onClick={() => setSelectedGuide(name)}
                                        className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === name
                                            ? "bg-[#a2396e] text-white border-none"
                                            : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-none"
                                            }`}
                                    >
                                        {name}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px bg-gray-600 self-stretch"></div>

                        {/* Right Side */}
                        <div className="flex-1 w-full">
                            <div
                                className="text-2xl md:text-4xl mb-5 pl-0 lg:pl-2 text-[#a2396e]"
                                style={{ fontWeight: "600" }}
                            >
                                Guide - {selectedGuide}
                            </div>
                            <div className="overflow-x-auto border border-gray-500 rounded-lg">
                                <table className="min-w-full border border-gray-500 rounded-lg overflow-hidden">
                                    <tbody>
                                        {scholarsData[selectedGuide].map((yearBlock, idx) => (
                                            <tr key={idx} className="border-t border-gray-500">
                                                {/* Year cell */}
                                                <td
                                                    className="bg-white p-3 font-bold text-center align-top w-20 border-r border-gray-500"
                                                    style={{ fontWeight: "600" }}
                                                >
                                                    {yearBlock.year}
                                                </td>
                                                {/* Scholars list cell */}
                                                <td className="bg-white p-3">
                                                    {yearBlock.entries.length > 1 ? (
                                                        <div className="space-y-2">
                                                            {yearBlock.entries.map((entry, i) => (
                                                                <div key={i} className="flex items-start">
                                                                    <span className="pr-2">•</span>
                                                                    <span className="text-[16px]">{entry}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <p className="" style={{ fontSize: '16px' }}>{yearBlock.entries[0]}</p>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAwardedScholars;
