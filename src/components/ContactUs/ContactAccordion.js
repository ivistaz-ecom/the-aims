"use client"
import React, { useState } from "react"
import Image from "next/image"

const accordionData = [
  {
    id: 1,
    title: "ADMISSIONS OFFICE",
    content: `
      <p>Contact us to learn more about the course of your interest, we will be happy to assist you in choosing the right career for you.</p>
      <p>
        <a href="mailto:admission@theaims.ac.in" class="text-[#A22977] underline">admission@theaims.ac.in</a><br />
        Call / WhatsApp: <a href="tel:+918150001994" class="text-[#A22977] underline">+91-815-000-1994</a>
      </p>
    `,
  },
  {
    id: 2,
    title: "RECEPTION",
    content: `
      <p>Call us at the reception to connect with any of us or if you are unsure on who to contact at AIMS Institutes.</p>
      <p>
        Call: <a href="tel:+918028390433" class="text-[#A22977] underline">(080)-28390433</a> /
        <a href="tel:+918028390434" class="text-[#A22977] underline">28390434</a>
      </p>
    `,
  },
  {
    id: 3,
    title: "C&PR (PLACEMENTS)",
    content: `
      <p>Call us at the C&PR to connect with any of us or if you are unsure on who to contact at AIMS Institutes.</p>
      <p>
      
        Call: <a href="tel:+917026191114" class="text-[#A22977] underline">+91-702-619-1114</a> or 
        <a href="tel:+918028390433" class="text-[#A22977] underline">(080)-28390433</a> /
        <a href="tel:+918028390434" class="text-[#A22977] underline">28390434</a><br />
         Email id: <a href="mailto:placements@theaims.ac.in" class="text-[#A22977] underline">placements@theaims.ac.in</a>
      </p>
    `,
  },
  {
    id: 4,
    title: "MARKETING",
    content: `
      <p>Got a proposal for advertisements or promotional activities? Email us at:</p>
      <p>
        <a href="mailto:marketing@theaims.ac.in" class="text-[#A22977] underline">marketing@theaims.ac.in</a>
      </p>
    `,
  },
  {
    id: 5,
    title: "INTERNATIONAL RELATIONS",
    content: `
      <p>We are happy to explore possible collaborations with institutions globally.</p>
      <p>
        <a href="mailto:acil@theaims.ac.in" class="text-[#A22977] underline">acil@theaims.ac.in</a>
      </p>
    `,
  },
  {
    id: 6,
    title: "CAREERS (Academic / Non-Academic)",
    content: `
      <p>We are looking for talented individuals to join our team – email us at:</p>
      <p>
        <a href="mailto:hr@theaims.ac.in" class="text-[#A22977] underline">hr@theaims.ac.in</a>
        or Call: <a href="tel:+918028390433" class="text-[#A22977] underline">(080)-28390433</a> /
        <a href="tel:+918028390434" class="text-[#A22977] underline">28390434</a>
      </p>
    `,
  },
]

const ContactAccordion = () => {
  const [expandedSection, setExpandedSection] = useState(accordionData[0].title)

  const handleItemClick = (title) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  return (
    <section className="md:pb-10 bg-white px-6 lg:px-10">
      <div className="container mx-auto">
        {accordionData.map((item, index) => (
          <div key={item.id} className="relative border-b border-gray-200">
            {/* Header */}
            <button
              onClick={() => handleItemClick(item.title)}
              className="w-full flex gap-10 text-start items-center py-4 md:py-3 cursor-pointer"
            >
              <h5 className="text-lg md:text-2xl font-semibold text-[#0C2165]">
                {item.title}
              </h5>

              <Image
                src="/nirf/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                className={`transition-transform duration-300 ${
                  expandedSection === item.title ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Content (HTML allowed) */}
            {expandedSection === item.title && (
              <div
                className="mt-2 mb-6 md:mb-8 ml-1 md:ml-2 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}

        {/* Disclaimer */}
        {/* <p className="text-sm md:text-base text-gray-600 mt-8">
          Value additions might vary every semester depending on feedback from
          alumni and industry representatives.
        </p> */}
      </div>
    </section>
  )
}

export default ContactAccordion
