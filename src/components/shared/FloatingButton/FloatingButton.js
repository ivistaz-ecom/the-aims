"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { GoArrowDownRight } from "react-icons/go"
import { QuickActionsButton } from "."

const FloatingButton = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Listen for mobile menu state changes
  useEffect(() => {
    const handleMobileMenuToggle = (event) => {
      setIsMobileMenuOpen(event.detail.isOpen)
    }

    window.addEventListener("mobileMenuToggle", handleMobileMenuToggle)
    return () =>
      window.removeEventListener("mobileMenuToggle", handleMobileMenuToggle)
  }, [])

  return (
    <>
      {/* Main Floating Buttons */}
      <div
        className={`fixed lg:right-4 right-3 md:right-5 md:top-[25%] top-[35%] flex flex-col z-[9999] -rotate-90 transform origin-right transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Enquire Now Button */}
        <div className="flex gap-4">
          {/* Apply Now Button */}
          <Link
            href="https://apply.theaims.ac.in/login"
            target="_blank"
            className="bg-[#9c2474] text-white font-semibold text-sm md:text-2xl px-3 md:px-4 py-1 rounded-tl-lg rounded-tr-lg shadow-lg transform origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center  "
          >
            <span className="flex items-center justify-center gap-1 md:gap-2 ">
              Apply Now
              <GoArrowDownRight className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
            </span>
          </Link>

          {/* Enquire Now Button */}
          <Link
            href="/contact-us"
            className="bg-[#9c2474] text-white font-semibold text-sm md:text-2xl px-3 md:px-4 py-1 rounded-tl-lg rounded-tr-lg shadow-lg transform  origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center"
          >
            <span className="flex items-center justify-center gap-1 md:gap-2">
              Contact Us
              <GoArrowDownRight className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
            </span>
          </Link>
        </div>
      </div>
      <QuickActionsButton />
    </>
  )
}

export default FloatingButton
