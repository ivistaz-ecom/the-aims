"use client"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import AntiRagging from "./AntiRagging"
import AntiSexualHarassment from "./AntiSexualHarassment"
import EqualOpportunity from "./EqualOpportunity"

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("ragging")
  const pathname = usePathname()
  const hasInitialized = useRef(false)

  // Handle hash-based navigation
  useEffect(() => {
    // Function to check and apply hash
    const checkAndApplyHash = () => {
      if (typeof window === "undefined") return

      // Get hash from URL - try multiple methods
      let hash = window.location.hash.slice(1) // Remove the # symbol

      // Also check if hash is in the full URL (for Next.js navigation)
      const fullUrl = window.location.href
      const urlHash = fullUrl.includes("#") ? fullUrl.split("#")[1] : null

      // Use the hash from URL if available, otherwise use window.location.hash
      hash = urlHash || hash

      // Map hash values to tab names
      const hashMap = {
        ragging: "ragging",
        harassment: "harassment",
        opportunity: "opportunity",
        "anti-ragging-committee": "ragging",
        "anti-sexual-harassment-cell": "harassment",
        "equal-opportunity-cell": "opportunity",
      }

      const tabName = hashMap[hash]

      if (tabName) {
        setActiveTab(tabName)
        hasInitialized.current = true

        // Scroll to the tab section after ensuring DOM is ready
        const scrollToTab = () => {
          const element = document.getElementById(`tab-${tabName}`)
          if (element) {
            // Scroll with offset for fixed headers if needed
            const yOffset = -100 // Adjust this value based on your header height
            const y =
              element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
            return true
          }
          return false
        }

        // Try immediately
        if (!scrollToTab()) {
          // Try after a short delay
          setTimeout(() => {
            if (!scrollToTab()) {
              // Try one more time after longer delay
              setTimeout(scrollToTab, 500)
            }
          }, 100)
        }
      } else if (!hasInitialized.current) {
        // If no hash and hasn't initialized, set default
        setActiveTab("ragging")
        hasInitialized.current = true
      }
    }

    const handleHashChange = () => {
      checkAndApplyHash()
    }

    // Check hash on mount - immediate check
    checkAndApplyHash()

    // Use requestAnimationFrame for better timing
    const rafId = requestAnimationFrame(() => {
      checkAndApplyHash()
    })

    // Also check after delays to handle Next.js client-side navigation
    const timeoutId1 = setTimeout(() => {
      checkAndApplyHash()
    }, 50)

    const timeoutId2 = setTimeout(() => {
      checkAndApplyHash()
    }, 200)

    const timeoutId3 = setTimeout(() => {
      checkAndApplyHash()
    }, 500)

    const timeoutId4 = setTimeout(() => {
      checkAndApplyHash()
    }, 1000)

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Also listen for popstate (browser back/forward and Next.js navigation)
    const handlePopState = () => {
      setTimeout(checkAndApplyHash, 100)
    }
    window.addEventListener("popstate", handlePopState)

    // Also listen for focus events (when user comes back to tab)
    const handleFocus = () => {
      setTimeout(checkAndApplyHash, 100)
    }
    window.addEventListener("focus", handleFocus)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
      clearTimeout(timeoutId3)
      clearTimeout(timeoutId4)
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("focus", handleFocus)
    }
  }, [pathname]) // Re-run when pathname changes

  const renderContent = () => {
    switch (activeTab) {
      case "ragging":
        return <AntiRagging />
      case "harassment":
        return <AntiSexualHarassment />
      case "opportunity":
        return <EqualOpportunity />
      default:
        return null
    }
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
    // Update URL hash without causing a page reload
    window.history.pushState(null, "", `#${tabName}`)
  }

  return (
    <div className="w-full" id="welfare-committees-tabs">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <button
          id="tab-ragging"
          data-tab-name="anti-ragging-committee"
          onClick={() => handleTabClick("ragging")}
          className={`px-6 py-2 rounded-sm border transition w-[85%] lg:w-auto xl:w-auto md:w-auto
          ${
            activeTab === "ragging"
              ? "bg-[#531574] text-white border-[#531574]"
              : "border-[#531574] text-black hover:bg-[#531574] hover:text-white"
          }`}
        >
          ANTI-RAGGING COMMITTEE
        </button>

        <button
          id="tab-harassment"
          data-tab-name="anti-sexual-harassment-cell"
          onClick={() => handleTabClick("harassment")}
          className={`px-6 py-2 rounded-sm border transition w-[85%] lg:w-auto xl:w-auto md:w-auto
          ${
            activeTab === "harassment"
              ? "bg-[#531574] text-white border-[#531574]"
              : "border-[#531574] text-black hover:bg-[#531574] hover:text-white"
          }`}
        >
          ANTI-SEXUAL HARASSMENT CELL
        </button>

        <button
          id="tab-opportunity"
          data-tab-name="equal-opportunity-cell"
          onClick={() => handleTabClick("opportunity")}
          className={`px-6 py-2 rounded-sm border transition w-[85%] lg:w-auto xl:w-auto md:w-auto
          ${
            activeTab === "opportunity"
              ? "bg-[#531574] text-white border-[#531574]"
              : "border-[#531574] text-black hover:bg-[#531574] hover:text-white"
          }`}
        >
          EQUAL OPPORTUNITY CELL
        </button>
      </div>

      {/* Content */}
      <div className="">{renderContent()}</div>
    </div>
  )
}

export default TabSection
