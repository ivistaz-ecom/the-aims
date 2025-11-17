"use client"
import React, { useEffect } from "react"
import Image from "next/image"

// Generic Carousel Component
const PlacementGalleryCarousel = ({ title, description }) => {
  return (
    <div className="container mx-auto px-6 lg:py-10 py-5 relative">
      {/* Header with Arrows */}
      <div className="flex flex-col md:flex-row mb-6 items-start md:items-end">
        <div className="md:w-[80%] pr-4">
          <h1 className="text-3xl font-bold text-[#8A1D64]">{title}</h1>
          <div className="text-gray-600 lg:mt-2 mt-0 lg:space-y-4 space-y-2">
            {typeof description === "string"
              ? description
                  .split(/\n\s*\n/)
                  .map((paragraph, idx) => <p key={idx}>{paragraph.trim()}</p>)
              : description}
          </div>
          <div className="text-gray-600 lg:mt-4 mt-3">
            <p>
              Contact us:{" "}
              <a
                href="mailto:placements@theaims.ac.in"
                className="text-[#8A1D64] hover:text-[#A22977] underline"
              >
                placements@theaims.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Page Component
const PlacementGallery = () => {
  return (
    <>
      <PlacementGalleryCarousel
        title="Introduction"
        description={`The Placement Cell serves as a vital bridge between students and the professional world, preparing graduates to embark on successful careers. It functions as the central point of contact for companies seeking talented young professionals and for students aspiring to find employment opportunities 
            
        The Placement cell’s primary objective is to enhance the employability skills of students by providing training in areas such as communication, aptitude, technical knowledge, and interview preparation. Through a series of workshops, seminars, and mock interviews, students gain the confidence and practical understanding needed to excel in recruitment processes.
        
        Each year, reputed organisations from diverse sectors visit the campus to recruit students for internships and full-time positions. The Placement Cell ensures smooth coordination between companies and candidates, maintaining transparency and professionalism throughout the process.
        
        Beyond just facilitating job opportunities, the placement cell also strives to build strong relationships with industry leaders and alumni, ensuring that students remain updated with current market trends and expectations.
        
        In essence, the Placement Cell is not only about securing jobs - it is about shaping futures, building confidence, and empowering students to step into the world with competence, integrity, and a spirit of excellence.`}
        category="Placement"
      />
    </>
  )
}

export default PlacementGallery
