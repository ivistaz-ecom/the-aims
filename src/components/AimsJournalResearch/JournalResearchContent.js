import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Diff } from "lucide-react"

const RcContent = () => {
  return (
    <>
      <div className="justify-center items-center py-10 flex flex-col lg:px-8 px-4 relative overflow-hidden">
        <div className="absolute top-[20%] right-0 md:block hidden rotate-180">
          <Image
            src="/school-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className=" rotate-180"
          />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col gap-4">
            <h3 className="playfair-300 text-[#0C2165] leading-tight">
              AIMS Internal Quality Assurance Cell (AIQAC){" "}
              <Link
                href="/iqac-pdf/iqac-composition.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="playfair-300 text-[#0C2165] leading-tight  hover:text-[#A22877] underline "
              >
                IQAC Composition
              </Link>
            </h3>

            <p className="">
              The University Grants Commission (UGC), India has (in the XI Plan)
              made a policy decision to direct all Higher Educational
              Institutions (HEIs) to establish Internal Quality Assurance Cell
              (IQAC) as a mechanism to build and ensure a quality culture at the
              institutional level.
            </p>
            <p className="">
              AIMS Internal Quality Assurance Cell (AIQAC) was established in
              April 2007 as a facilitative and participative organ of AIMS
              Institutes with the primary objective to build and ensure a
              quality culture and standardise its processes and procedures. The
              cell has over the years taken initiatives to bring in uniformity,
              transparency and coordination in academic and non-academic
              processes for the efficient delivery of the responsibilities to
              achieve targeted results.
            </p>
            <p className="">
              As a part of our quality initiatives, we have taken steps towards
              a number of accreditations and affiliations that help us maintain
              the required standards and also keep the quality of our services
              intact by giving us an insight into the best practices being
              followed across the world.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div>
              <h5 className="monser-600 text-black text-xl">
                AIMS is accredited by:
              </h5>
            </div>

            <div>
              <ul className="list-disc list-inside">
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  NAAC - National Assessment and Accreditation Council
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  IACBE - International Accreditation Council for Business
                  Education for the B-School Programs
                </li>
              </ul>
            </div>
            <div>
              <p>
                AIMS is a member of EFMD, a global, non-profit,
                membership-driven organization dedicated to management
                development. It is recognised globally as an accreditation body
                for business schools, business school programmes, and corporate
                universities.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h5 className="monser-600 text-black text-xl">Quality Policy</h5>

            <p>
              AIMS is committed to create intellectual capital through an
              exemplary value based system, which provides a foundation for a
              lifetime of professional growth and personal development. This is
              achieved by:
            </p>

            <ul className="list-disc list-inside">
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Adopting innovative teaching
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Providing international exposure
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Encouraging continuous research and learning
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h5 className="monser-600 text-black text-xl">Objectives</h5>

            <p>AIQAC will facilitate/contribute:</p>

            <ul className="list-disc list-inside">
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                To develop a system for conscious, consistent and catalytic
                action to improve the academic and administrative performance of
                the College
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                To promote quality enhancement through internalisation of
                quality culture and institutionalisation of best practices
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                To develop processes in standardizing the assessment of
                teaching, learning, and evaluation processes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                To identify reputed national/international accreditation
                agencies and to get the institute ready for accreditation for
                global recognition
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h5 className="monser-600 text-black text-xl">
              Functions performed by AIQAC
            </h5>

            <p>Development of Quality Culture in the institution:</p>

            <ul className="list-disc list-inside">
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Preparation and submission of Annual Quality Assurance Reports
                (AQARs)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Facilitating the creation of a learner-centric environment
                conducive to quality education and faculty maturation to adopt
                the required knowledge and technology for participatory teaching
                and learning process
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Development and application of quality benchmarks/parameters for
                various academic and administrative activities of the
                institution
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Arrangement for feedback response from students, parents, and
                other stakeholders on quality-related institutional processes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Dissemination of information on various quality parameters of
                higher education
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Documentation of the various programmes/activities leading to
                quality improvement
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Development and maintenance of an institutional database for the
                purpose of maintaining/enhancing the institutional quality
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Conduct of Annual Academic and Administrative Audit and its
                follow-up
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Organisation of workshops, seminars and conferences on quality
                related themes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Preparations of AIQAC Annual Reports
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">•</span>
                Coordinate reporting requirements of statutory bodies like MHRD,
                AICTE and Bangalore University
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default RcContent
