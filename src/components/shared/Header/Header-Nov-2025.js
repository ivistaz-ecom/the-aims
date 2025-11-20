"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { FiMenu, FiX } from "react-icons/fi"
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Button from "@/shared/Button"
import { MenuItems } from "@/utils/MenuItems-Nov-2025"
import { searchPrograms } from "@/utils/searchData"
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
  const pathname = usePathname()

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY
      // Apply styles to prevent scrolling
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Restore scroll position when menu closes
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [mobileOpen])

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
      // Use the search utility function to get filtered results
      const filteredResults = searchPrograms(query)
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

  // Ensure header is fixed when mobile search opens
  useEffect(() => {
    if (showMobileSearch) {
      // Force header to be sticky when mobile search is open
      setIsSticky(true)
    }
  }, [showMobileSearch])

  // Determine if header should be fixed
  // On mobile: always fixed when search is open, otherwise based on scroll
  // On desktop/tablet: based on scroll position
  const shouldBeFixed = showMobileSearch ? true : isSticky

  // Removed all transforms to prevent mobile header enlarging

  return (
    <>
      <header
        className={`z-50 bg-white backdrop-blur-md w-full ${
          shouldBeFixed
            ? "fixed top-0 left-0 right-0 md:shadow-none shadow-sm"
            : "relative"
        }`}
      >
        {/* HEADER CONTAINER */}
        <div className="h-full flex flex-col">
          {/* TOP BAR */}
          <div className="px-4 lg:px-8">
            <div className="container mx-auto flex items-center justify-between py-3 w-full z-50 bg-white h-[12vh] md:h-[10vh]">
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
                    className="h-10 w-auto lg:h-12 xl:h-14 2xl:h-16"
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
                    onFocus={() => {
                      // Ensure header stays fixed when input is focused (keyboard opens)
                      if (!isSticky) {
                        setIsSticky(true)
                      }
                    }}
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
                <div className="md:hidden fixed top-[12vh] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9998] max-h-[60vh] overflow-y-auto">
                  {isSearching ? (
                    <div className="p-4 text-center">
                      <div className="inline-flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#6E3299] border-t-transparent"></div>
                        <p className="text-sm text-gray-500">Searching...</p>
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="py-1">
                      {searchResults.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          onClick={() => {
                            handleSearchResultClick(result)
                            setShowMobileSearch(false)
                          }}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 text-gray-400 group-hover:text-[#6E3299] transition-colors">
                              <svg
                                className="w-4 h-4"
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
                            <p className="text-sm text-gray-900 group-hover:text-[#6E3299] transition-colors flex-1">
                              {result.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : searchQuery ? (
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-500">
                        No results found for &quot;{searchQuery}&quot;
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
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-100 max-h-[400px] w-[400px] overflow-y-auto">
                      {isSearching ? (
                        <div className="p-4 text-center">
                          <div className="inline-flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#6E3299] border-t-transparent"></div>
                            <p className="text-sm text-gray-500">
                              Searching...
                            </p>
                          </div>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-1">
                          {searchResults.map((result, index) => (
                            <Link
                              key={result.id}
                              href={result.url}
                              onClick={() => handleSearchResultClick(result)}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 text-gray-400 group-hover:text-[#6E3299] transition-colors">
                                  <svg
                                    className="w-4 h-4"
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
                                <p className="text-sm text-gray-900 group-hover:text-[#6E3299] transition-colors flex-1">
                                  {result.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : searchQuery ? (
                        <div className="p-6 text-center">
                          <p className="text-sm text-gray-500">
                            No results found for &quot;{searchQuery}&quot;
                          </p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
                <Link
                  href="/aims-alumni-association"
                  className="text-[#0C2165] text-[14px] hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
                  style={{ fontSize: "14px" }}
                >
                  Alumni
                </Link>
                <Link
                  href="/gallery"
                  className="text-[#0C2165] text-[14px] hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
                  style={{ fontSize: "14px" }}
                >
                  Picture Gallery
                </Link>
                {/* <Link
                href="/eresources"
                className="text-[#0C2165] text-[14px] hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
              >
                Resources
              </Link> */}
                <div className="py-1">
                  <Button
                    showReadMore={false}
                    variant="placement"
                    href="/contact-us"
                  >
                    Contact Us
                  </Button>
                </div>
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
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-100 max-h-[400px] w-[350px] overflow-y-auto">
                      {isSearching ? (
                        <div className="p-4 text-center">
                          <div className="inline-flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#6E3299] border-t-transparent"></div>
                            <p className="text-sm text-gray-500">
                              Searching...
                            </p>
                          </div>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-1">
                          {searchResults.map((result, index) => (
                            <Link
                              key={result.id}
                              href={result.url}
                              onClick={() => handleSearchResultClick(result)}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 text-gray-400 group-hover:text-[#6E3299] transition-colors">
                                  <svg
                                    className="w-4 h-4"
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
                                <p className="text-sm text-gray-900 group-hover:text-[#6E3299] transition-colors flex-1">
                                  {result.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : searchQuery ? (
                        <div className="p-6 text-center">
                          <p className="text-sm text-gray-500">
                            No results found for &quot;{searchQuery}&quot;
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
                  className="text-sm px-4 py-0"
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
            <div className="container mx-auto px-4">
              <Menu setActive={setActive}>
                {MenuItems.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    setActive={setActive}
                    active={active}
                    item={item.title}
                  >
                    <div className="flex flex-col space-y-2">
                      {item.links.map((link, i) => {
                        const isPdf =
                          link.href && link.href.toLowerCase().endsWith(".pdf")
                        return (
                          <HoveredLink
                            key={i}
                            href={link.href || "#"}
                            className="text-gray-700 hover:text-[#6E3299] hover"
                            target={isPdf ? "_blank" : undefined}
                            rel={isPdf ? "noopener noreferrer" : undefined}
                          >
                            {link.name}
                          </HoveredLink>
                        )
                      })}
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
                          className="w-full flex justify-between px-4 py-3 text-left bg-[#0C2165] text-white hover:bg-[#0C2165]/90 transition-all duration-200 ease-out text-[14px]"
                          style={{ fontSize: "14px" }}
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
                            {menu.links.map((link, i) => {
                              const isPdf =
                                link.href &&
                                link.href.toLowerCase().endsWith(".pdf")
                              return (
                                <li key={i} className="px-6 py-2">
                                  <Link
                                    href={link.href || "#"}
                                    className="block text-gray-700 hover:text-[#6E3299] transition-all duration-200 ease-out text-[14px]"
                                    style={{ fontSize: "14px" }}
                                    onClick={handleLinkClick}
                                    target={isPdf ? "_blank" : undefined}
                                    rel={
                                      isPdf ? "noopener noreferrer" : undefined
                                    }
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Additional Links - After Placements */}
                  <div className="p-4 border-t border-gray-200">
                    <Link
                      href="/aims-alumni-association"
                      className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light transition-all duration-200 ease-out text-[14px]"
                      style={{ fontSize: "14px" }}
                      onClick={handleLinkClick}
                    >
                      Alumni
                    </Link>
                    <Link
                      href="/gallery"
                      className="text-[#0C2165] text-[14px] hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
                      style={{ fontSize: "14px" }}
                    >
                      Picture Gallery
                    </Link>
                    {/* <Link
                      href="#"
                      className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light transition-all duration-200 ease-out"
                      onClick={handleLinkClick}
                    >
                      Resources
                    </Link> */}
                    <Button
                      className="font-light w-auto mt-4"
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
          shouldBeFixed ? "h-[12vh] md:h-[10vh] lg:h-[17vh]" : "h-0"
        }`}
      />
    </>
  )
}
