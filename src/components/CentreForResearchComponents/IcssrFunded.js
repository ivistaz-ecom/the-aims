import React from 'react';

const IcssrFunded = () => {
    const projects = [
        {
            year: "2019",
            title: "An Empirical Study to Identify Reasons for Post-harvest Spoilage of Fruits and Vegetables and Remedial Measures Required",
            duration: "12 Months",
            status: "Ongoing",
            fundingAgency: "ICSSR, New Delhi, India",
            director: "Dr. Sharma, Professor, Management Studies",
            amount: "₹ 4,00,000"
        },
        {
            year: "2019",
            title: "The Impact of NPAs on the Performance and Efficiency of Indian Commercial Banks - A Quantitative Approach",
            duration: "12 Months",
            status: "Ongoing",
            fundingAgency: "ICSSR, New Delhi, India",
            director: "Dr. T Subramanyam, Associate Professor, Management Studies",
            amount: "₹ 1,44,500"
        },
        {
            year: "2017",
            title: "An Analytical Study on Impact of GST Influencing Ease of Doing Business and Focusing on Indian Automotive Industry - A Case Study based on Karnataka",
            duration: "12 Months",
            status: "Completed",
            fundingAgency: "ICSSR, New Delhi, India",
            director: "Prof. Dr. Vijay Bhasker Velury, Associate Professor, Management Studies",
            amount: "₹ 1,25,000"
        },
        {
            year: "2017",
            title: "An Empirical Investigation on Problems in Agricultural Marketing with Special Reference to Rural Bangalore",
            duration: "24 Months",
            status: "Ongoing",
            fundingAgency: "ICSSR, New Delhi, India",
            director: "Dr. Kiran Reddy, Principal & CEO & Professor, Management Studies",
            amount: "₹ 8,00,000"
        },
        {
            year: "2016",
            title: "An Empirical Study on Problems Faced by the Farmers in Agri-storage Facilities with Reference to Rural Bangalore",
            duration: "18 Months",
            status: "Completed",
            fundingAgency: "ICSSR, New Delhi, India",
            director: "Prof. Saravana Kumar, Assistant Professor, Management Studies",
            amount: "₹ 2,00,000"
        },




    ];

    return (
        <div className='px-4 lg:px-8'>
            <div className="container mx-auto pt-10">
                <h2 className="text-center text-2xl font-bold mb-2" style={{ fontWeight: "500" }}>
                    ICSSR-Funded Projects at AIMS
                </h2>
                <h6 className="text-center text-gray-600 mb-8 text-lg">
                    These research efforts reflect our commitment to purposeful inquiry and academic integrity.
                </h6>

                <div className="space-y-4">
                    {projects.map((proj, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row bg-[#FAE6F3] rounded-lg shadow overflow-hidden"
                        >
                            {/* Year */}
                            <div
                                className="flex items-center justify-center bg-[#D8AAC8] text-white font-bold 
                                       text-lg md:text-xl p-3 md:p-0 md:w-20"
                            >
                                <span className="md:-rotate-90 text-black" style={{ fontWeight: "600" }}>{proj.year}</span>
                            </div>

                            {/* Project Details */}
                            <div className="flex-1 border-t md:border-t-0 md:border-r md:border-gray-400 m-4 px-2">
                                <h5 className="mb-2 text-[#1b0d4d] sm:text-lg md:text-xl" style={{ fontWeight: "600", color: "#0C2165" }}>
                                    {proj.title}
                                </h5>
                                <h6 className="text-sm text-gray-700"><strong>Duration:</strong> {proj.duration}</h6>
                                <h6 className="text-sm text-gray-700"><strong>Status of the Project:</strong> {proj.status}</h6>
                                <h6 className="text-sm text-gray-700"><strong>Funding Agency:</strong> {proj.fundingAgency}</h6>
                                <h6 className="text-sm text-gray-700"><strong>Project Director/Co-Director:</strong> {proj.director}</h6>
                            </div>

                            {/* Amount */}
                            <div className="flex flex-col justify-center items-center p-4 bg-white md:bg-transparent">
                                <h6 className="text-gray-600 text-sm sm:text-base">Sanctioned Amount:</h6>
                                <h6 className="text-lg" style={{ fontWeight: "600" }}>{proj.amount}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IcssrFunded;
