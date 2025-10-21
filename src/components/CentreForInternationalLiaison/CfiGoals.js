import Image from 'next/image'
import React from 'react'

const CfiGoals = () => {
    return (
        <>
            {/* OUR OBJECTIVES */}
            <div className='justify-center items-center mb-10 flex flex-col relative overflow-hidden'>
                <div className='px-4 lg:px-8'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col bg-transparent relative z-10'>
                            {/* Our Goals */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                {/* Text Section */}
                                <div className='flex flex-col order-2 lg:order-1 justify-center'>
                                    <h3 className='text-start text-[28px] lg:text-[56px] playfair-300 text-[#A22877]'>
                                        Goals
                                    </h3>
                                    <ul className='list-disc list-inside text-start monser-400 flex flex-col gap-4'>
                                        <li className='text-lg lg:text-[18px] monser-400'>
                                            Represent AIMS Institutes on global platforms that would help us achieve AIMS Institute’s vision of moulding professionals of global excellence
                                        </li>
                                        <li className='text-lg lg:text-[18px] monser-400'>
                                            Facilitate strategic collaborations with Global Universities/Institutions and Organisations of repute for activities like student/faculty exchange programs, joint research and conferences, and facilitating intake into various courses offered at AIMS Institutes, apart from providing career pathways for AIMERS
                                        </li>
                                        <li className='text-lg lg:text-[18px] monser-400'>
                                            Provide a support system and assistance to international students and professors visiting AIMS Institutes
                                        </li>
                                        <li className='text-lg lg:text-[18px] monser-400'>
                                            Plan and organise global immersion programs that add value for AIMERS and host delegations from foreign Universities and organisations
                                        </li>
                                    </ul>
                                </div>

                                {/* Image Section */}
                                <div className='flex flex-col justify-center items-center gap-4 order-1 lg:order-2'>
                                    <Image
                                        src="/centre-for-international-liaison/cfi-goals-new.webp"
                                        alt="Our Goals and Objectives"
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-contain rounded-2xl'
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfiGoals
