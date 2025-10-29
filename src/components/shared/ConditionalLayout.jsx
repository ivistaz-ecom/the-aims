"use client"
import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"
import FloatingButton from "./FloatingButton"
import LandingPageHeader from "./HeaderForLandingPage/Header"

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname()

  // Check if current path is mba-course-admissions or bhm-course-admissions
  const isMBACourseAdmissions = pathname === "/mba-course-admissions"
  const isBHMCourseAdmissions = pathname === "/bhm-course-admissions"
  const isLandingPage = isMBACourseAdmissions || isBHMCourseAdmissions

  return (
    <>
      {/* Conditional Header */}
      {isLandingPage ? <LandingPageHeader /> : <Header />}

      {/* Page Content */}
      {children}

      {/* Conditional Footer and Floating Button */}
      {!isLandingPage && (
        <>
          <Footer />
          <FloatingButton />
        </>
      )}
    </>
  )
}

export default ConditionalLayout
