import Image from 'next/image'
import React from 'react'

const CfcOurObjectives = () => {
    return (
        <>
            {/* OUR OBJECTIVES */}
            <div className="justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden">
                <div className="px-4 lg:px-8">
                    <div className="container mx-auto">
                        <div className="flex flex-col bg-transparent relative z-10">

                            {/* Our Goals */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* Image - comes first on mobile & tab */}
                                <div className="flex flex-col justify-center items-center gap-4 order-1 lg:order-2">
                                    <Image
                                        src="/centre-for-consulting/cfc-objectives.webp"
                                        alt="Our Goals and Objectives"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Text - comes below image on mobile & tab */}
                                <div className="flex flex-col order-2 lg:order-1">
                                    <h3 className="text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]">
                                        Objectives
                                    </h3>
                                    <h5 className="text-start text-lg lg:text-[20px] monser-400 mb-2">
                                        As a Centre of Excellence, ACC is committed to:
                                    </h5>
                                    <div>
                                        <ul className="list-disc list-inside text-start monser-400 text-lg lg:text-[18px] flex flex-col gap-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-black">•</span>
                                                Enhance the practical capabilities of AIMS students and faculty through hands-on learning and industry exposure
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-black">•</span>
                                                Work against advance fee collection from Corporates/Businesses and provide pro-bono services to NGOs
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-black">•</span>
                                                Facilitate student participation in real-world projects to build industry-relevant skills
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-black">•</span>
                                                Bridge the gap between academic teaching and practical work in India
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-black">•</span>
                                                Support faculty in improving teaching quality through practical work and exposure to best practices
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-black">•</span>
                                                Utilise AIMS and ACC resources for value-added initiatives that benefit students, faculty, and the community
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfcOurObjectives
