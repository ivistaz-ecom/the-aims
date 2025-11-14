import Link from 'next/link'
import React from 'react'

const AcadamicCalender = () => {
    return (
        <>
            <div>
                <div className="px-4 lg:px-8 bg-[#E1F9F4]">
                    <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                        <div className='text-center lg:w-[80%] py-10'>
                            <h1 className='text-4xl font-bold text-[#0C2165]'>
                                Academic collaborations
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col py-10 space-y-4'>
                    <div>
                        <h4 className='text-2xl text-bold'>
                            Stay on track with Important Dates and Key Academic Milestones:
                        </h4>
                        <ul className='list-disc list-inside space-y-2'>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/academic-collaborations/itc-academy/itc-academy.pdf" target='_blank' noopener noreferrer>
                                ICT Academy - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/academic-collaborations/computer-society-of-india /csi-institution-memer-certificate.pdf" target='_blank' noopener noreferrer>
                                Computer Society of India (CSI) Bangalore Chapter
                                 - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                        
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                Harvard Business Review (HBR) - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                Be Wise - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                IEEE Student Chapter - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                Peenya Industrial Association (PIA) - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/academic-collaborations/mou-ehl/mou-ehl.pdf" target='_blank' noopener noreferrer>
                                VET-EHL - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                NDLI - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/academic-collaborations/iiac/iica.pdf" target='_blank' noopener noreferrer>
                                IFCA - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                PHA - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                ENCOVATE - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="#" noopener noreferrer>
                                EUHOFA - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/academic-collaborations/mou-hosco/mou-hosco.pdf" target='_blank' noopener noreferrer>
                                HOSCO - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="/academic-collaborations/chai-point/chai-pointpdf.pdf" target='_blank' noopener noreferrer>
                                Chai Point - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AcadamicCalender
