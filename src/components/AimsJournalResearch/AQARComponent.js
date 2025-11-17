"use client"
import React, { useState } from "react"

const AQARComponent = () => {
  const [activeTab, setActiveTab] = useState("aqar")

  const tabData = {
    aqar: {
      title: "AQAR",
      content: {
        heading: "AQAR",
        documents: [
          { year: "2023-24", link: "/iqac/aqar/AQAR+2023-24.pdf" },
          { year: "2022-23", link: "/iqac/aqar/AQAR+2022-23.pdf" },
          { year: "2021-22", link: "/iqac/aqar/AQAR+-2021-2022.pdf" },
          { year: "2020-21", link: "/iqac/aqar/AQAR+2020-2021.pdf" },
          { year: "2019-20", link: "/iqac/aqar/AQAR+2019-20.pdf" },
          { year: "2018-19", link: "/iqac/aqar/AQAR+2018-19.pdf" },
          { year: "2017-18", link: "/iqac/aqar/AQAR+2017-18.pdf" },
          { year: "2016-17", link: "/iqac/aqar/AQAR+2016-17.pdf" },
          { year: "2015-16", link: "/iqac/aqar/AQAR+2015-16.pdf" },
        ],
      },
    },
    minutes: {
      title: "Minutes Of Meeting",
      content: {
        heading: "Minutes Of Meeting",
        documents: [
          {
            year: "2024-25",
            link: "/iqac/minutes-of-meeting/IQAC+Minutes+2024-2025.pdf",
          },
          {
            year: "2023-24",
            link: "/iqac/minutes-of-meeting/IQAC+Minutes+2023-2024.pdf",
          },
          {
            year: "2022-23",
            link: "/iqac/minutes-of-meeting/IQAC+Minutes+2022-2023.pdf",
          },
          {
            year: "2021-22",
            link: "/iqac/minutes-of-meeting/IQAC+Minutes+2021-2022.pdf",
          },
          {
            year: "2020-21",
            link: "/iqac/minutes-of-meeting/IQAC+Minutes+2020-2021.pdf",
          },
          { year: "2019-20", link: "/iqac/minutes-of-meeting/MOM_2019-20.pdf" },
          { year: "2018-19", link: "/iqac/minutes-of-meeting/MOM_2018-19.pdf" },
          { year: "2017-18", link: "/iqac/minutes-of-meeting/MOM_2017-18.pdf" },
          { year: "2016-17", link: "/iqac/minutes-of-meeting/MOM_2016-17.pdf" },
          { year: "2015-16", link: "/iqac/minutes-of-meeting/MOM_2015-16.pdf" },
        ],
      },
    },
    feedback: {
      title: "Feedback",
      content: {
        heading: "Feedback",
        documents: [
          {
            title: "Student Statisfaction Survey 2023-24",
            link: "/iqac/feedback/Student+Satisfaction+Survey+2023-2024.pdf",
          },
          {
            title: "Feedback on Virtual Classes 2019-20",
            link: "/iqac/feedback/Feedback+on+Virtual+Classes+2019-20.pdf",
          },
          {
            title: "Student Satisfaction Survey",
            link: "/iqac/feedback/Student+Satisfaction+Survey.pdf",
          },
          {
            title: "Industry Feedback on Curriculum",
            link: "/iqac/feedback/Industry_Feedback.pdf",
          },
          {
            title: "Alumni Feedback on Curriculum",
            link: "/iqac/feedback/Alumni_Feedback.pdf",
          },
          {
            title: "Parents Feedback on Curriculum",
            link: "/iqac/feedback/Parents+Feedback.pdf",
          },
          {
            title: "Students Feedback on Curriculum",
            link: "/iqac/feedback/Students+Feedback.pdf",
          },
          {
            title: "Teacher Feedback on Curriculum",
            link: "/iqac/feedback/Teacher+Feedback.pdf",
          },
        ],
      },
    },
    policies: {
      title: "Policies And Procedures",
      content: {
        heading: "Policies And Procedures",
        documents: [
          {
            title: "Acts and Statutes or MoA",
            link: "/acts-and-statutes-moa",
            hideDownloadText: true,
          },
        ],
      },
    },
    practices: {
      title: "Best Practices",
      content: {
        heading: "Best Practices",
        documents: [
          {
            title: "Best Practices",
            link: "/iqac/best-practices/Best_practices.pdf",
          },
        ],
      },
    },
    distinctiveness: {
      title: "Institutional Distinctiveness",
      content: {
        heading: "Institutional Distinctiveness",
        documents: [
          {
            title: "Institutional Distinctiveness",
            link: "/iqac/institutional-distinctiveness/Institutional_Distinctiveness.pdf",
          },
        ],
      },
    },
    declaration: {
      title: "Declaration",
      content: {
        heading: "Declaration",
        documents: [
          {
            title: "NAAC Compliance",
            link: "/iqac/declaration/NAAC+Compliance.pdf",
          },
          {
            title: "Declaration under RTI",
            link: "/iqac/declaration/rti_declaration.pdf",
          },
        ],
      },
    },
  }

  const tabs = [
    { id: "aqar", label: "AQAR" },
    { id: "minutes", label: "Minutes Of Meeting" },
    { id: "feedback", label: "Feedback" },
    { id: "policies", label: "Policies And Procedures" },
    { id: "practices", label: "Best Practices" },
    { id: "distinctiveness", label: "Institutional Distinctiveness" },
    { id: "declaration", label: "Declaration" },
  ]

  const formatDocumentLabel = (doc) => {
    if (activeTab === "aqar" && doc.year) {
      return `AQAR ${doc.year}`
    }

    if (activeTab === "minutes" && doc.year) {
      return `Minutes of Meeting ${doc.year}`
    }

    return doc.title || doc.year || ""
  }

  const renderDocumentEntry = (doc) => (
    <span className="monser-400">
      {formatDocumentLabel(doc)}
      {doc.link && (
        <>
          {doc.hideDownloadText ? " - " : " - Download using this "}
          <a
            href={doc.link}
            className="underline hover:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
        </>
      )}
    </span>
  )

  const renderDocumentsList = (documents) => (
    <ul className="space-y-3 list-disc list-inside">
      {documents.map((doc, index) => (
        <li key={index}>{renderDocumentEntry(doc)}</li>
      ))}
    </ul>
  )

  return (
    <div className="justify-center items-center pb-10 flex flex-col lg:px-8 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col bg-transparent relative z-10">
          {/* Mobile Tabs - Visible only on mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-2 py-1 rounded-lg transition-all duration-300 border-2 ${
                    activeTab === tab.id
                      ? "bg-[#A22877] text-white border-[#A22877]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#A22877]"
                  }`}
                >
                  <span className="font-semibold text-lg">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Two Column */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8">
            {/* Left Column - Navigation */}
            <div className="hidden lg:flex flex-col gap-4 col-span-2">
              <div className="">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left px-4 py-[0.5] rounded-2xl transition-all block duration-300 mb-3 border-[1px] ${
                      activeTab === tab.id
                        ? "bg-[#A22877] text-white border-[#A22877]"
                        : "bg-white text-gray-700 border-black hover:border-[#A22877]"
                    }`}
                  >
                    <span className="font-semibold text-lg">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-span-3 border-l-2 border-gray-200 pl-8">
              <div className="mb-6">
                <h5 className="text-2xl lg:text-4xl monser-600 text-[#A22877] mb-4">
                  {tabData[activeTab].content.heading}
                </h5>
              </div>

              {tabData[activeTab].content.documents ? (
                <div className="bg-[#A22877] text-white p-6 rounded-lg">
                  {renderDocumentsList(tabData[activeTab].content.documents)}
                </div>
              ) : (
                <div className="bg-[#A22877] text-white p-6 rounded-lg">
                  <p className="text-lg monser-400">
                    {tabData[activeTab].content.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Content - Visible only on mobile */}
          <div className="lg:hidden">
            <div className="mb-6">
              <h4 className="text-2xl lg:text-3xl monser-600 text-[#A22877] mb-4">
                {tabData[activeTab].content.heading}
              </h4>
            </div>

            {tabData[activeTab].content.documents ? (
              <div className="bg-[#A22877] text-white p-6 rounded-lg">
                {renderDocumentsList(tabData[activeTab].content.documents)}
              </div>
            ) : (
              <div className="bg-[#A22877] text-white p-6 rounded-lg">
                <p className="text-lg monser-400">
                  {tabData[activeTab].content.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AQARComponent
