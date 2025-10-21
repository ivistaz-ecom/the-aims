import Image from 'next/image'
import React from 'react'

const OurGoalsandObjectives = () => {
  return (
    <>
      {/* Our Goals */}
      <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
        <div className='px-4 lg:px-8'>
          <div className='container mx-auto'>
            <div className='flex flex-col bg-transparent relative z-10'>

              <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex flex-col gap-4'>
                  <Image
                    src="/centre-for-sustainability/cfs-our-goals.webp"
                    alt="Our Goals and Objectives"
                    width={500}
                    height={500}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                    Our Goals
                  </h3>
                  <h5 className='text-start text-lg lg:text-[20px] monser-400 mb-2'>
                    At ACS, we aim to:
                  </h5>
                  <div>
                    <ul className='list-disc list-inside text-start monser-400 flex flex-col gap-4 text-[18px]'>
                      <li>
                        Study best practices adopted by civic bodies, academic institutions, industries, and communities, and adapt them into practical, sustainable development programs for college students
                      </li>
                      <li>
                        Partner with industries to design new corporate social responsibility models for sustainable development, enabling collaborative projects and knowledge exchange between industry and academia in India
                      </li>
                      <li>
                        Co-create solutions with manufacturers of water-saving technologies, solid waste processing equipment, renewable energy systems, and greenhouse gas emission reduction research in Bangalore, aiming to address environmental challenges at both micro and macro scales
                      </li>
                      <li>
                        Actively contribute to sustainable development research collaborations with universities and public agencies by engaging in applied research and outreach to enhance environmental sustainability education in Bangalore
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR OBJECTIVES */}
      <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
        <div className='px-4 lg:px-8'>
          <div className='container mx-auto'>
            <div className='flex flex-col bg-transparent relative z-10'>

              {/* Our Goals */}
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Text Section */}
                <div className='flex flex-col justify-center order-2 md:order-2 lg:order-1 col-span-1'>
                  <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                    Our Objectives
                  </h3>
                  <h5 className='text-start text-lg lg:text-[20px] monser-400 mb-2'>
                    ACS works to:
                  </h5>
                  <div>
                    <ul className='list-disc list-inside text-start monser-400 flex flex-col gap-4 text-[18px]'>
                      <li>
                        Facilitate industry-academia collaboration for sustainability in Bangalore, sharing global best practices in clean energy, water use, waste management, and carbon mitigation
                      </li>
                      <li>
                        Foster excellence in sustainability by connecting students, faculty, policymakers, and communities through progressive academic initiatives and civic partnerships
                      </li>
                      <li>
                        Engage with rural communities to support sanitation and hygiene, aligned with the goals of Swachh Bharat Mission
                      </li>
                      <li>
                        Build international tie-ups for sustainable development research, working with universities, and research institutions across domains including solid waste management solutions, clean energy research, and carbon footprint reduction research in India
                      </li>
                      <li>
                        Empower students to act as sustainability advocates in their professional and personal lives, equipped with critical awareness, practical tools, and a values-driven approach
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Image Section */}
                <div className='order-1 md:order-1 lg:order-2 col-span-1'>
                  <Image
                    src="/centre-for-sustainability/csr-our-objectives.webp"
                    alt="Our Goals and Objectives"
                    width={500}
                    height={500}
                    className='w-full h-full object-contain'
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

export default OurGoalsandObjectives
