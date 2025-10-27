"use client";
import Button from "@/shared/Button";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { GoArrowDownRight } from "react-icons/go";

export default function Footer() {
  const [openSection, setOpenSection] = useState('students');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      id: 'students',
      title: 'Students',
      links: [
        { href: '/student-university-rank-holders', text: 'University Rank Holders' },
        { href: '/student-information-zone', text: 'Student Handbook' },
        { href: '/student-information-zone', text: 'Student Exit Formalities' },
        { href: '/student-information-zone', text: 'Examinations' },
        { href: '/student-information-zone', text: 'Academic Calendar' },
        { href: '/pdf/footer-pdf/Program_and_Course_Outcomes.pdf', target: '_blank', text: 'Program and Course Outcome' },
        { href: '/student-information-zone', text: 'Code of Conduct (Students)' }
      ]
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      links: [
        { href: '/articles-publications', text: 'Articles/Publications' },
        { href: '/code-of-conduct-ethics', text: 'Code of Conduct & Ethics' },
        { href: '/aims-list-of-faculty', text: 'Faculty Members Details' },
        { href: '/patents', text: 'Patents' }
      ]
    },
    {
      id: 'disclosures',
      title: 'Disclosures',
      links: [
        { href: '/iqac-internal-quality-assurance-cell', text: 'IQAC' },
        { href: '/iacbe-accreditation', text: 'IACBE Accreditation' },
        { href: '/naac-accreditation', text: 'NAAC Accreditation' },
        { href: '/aicte-aims', text: 'AICTE' },
        { href: '/nirf-ranking', text: 'NIRF' },
        { href: '/pdf/footer-pdf/AIMS-UGC2(f)+&+12B+.pdf', target: '_blank', text: 'UGC 2(f) & 12B' },
        { href: '/pdf/footer-pdf/IDP-final+copy.pdf', target: '_blank', text: 'Institutional Development Plan' },
        { href: '/pdf/footer-pdf/Annual+Accounts.pdf', target: '_blank', text: 'Annual Accounts' }
      ]
    },
    {
      id: 'committees',
      title: 'Committees',
      links: [
        { href: '/grievance-redressal', text: 'Grievance Redressal' },
        { href: '/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity', text: 'Anti-Ragging Cell' },
        { href: '/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity', text: 'Anti-Sexual Harassment Committee' },
        { href: '/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity', text: 'Equal Opportunity Cell' }
      ]
    },
    {
      id: 'general',
      title: 'General Information',
      links: [
        { href: '/aims-journal-of-research', text: 'AIMS Journal of Research' },
        { href: '/news', text: 'NEWS' },
        { href: '/gallery', text: 'Gallery' },
        { href: '/events', text: 'Events' },
        { href: '/blogs', text: 'Blogs' },
        { href: '/environment-sustainability-policy-report', text: 'Environment & Sustainability' },
        { href: '/rotaract-club', text: 'Rotaract Club of AIMS' }
      ]
    }
  ];

  return (
    <footer className="bg-[#0C2165] text-white">
      {/* Top Section - Navigation Links */}
      <div className="px-4 lg:px-8 py-10">
        <div className="container mx-auto">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {footerSections.map((section) => (
              <div key={section.id}>
                <h6 className="font-semibold text-xl lg:text-2xl pb-4">{section.title}</h6>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="hover:text-gray-300 transition-colors">
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
        <div className="lg:hidden space-y-0 px-4 lg:px-8">
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
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">AIMS Institutes</h6>
                <h5 className="text-sm text-gray-300 text-[14px]">
                  1st Cross, 1st Stage, Peenya,<br /> Bengaluru 560058,<br /> Karnataka, INDIA.
                </h5>
              </div>

              {/* Contact US */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">Contact US</h6>
                <div className="space-y-2 text-sm text-gray-300">
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    Admissions Centre: <br />
                    <a href="tel:+918150001994" className="hover:text-white transition-colors">+91-815-000-1994</a>
                  </h5>
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    C&PR Centre: <a href="tel:+917026191114" className="hover:text-white transition-colors">+91 70261 91114</a>
                  </h5>
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    Reception: 080 28390433/34
                  </h5>
                </div>
              </div>

              {/* Follow Us */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">Follow Us</h6>
                <div className="flex space-x-4 mt-2 text-2xl">
                  <a target="_blank" href="https://www.instagram.com/aimsinstitutes1994/?hl=en" className="hover:text-gray-300 transition-colors"><FaInstagram /></a>
                  <a target="_blank" href="https://www.facebook.com/AIMS1994" className="hover:text-gray-300 transition-colors"><FaFacebookF /></a>
                  <a target="_blank" href="https://x.com/AIMSinstitutes" className="hover:text-gray-300 transition-colors"><FaXTwitter /></a>
                  <a target="_blank" href="https://www.youtube.com/@AIMSInstitutesBangalore" className="hover:text-gray-300 transition-colors"><FaYoutube /></a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-2 lg:border-l border-white py-4 lg:pl-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">
                  Happy to keep you updated.<br />Sign up for our newsletter.
                </h6>
                <h5 className="text-sm text-gray-300 text-[14px]">
                  Sign up to be the first to know about our events, achievements, and new initiatives.
                </h5>
              </div>
              <div className="space-y-3 py-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 rounded border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                 <Link
                        href="https://www.theaims.ac.in/sign-up"
                        target="_blank"
                        className="bg-[#9c2474] border-6 border-[#D8BFD8] text-white font-semibold text-lg px-3 md:px-4 rounded-[25px]  py-1 shadow-lg transform origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center"
                    >
                        <span className="flex items-center justify-center gap-1 md:gap-2">
                            Sign Up
                            <GoArrowDownRight className="w-3 h-3 md:w-5 md:h-5 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
                        </span>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="py-4 text-center text-sm px-4 lg:px-8">
        <div className="container mx-auto">
          <span>© AIMS Institutes {new Date().getFullYear()}</span>
          <Link href="/terms-conditions" className="ml-4 hover:underline transition-colors">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="ml-4 hover:underline transition-colors">Privacy</Link>
          <Link href="/refund-cancellations" className="ml-4 hover:underline transition-colors">Refund & Cancellations</Link>
        </div>
      </div>
    </footer>
  );
}
