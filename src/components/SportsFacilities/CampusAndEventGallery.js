"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
// useEffect is already imported above via React import
// Load slick CSS lazily after first paint
const useLoadSlickCss = () => {
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);
};

// Generic Carousel Component
const SportsFacilitiesGalleryCarousel = ({ title, description, category }) => {
  useLoadSlickCss();
  const sliderRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Fetch & filter data
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          "https://docs.theaims.ac.in/wp-json/wp/v2/gallery?per_page=100"
        );
        const data = await res.json();

        console.log("Raw API data:", data);

        const baseUrl = "https://docs.theaims.ac.in/wp-content/uploads/";

        // Flatten multi_gallery into individual slides
        const formatted = data
          .filter((item) => item.acf?.select_gallery_type === category)
          .flatMap((item) =>
            (item.acf?.multi_gallery || []).map((img) => {
              const imagePath =
                img?.metadata?.full?.file ||
                img?.metadata?.medium?.file ||
                img?.metadata?.thumbnail?.file;

              const imageUrl = imagePath ? baseUrl + imagePath : null;
              const isValidUrl =
                imageUrl &&
                (imageUrl.startsWith("http://") ||
                  imageUrl.startsWith("https://"));

              return {
                // per-image caption, fallback to parent caption
                title:
                  img?.attachment?.post_title ||
                  img?.attachment?.post_excerpt ||
                  item.acf?.image_caption ||
                  "",
                category: item.acf?.select_gallery_type || "Uncategorized",
                src: isValidUrl ? imageUrl : null,
              };
            })
          )
          .filter((slide) => slide.src); // Only include slides with valid URLs

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
  };

  return (
    <div className="container mx-auto px-6 py-10 relative">
      {/* Header with Arrows */}
      <div className="flex flex-col md:flex-row mb-6 items-start md:items-end">
        <div className="md:w-[80%] pr-4">
          <h1 className="text-3xl font-bold text-[#8A1D64]">{title}</h1>
          <div className="text-gray-600 mt-2 space-y-4">
            {typeof description === "string"
              ? description
                  .split(/\n\s*\n/)
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph.trim()}</p>
                  ))
              : description}
          </div>
        </div>

        {/* Arrows */}
        <div className="md:w-[20%] flex gap-3 mt-4 md:mt-0 justify-start md:justify-end">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="flex w-10 h-10 border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100 transition"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="flex w-10 h-10 border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100 transition"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-60">
              {slide.src ? (
                <Image
                  src={slide.src}
                  alt={slide.title || "Gallery Image"}
                  fill
                  loading="lazy"
                  placeholder="empty"
                  className="object-cover"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>

            {/* Caption */}
            {/* {slide.title && (
                            <div className="mt-3 text-center">
                                <p className="font-medium">{slide.title}</p>
                            </div>
                        )} */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Page Component
const SportsFacilitiesGallery = () => {
  return (
    <>
      <SportsFacilitiesGalleryCarousel
        title="Sports Facilities"
        description={`The AIMS campus offers well-maintained sports facilities to promote physical fitness, teamwork, and overall well-being among students and staff. The sports complex includes indoor and outdoor spaces for games such as badminton, basketball, football, cricket, and table tennis. 
            
        Regular sports events, inter-departmental tournaments, and fitness activities are organised to encourage participation and healthy competition. The institute also provides access to gym equipment and training areas to support daily exercise routines. These facilities foster a balanced lifestyle and help build a strong sense of community within the campus.`}
        category="Sports Facilities"
      />
    </>
  );
};

export default SportsFacilitiesGallery;
