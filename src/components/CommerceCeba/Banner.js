import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const CommerceCeba = ({ announcements, pageType = 'admissions' }) => {
    return (
        <>
            <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
                {/* Background Image - Desktop */}
                <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner.webp')]" />

                {/* Background Image - Mobile */}
                <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner_mob.webp')]" />

                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
                    }}
                ></div>

                {/* Bottom Content Container */}
                <div className="absolute bottom-10 left-0 right-0">
                    <div className="px-4 lg:px-8">
                        <div className="container mx-auto">
                            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
                                <div className="flex items-center">
                                    <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 lg:text-start text-center">
                                        AIMS<br className="hidden lg:block" /> CEBA
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-5 left-0 right-0 ">
                    <div className="px-4 lg:px-8">
                        <div className="container mx-auto">
                            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/iacbe/since-black.svg"
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

export default CommerceCeba
