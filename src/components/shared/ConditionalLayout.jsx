"use client"
import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"
import FloatingButton from "./FloatingButton"
import MBAHeader from "../MbaLandingPage/Header"

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname()

  // Check if current path is mba-course-admissions
  const isMBACourseAdmissions = pathname === "/mba-course-admissions"

  return (
    <>
      {/* Conditional Header */}
      {isMBACourseAdmissions ? <MBAHeader /> : <Header />}

      {/* Page Content */}
      {children}

      {/* Conditional Footer and Floating Button */}
      {!isMBACourseAdmissions && (
        <>
          <Footer />
          <FloatingButton />
        </>
      )}
    </>
  )
}

export default ConditionalLayout
