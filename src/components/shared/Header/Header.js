"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { FiMenu, FiX } from "react-icons/fi"
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Button from "@/shared/Button"
import { MenuItems } from "@/utils/MenuItems"
import Link from "next/link"
import Breadcrumbs from "../Breadcrumbs"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [mobileActive, setMobileActive] = useState(null)
  const [isSticky, setIsSticky] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [isWindows, setIsWindows] = useState(false)
  const pathname = usePathname()

  // Detect Windows OS
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    setIsWindows(userAgent.includes("windows"))
  }, [])

  // Close mobile search on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showMobileSearch) {
        setShowMobileSearch(false)
        setShowSearchResults(false)
        setSearchQuery("")
      }
    }

    if (showMobileSearch) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [showMobileSearch])

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileOpen(false)
    setActive(null)
    setMobileActive(null)
    // Dispatch event to notify other components
    window.dispatchEvent(
      new CustomEvent("mobileMenuToggle", {
        detail: { isOpen: false },
      })
    )
  }

  // Function to open mobile menu
  const openMobileMenu = () => {
    setMobileOpen(true)
    // Close mobile search when opening mobile menu
    setShowMobileSearch(false)
    // Dispatch event to notify other components
    window.dispatchEvent(
      new CustomEvent("mobileMenuToggle", {
        detail: { isOpen: true },
      })
    )
  }

  // Search functionality
  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    setIsSearching(true)
    try {
      // Comprehensive search results with all programs and keywords
      const mockResults = [
        // School of Business
        {
          id: 1,
          title: "PhD in Management",
          url: "/phd-doctoral-programs",
          type: "Program",
          keywords: [
            "phd",
            "phd in management",
            "doctoral program business research",
            "strategic business research phd",
            "aims phd program",
          ],
        },
        {
          id: 2,
          title: "MBA Program",
          url: "/business-school/master-business-administration",
          type: "Program",
          keywords: [
            "mba",
            "mba program",
            "iacbe accredited mba",
            "applied learning mba",
            "mba placement record",
          ],
        },
        {
          id: 3,
          title: "BBA General",
          url: "/business-school/bachelor-business-administration",
          type: "Program",
          keywords: [
            "bba",
            "bba general",
            "undergraduate business program",
            "business fundamentals bba",
            "finance marketing hr bba",
            "entrepreneurship bba program",
          ],
        },
        {
          id: 4,
          title: "BBA Aviation Management",
          url: "/business-school/bachelor-business-administration-aviation-management",
          type: "Program",
          keywords: [
            "bba aviation",
            "bba aviation management",
            "aviation management undergraduate",
            "airport management bba",
            "business aviation specialisation",
          ],
        },

        // School of Hospitality & Tourism
        {
          id: 5,
          title: "Bachelor of Hotel Management",
          url: "/hospitality-tourism-school/bachelor-hotel-management",
          type: "Program",
          keywords: [
            "bhm",
            "bachelor of hotel management",
            "bhm program aims",
            "hotel management degree",
            "hospitality and tourism program",
            "hotel resort airline careers",
          ],
        },
        {
          id: 6,
          title: "Vocational Certificate QSR by Chai Point",
          url: "/hospitality-tourism-school",
          type: "Program",
          keywords: [
            "vocational certificate qsr by chai point",
            "quick service restaurant training",
            "f&b vocational certificate",
            "chai point certification course",
          ],
        },
        {
          id: 7,
          title: "Swiss International Culinary Professional Diploma",
          url: "https://www.aimsenrich.com/swiss-international-culinary-professional-diploma",
          type: "Program",
          keywords: [
            "swiss international culinary professional diploma",
            "swiss culinary diploma",
            "ehl certified program",
            "professional chef training",
            "hospitality kitchen management course",
          ],
        },
        {
          id: 8,
          title: "Swiss International Food & Beverage Service Diploma",
          url: "https://www.aimsenrich.com/swiss-international-food-beverage-service-professional-diploma",
          type: "Program",
          keywords: [
            "swiss international food & beverage service diploma",
            "swiss hospitality diploma",
            "luxury hospitality f&b careers",
            "hotel service operations diploma",
          ],
        },
        {
          id: 9,
          title: "Swiss Professional Diploma in Rooms (CII-VET)",
          url: "https://www.aimsenrich.com/swiss-professional-diploma-rooms-cii-vet",
          type: "Program",
          keywords: [
            "swiss professional diploma in rooms (cii-vet)",
            "swiss vet hospitality program",
            "hotel operations professional training",
          ],
        },

        // School of Finance & Commerce
        {
          id: 10,
          title: "M.Com Program",
          url: "/finance-commerce-school/master-of-commerce",
          type: "Program",
          keywords: [
            "m.com",
            "mcom",
            "m.com program",
            "mcom program",
            "master of commerce aims",
            "postgraduate commerce program",
            "commerce postgraduate degree india",
            "aims m.com course details",
          ],
        },
        {
          id: 11,
          title: "B.Com Program",
          url: "/finance-commerce-school/bachelor-of-commerce",
          type: "Program",
          keywords: [
            "b.com",
            "bcom",
            "b.com program",
            "bcom program",
            "bachelor of commerce aims",
            "undergraduate commerce degree",
            "finance accounting taxation b.com",
            "specialised b.com program",
          ],
        },

        // School of Information & Technology
        {
          id: 12,
          title: "BCA Program",
          url: "/information-technology-school/bachelor-computer-applications",
          type: "Program",
          keywords: [
            "bca",
            "bca program",
            "bca course in bangalore",
            "top bca college in bangalore",
            "bca admission 2025 bangalore",
            "bca with placement support",
            "best bca degree colleges near me",
            "computer science undergraduate degree",
            "bca with ai & ml",
            "bca in ai and ml bangalore",
            "bca data science and ai course",
            "ai and ml specialization in bca",
            "ai-focused bca curriculum",
            "bca with python and machine learning",
          ],
        },
        {
          id: 13,
          title: "MCA Program",
          url: "/information-technology-school/master-computer-applications",
          type: "Program",
          keywords: [
            "mca",
            "mca program",
            "mca course in bangalore",
            "top mca college in bangalore",
            "postgraduate computer applications degree",
            "mca program with placement",
            "masters in computer applications bangalore",
          ],
        },

        // PUC (Pre-University Courses)
        {
          id: 14,
          title: "PCMC/PCMB Integrated",
          url: "/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee",
          type: "Program",
          keywords: [
            "pcmc/pcmb integrated",
            "puc with coaching bangalore",
            "pcmb with neet preparation",
            "pcmc with cet and jee coaching",
            "best integrated science puc in bangalore",
            "science puc with entrance coaching",
          ],
        },
        {
          id: 15,
          title: "PCMC Program",
          url: "/pre-university-college/science-pcmb-pcmc",
          type: "Program",
          keywords: [
            "pcmc",
            "pcmc program",
            "science puc in bangalore",
            "pcmc course after 10th",
            "pcmc puc course bangalore",
            "best science college for puc students",
            "puc admission for science 2025",
          ],
        },
        {
          id: 16,
          title: "PCMB Program",
          url: "/pre-university-college/science-pcmb-pcmc",
          type: "Program",
          keywords: [
            "pcmb",
            "pcmb program",
            "science puc in bangalore",
            "pcmb puc course bangalore",
            "best science college for puc students",
            "puc admission for science 2025",
          ],
        },
        {
          id: 17,
          title: "CEBA Program",
          url: "/pre-university-college/commerce-ceba",
          type: "Program",
          keywords: [
            "ceba",
            "ceba course in bangalore",
            "best commerce puc in bangalore",
            "puc in commerce with computer applications",
            "11th 12th commerce with ceba subjects",
            "puc with economics and accounting",
          ],
        },
      ]

      // Filter results based on query - search in title and keywords
      const filteredResults = mockResults.filter((item) => {
        const queryLower = query.toLowerCase()
        const titleMatch = item.title.toLowerCase().includes(queryLower)
        const keywordMatch =
          item.keywords &&
          item.keywords.some((keyword) =>
            keyword.toLowerCase().includes(queryLower)
          )
        return titleMatch || keywordMatch
      })

      setSearchResults(filteredResults)
      setShowSearchResults(true)
    } catch (error) {
      console.error("Search error:", error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    // Debounce search
    const timeoutId = setTimeout(() => {
      handleSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }

  // Handle search result click
  const handleSearchResultClick = (result) => {
    setSearchQuery("")
    setSearchResults([])
    setShowSearchResults(false)
    closeMobileMenu()
  }

  // Close search results when clicking outside
  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowSearchResults(false)
    }, 200)
  }

  // Function to handle link click and scroll to top
  const handleLinkClick = () => {
    closeMobileMenu()
    // Scroll page to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to handle logo click and ensure scroll to top
  const handleLogoClick = () => {
    // Close mobile search when logo is clicked
    setShowMobileSearch(false)
    setShowSearchResults(false)
    setSearchQuery("")

    // Force scroll to top after a short delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 150)
  }

  const { scrollY } = useScroll()

  // Scroll to top on page refresh - robust solution
  useEffect(() => {
    // Prevent scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0)

    // Prevent any scroll events during initial load
    const preventScroll = (e) => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0)
      }
    }

    // Add scroll listener temporarily
    window.addEventListener("scroll", preventScroll)

    // Also handle any delayed scrolling issues
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      window.removeEventListener("scroll", preventScroll)
    }, 500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", preventScroll)
    }
  }, [])

  // Reset header state when navigating to a new page
  useEffect(() => {
    // Close any open menus when navigating to a new page
    setActive(null)
    setMobileOpen(false)
    setMobileActive(null)
  }, [pathname])

  // Ultra-smooth sticky behavior with debouncing
  useEffect(() => {
    let timeoutId

    return scrollY.onChange((latest) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsSticky(latest > 1) // Reduced threshold for smoother transition
      }, 0) // Reduced delay for even smoother response
    })
  }, [scrollY])

  // Removed all transforms to prevent mobile header enlarging

  return (
    <>
      <header
        className={`z-50 bg-white backdrop-blur-md w-full ${
          isSticky
            ? "fixed top-0 left-0 right-0 md:shadow-none shadow-sm"
            : "relative"
        }`}
      >
        {/* HEADER CONTAINER */}
        <div className="h-full flex flex-col">
          {/* TOP BAR */}
          <div className="px-4 lg:px-8">
            <div
              className={`container mx-auto flex items-center justify-between py-3 w-full z-50 bg-white ${
                isWindows ? "h-[12vh] md:h-[12vh]" : "h-[12vh] md:h-[10vh]"
              }`}
            >
              {/* Desktop Logo */}
              <div className="hidden lg:flex items-center">
                <Link href="/" scroll={false} onClick={handleLogoClick}>
                  <Image
                    src="/AIMS-logo.svg"
                    alt="AIMS Logo"
                    width={480}
                    height={120}
                    priority
                    quality={100}
                    className={`h-10 w-auto lg:h-12 ${
                      isWindows ? "xl:h-14" : "xl:h-18"
                    } 2xl:h-16`}
                  />
                </Link>
              </div>

              {/* Tablet Logo */}
              <div className="hidden md:flex lg:hidden items-center">
                <Link href="/" scroll={false} onClick={handleLogoClick}>
                  <Image
                    src="/AIMS-logo.svg"
                    alt="AIMS Logo"
                    width={400}
                    height={100}
                    priority
                    quality={100}
                    className="h-12 w-auto"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "230px",
                      maxHeight: "75px",
                    }}
                  />
                </Link>
              </div>

              {/* Mobile Logo */}
              <div className="md:hidden flex items-center">
                <Link href="/" scroll={false} onClick={handleLogoClick}>
                  <Image
                    src="/AIMS-logo.svg"
                    alt="AIMS Logo"
                    width={280}
                    height={94}
                    priority
                    quality={100}
                    className="h-6 w-auto sm:h-7"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "200px",
                      maxHeight: "60px",
                    }}
                  />
                </Link>
              </div>

              {/* Mobile Search Input - Smooth Transition */}
              <div
                className={`md:hidden absolute inset-0 bg-white z-[9999] flex items-center px-4 transition-all duration-300 ease-in-out ${
                  showMobileSearch
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full pointer-events-none"
                }`}
              >
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search programs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6E3299]/30 focus:border-[#6E3299]"
                    autoFocus={showMobileSearch}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <button
                  onClick={() => setShowMobileSearch(false)}
                  className="ml-3 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Search Results - Fixed Position */}
              {showMobileSearch && showSearchResults && (
                <div className="md:hidden fixed top-[10vh] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9998] max-h-[60vh] overflow-y-auto">
                  {isSearching ? (
                    <div className="p-4 text-center">
                      <div className="inline-flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#6E3299] border-t-transparent"></div>
                        <p className="text-gray-600 font-medium text-sm">
                          Searching...
                        </p>
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          onClick={() => {
                            handleSearchResultClick(result)
                            setShowMobileSearch(false)
                          }}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900 text-sm">
                                {result.title}
                              </p>
                              <p className="text-xs text-gray-500 capitalize">
                                {result.type}
                              </p>
                            </div>
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : searchQuery ? (
                    <div className="p-4 text-center">
                      <p className="text-gray-600 font-medium text-sm">
                        No results found
                      </p>
                      <p className="text-xs text-gray-500">
                        Try different keywords
                      </p>
                    </div>
                  ) : null}
                </div>
              )}

              {/* Desktop Right Section */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                    className="border rounded-full px-4 py-2 w-64 focus:outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-[#6E3299]/20 focus:border-[#6E3299]"
                  />

                  {/* Search Results Dropdown */}
                  {showSearchResults && (
                    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl z-100 max-h-[400px] w-[400px] overflow-y-auto backdrop-blur-sm">
                      {isSearching ? (
                        <div className="p-6 text-center">
                          <div className="inline-flex items-center space-x-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#6E3299] border-t-transparent"></div>
                            <p className="text-gray-600 font-medium">
                              Searching programs...
                            </p>
                          </div>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-2">
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-semibold text-gray-700">
                              {searchResults.length} result
                              {searchResults.length !== 1 ? "s" : ""} found
                            </p>
                          </div>
                          {searchResults.map((result, index) => (
                            <Link
                              key={result.id}
                              href={result.url}
                              onClick={() => handleSearchResultClick(result)}
                              className="block px-6 py-4 hover:bg-gradient-to-r hover:from-[#6E3299]/5 hover:to-[#6E3299]/10 transition-all duration-200 border-b border-gray-50 last:border-b-0 group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div>
                                    <p className="font-semibold text-gray-900 group-hover:text-[#6E3299] transition-colors duration-200">
                                      {result.title}
                                    </p>
                                    <p className="text-sm text-gray-500 capitalize font-medium">
                                      {result.type}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-gray-400 group-hover:text-[#6E3299] transition-colors duration-200">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : searchQuery ? (
                        <div className="p-6 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.591"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-600 font-medium mb-2">
                            No results found
                          </p>
                          <p className="text-sm text-gray-500">
                            Try searching for &quot;MBA&quot;, &quot;BCA&quot;,
                            &quot;BHM&quot;, or &quot;PUC&quot;
                          </p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
                <Link
                  href="/aims-alumni-association"
                  className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
                >
                  Alumni
                </Link>
                {/* <Link
                href="/eresources"
                className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
              >
                Resources
              </Link> */}

                <Button
                  showReadMore={false}
                  variant="placement"
                  href="/contact-us"
                >
                  Contact Us
                </Button>
              </div>

              {/* Tablet Right Section */}
              <div className="hidden md:flex lg:hidden items-center space-x-4 justify-between  w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                    className="border rounded-full px-4 py-2 w-48 focus:outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-[#6E3299]/20 focus:border-[#6E3299] text-sm"
                  />

                  {/* Search Results Dropdown for Tablet */}
                  {showSearchResults && (
                    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl z-100 max-h-[400px] w-[350px] overflow-y-auto backdrop-blur-sm">
                      {isSearching ? (
                        <div className="p-6 text-center">
                          <div className="inline-flex items-center space-x-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#6E3299] border-t-transparent"></div>
                            <p className="text-gray-600 font-medium">
                              Searching programs...
                            </p>
                          </div>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-2">
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-semibold text-gray-700">
                              {searchResults.length} result
                              {searchResults.length !== 1 ? "s" : ""} found
                            </p>
                          </div>
                          {searchResults.map((result, index) => (
                            <Link
                              key={result.id}
                              href={result.url}
                              onClick={() => handleSearchResultClick(result)}
                              className="block px-6 py-4 hover:bg-gradient-to-r hover:from-[#6E3299]/5 hover:to-[#6E3299]/10 transition-all duration-200 border-b border-gray-50 last:border-b-0 group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div>
                                    <p className="font-semibold text-gray-900 group-hover:text-[#6E3299] transition-colors duration-200">
                                      {result.title}
                                    </p>
                                    <p className="text-sm text-gray-500 capitalize font-medium">
                                      {result.type}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-gray-400 group-hover:text-[#6E3299] transition-colors duration-200">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : searchQuery ? (
                        <div className="p-6 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.591"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-600 font-medium mb-2">
                            No results found
                          </p>
                          <p className="text-sm text-gray-500">
                            Try searching for &quot;MBA&quot;, &quot;BCA&quot;,
                            &quot;BHM&quot;, or &quot;PUC&quot;
                          </p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
                <Button
                  showReadMore={false}
                  variant="placement"
                  href="/contact-us"
                  className="text-sm px-4 py-2"
                >
                  Contact Us
                </Button>
              </div>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="md:hidden text-2xl z-50 bg-white rounded-lg p-3 hover:bg-gray-50 transition-all duration-200 ease-out"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Tablet Hamburger */}
              <button
                onClick={() =>
                  mobileOpen ? closeMobileMenu() : openMobileMenu()
                }
                className="hidden md:flex lg:hidden text-3xl z-50 bg-white rounded-lg p-4 hover:bg-gray-50 transition-all duration-200 ease-out"
              >
                {mobileOpen ? (
                  <FiX className="w-10 h-10" />
                ) : (
                  <FiMenu className="w-10 h-10" />
                )}
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() =>
                  mobileOpen ? closeMobileMenu() : openMobileMenu()
                }
                className="md:hidden text-3xl z-50 bg-white rounded-lg p-3 hover:bg-gray-50 transition-all duration-200 ease-out"
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* BOTTOM NAV (Desktop) */}
          <div className="hidden lg:flex bg-[#0C2165] w-full h-[7vh] items-center justify-center z-50">
            <div className="max-w-7xl mx-auto px-4">
              <Menu setActive={setActive}>
                {MenuItems.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    setActive={setActive}
                    active={active}
                    item={item.title}
                  >
                    <div className="flex flex-col space-y-2">
                      {item.links.map((link, i) => (
                        <HoveredLink
                          key={i}
                          href={link.href || "#"}
                          className="text-gray-700 hover:text-[#6E3299] hover"
                        >
                          {link.name}
                        </HoveredLink>
                      ))}
                    </div>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Full-screen overlay */}
              <motion.div
                className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />

              {/* Mobile menu content */}
              <motion.div
                className="lg:hidden shadow-md h-screen bg-white z-[9999] fixed top-0 left-0 right-0 flex flex-col"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {/* Mobile Menu Header with Logo and Close Button */}
                <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 flex-shrink-0 h-[10vh]">
                  <Link href="/" scroll={false} onClick={handleLogoClick}>
                    <Image
                      src="/AIMS-logo.svg"
                      alt="AIMS Logo"
                      width={280}
                      height={94}
                      priority
                      quality={100}
                      className="h-6 w-auto sm:h-7"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "200px",
                        maxHeight: "60px",
                      }}
                    />
                  </Link>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 ease-out"
                    aria-label="Close mobile menu"
                  >
                    <FiX className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                  </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto">
                  {/* Mobile Search - COMMENTED OUT (Backup for manager review) */}
                  {/*
                  <div className="lg:hidden p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                    <div className="relative">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search programs, courses..."
                          value={searchQuery}
                          onChange={handleSearchChange}
                          className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-lg focus:outline-none transition-all duration-300 ease-out focus:ring-4 focus:ring-[#6E3299]/20 focus:border-[#6E3299] hover:border-gray-300 shadow-sm hover:shadow-md"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  */}

                  {/* Nav Items */}
                  <ul>
                    {MenuItems.map((menu, idx) => (
                      <li key={idx}>
                        <button
                          className="w-full flex justify-between px-4 py-3 text-left bg-[#0C2165] text-white hover:bg-[#0C2165]/90 transition-all duration-200 ease-out"
                          onClick={() =>
                            setMobileActive(
                              mobileActive === menu.title ? null : menu.title
                            )
                          }
                        >
                          {menu.title}
                          <FiX
                            className={`transform transition-all duration-300 ease-out ${
                              mobileActive === menu.title ? "" : "rotate-45"
                            }`}
                          />
                        </button>
                        {mobileActive === menu.title && (
                          <ul className="bg-gray-50">
                            {menu.links.map((link, i) => (
                              <li key={i} className="px-6 py-2">
                                <Link
                                  href={link.href || "#"}
                                  className="block text-gray-700 hover:text-[#6E3299] transition-all duration-200 ease-out"
                                  onClick={handleLinkClick}
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Additional Links - After Placements */}
                  <div className="p-4 border-t border-gray-200">
                    <Link
                      href="/aims-alumni-association"
                      className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light transition-all duration-200 ease-out"
                      onClick={handleLinkClick}
                    >
                      Alumni
                    </Link>
                    {/* <Link
                      href="#"
                      className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light transition-all duration-200 ease-out"
                      onClick={handleLinkClick}
                    >
                      Resources
                    </Link> */}
                    <Button
                      className="font-light w-full mt-2"
                      variant="placement"
                      hoverText="Contact Us"
                      showArrow={true}
                      href="/contact-us"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Breadcrumbs positioned outside header */}
      <Breadcrumbs />

      {/* Content spacer that smoothly adjusts when header becomes sticky */}
      <div
        className={`w-full ${
          isSticky
            ? isWindows
              ? "h-[12vh] md:h-[12vh]"
              : "h-[12vh] md:h-[10vh]"
            : "h-0"
        }`}
      />
    </>
  )
}
