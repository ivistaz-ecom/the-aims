"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { API_CONFIG } from "../../../config/config"

export default function AimsCarousel() {
  const [start, setStart] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)
  const [visible, setVisible] = useState(4)
  const [isMobile, setIsMobile] = useState(false)
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const stripHtml = (html) => {
    if (typeof window === "undefined") return html
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const url = `${API_CONFIG.SERVER_URL}posts?categories=4&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish&per_page=100`

        const response = await fetch(url)
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
      

        if (Array.isArray(data) && data.length > 0) {
          const formattedSlides = data.map((event, index) => ({
            id: `event-${event.id}`,
            src:
              event.acf?.thumbnail_image ||
              event.acf?.banner_image ||
              "/home/campus/embla-001-updated.webp",
            description: stripHtml(event.title?.rendered || "Event"),
            date: formatDate(event.date || new Date()),
            alt: event.title?.rendered || `Event ${index + 1}`,
            link: `/events/${event.slug}`,
          }))
          setSlides(formattedSlides)
        } else {
          setSlides([])
        }
      } catch (error) {
        console.error("Error fetching events:", error)
        setSlides([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const next = () => {
    if (slides.length > 0) {
      setStart((i) => (i + 1) % slides.length)
    }
  }

  const prev = () => {
    if (slides.length > 0) {
      setStart((i) => (i - 1 + slides.length) % slides.length)
    }
  }

  // Responsive visible count + mobile flag
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setVisible(mobile ? 1 : 4)
      setIsMobile(mobile)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const windowIdxs = Array.from(
    { length: visible },
    (_, k) => (start + k) % slides.length
  )

  // Auto-slide effect
  useEffect(() => {
    if (!paused && slides.length > 0) {
      intervalRef.current = setInterval(() => {
        setStart((i) => (i + 1) % slides.length)
      }, 20500)
    }
    return () => clearInterval(intervalRef.current)
  }, [paused, slides.length])

  if (loading) {
    return (
      <div className="bg-[#fff]">
        <div className="relative w-full container mx-auto py-10">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A22877]"></div>
          </div>
        </div>
      </div>
    )
  }

  if (slides.length === 0) {
    return null
  }

  return (
    <>
      <div className=" bg-[#fff]">
        <div
          className="relative w-full container mx-auto py-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track */}
          {isMobile ? (
            // Mobile: Centered single slide with smooth slide
            <div className="flex justify-center overflow-hidden lg:pt-10 lg:pb-10 pb-10 ">
              <AnimatePresence mode="wait">
                {/* MOBILE SLIDE */}
                <motion.div
                  key={slides[start].id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="relative rounded-2xl overflow-hidden flex flex-col items-center w-80 h-[420px]"
                >
                  {/* image wrapper fixed height */}
                  <div className="relative w-full h-[320px] rounded-lg shadow-5xl  overflow-hidden">
                    <Link
                      href={slides[start].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={slides[start].src}
                        alt={slides[start].alt}
                        fill
                        className="object-cover rounded-lg"
                        priority
                      />
                    </Link>
                  </div>

                  {/* description stays at bottom */}
                  {slides[start].description && (
                    <div className="w-full py-3 bg-white">
                      <p className="text-black text-xs font-medium text-center truncate whitespace-nowrap overflow-hidden">
                        {slides[start].description}
                      </p>
                      <time className="text-black text-sm font-medium text-center pt-1">
                        {slides[start].date}
                      </time>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            // Desktop: multiple slides with animation
            <motion.div
              layout
              className="flex items-end gap-6 overflow-hidden py-10 xl:py-20"
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {windowIdxs.map((idx, pos) => {
                const item = slides[idx]
                const isActive = pos === 0
                return (
                  <motion.div
                    key={item.id}
                    layout
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="relative rounded overflow-hidden  flex flex-col items-center"
                    style={{
                      width: isActive ? 500 : 400,
                      height: isActive ? 440 : 380,
                      marginRight: isActive ? 40 : 0,
                    }}
                    animate={{
                      y: isActive ? -2 : 0,
                      scale: isActive ? 1 : 1,
                    }}
                  >
                    {/* image wrapper fixed height */}
                    <div className="relative w-full flex flex-col items-center justify-center">
                      <div
                        className={`relative w-full rounded-lg overflow-hidden ${
                          isActive ? "h-[320px]" : "h-[280px]"
                        }`}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover rounded-lg"
                            priority={isActive}
                          />
                        </Link>
                      </div>
                      {item.description && (
                        <div className="w-full py-3">
                          <p className="text-black text-xs font-medium text-left truncate whitespace-nowrap overflow-hidden">
                            {item.description}
                          </p>
                          <time className="text-black text-sm font-medium text-left break-words whitespace-normal pt-1">
                            {item.date}
                          </time>
                        </div>
                      )}
                    </div>

                    {/* description at bottom */}
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Arrows */}
          <div className="absolute lg:bottom-10 bottom-10 right-6 flex items-center gap-6">
            {/* PREV BUTTON */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-12 w-12 cursor-pointer rounded-full bg-white text-black shadow-md ring-1 ring-black/10 grid place-items-center hover:bg-[#A22877] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 17"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={next}
              aria-label="Next"
              className="h-12 w-12 cursor-pointer rounded-full bg-white text-black shadow-md ring-1 ring-black/10 grid place-items-center hover:bg-[#A22877] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 17"
                fill="none"
              >
                <path
                  d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                  stroke="currentColor" // ✅ follows text color
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
