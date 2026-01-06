'use client'
import React from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { useEffect } from 'react';

const SelectYourCourse = () => {
    useEffect(() => {
        // Load slick carousel CSS after first paint to reduce render-blocking
        import('slick-carousel/slick/slick.css');
        import('slick-carousel/slick/slick-theme.css');
    }, []);
    const [currentFirstSlide, setCurrentFirstSlide] = React.useState(0);

    const schools = [
        {
            id: 1,
            name: "School of Finance and Commerce",
            image: "/school-of-finance/bcom.png",
            href: "/finance-commerce-school"
        },
        {
            id: 2,
            name: "School of Hospitality and Tourism",
            image: "/school-of-hospitality/sohospitality-img-01.jpg",
            href: "/hospitality-tourism-school"
        },
        {
            id: 3,
            name: "School of Information and Technology",
            image: "/school-of-info-tech/bca.png",
            href: "/information-technology-school"
        },
        {
            id: 4,
            name: "Pre-University College (PUC)",
            image: "/pre-university-college/aims.png",
            href: "/pre-university-college"
        }
    ];

    // Duplicate schools for infinite scroll effect
    const extendedSchools = [...schools, ...schools, ...schools];

    const businessPrograms = [
        "PhD in Management",
        "MBA Master of Business Administration",
        "BBA Bachelor of Business Administration",
        "BBA Aviation",
       // "BBA+ CA/ACCA"
    ];

    // Slick carousel settings for marquee-style infinite scroll
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-out",
        centerMode: false,
        centerPadding: '0px',
        focusOnSelect: false,
        pauseOnHover: false,
        swipeToSlide: false,
        touchMove: false,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentFirstSlide(newIndex);
        },
        afterChange: (currentIndex) => {
            setCurrentFirstSlide(currentIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <>
            <style>
                {`
                .slick-track {
                    display: flex !important;
                    align-items: flex-end !important;
                }
            `}
            </style>
            <div className="relative w-full py-16 bg-gradient-to-r from-[#0C2165] via-[#531574] to-[#6E3299] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/20"></div>
                    <div className="absolute right-20 top-20 w-64 h-64 rounded-full bg-white/10"></div>
                    <div className="absolute right-40 top-40 w-32 h-32 rounded-full bg-white/5"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Select your Course
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                            Explore our schools, see their potential paths, and select the one that fits your goal.
                        </p>
                    </div>

                    {/* Bottom Section - School Cards with Slick Carousel */}
                    <div className="relative">
                        <Slider {...sliderSettings}>
                            {extendedSchools.map((school, index) => (
                                <div key={`${school.id}-${index}`} className="px-3">
                                    <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 cursor-pointer group ${index === currentFirstSlide ? 'h-[70vh]' : 'h-48'
                                        }`}>
                                        {/* School Image */}
                                        <div className={`relative overflow-hidden transition-all duration-200 ${index === currentFirstSlide ? 'h-[60vh]' : 'h-48'
                                            }`}>
                                            <Image
                                                src={school.image}
                                                alt={school.name}
                                                width={300}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        {/* School Content */}
                                        <h5 className="text-sm md:text-base text-gray-800">
                                            {school.name}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectYourCourse;
