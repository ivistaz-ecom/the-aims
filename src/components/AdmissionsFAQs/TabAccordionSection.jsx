import React from "react"
import TabAccordion from "../shared/Admission/TabAccordion"

const TabAccordionSection = () => {
  const tabsData = [
    {
      title: "General Admission Information",
      sections: [
        {
          id: "programs",
          title: "What programs are offered at AIMS Institutes?",
          content: [
            "AIMS Institutes offers undergraduate and postgraduate programs and diplomas across Management, Hospitality, Computer Applications, Commerce and more.",
            "View the full list on the Programs page.",
          ],
        },
        {
          id: "medium",
          title: "What is the medium of instruction?",
          content: ["All programs are taught in English."],
        },
        {
          id: "eligibility",
          title: "What are the eligibility criteria for UG and PG programs?",
          content: [
            "Each course has specific eligibility criteria. In general:",
            "UG applicants must have completed 10+2 / A Level or equivalent.",
            "PG applicants must hold a recognised bachelor's degree.",
            "MBA applicants must also have a valid CAT, MAT, XAT, CMAT, or ATMA score.",
            "Refer to the course-specific eligibility section for details.",
          ],
        },
        {
          id: "accreditation",
          title: "Is AIMS a recognised and accredited institution?",
          content: [
            "Yes. AIMS Institutes is NAAC 'A' Grade accredited and affiliated with recognised bodies. Our MBA program is accredited by IACBE (USA), and many of our courses include globally aligned curriculum and certification options.",
          ],
        },
        {
          id: "international",
          title: "Does AIMS accept international students?",
          content: [
            "Yes. AIMS welcomes international students and provides academic, visa, and accommodation support through its International Relations Office.",
          ],
        },
      ],
    },
    {
      title: "Application Process",
      sections: [
        {
          id: "apply",
          title: "How do I apply to AIMS Institutes?",
          content: [
            'You can apply online using the "Apply Now" button on any page of the website. The process is simple.',
          ],
        },
        {
          id: "offline",
          title: "Is there an offline application option?",
          content: [
            "Currently, applications are accepted only through the online portal.",
          ],
        },
        {
          id: "documents",
          title: "What documents are required for UG and PG applications?",
          content: [
            "Academic transcripts (10th, 12th, UG/PG as applicable)",
            "Entrance test scorecards (for MBA)",
            "Aadhar/PAN",
            "2 passport-size photographs",
            "Category/income/sports certificates (if applying for scholarships)",
          ],
        },
        {
          id: "difference",
          title:
            "Is there a difference in the admission process for UG and PG programs?",
          content: [
            "Yes.",
            "UG and non-MBA PG programs involve an online application followed by a selection call or interview (if applicable).",
            "The MBA program has a separate 4-stage selection process.",
          ],
        },
        {
          id: "professionals",
          title: "Can working professionals apply for postgraduate programs?",
          content: [
            "Yes. Many of our PG courses are designed to support career advancement, and we welcome applications from working professionals.",
          ],
        },
      ],
    },
    {
      title: "Selection & Admission",
      sections: [
        {
          id: "selection",
          title: "How does the MBA selection process work?",
          content: [
            "The AIMS MBA selection process includes:",
            "Statement of Purpose",
            "Extempore",
            "Group Discussion",
            "Personal Interview",
          ],
        },
        {
          id: "selected",
          title: "How will I know if I've been selected?",
          content: [
            "Selected applicants will receive an Offer Letter by email. Seat blocking and confirmation deadlines will be listed in the letter.",
          ],
        },
        {
          id: "deadline",
          title: "What if I miss a selection round deadline?",
          content: [
            "You may have to defer your application to the next intake. Please refer to Important Deadlines for timely updates.",
          ],
        },
        {
          id: "confirmed",
          title: "What happens after my admission is confirmed?",
          content: [
            "You will receive onboarding and orientation information, fee payment instructions, and course start dates by email.",
          ],
        },
        {
          id: "defer",
          title: "Can I defer my admission?",
          content: [
            "Deferral is possible under specific circumstances. Please contact the Admissions Office for guidance.",
          ],
        },
      ],
    },
    {
      title: "Fees, Scholarships & Loans",
      sections: [
        {
          id: "scholarships",
          title: "Are scholarships available?",
          content: [
            "Yes. AIMS offers merit-based, need-based, and performance-linked scholarships.",
            "Visit the Scholarships page to explore your options.",
          ],
        },
        {
          id: "concession",
          title: "Is there a fee concession for siblings or alumni?",
          content: [
            "Yes. Fee concessions are available for siblings of current students, alumni, defence personnel, and more.",
            "View all fee concession categories",
          ],
        },
        {
          id: "loans",
          title: "Does AIMS help with educational loans?",
          content: [
            "Yes. We've partnered with recognised banks and NBFCs to assist students in applying for loans.",
            "Visit the Educational Loans page for details.",
          ],
        },
      ],
    },
    {
      title: "Accommodation & Campus Life",
      sections: [
        {
          id: "hostel",
          title: "Is hostel accommodation available?",
          content: [
            "Yes. On-campus hostels are available for boys and girls with options for single and shared rooms. Facilities include Wi-Fi, mess, study spaces, and 24/7 security.",
          ],
        },
        {
          id: "food",
          title: "Is food provided in the hostels?",
          content: [
            "Yes. AIMS hostels offer nutritious vegetarian and non-vegetarian meals prepared in hygienic kitchens.",
          ],
        },
        {
          id: "visit",
          title: "Can I visit the campus before applying?",
          content: [
            "Absolutely. You can schedule a guided campus tour.",
            "Write to us at admissions@theaims.ac.in to fix a visit.",
          ],
        },
      ],
    },
    {
      title: "Deadlines, Confirmations & Support",
      sections: [
        {
          id: "deadlines",
          title: "What are the key admission deadlines for 2025?",
          content: [
            "MBA Application Deadline: 2nd February 2026",
            "PG (non-MBA) Deadline: Closed for 2025",
            "UG Application Deadline: Closed for 2025",
            "View Important Dates",
          ],
        },
        {
          id: "results",
          title: "What if I am waiting for my final year results?",
          content: [
            "You can still apply. Provisional admission will be granted subject to final result submission before the academic year begins.",
          ],
        },
        {
          id: "contact",
          title: "Who can I contact for help with my application?",
          content: [
            "📧 admissions@theaims.ac.in",
            "📞 +91-XXXXXXXXXX",
            "📍 Or visit the Admissions Helpdesk on campus",
          ],
        },
      ],
    },
    {
      title: "Other Questions",
      sections: [
        {
          id: "placement",
          title: "Does AIMS have industry tie-ups for placements?",
          content: [
            "Yes. We have tie-ups with leading companies in consulting, finance, hospitality, retail, and tech. Our placement team supports students with internships and job opportunities.",
          ],
        },
        {
          id: "certifications",
          title: "Are certifications and value-added courses included?",
          content: [
            "Yes. Many UG and PG programs offer certification options in data analytics, entrepreneurship, digital marketing, culinary arts, etc., depending on your field.",
          ],
        },
        {
          id: "transport",
          title: "Is transportation provided?",
          content: [
            "Yes. AIMS offers college bus services across select routes in Bengaluru. Details will be provided during onboarding.",
          ],
        },
        {
          id: "international",
          title: "Does AIMS provide international exposure?",
          content: [
            "Yes. Several programs include options for international internships, global immersion trips, or collaborative learning with overseas institutions.",
          ],
        },
      ],
    },
  ]

  return <TabAccordion tabsData={tabsData} />
}

export default TabAccordionSection
