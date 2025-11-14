import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '../../shared/ApplicationMarquee'

const HeroBannerEce = ({ announcements, pageType = 'admissions' }) => {
    return (
        <>
            <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">

                {/* Background Image Desktop*/}
                <div className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/entrepreneurship-excellence-centre/entrepreneurship-excellence-centre-herobanner.webp')]" />

                {/* Background Image - Mobile */}
                <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/entrepreneurship-excellence-centre/entrepreneurship-excellence-centre-herobanner-mobile.webp')]" />

                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div>

                {/* Bottom Content Container */}
                <div className="absolute md:bottom-10 bottom-0 left-0 right-0">
                    <div className="px-4 lg:px-8">
                        <div className="container mx-auto">
                            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-0">
                                <div className="flex items-center">
                                    <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 md:text-start text-center">
                                        AIMS <br className='hidden lg:block' />
                                        Entrepreneurship Excellence Centre
                                        <br className='hidden lg:block' />
                                        <span className="lg:ml-0  ml-2  playfair-400">(AEEC)</span>
                                      
                                    </h1>
                                </div>
                                {/* <div className="flex items-center">
                                <Image
                                    src="/school-of-business/iacbe.png"
                                    alt="IACBE"
                                    width={400}
                                    height={100}
                                    className="object-contain"
                                />
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-5 left-0 right-0">
                    <div className="px-4 lg:px-8">
                        <div className="container mx-auto py-4">
                            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/white-empower.svg"
                                        alt="Recruiters"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default HeroBannerEce
