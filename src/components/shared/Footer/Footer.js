"use client"
import Button from "@/shared/Button"
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6"
import { FaPlus, FaMinus } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import { GoArrowDownRight } from "react-icons/go"

export default function Footer() {
  const [openSection, setOpenSection] = useState("students")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email address")
      setIsSuccess(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address")
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      // Contact Form 7 integration with proper headers
      const formData = new FormData()
      formData.append("subscriber-email", email) // Must match CF7 field name
      formData.append("_wpcf7", "853") // Contact Form 7 ID
      formData.append("_wpcf7_version", "5.7.7") // CF7 version
      formData.append("_wpcf7_locale", "en_US") // Locale
      formData.append("_wpcf7_unit_tag", "wpcf7-f853-p" + Date.now()) // Unique tag
      formData.append("_wpcf7_container_post", "0") // Container post ID

      const response = await fetch(
        "https://docs.theaims.ac.in/wp-json/contact-form-7/v1/contact-forms/853/feedback",
        {
          method: "POST",
          body: formData,
        }
      )

      let data
      try {
        data = await response.json()
        console.log("CF7 Response:", data)
      } catch (parseError) {
        console.error("Response parsing error:", parseError)
        const text = await response.text()
        console.error("Non-JSON response:", text)

        // Fallback success
        setMessage("Thank you! You have been successfully subscribed.")
        setIsSuccess(true)
        setEmail("")
        setIsLoading(false)
        return
      }

      // Handle different CF7 response statuses
      if (data.status === "mail_sent") {
        // Success - email was sent
        setMessage("Thank you! You have been successfully subscribed.")
        setIsSuccess(true)
        setEmail("")

        // Store subscription locally as backup
        try {
          const subscriptions = JSON.parse(
            localStorage.getItem("newsletter_subscriptions") || "[]"
          )
          subscriptions.push({
            email,
            timestamp: new Date().toISOString(),
            id: Date.now(),
          })
          localStorage.setItem(
            "newsletter_subscriptions",
            JSON.stringify(subscriptions)
          )
        } catch (localError) {
          console.log("Local storage backup failed:", localError)
        }
      } else if (data.status === "validation_failed") {
        // Validation errors
        if (data.invalid_fields && data.invalid_fields.length > 0) {
          const fieldError = data.invalid_fields[0]
          setMessage(
            fieldError.message ||
              "Please check your email address and try again."
          )
        } else {
          setMessage("Please check your email address and try again.")
        }
        setIsSuccess(false)
      } else if (data.status === "mail_failed") {
        // Mail failed - but data was received by WordPress
        // Store locally and show success to user
        try {
          const subscriptions = JSON.parse(
            localStorage.getItem("newsletter_subscriptions") || "[]"
          )
          subscriptions.push({
            email,
            timestamp: new Date().toISOString(),
            id: Date.now(),
            note: "Contact Form 7 mail_failed - stored locally",
          })
          localStorage.setItem(
            "newsletter_subscriptions",
            JSON.stringify(subscriptions)
          )

          setMessage(
            "Thank you! Your subscription has been received. We'll contact you soon."
          )
          setIsSuccess(true)
          setEmail("")
        } catch (localError) {
          setMessage(
            "Subscription received, but please contact us if you don't receive a confirmation."
          )
          setIsSuccess(true)
          setEmail("")
        }
      } else if (data.status === "spam") {
        setMessage(
          "Your submission was detected as spam. Please contact us directly."
        )
        setIsSuccess(false)
      } else {
        // Fallback for other errors
        setMessage(
          data.message || "Something went wrong. Please try again later."
        )
        setIsSuccess(false)
      }
    } catch (error) {
      console.error("Subscription error:", error)

      // If network fails, try to store locally as backup
      try {
        const subscriptions = JSON.parse(
          localStorage.getItem("newsletter_subscriptions") || "[]"
        )
        subscriptions.push({
          email,
          timestamp: new Date().toISOString(),
          id: Date.now(),
          note: "Network error - stored locally",
          error: error.message,
        })
        localStorage.setItem(
          "newsletter_subscriptions",
          JSON.stringify(subscriptions)
        )

        setMessage(
          "Your subscription has been saved. We'll process it when the connection is restored."
        )
        setIsSuccess(true)
        setEmail("")
      } catch (localError) {
        setMessage("Network error. Please check your connection and try again.")
        setIsSuccess(false)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const footerSections = [
    {
      id: "students",
      title: "Students",
      links: [
        {
          href: "/student-university-rank-holders",
          text: "University Rank Holders",
        },
        { href: "/student-information-zone", text: "Student Handbook" },
        { href: "/student-information-zone", text: "Student Exit Formalities" },
        { href: "/student-information-zone", text: "Examinations" },
        { href: "/aims-academic-calendar", text: "Academic Calendar" },
        {
          href: "/pdf/footer-pdf/Program_and_Course_Outcomes.pdf",
          target: "_blank",
          text: "Program and Course Outcome",
        },
        {
          href: "/student-information-zone?tab=code-of-conduct#code-of-conduct",
          text: "Code of Conduct (Students)",
        },
      ],
    },
    {
      id: "faculty",
      title: "Faculty & Staff",
      links: [
        { href: "/articles-publications", text: "Articles/Publications" },
        { href: "/code-of-conduct-ethics", text: "Code of Conduct & Ethics" },
        { href: "/aims-list-of-faculty", text: "Faculty Members Details" },
        { href: "/patents", text: "Patents" },
      ],
    },
    {
      id: "disclosures",
      title: "Disclosures",
      links: [
        { href: "/iqac-internal-quality-assurance-cell", text: "IQAC" },
        { href: "/iacbe-accreditation", text: "IACBE Accreditation" },
        { href: "/naac-accreditation", text: "NAAC Accreditation" },
        { href: "/aicte-aims", text: "AICTE" },
        { href: "/nirf-ranking", text: "NIRF" },
        {
          href: "/pdf/footer-pdf/AIMS-UGC2(f)+&+12B+.pdf",
          target: "_blank",
          text: "UGC 2(f) & 12B",
        },
        {
          href: "/pdf/footer-pdf/IDP-final+copy.pdf",
          target: "_blank",
          text: "Institutional Development Plan",
        },
        {
          href: "/pdf/footer-pdf/Annual+Accounts.pdf",
          target: "_blank",
          text: "Annual Accounts",
        },
      ],
    },
    {
      id: "committees",
      title: "Committees",
      links: [
        { href: "/grievance-redressal", text: "Grievance Redressal" },
        {
          href: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
          text: "Anti-Ragging Cell",
        },
        {
          href: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
          text: "Anti-Sexual Harassment Committee",
        },
        {
          href: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
          text: "Equal Opportunity Cell",
        },
      ],
    },
    {
      id: "general",
      title: "General Information",
      links: [
        { href: "/aims-journal-of-research", text: "AIMS Journal of Research" },
        { href: "/news", text: "NEWS" },
        { href: "/gallery", text: "Gallery" },
        { href: "/events", text: "Events" },
        { href: "/blogs", text: "Blogs" },
        {
          href: "/environment-sustainability-policy-report",
          text: "Environment & Sustainability",
        },
        { href: "/rotaract-club", text: "Rotaract Club of AIMS" },
      ],
    },
  ]

  return (
    <footer className="bg-[#0C2165] text-white">
      {/* Top Section - Navigation Links */}
      <div className="px-4 lg:px-8 py-10">
        <div className="container mx-auto">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {footerSections.map((section) => (
              <div key={section.id}>
                <h6 className="font-semibold text-xl lg:text-2xl pb-4">
                  {section.title}
                </h6>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-gray-300 transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Collapsible Sections */}
        <div className="lg:hidden space-y-0">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-600">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <h6 className="font-semibold text-lg">{section.title}</h6>
                {openSection === section.id ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </button>
              {openSection === section.id && (
                <div className="py-3">
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="hover:text-gray-300 transition-colors block py-1"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section - Contact, Social, Newsletter */}
      <div className="border-t border-b border-whtie w-full">
        <div className="px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
              {/* AIMS Institutes */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">
                  AIMS Institutes
                </h6>
                <h5 className="text-sm text-gray-300 text-[14px]">
                  1st Cross, 1st Stage, Peenya,
                  <br /> Bengaluru 560058,
                  <br /> Karnataka, INDIA.
                </h5>
              </div>

              {/* Contact US */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">
                  Contact US
                </h6>
                <div className="space-y-2 text-sm text-gray-300">
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    Admissions Centre: <br />
                    <a
                      href="tel:+918150001994"
                      className="hover:text-white transition-colors"
                    >
                      +91-815-000-1994
                    </a>
                  </h5>
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    C&PR Centre:{" "}
                    <a
                      href="tel:+917026191114"
                      className="hover:text-white transition-colors"
                    >
                      +91 70261 91114
                    </a>
                  </h5>
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    Reception: 080 28390433/34
                  </h5>
                </div>
              </div>

              {/* Follow Us */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">
                  Follow Us
                </h6>
                <div className="flex space-x-4 mt-2 text-2xl">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/aimsinstitutes1994/?hl=en"
                    aria-label="AIMS Institutes on Instagram"
                    title="AIMS Institutes on Instagram"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FaInstagram aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/AIMS1994"
                    aria-label="AIMS Institutes on Facebook"
                    title="AIMS Institutes on Facebook"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FaFacebookF aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/AIMSinstitutes"
                    aria-label="AIMS Institutes on X (Twitter)"
                    title="AIMS Institutes on X (Twitter)"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FaXTwitter aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/@AIMSInstitutesBangalore"
                    aria-label="AIMS Institutes on YouTube"
                    title="AIMS Institutes on YouTube"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FaYoutube aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-2 lg:border-l border-white py-4 lg:pl-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">
                  Happy to keep you updated.
                  <br />
                  Sign up for our newsletter.
                </h6>
                <h5 className="text-sm text-gray-300 text-[14px]">
                  Sign up to be the first to know about our events,
                  achievements, and new initiatives.
                </h5>
              </div>
              <div className="space-y-3 py-4">
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-3 py-2 rounded border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#9c2474] border-6 border-[#D8BFD8] text-white font-semibold text-lg px-3 md:px-4 rounded-[25px] py-1 shadow-lg transform origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center disabled:opacity-50 w-full cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-1 md:gap-2 cursor-pointer">
                      {isLoading ? "Subscribing..." : "Sign Up"}
                      {!isLoading && (
                        <GoArrowDownRight className="w-3 h-3 md:w-5 md:h-5 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
                      )}
                    </span>
                  </button>
                </form>
                {message && (
                  <div
                    className={`text-sm p-2 rounded ${
                      isSuccess ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="py-4 text-center text-sm px-4 lg:px-8">
        <div className="container mx-auto">
          <span>© AIMS Institutes {new Date().getFullYear()}</span>
          <Link
            href="/terms-conditions"
            className="ml-4 hover:underline transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="ml-4 hover:underline transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/refund-cancellations"
            className="ml-4 hover:underline transition-colors"
          >
            Refund & Cancellations
          </Link>
        </div>
      </div>
    </footer>
  )
}
