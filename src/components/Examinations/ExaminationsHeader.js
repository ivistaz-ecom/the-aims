import React from 'react'

const ExaminationsHeader = () => {
    return (
        <>
            <div>
                <div className="px-4 lg:px-8 bg-[#E1F9F4]">
                    <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                        <div className='text-center lg:w-[80%] py-10'>
                            <h1 className='text-4xl font-bold text-[#0C2165]'>
                                Examinations
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col py-10 space-y-4'>
                    <div className='space-y-2'>
                        <h2 className='text-[56px] font-bold text-[#0C2165]'>
                            Examinations
                        </h2>
                        <p>
                            We assess students through a structured, outcomes-based model that keeps your progress in focus.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h6 className='text-[40px] font-bold text-[#0C2165] monser-500'>
                            Two-Part Evaluation System
                        </h6>
                        <h6 className="text-[18px] monser-600 ">
                            Each semester is evaluated through:
                        </h6>
                        <ol className='list-decimal list-inside space-y-2 pl-4'>
                            <li className='text-[18px] monser-400'>
                                Continuous Internal Assessment (CIA)
                            </li>
                            <li className='text-[18px] monser-400'>
                                Semester-End University Examinations (UE)
                            </li>
                        </ol>
                    </div>

                    <div className='space-y-2'>
                        <h6 className='text-[40px] font-bold text-[#0C2165] monser-500'>
                            Continuous Internal Assessment (CIA)
                        </h6>
                        <p>
                            This is an ongoing process that tracks how well you're hitting your academic targets. CIA is designed to measure how well students meet the Intended Learning Outcomes (ILOs) for each course.
                        </p>
                        <p>
                            Faculty regularly monitor performance and take corrective action when needed, helping you adjust your course and stay on target.
                        </p>
                    </div>

                    <div className='space-y-2'>
                        <h6 className='text-[40px] font-bold text-[#0C2165] monser-500'>
                            CIA Includes:
                        </h6>
                        <h6 className="text-[24px] monser-600 ">
                            a. Formative Assessments (FA):
                        </h6>
                        <p>
                            These are short-term activities to assess learning progress, including:
                        </p>
                        <ul className='list-disc list-inside space-y-2 pl-4'>
                            <li className='text-[18px] monser-400'>
                                Unit/Monthly/Online Tests
                            </li>
                            <li className='text-[18px] monser-400'>
                                Quizzes
                            </li>
                            <li className='text-[18px] monser-400'>
                                Assignments & Presentations
                            </li>
                            <li className='text-[18px] monser-400'>
                                Projects & Research
                            </li>
                            <li className='text-[18px] monser-400'>
                                Case Studies
                            </li>
                            <li className='text-[18px] monser-400'>
                                Seminars
                            </li>
                            <li className='text-[18px] monser-400'>
                                Activities with professional bodies
                            </li>
                            <li className='text-[18px] monser-400'>
                                Co-curricular & extracurricular initiatives
                            </li>
                        </ul>
                        <h6 className="text-[24px] monser-600 ">
                            b. Summative Assessments (SA):
                        </h6>
                        <p>
                            These are the sessional and pre-final examinations conducted by the department:
                        </p>
                        <ul className='list-disc list-inside space-y-2 pl-4'>
                            <li className='text-[18px] monser-400'>
                                UG Programs: Two sessional exams, class tests, and a pre-final exam
                            </li>
                            <li className='text-[18px] monser-400'>
                                PG Programs: Two sessional exams and/or pre-final exams
                            </li>
                        </ul>
                        <p>
                            CIA results also form the basis of your Internal Assessment (IA) scores, which significantly impact your final semester results.
                        </p>
                        <p>
                            IA evaluation schemes are shared on departmental notice boards and explained during orientation sessions.
                        </p>
                    </div>

                    <div className='space-y-2'>
                        <h6 className='text-[40px] font-bold text-[#0C2165] monser-500'>
                            Semester-End University Examinations (UE)
                        </h6>
                        <p>
                            These final exams are conducted as per the Bangalore University's schedule and regulations.
                        </p>
                        <h6 className='text-[24px] monser-600'>
                            Eligibility to appear for university exams is determined by the following criteria:
                        </h6>
                        <p>
                            To receive your hall ticket and appear for university exams, you must:
                        </p>
                        <ul className='list-disc list-inside space-y-2 pl-4'>
                            <li className='text-[18px] monser-400'>
                                Complete all CIA (Continuous Internal Assessment) requirements
                            </li>
                            <li className='text-[18px] monser-400'>
                                Clear all outstanding fees
                            </li>
                            <li className='text-[18px] monser-400'>
                                Avoid any form of cheating or malpractice, violations lead to disciplinary action
                            </li>
                            <li className='text-[18px] monser-400'>
                                Attend all class tests, sessional exams, and pre-final exams
                            </li>
                        </ul>

                        <h6 className='text-[24px] monser-600'>
                            Note: Failure to meet the above criteria may result in:
                        </h6>
                        <ul className='list-disc list-inside space-y-2 pl-4'>
                            <li className='text-[18px] monser-400'>
                                Denial of your hall ticket
                            </li>
                            <li className='text-[18px] monser-400'>
                                Disqualification from university examinations
                            </li>
                        </ul>
                        <h6 className='text-[24px] monser-600'>
                            Bangalore University Digital Evaluation Centre
                        </h6>
                        <p>
                            AIMS proudly serves as a preferred digital valuation centre for Bangalore University. In 2021–22, AIMS facilitated the digital evaluation of 1,95,397 answer scripts, earning recognition for excellence and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExaminationsHeader;
