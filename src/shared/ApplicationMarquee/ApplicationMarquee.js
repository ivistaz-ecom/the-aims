"use client"
import React from "react"

const ApplicationMarquee = ({ announcements, pageType = "admissions" }) => {
  // Page-specific announcements with links
  const pageAnnouncements = {
    admissions: [
      {
        text: "DEADLINE FOR MBA ADMISSIONS JANUARY 31, 2026",
        link: "/business-school/master-business-administration",
      },
      {
        text: "APPLY NOW FOR MBA SELECTION PROCESS 2026-27",
        link: "/business-school/master-business-administration",
      },
    ],

    business: [
      {
        text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26",
        link: "/apply/mba",
      },
      {
        text: "APPLY NOW FOR BBA SELECTION PROCESS 2025-26",
        link: "/apply/bba",
      },
      {
        text: "APPLY NOW FOR BBA AVIATION SELECTION PROCESS 2025-26",
        link: "/apply/bba-aviation",
      },
    ],
    finance: [
      {
        text: "APPLY NOW FOR MCOM SELECTION PROCESS 2025-26",
        link: "/apply/mcom",
      },
      {
        text: "APPLY NOW FOR BCOM SELECTION PROCESS 2025-26",
        link: "/apply/bcom",
      },
      {
        text: "APPLY NOW FOR BCOM AVIATION SELECTION PROCESS 2025-26",
        link: "/apply/bcom-aviation",
      },
    ],
    engineering: [
      {
        text: "APPLY NOW FOR BBA ADMISSION 2025-26",
        link: "https://apply.theaims.ac.in/login",
      },
      {
        text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26",
        link: "https://apply.theaims.ac.in/login",
      },
    ],
    medical: [
      { text: "APPLY NOW FOR MBBS ADMISSION 2025-26", link: "/apply/mbbs" },
      {
        text: "APPLY NOW FOR BDS SELECTION PROCESS 2025-26",
        link: "/apply/bds",
      },
      {
        text: "APPLY NOW FOR NURSING ADMISSION 2025-26",
        link: "/apply/nursing",
      },
    ],
    home: [
      {
        text: "ADMISSIONS OPEN FOR 2025-26 ACADEMIC YEAR",
        link: "/admissions",
      },
      { text: "APPLY NOW FOR ALL COURSES", link: "/apply" },
      { text: "LIMITED SEATS AVAILABLE - APPLY TODAY", link: "/apply" },
    ],
    aboutAims: [
      {
        text: "DISCOVER AIMS - EMPOWERING MINDS SINCE 1994",
        link: "/about-aims",
      },
      {
        text: "IACBE ACCREDITED • NAAC 'A' GRADE • VET BY EHL",
        link: "/accreditation",
      },
      {
        text: "QUALITY EDUCATION • PROFESSIONAL EXCELLENCE",
        link: "/about-aims",
      },
    ],
    phd: [
      {
        text: "APPLY NOW FOR PhD SELECTION PROCESS 2025-26",
        link: "/about-aims",
      },
      {
        text: "APPLY NOW FOR PhD in Management 2025-26",
        link: "/accreditation",
      },
      {
        text: "APPLY NOW FOR Phd in Commerce 2025-26",
        link: "/about-aims",
      },
    ],
    centreForSustainability: [
      {
        text: "APPLY NOW FOR PhD SELECTION PROCESS 2025-26",
        link: "/apply/centre-for-sustainability",
      },
      {
        text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26",
        link: "/apply/mba",
      },
      {
        text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
        link: "/apply/bhm",
      },
    ],
    bca: [
      {
        text: "APPLY NOW FOR BCA SELECTION PROCESS 2025-26",
        link: "/apply/bca",
      },
      {
        text: "APPLY NOW FOR BCA WITH AI & ML SELECTION PROCESS 2025-26",
        link: "/apply/bca-ai-ml",
      },
      {
        text: "APPLY NOW FOR BCA SELECTION PROCESS 2025-26",
        link: "/apply/bca",
      },
    ],
    centreForInternationalLiaison: [
      {
        text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
        link: "/apply/bhm",
      },
      {
        text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
        link: "/apply/bhm",
      },
      {
        text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
        link: "/apply/bhm",
      },
    ],
  }

  // Convert announcements to objects if they're strings
  const formatAnnouncements = (items) => {
    if (!items) return null
    return items.map((item) =>
      typeof item === "string" ? { text: item, link: "/apply" } : item
    )
  }

  const displayAnnouncements =
    formatAnnouncements(announcements) ||
    pageAnnouncements[pageType] ||
    pageAnnouncements.admissions

  return (
    <div
      className="h-[7vh] overflow-hidden shadow-lg flex items-center px-4 lg:px-8"
      style={{ backgroundColor: "#A22877" }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          id="applicationMarquee"
        >
          {displayAnnouncements.map((announcement, index) => (
            <span key={index} className="mx-8">
              <a
                href={announcement.link}
                className="text-white font-semibold text-[16px] tracking-wide hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
                style={{ textDecoration: "none" }}
                onMouseEnter={() => {
                  const marquee = document.getElementById("applicationMarquee")
                  if (marquee) marquee.stop()
                }}
                onMouseLeave={() => {
                  const marquee = document.getElementById("applicationMarquee")
                  if (marquee) marquee.start()
                }}
              >
                {announcement.text}
              </a>
            </span>
          ))}
        </marquee>
      </div>
    </div>
  )
}

export default ApplicationMarquee
