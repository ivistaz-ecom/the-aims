"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

const Breadcrumbs = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  // Show breadcrumbs after scrolling 100px (but not on home page)
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100 // 100px scroll threshold
      const shouldShow = window.scrollY > threshold && pathname !== "/"
      setIsVisible(shouldShow)
    }

    // Check initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Function to handle home link click and ensure scroll to top
  const handleHomeClick = () => {
    // Force scroll to top after a short delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 15)
  }

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")

    // Don't show breadcrumbs on home page
    if (pathSegments.length === 0 || pathname === "/") return []

    // Special case for Eresources page
    if (pathname.includes("eresources")) {
      return [
        {
          label: "Library and Information Centre",
          href: "/library-and-information-centre",
          isLast: false,
        },
        {
          label: "Eresources",
          href: pathname,
          isLast: true,
        },
      ]
    }

    const breadcrumbs = []
    let currentPath = ""

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Special case for pre-university-college
      if (segment === "pre-university-college") {
        breadcrumbs.push({
          label: "Pre-University College",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for science-integrated-pcmb-pcmc-cet-neet-jee
      if (segment === "science-integrated-pcmb-pcmc-cet-neet-jee") {
        breadcrumbs.push({
          label: "Integrated PCMC/PCMB",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for science-pcmb-pcmc
      if (segment === "science-pcmb-pcmc") {
        breadcrumbs.push({
          label: "PCMB/PCMC",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for commerce-ceba
      if (segment === "commerce-ceba") {
        breadcrumbs.push({
          label: "CEBA",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for business-school
      if (segment === "business-school") {
        breadcrumbs.push({
          label: "School of Business",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for master-business-administration
      if (segment === "master-business-administration") {
        breadcrumbs.push({
          label: "Master of Business Administration",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for bachelor-business-administration
      if (segment === "bachelor-business-administration") {
        breadcrumbs.push({
          label: "Bachelor of Business Administration",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for bachelor-computer-applications
      if (segment === "bachelor-computer-applications") {
        breadcrumbs.push({
          label: "Bachelor of Computer Applications",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for master-computer-applications
      if (segment === "master-computer-applications") {
        breadcrumbs.push({
          label: "Master of Computer Applications",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for bachelor-hotel-management
      if (segment === "bachelor-hotel-management") {
        breadcrumbs.push({
          label: "Bachelor of Hotel Management",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for bachelor-business-administration-aviation-management
      if (segment === "bachelor-business-administration-aviation-management") {
        breadcrumbs.push({
          label: "Bachelor of Business Administration Aviation Management",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for pgdm (under placements-mba)
      if (segment === "pgdm") {
        breadcrumbs.push({
          label: "Placements MBA/PGDM",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for articles-publications
      if (segment === "articles-publications") {
        breadcrumbs.push({
          label: "Articles & Publications",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for iqac-internal-quality-assurance-cell
      if (segment === "iqac-internal-quality-assurance-cell") {
        breadcrumbs.push({
          label: "IQAC (Internal Quality Assurance Cell)",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for iacbe-accreditation
      if (segment === "iacbe-accreditation") {
        breadcrumbs.push({
          label: "IACBE Accreditation",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for naac-accreditation
      if (segment === "naac-accreditation") {
        breadcrumbs.push({
          label: "NAAC Accreditation",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for aicte-aims
      if (segment === "aicte-aims") {
        breadcrumbs.push({
          label: "AICTE",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for nirf-ranking
      if (segment === "nirf-ranking") {
        breadcrumbs.push({
          label: "NIRF (National Institutional Ranking Framework)",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Special case for cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity
      if (
        segment ===
        "cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity"
      ) {
        breadcrumbs.push({
          label: "Committees",
          href: currentPath,
          isLast: index === pathSegments.length - 1,
        })
        return
      }

      // Convert segment to readable label
      const label = segment
        .split("-")
        .map((word) => {
          // Special case: convert "aims" to "AIMS" in all caps
          if (word.toLowerCase() === "aims") {
            return "AIMS"
          }
          // Special case: convert "cat" to "CAT" in all caps
          if (word.toLowerCase() === "cat") {
            return "CAT"
          }
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(" ")

      breadcrumbs.push({
        label,
        href: currentPath,
        isLast: index === pathSegments.length - 1,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <>
      {/* Spacer div that only appears when breadcrumbs are visible */}
      <div
        className={`w-full transition-all duration-300 z-40 bg-white ${isVisible ? "h-12" : "h-0"
          }`}
      />

      <div className="z-40">
        <nav
          className={`bg-white shadow-sm border-b border-gray-100 px-4 lg:px-8 fixed top-[12vh] lg:top-[17vh] left-0 right-0 z-40 transition-all duration-300 ${isVisible
            ? "opacity-100 h-auto"
            : "opacity-0 h-0 pointer-events-none overflow-hidden border-0"
            }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center space-x-2 py-3 overflow-x-auto scrollbar-hide">
              {/* Mobile scroll indicator */}
              {/* <div className="lg:hidden flex-shrink-0 mr-2 text-xs text-gray-400">
                        ← Scroll →
                    </div> */}
              {/* Home Link */}
              <Link
                href="/"
                scroll={false}
                onClick={handleHomeClick}
                className="flex items-center text-gray-600 hover:text-[#A22877] transition-colors duration-200 group flex-shrink-0"
              >
                <Home className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">Home</span>
              </Link>

              {/* Breadcrumb Separator and Items */}
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {breadcrumb.isLast ? (
                    // Last item (current page) - no link, different styling
                    <span className="text-sm font-bold text-[#A22877] flex-shrink-0">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    // Clickable breadcrumb items
                    <Link
                      href={breadcrumb.href}
                      className="text-sm text-gray-600 hover:text-[#A22877] transition-colors duration-200 hover:underline flex-shrink-0"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Custom scrollbar styles */}
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            /* Smooth scrolling for mobile */
            @media (max-width: 1024px) {
              .scrollbar-hide {
                scroll-behavior: smooth;
                -webkit-overflow-scrolling: touch;
              }
            }
          `}</style>
        </nav>
      </div>
    </>
  )
}

export default Breadcrumbs
