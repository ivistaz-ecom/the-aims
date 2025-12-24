// Utility function to generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Job data with full descriptions
export const academicJobsData = [
  {
    id: 1,
    title: "Guest Faculty – MBA Program",
    slug: "guest-faculty-mba-program",
    department: "School of Business",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes invites applications for dynamic and qualified Guest Faculty members to teach core and elective courses in the MBA program. The faculty will be responsible for delivering high-quality academic instruction, engaging students through experiential learning, and contributing to the overall development of the program.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Deliver lectures, tutorials, and case-based learning sessions for the assigned subject(s).",
          "Prepare and update course materials, lesson plans, and evaluation methods as per the MBA curriculum.",
          "Conduct assessments, quizzes, and examinations to evaluate student learning outcomes.",
          "Encourage interactive learning through projects, simulations, and group discussions.",
          "Provide academic guidance and mentoring to students.",
          "Collaborate with the program coordinator and other faculty members to ensure academic quality and consistency.",
          "Stay updated with current trends, practices, and research in the respective subject areas.",
        ],
      },
      {
        type: "heading",
        title: "Subject-Specific Expectations as per BU:",
        items: [
          "Legal Aspects and Intellectual Property Rights",
          "Project and Operations Management",
          "Team Dynamics at Work",
        ],
      },
      {
        type: "heading",
        title: "Qualifications & Experience:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "MBA / PhD or equivalent in Management or related discipline from a recognized university.",
          },
          {
            bold: "Experience:",
            text: "Minimum 2-5 years of teaching or relevant industry experience in the respective subject area.",
          },
          "Candidates with prior teaching experience in MBA programs will be preferred.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          "Strong communication and presentation skills.",
          "Updated knowledge in subject area and current industry practices.",
          "Ability to engage students and promote critical thinking.",
          "Commitment to academic excellence and continuous improvement.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 2,
    title: "IQAC Manager",
    slug: "iqac-manager",
    department: "Internal Quality Assurance Cell (IQAC)",
    experience: "Minimum 5 years experience in academic quality",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "The IQAC Manager plays a pivotal role in ensuring and enhancing the quality standards of academic and administrative processes at AIMS Institutes. This role focuses on planning, coordinating, and monitoring quality assurance and accreditation-related activities as per NAAC, NBA, and other regulatory requirements. The IQAC Manager works closely with the Principal, Deans, Heads of Departments, and faculty to implement institutional quality initiatives and sustain continuous improvement aligned with Outcome-Based Education (OBE) and institutional vision.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          {
            parts: [
              "Develop, implement, and monitor ",
              {
                bold: "IQAC policies, systems, and quality assurance frameworks",
              },
              " as per NAAC guidelines.",
            ],
          },
          {
            parts: [
              "Coordinate ",
              { bold: "internal and external quality audits" },
              ", including preparation and submission of AQAR, SSR, and other accreditation reports.",
            ],
          },
          {
            parts: [
              "Facilitate the implementation of ",
              { bold: "Outcome-Based Education (OBE)" },
              " processes and support departments in defining Program Outcomes (POs), Course Outcomes (COs), and mapping mechanisms.",
            ],
          },
          {
            parts: [
              "Collaborate with academic and administrative units to ensure ",
              { bold: "compliance with regulatory bodies" },
              " such as UGC, AICTE, NAAC, and university norms.",
            ],
          },
          "Maintain documentation of all quality initiatives, best practices, and institutional performance indicators.",
          "Monitor and analyze academic data and performance metrics to drive evidence-based improvements.",
          {
            parts: [
              "Organize and conduct ",
              {
                bold: "workshops, training programs, and quality awareness sessions",
              },
              " for faculty and staff.",
            ],
          },
          "Prepare and maintain institutional data required for accreditation, audits, and rankings (NIRF, AISHE, etc.).",
          {
            parts: [
              "Liaise with the ",
              { bold: "Head of Institution and IQAC Committee" },
              " to plan and execute strategic quality enhancement measures.",
            ],
          },
          "Promote a culture of continuous improvement, innovation, and accountability within the institution.",
          "Support the compilation of reports, minutes, and annual quality plans for IQAC meetings.",
          "Coordinate with external experts, stakeholders, and auditors during quality assessments and inspections.",
        ],
      },
      {
        type: "heading",
        title: "Required Qualifications:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "Master's Degree in any discipline (preferably Management, Education, or related field).",
          },
          {
            parts: [
              { bold: "Experience:" },
              " Minimum ",
              { bold: "5 years of experience" },
              " in academic administration or quality assurance within higher education.",
            ],
          },
          {
            parts: [
              "Strong understanding of ",
              { bold: "NAAC processes" },
              ", ",
              { bold: "OBE framework" },
              ", and ",
              { bold: "accreditation standards" },
              ".",
            ],
          },
          {
            parts: [
              "Experience in ",
              { bold: "documentation" },
              ", ",
              { bold: "report preparation" },
              ", and ",
              { bold: "data management" },
              " for quality and accreditation purposes.",
            ],
          },
          "Excellent organizational, communication, and stakeholder coordination skills.",
          "Proven ability to manage multiple tasks, deadlines, and quality improvement projects.",
          "Proficiency in MS Office, Google Workspace, and data management tools.",
          "Certifications or training in quality management, NAAC/OBE, or institutional assessment will be an advantage.",
        ],
      },
      {
        type: "heading",
        title: "Preferred Skills:",
        items: [
          {
            parts: [
              "Experience in ",
              { bold: "OBE implementation" },
              " and ",
              { bold: "NAAC accreditation cycles" },
              ".",
            ],
          },
          "Analytical ability to interpret academic data and identify improvement areas.",
          "Strong interpersonal skills with the ability to collaborate across departments.",
          "Commitment to institutional excellence and continuous learning.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 3,
    title: "Faculty — Human Resource Management & Business Law",
    slug: "faculty-human-resource-business-law",
    department: "School of Business",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes, Peenya, Bengaluru, is a premier institution dedicated to excellence in education, research, and innovation. We nurture future-ready professionals by blending academic rigor with practical exposure, driven by a commitment to quality and institutional values.",
    },
    sections: [
      {
        type: "heading",
        title: "Position Overview:",
        items: [
          {
            parts: [
              "We are inviting applications for a ",
              {
                bold: "Faculty position in Human Resource Management and Business Law",
              },
              ". The ideal candidate will possess strong academic credentials, industry insight, and experience in implementing ",
              { bold: "Outcome-Based Education (OBE)" },
              " and ",
              { bold: "NAAC quality assurance frameworks" },
              ".",
            ],
          },
        ],
      },
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          {
            parts: [
              "Deliver lectures and tutorials in ",
              { bold: "Human Resource Management" },
              " and ",
              { bold: "Business Law" },
              " for undergraduate and postgraduate programs.",
            ],
          },
          {
            parts: [
              "Design, develop, and review ",
              { bold: "Outcome-Based Education (OBE)" },
              " aligned course content, lesson plans, and assessments.",
            ],
          },
          {
            parts: [
              "Participate actively in ",
              { bold: "NAAC documentation" },
              ", quality audits, and institutional accreditation processes.",
            ],
          },
          "Mentor and guide students in academics, projects, and career progression.",
          {
            parts: [
              "Engage in ",
              { bold: "research, publications, and academic development" },
              " initiatives.",
            ],
          },
          "Collaborate with faculty teams to enhance the quality and relevance of the curriculum.",
          "Uphold institutional standards of discipline, integrity, and continuous improvement.",
        ],
      },
      {
        type: "heading",
        title: "Educational Qualification:",
        items: [
          {
            parts: [
              { bold: "Mandatory:" },
              " Master's Degree in ",
              { bold: "Business Law (MBL)" },
              " from a recognized university.",
            ],
          },
          {
            parts: [
              { bold: "Preferred:" },
              " Additional qualification in ",
              { bold: "Human Resource Management" },
              " or ",
              { bold: "Management Studies" },
              ".",
            ],
          },
          {
            parts: [{ bold: "Desirable:" }, " Ph.D. (awarded or pursuing)."],
          },
        ],
      },
      {
        type: "heading",
        title: "Experience:",
        items: [
          {
            parts: [
              "2–5 years of relevant teaching experience in ",
              { bold: "HR and Business Law" },
              " at the undergraduate or postgraduate level.",
            ],
          },
          {
            parts: [
              "Hands-on experience with ",
              { bold: "Outcome-Based Education (OBE) frameworks" },
              " and ",
              { bold: "NAAC accreditation processes" },
              " is mandatory.",
            ],
          },
          "Exposure to HR or corporate legal compliance in industry will be an added advantage.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          {
            parts: [
              "Strong subject expertise in ",
              { bold: "HR" },
              ", ",
              { bold: "Labour Laws" },
              ", and ",
              { bold: "Business Law" },
              ".",
            ],
          },
          {
            parts: [
              "Proven ability to integrate ",
              { bold: "OBE" },
              " and ",
              { bold: "quality assurance standards" },
              " in teaching.",
            ],
          },
          "Excellent communication, presentation, and mentoring skills.",
          "Research-oriented mindset with academic publications preferred.",
          "Collaborative and committed to institutional excellence.",
          "Immediate joiners preferred.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 4,
    title: "Assistant Professor – Information Technology (MCA & BCA)",
    slug: "assistant-professor-information-technology-mca-bca",
    department: "School of Information Technology",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "We are seeking a qualified and dynamic Assistant Professor in Information Technology to teach courses in MCA and BCA programs. The ideal candidate should possess strong subject expertise, research orientation, and hands-on experience with Outcome-Based Education (OBE) and NAAC quality assurance processes.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Deliver engaging lectures and practical sessions in Information Technology, Computer Applications, and related subjects for MCA & BCA programs.",
          {
            parts: [
              "Design and implement ",
              { bold: "Outcome-Based Education (OBE)" },
              "-aligned course content, lesson plans, and assessments.",
            ],
          },
          {
            parts: [
              "Contribute actively to ",
              { bold: "NAAC documentation" },
              ", departmental audits, and institutional quality initiatives.",
            ],
          },
          "Guide students in academic projects, internships, and research activities.",
          "Stay updated with emerging technologies, tools, and pedagogical trends.",
          "Engage in academic research, publications, and professional development activities.",
          "Support departmental events, seminars, and collaborative initiatives.",
        ],
      },
      {
        type: "heading",
        title: "Educational Qualification:",
        items: [
          {
            parts: [
              "Mandatory: Master's Degree in Computer Applications (MCA) or Information Technology/Computer Science from a recognized university and ",
              { bold: "Ph.D. (awarded or pursuing)" },
              " in a relevant discipline.",
            ],
          },
          {
            parts: [
              "Certifications in emerging technologies (",
              { bold: "AI" },
              ", ",
              { bold: "ML" },
              ", ",
              { bold: "Cloud" },
              ", ",
              { bold: "Cybersecurity" },
              ", etc.) will be an added advantage.",
            ],
          },
        ],
      },
      {
        type: "heading",
        title: "Experience:",
        items: [
          {
            parts: [
              "Minimum ",
              { bold: "2–5 years of teaching experience" },
              " at the undergraduate or postgraduate level.",
            ],
          },
          {
            parts: [
              "Proven experience in implementing ",
              { bold: "Outcome-Based Education (OBE)" },
              " and contributing to ",
              { bold: "NAAC accreditation processes" },
              " is mandatory.",
            ],
          },
          "Exposure to IT project development, software training, or industry collaboration will be preferred.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          {
            parts: [
              "Strong knowledge of ",
              { bold: "programming languages" },
              ", ",
              { bold: "databases" },
              ", ",
              { bold: "web technologies" },
              ", and ",
              { bold: "software development methodologies" },
              ".",
            ],
          },
          {
            parts: [
              "Familiarity with ",
              { bold: "OBE frameworks" },
              " and ",
              { bold: "academic quality assurance" },
              ".",
            ],
          },
          "Excellent communication and classroom management skills.",
          "Research aptitude and publication record desirable.",
          "Commitment to teamwork, innovation, and continuous improvement.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
]

