"use client"

import React from "react"
import Image from "next/image"
import ProgramButton from "./ProgramButton"

const financePrograms = [
  { title: "PhD in Commerce", href: "/phd-doctoral-programs" },
  {
    title: "Master of Commerce M.COM",
    href: "/finance-commerce-school/master-of-commerce",
  },
  {
    title: "Bachelor of Commerce B.COM",
    href: "/finance-commerce-school/bachelor-of-commerce",
  },
  {
    title: "B.COM+ CA/ACCA",
    href: "/finance-commerce-school/bachelor-of-commerce",
  },
]

const SchoolOfFinance = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[90vh] md:h-[90vh] lg:h-[75vh]">
        <Image
          src="/programs/finance-desktop.webp"
          alt="Students from School of Finance & Commerce"
          fill
          priority
          className="hidden lg:block object-cover"
        />
        <Image
          src="/programs/finance-mobile.webp"
          alt="Students from School of Finance & Commerce"
          fill
          priority
          className="block lg:hidden object-cover"
        />

        <div className="relative z-10 flex h-full flex-col lg:justify-center justify-end px-4 pb-10 lg:pb-20 lg:pt-24 md:px-12 lg:px-16">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="space-y-3 text-left">
              <h5 className="monser-600 text-2xl leading-tight lg:text-5xl lg:text-left text-center">
                School of <br className="hidden lg:block" /> Finance & Commerce
              </h5>
              <span className="monser-400 leading-relaxed text-white lg:text-xl text-sm max-w-xl">
                Where numbers meet strategy. We prepare students to interpret
                markets, manage complexity, and aim for financial leadership
                across industries.
              </span>
            </div>

            <div className="flex flex-col items-start gap-3">
              {financePrograms.map((program) => (
                <ProgramButton key={program.title} href={program.href}>
                  {program.title}
                </ProgramButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolOfFinance
