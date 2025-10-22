'use client'
import React, { useState } from "react";

const MeetOurResearchGuides = () => {
    const guides = {
        "Dr Kiran Reddy": {
            categoryData: [
                { category: "General Merit", vacancies: 1 },
                { category: "Other Backward Classes", vacancies: 1 },
                { category: "Scheduled Castes / Tribes", vacancies: 0 },
                { category: "Foreign Nationals", vacancies: 1 },
            ],
        },
        "Dr Renati Jayaprakash Reddy": {
            categoryData: [
                { category: "General Merit", vacancies: 0 },
                { category: "Other Backward Classes", vacancies: 0 },
                { category: "Scheduled Castes / Tribes", vacancies: 0 },
                { category: "Foreign Nationals", vacancies: 0 },
            ],
        },
        "Dr B.A. Karunakara Reddy": {
            categoryData: [
                { category: "General Merit", vacancies: 0 },
                { category: "Other Backward Classes", vacancies: 0 },
                { category: "Scheduled Castes / Tribes", vacancies: 0 },
                { category: "Foreign Nationals", vacancies: 0 },
            ],
        },
    };

    const [selectedGuide, setSelectedGuide] = useState("Dr Kiran Reddy");

    const totalVacancies = guides[selectedGuide].categoryData.reduce(
        (sum, item) => sum + item.vacancies,
        0
    );

    return (
        <>
            <div className="border-b border-gray-500 mb-10">
                <div className="lg:px-8 px-4 py-5">
                    <div className="container mx-auto">
                        {/* Title */}
                        <div className="lg:w-1/2 items-center text-center lg:text-left mb-6">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c2165]">
                                Meet Our
                            </h3>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#a22978] italic -mt-6 md:-mt-8">
                                Research Guides
                            </h3>
                        </div>

                        {/* Responsive Layout */}
                        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20">
                            {/* Left Side */}
                            <div className="flex-1 w-full">
                                <div className="text-2xl font-bold mb-2.5">Management</div>
                                <button
                                    onClick={() => setSelectedGuide("Dr Kiran Reddy")}
                                    className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === "Dr Kiran Reddy"
                                        ? "bg-[#a2396e] text-white border-none"
                                        : "bg-white text-black border border-black"
                                        }`}
                                >
                                    Dr Kiran Reddy
                                </button>

                                <div className="text-2xl font-bold mb-2.5 mt-5">Commerce</div>
                                {["Dr Renati Jayaprakash Reddy", "Dr B.A. Karunakara Reddy"].map(
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

                            {/* Divider (hidden on mobile) */}
                            <div className="hidden lg:block w-px bg-gray-600 self-stretch"></div>

                            {/* Right Side */}
                            <div className="flex-1 w-full">
                                <div className="text-2xl md:text-4xl mb-5 pl-0 lg:pl-2 text-[#a2396e] font-semibold" style={{ fontWeight: "600" }}>
                                    {selectedGuide}
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border-separate border-spacing-x-3 border-spacing-y-3">
                                        <thead>
                                            <tr>
                                                <th className="bg-[#a8d8d0] p-2 rounded-md shadow-md text-left text-base md:text-lg font-semibold" style={{ fontWeight: "600" }}>
                                                    Category
                                                </th>
                                                <th className="bg-[#a8d8d0] p-2 rounded-md shadow-md text-center text-base md:text-lg font-semibold" style={{ fontWeight: "600" }}>
                                                    Vacancy Availability
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {guides[selectedGuide].categoryData.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="bg-white p-2 rounded-md shadow-md text-sm md:text-base">
                                                        {item.category}
                                                    </td>
                                                    <td className="bg-white p-2 rounded-md shadow-md text-center text-sm md:text-base">
                                                        {item.vacancies}
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td className="bg-[#a8d8d0] font-bold p-2 rounded-md shadow-md text-sm md:text-base" style={{ fontWeight: "600" }}>
                                                    Total
                                                </td>
                                                <td className="bg-[#a8d8d0] font-bold p-2 rounded-md shadow-md text-center text-sm md:text-base" style={{ fontWeight: "600" }}>
                                                    {totalVacancies}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h6 className="ps-3">* 1 OBC seat plus either 1 GM or 1 FN seat.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MeetOurResearchGuides;