export const nonTeachingJobsData = [
  {
    id: 1,
    title: "Administrative Assistant",
    slug: "administrative-assistant",
    department: "Administration",
    experience: "1-3 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes is seeking an Administrative Assistant to support daily administrative operations, manage documentation, and assist in coordinating various institutional activities.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Handle administrative tasks and documentation.",
          "Coordinate meetings and maintain schedules.",
          "Manage correspondence and communications.",
          "Assist in event planning and coordination.",
        ],
      },
      {
        type: "heading",
        title: "Qualifications & Experience:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "Bachelor's degree in any discipline.",
          },
          {
            bold: "Experience:",
            text: "1-3 years of administrative experience preferred.",
          },
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 2,
    title: "IT Support Specialist",
    slug: "it-support-specialist",
    department: "Information Technology",
    experience: "2-4 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes is looking for an IT Support Specialist to provide technical support, maintain IT infrastructure, and ensure smooth operation of all technology systems.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Provide technical support to staff and students.",
          "Maintain and troubleshoot IT infrastructure.",
          "Install and configure software and hardware.",
          "Ensure network security and data backup.",
        ],
      },
      {
        type: "heading",
        title: "Qualifications & Experience:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "Bachelor's degree in IT, Computer Science, or related field.",
          },
          {
            bold: "Experience:",
            text: "2-4 years of IT support or system administration experience.",
          },
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 3,
    title: "Library Assistant",
    slug: "library-assistant",
    department: "Library Services",
    experience: "1-2 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes is seeking a Library Assistant to manage library resources, assist students and faculty, and maintain library operations.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Manage library resources and cataloging.",
          "Assist students and faculty with library services.",
          "Maintain library database and records.",
          "Organize and maintain library collections.",
        ],
      },
      {
        type: "heading",
        title: "Qualifications & Experience:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "Bachelor's degree in Library Science or related field.",
          },
          {
            bold: "Experience:",
            text: "1-2 years of library experience preferred.",
          },
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
]

// Get job by slug
export const getJobBySlug = (slug, type = "academic") => {
  const jobs = type === "academic" ? academicJobsData : nonTeachingJobsData
  return jobs.find((job) => job.slug === slug)
}

// Get all jobs for listing
export const getAllJobs = (type = "academic") => {
  const jobs = type === "academic" ? academicJobsData : nonTeachingJobsData
  return jobs.map(({ sections, summary, applicationEmail, ...rest }) => rest)
}
