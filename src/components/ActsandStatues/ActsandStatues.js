import Link from "next/link"
import React from "react"

const STATUTES_AND_POLICIES = [
  {
    title: "Infrastructure and Maintenance Policy",
    href: "/acts-and-statutes-moa/Infrastructure policy.pdf",
  },
  {
    title: "Anti-Ragging Policy",
    href: "/acts-and-statutes-moa/Antiragging policy.pdf",
  },
  {
    title: "Policy for Prevention of Sexual Harassment",
    href: "/acts-and-statutes-moa/Sexual harrassment.pdf",
  },
  {
    title: "Code of Conduct – Faculty and Staff",
    href: "/acts-and-statutes-moa/Code of Conduct faculty and staff.pdf",
  },
  {
    title: "Policy for Sponsorship of Faculty for Development Activities",
    href: "/acts-and-statutes-moa/Faculty development activities.pdf",
  },
  {
    title: "Students Grievance Redressal Policy",
    href: "/acts-and-statutes-moa/Student grievances and redressal.pdf",
  },
  {
    title: "Policy for Promotion of Equity",
    href: "/acts-and-statutes-moa/Policy of Promotion equity.pdf",
  },
  {
    title: "Code of Conduct – Students",
    href: "/acts-and-statutes-moa/Code of Conduct-Students.pdf",
  },
  {
    title: "Code of Ethics",
    href: "/acts-and-statutes-moa/Code of Ethics.pdf",
  },
  {
    title: "Environment & Sustainability Policy",
    href: "/acts-and-statutes-moa/Environment-and-Sustainability-Policy.pdf",
  },
  { title: "IT Policy", href: "/acts-and-statutes-moa/IT Policy.pdf" },
  { title: "HR Policy", href: "/acts-and-statutes-moa/HR Policy_merged.pdf" },
  // { title: "ER Policy", href: null },
  {
    title: "Admission Policy",
    href: "/acts-and-statutes-moa/Admission policy.pdf",
  },
  {
    title: "Research Policy",
    href: "/acts-and-statutes-moa/Research-Policy.pdf",
  },
  {
    title: "Library Policies and Procedures",
    href: "/acts-and-statutes-moa/Library Policy and Procedures.pdf",
  },
  {
    title: "Student Exit Policy",
    href: "/acts-and-statutes-moa/Student-Exit-Policy.pdf",
  },
  {
    title: "Placement Policy",
    href: "/acts-and-statutes-moa/placement-policy.pdf",
  },
  {
    title: "E-Governance Policy",
    href: "/acts-and-statutes-moa/e-goverance-policy.pdf",
  },
]

const ActsandStatues = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Acts and Statutes
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div>
            <h4 className="text-2xl text-bold">AIMS Statutes & Policies</h4>
            <ul className="grid gap-3 list-disc pl-5 md:grid-cols-1 md:gap-y-4 md:gap-x-8">
              {STATUTES_AND_POLICIES.map(({ title, href }) => (
                <li key={title} className="text-[18px] text-[#A22877]">
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      {title}
                    </Link>
                  ) : (
                    <span>{title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActsandStatues
