"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa6"
import { CiFacebook } from "react-icons/ci"
import { RiTwitterXFill } from "react-icons/ri"
import { SlSocialYoutube } from "react-icons/sl"
import Link from "next/link"

// LazyIframe component for loading embeds
const LazyIframe = ({ src, title, style, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  return (
    <div style={style} className="relative">
      {!isLoaded && (
        <div
          style={style}
          className="flex items-center justify-center bg-gray-100"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A22877]"></div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity 0.3s",
        }}
        allow="encrypted-media"
        loading="lazy"
        onLoad={handleLoad}
      />
    </div>
  )
}

const MapJourney = () => {
  return (
    <>
      <div className="bg-[#C6F3EA] py-10 lg:px-8 px-4">
        <div className="container mx-auto ">
          <div>
            <h3 className="text-[#A22877]">
              Map Your <br /> Journey
            </h3>
            <p className="lg:w-[55%] lg:pb-5">
              Stay connected through Instagram, LinkedIn & YouTube for updates,
              student stories, and campus moments.
            </p>
          </div>
        </div>

        {/* Social Media Embeds Grid */}
        <div className="container mx-auto pt-10">
          <div className="grid lg:grid-cols-3 gap-6 px-4">
            {/* Instagram Feed Embed */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[350px] overflow-hidden">
                <LazyIframe
                  src="https://www.instagram.com/aimsinstitutes1994/embed"
                  title="Instagram Feed"
                  style={{
                    width: "100%",
                    height: "380px",
                    borderRadius: "17px",
                  }}
                />
              </div>
            </div>

            {/* Facebook Embed Section */}
            {/* <div className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4 text-[#A22877]">
                Facebook
              </h4>
              <div className="w-full max-w-[350px] overflow-hidden">
                <LazyIframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAIMS1994&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                  title="Facebook Page"
                  style={{
                    width: "100%",
                    height: "380px",
                    borderRadius: "17px",
                  }}
                />
              </div>
            </div> */}

            {/* YouTube Embed Section */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[350px]">
                <LazyIframe
                  src="https://www.youtube.com/embed/F0QuL-YQ8To"
                  title="AIMS Institutes Bangalore YouTube Channel"
                  style={{
                    width: "100%",
                    height: "380px",
                    borderRadius: "17px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-5 flex flex-row gap-5 items-center lg:px-0 px-4">
          <h4 className="text-2xl monser-700 pt-5">Follow Us</h4>
          <div className="flex gap-4 items-center justify-center ">
            <Link
              href="https://www.instagram.com/aimsinstitutes1994/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AIMS Institutes on Instagram"
              title="AIMS Institutes on Instagram"
              className="flex items-center"
            >
              <FaInstagram size={30} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.facebook.com/AIMS1994"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AIMS Institutes on Facebook"
              title="AIMS Institutes on Facebook"
              className="flex items-center"
            >
              <CiFacebook size={30} aria-hidden="true" />
            </Link>
            <Link
              href="https://x.com/AIMSinstitutes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AIMS Institutes on X (Twitter)"
              title="AIMS Institutes on X (Twitter)"
              className="flex items-center"
            >
              <RiTwitterXFill size={30} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.youtube.com/@AIMSInstitutesBangalore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AIMS Institutes on YouTube"
              title="AIMS Institutes on YouTube"
              className="flex items-center"
            >
              <SlSocialYoutube size={30} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MapJourney
