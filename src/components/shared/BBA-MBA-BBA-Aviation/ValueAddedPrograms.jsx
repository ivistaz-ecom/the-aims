import React from "react"
import Image from "next/image"
import ValueAddedProgramsProps from "../ValueAddedProgramsProps"
import MBAProgramHighlight from "../../Mba/ProgramHighlight"
import BBAProgramHighlight from "../../BbaComponents/ProgramHighlight"
import BBAAviationProgramHighlight from "../../BbaAviationComponents/ProgramHighlight"

const ValueAddedPrograms = ({ programKey = "mba" }) => {
  const programData = {
    mcom: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer: "",
      programs: [
        {
          id: "certifications-2026-2027",
          title: "2026-2027",
          content: [
            "Advance Excel",
            "Industry Readiness Training – GD & Aptitude",
          ],
        },
        {
          id: "certifications-2025-2026",
          title: "2025-2026",
          content: [
            "The Eloquence Edge - Communication Skills Training / Public speaking",
            "Financial Statement Analysis & Benchmarking",
          ],
        },
      ],
    },
    mba: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer: "",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          id: "certifications-2026-2027",
          title: "2026-2027",
          content: [
            {
              title: "Personal Financial Literacy",
              subItems: [
                "Gain practical skills to manage money, savings, and investments wisely.",
              ],
            },
            {
              title: "The Gig Economy & Future of Work",
              subItems: [
                "Understand flexible careers and the evolving freelance landscape.",
              ],
            },
            {
              title:
                "Public Speaking, Communication & Critical Thinking Skills",
              subItems: [
                "Develop confidence, clarity, and analytical thinking for any audience.",
              ],
            },
            {
              title: "Interview Preparation & Readiness",
              subItems: [
                "Learn to present yourself effectively and succeed in real interviews.",
              ],
            },
            {
              title: "Advanced Career Readiness & Industry Integration",
              subItems: [
                "Bridge classroom learning with real-world corporate expectations.",
              ],
            },
            {
              title: "MS Office Applications & Data Analytics",
              subItems: [
                "Build essential digital and analytical skills for the modern workplace.",
              ],
            },
          ],
        },
        {
          id: "certifications-2025-2026",
          title: "2025-2026",
          content: [
            {
              title: "Personal Financial Literacy",
              subItems: [
                "Gain practical skills to manage money, savings, and investments wisely.",
              ],
            },
            {
              title: "The Gig Economy & Future of Work",
              subItems: [
                "Understand flexible careers and the evolving freelance landscape.",
              ],
            },
            {
              title:
                "Public Speaking, Communication & Critical Thinking Skills",
              subItems: [
                "Develop confidence, clarity, and analytical thinking for any audience.",
              ],
            },
            {
              title: "Interview Preparation & Readiness",
              subItems: [
                "Learn to present yourself effectively and succeed in real interviews.",
              ],
            },
            {
              title: "Advanced Career Readiness & Industry Integration",
              subItems: [
                "Bridge classroom learning with real-world corporate expectations.",
              ],
            },
            {
              title: "MS Office Applications & Data Analytics",
              subItems: [
                "Build essential digital and analytical skills for the modern workplace.",
              ],
            },
          ],
        },
      ],
    },
    bba: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer: "",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          id: "career-mapping",
          title: "2025-28",
          content: [
            {
              title: "Psychometric Assessment & Career Mapping",
              subItems: [
                "Discover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardised tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
              ],
            },
            {
              title: "Financial Literacy",
              subItems: [
                "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
              ],
            },
            {
              title: "Gig Economy",
              subItems: [
                "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today's digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
              ],
            },
            {
              title: "Public Speaking, Communication & Critical Skills",
              subItems: [
                "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
              ],
            },
            {
              title: "Interview Preparation",
              subItems: [
                "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
              ],
            },
            {
              title: "Advanced Readiness & Industry Integration",
              subItems: [
                "This program prepares students for professional life by familiarising them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
              ],
            },
            {
              title: "MS Office & Analytics",
              subItems: [
                "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
              ],
            },
            {
              title: "Entrepreneurship Program",
              subItems: [
                "Preparing tomorrow's leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands on experience in building ideas from scratch.",
              ],
            },
          ],
        },
        {
          id: "career-mapping-2024-27",
          title: "2024-27",
          content: [
            {
              title: "Psychometric Assessment & Career Mapping",
              subItems: [
                "Discover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardised tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
              ],
            },
            {
              title: "Financial Literacy",
              subItems: [
                "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
              ],
            },
            {
              title: "Gig Economy",
              subItems: [
                "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today's digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
              ],
            },
            {
              title: "Public Speaking, Communication & Critical Skills",
              subItems: [
                "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
              ],
            },
            {
              title: "Interview Preparation",
              subItems: [
                "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
              ],
            },
            {
              title: "Advanced Readiness & Industry Integration",
              subItems: [
                "This program prepares students for professional life by familiarizing them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
              ],
            },
            {
              title: "MS Office & Analytics",
              subItems: [
                "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
              ],
            },
            {
              title: "Entrepreneurship Program",
              subItems: [
                "Preparing tomorrow's leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands on experience in building ideas from scratch.",
              ],
            },
          ],
        },
      ],
    },
    bhm: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer: "",
      programs: [
        {
          id: "career-mapping-2025-29",
          title: "2025-29",
          content: [
            {
              title: "Psychometric Assessment & Career Mapping",
              subItems: [
                "Career Mapping Discover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardized tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
              ],
            },
            {
              title: "Financial Literacy",
              subItems: [
                "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
              ],
            },
            {
              title: "Gig Economy",
              subItems: [
                "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today's digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
              ],
            },
            {
              title: "Public Speaking, Communication & Critical Skills",
              subItems: [
                "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
              ],
            },
            {
              title: "Interview Preparation",
              subItems: [
                "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
              ],
            },
            {
              title: "Advanced Readiness & Industry Integration",
              subItems: [
                "This program prepares students for professional life by familiarizing them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
              ],
            },
            {
              title: "MS Office & Analytics",
              subItems: [
                "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
              ],
            },
            {
              title: "Entrepreneurship Program",
              subItems: [
                "Preparing tomorrow's leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands-on experience in building ideas from scratch.",
              ],
            },
          ],
        },
        {
          id: "career-mapping-2024-28",
          title: "2024-28",
          content: [
            {
              title: "Psychometric Assessment & Career Mapping",
              subItems: [
                "Career Mapping Discover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardized tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
              ],
            },
            {
              title: "Financial Literacy",
              subItems: [
                "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
              ],
            },
            {
              title: "Gig Economy",
              subItems: [
                "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today's digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
              ],
            },
            {
              title: "Public Speaking, Communication & Critical Skills",
              subItems: [
                "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
              ],
            },
            {
              title: "Interview Preparation",
              subItems: [
                "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
              ],
            },
            {
              title: "Advanced Readiness & Industry Integration",
              subItems: [
                "This program prepares students for professional life by familiarizing them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
              ],
            },
            {
              title: "MS Office & Analytics",
              subItems: [
                "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
              ],
            },
            {
              title: "Entrepreneurship Program",
              subItems: [
                "Preparing tomorrow's leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands-on experience in building ideas from scratch.",
              ],
            },
          ],
        },
      ],
    },
  }

  const sampleProps = programData[programKey] || programData.mba

  return (
    <>
      <div>
        <ValueAddedProgramsProps
          programsData={sampleProps.programs}
          title={sampleProps.title}
          description={sampleProps.description}
          disclaimer={sampleProps.disclaimer}
        />
      </div>

      {/* Program Highlight Section */}
      <div>
        {programKey === "mba" && <MBAProgramHighlight />}
        {programKey === "bba" && <BBAProgramHighlight />}
        {programKey === "bba-aviation" && <BBAAviationProgramHighlight />}
      </div>
    </>
  )
}

export default ValueAddedPrograms
