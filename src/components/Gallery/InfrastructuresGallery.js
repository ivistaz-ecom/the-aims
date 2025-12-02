"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
// CSS for slick will be loaded lazily inside the component

// Generic Carousel Component
const GalleryCarousel = ({ title, description, category }) => {
    useEffect(() => {
        import("slick-carousel/slick/slick.css");
        import("slick-carousel/slick/slick-theme.css");
    }, []);
    const sliderRef = useRef(null);
    const [slides, setSlides] = useState([]);
    const [slidesToShow, setSlidesToShow] = useState(4);

    // Hover popup state
    const [hoveredSlide, setHoveredSlide] = useState(null);
    const hoverTimeoutRef = useRef(null);

    // Handle hover with delay for smooth UX
    const handleMouseEnter = (slide) => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredSlide(slide);
        }, 150);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        // Don't close if popup is already showing
        // Popup will close when clicking outside or close button
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);

    // Prevent background scroll when popup is open
    useEffect(() => {
        if (hoveredSlide) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [hoveredSlide]);

    // Fetch & filter data
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch(
                    "https://docs-aims.ivista.biz/wp-json/wp/v2/gallery?per_page=100"
                );
                const data = await res.json();

                // Format & filter by category
                const formatted = data
                    .map((item) => ({
                        title: item.acf?.image_caption || null,
                        category: item.acf?.select_gallery_type || "Uncategorized",
                        src: item.acf?.image?.url || null,
                        description: item.content?.rendered || null,
                    }))
                    .filter((item) => item.category === category);

                setSlides(formatted);
            } catch (err) {
                console.error("Error fetching gallery:", err);
            }
        };

        fetchGallery();
    }, [category]);

    // Responsive slide count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) setSlidesToShow(1);
            else if (window.innerWidth <= 768) setSlidesToShow(2);
            else if (window.innerWidth <= 1024) setSlidesToShow(3);
            else setSlidesToShow(4);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 relative">
            {/* Header with Arrows */}
            <div className="flex flex-col md:flex-row mb-4 sm:mb-6 items-start md:items-end">
                <div className="md:w-[80%] pr-2 sm:pr-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8A1D64] leading-tight">{title}</h1>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed">{description}</p>
                </div>

                {/* Arrows */}
                <div className="md:w-[20%] flex gap-2 sm:gap-3 mt-3 sm:mt-4 md:mt-0 justify-start md:justify-end">
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="flex w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100 transition touch-manipulation"
                        aria-label="Previous slide"
                    >
                        <GoArrowLeft className="text-sm sm:text-base" />
                    </button>
                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="flex w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100 transition touch-manipulation"
                        aria-label="Next slide"
                    >
                        <GoArrowRight className="text-sm sm:text-base" />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="px-2"
                        onMouseEnter={() => handleMouseEnter(slide)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-60 transition-shadow duration-300 hover:shadow-xl">
                            {slide.src ? (
                                <Image
                                    src={slide.src}
                                    alt={slide.title || ""}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                />
                            ) : (
                                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">No Image</span>
                                </div>
                            )}
                        </div>
                        <div className="mt-2 sm:mt-3 text-center px-1">
                            <p className="font-medium text-sm sm:text-base line-clamp-2">{slide.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Hover Popup - Centered with transparent black background */}
            {hoveredSlide && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 animate-fadeIn"
                    onClick={() => setHoveredSlide(null)}
                >
                    <div 
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80 sm:w-[26rem] md:w-[32rem] max-h-[90vh] animate-popup relative"
                        onClick={(e) => e.stopPropagation()}
                        onMouseLeave={() => setHoveredSlide(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setHoveredSlide(null)}
                            className="absolute top-3 right-3 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            aria-label="Close popup"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image - Large */}
                        <div className="relative w-full h-64 sm:h-80 md:h-96">
                            {hoveredSlide.src ? (
                                <Image
                                    src={hoveredSlide.src}
                                    alt={hoveredSlide.title || ""}
                                    fill
                                    className="object-cover"
                                    sizes="512px"
                                />
                            ) : (
                                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">No Image</span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            {hoveredSlide.title && (
                                <h3 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 line-clamp-1">
                                    {hoveredSlide.title}
                                </h3>
                            )}
                            {hoveredSlide.description ? (
                                <div
                                    className="text-xs text-gray-500 leading-relaxed line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: hoveredSlide.description }}
                                />
                            ) : (
                                <div className="text-xs text-gray-400 italic">
                                    No description available
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes popupIn {
                    from {
                        opacity: 0;
                        transform: scale(0.85) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .animate-popup {
                    animation: popupIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
            `}</style>
        </div>
    );
};

// Page Component
const GalleryPage = () => {
    return (
        <>
            <GalleryCarousel
                title="AIMS Infrastructures"
                description="With world-class academic infrastructure, cutting-edge labs, a resource-rich library, an open-air amphitheater, a state-of-the-art auditorium, and vibrant student residences, our campus is designed to inspire learning, creativity, and community."
                category="Infrastructures"
            />
        </>
    );
};

export default GalleryPage;
