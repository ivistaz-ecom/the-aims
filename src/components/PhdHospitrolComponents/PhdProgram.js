import React from 'react'
import Image from "next/image";
import Button from '@/shared/Button';

const PhdProgram = () => {
    return (
        <>
            {/* Top Banner Section */}
            <div className='bg-[#FFF6F6]'>
                <div className='lg:px-8 px-4'>
                    <div className="flex flex-col lg:flex-row items-start md:gap-6 gap-0 container mx-auto md:py-10 py-6">

                        {/* Left Side - Title */}

                        {/* <div className="lg:w-1/2 items-center text-center lg:text-left">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#A22877] italic">
                                PhD Program
                            </h3>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0c2165] -mt-6 md:-mt-8">
                                Course Structure
                            </h3>
                        </div> */}
                        <div className="lg:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165]  pb-0 mb-0">
                            <span style={{ fontWeight: '500', color: '#a22978', fontFamily: 'Playfair Display' }} className="italic -mt-10 md:-mt-10"> PhD Program</span> <br />
                            Course Structure
                        </h3>
                    </div>

                        {/* Right Side - Paragraph */}
                        <div className="lg:w-1/2 flex items-start">
                            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-center lg:text-left">
                            All provisionally registered candidates shall undergo coursework of one semester over a duration of 20 weeks, inclusive of the course-end assessment. The University shall notify the timetable and details of the coursework, including the schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className='lg:px-8 px-4'>
                <div className="flex flex-col md:flex-row gap-6 container mx-auto md:py-10 py-6">
                    {/* Left Side: Text Content */}
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-start order-2 md:order-1">
                        <h2 className="text-lg md:text-xl font-semibold mb-4">
                            The suggested course structure for PhD Programs in Management, Commerce and English of UoM generally consists of:
                        </h2>
                        <ul className="list-disc list-inside space-y-2 mb-6 pl-1">
                            <li className='text-lg'>Research Methodology</li>
                            <li className='text-lg'>Review of Literature and Seminars</li>
                            <li className='text-lg'>Submission of Annual progress reports</li>
                            <li className='text-lg'>Two research paper publications</li>
                            <li className='text-lg'>Thesis submission - After 30 months (minimum)</li>
                        </ul>
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-1/2 w-full order-1 md:order-2">
                        <Image
                            width={1000}
                            height={500}
                            src="/business_school/phd/phd_program_2.webp"
                            alt="Students"
                            className="object-cover w-full h-auto max-h-[300px] md:max-h-none rounded-md"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#A12E79] text-white lg:px-8 px-4">
                <div className='container mx-auto flex flex-col md:flex-row'>

                    {/* Left Side (70%) */}
                    <div className="md:w-[70%] w-full flex flex-col justify-center items-start py-10 px-4 md:px-0 ">
                        <p className="mb-4 text-sm md:text-base">
                            The syllabus for research methodology for each course is separate.
                            <br />
                            For details regarding the course structure, kindly refer to the details here:
                        </p>
                        <Button
                            href="http://www.uni-mysore.ac.in/sites/default/files/content/final_ph.d_notification_edited.pdf"
                            target="_blank"
                            showArrow={true}
                            showReadMore={false}
                            variant="secondary"
                            className="text-[#0C2165] px-4 py-2 rounded-full flex items-center gap-1"
                        >
                            Download PDF
                        </Button>
                    </div>

                    {/* Right Side (30%) */}
                    <div className="md:w-[30%] w-full flex justify-end items-center p-4 hidden md:flex">
                        <Image
                            src="/business_school/phd/arrow.svg"
                            alt="Arrow Icon"
                            width={200}
                            height={200}
                            className="h-25 w-25"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default PhdProgram
