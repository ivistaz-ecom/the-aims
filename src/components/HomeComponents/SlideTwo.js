"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/shared/Button";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "School of Business",
    programs: [
      { name: "PhD in Management", link: "/phd-doctoral-programs" },
      {
        name: "MBA Master of Business Administration",
        link: "/business-school/master-business-administration",
      },
      {
        name: "BBA Bachelor of Business Administration",
        link: "/business-school/bachelor-business-administration",
      },
      {
        name: "BBA Aviation",
        link: "/business-school/bachelor-business-administration-aviation-management",
      },
      {
        name: "BBA+ CA/ACCA",
        link: "/business-school/bachelor-business-administration",
      },
    ],
    leftImage: "/home/course/school-of-buisnesss-left.webp",
    rightImage: "/home/course/slides/school-of-buisnesss.webp",
    mobileImage: "/home/course/slides/business.webp",
    browseAllLink: "/business-school",
    buttonText: "Browse Business Programs",
  },
  {
    id: 2,
    title: "School of Finance and Commerce",
    programs: [
      { name: "PhD in Commerce", link: "/phd-doctoral-programs" },
      {
        name: "Master of Commerce M.COM",
        link: "/finance-commerce-school/master-of-commerce",
      },
      {
        name: "Bachelor of Commerce B.COM",
        link: "/finance-commerce-school/bachelor-of-commerce",
      },
      {
        name: "CA/ACCA B.COM+",
        link: "/finance-commerce-school/bachelor-of-commerce",
      },
    ],
    leftImage: "/home/course/school-of-finance-left.webp",
    rightImage: "/home/course/slides/school-of-finance.webp",
    mobileImage: "/home/course/school.png",
    browseAllLink: "/finance-commerce-school",
    buttonText: "Browse Finance Programs",
  },
  {
    id: 3,
    title: "School of Hospitality and Tourism",
    programs: [
      {
        name: "BHM Bachelor of Hotel Management",
        link: "/hospitality-tourism-school/bachelor-hotel-management",
      },
      {
        name: "Certificate in Vocational Studies in QSR (Quick Service Restaurant)",
        link: "https://www.aimsenrich.com/vocational-certificate-qsr-chaipoint",
      },
    ],
    programsTitle: "Swiss International",
    programs2: [
      {
        name: "Culinary Professional Diploma (VET by EHL)",
        link: "https://www.aimsenrich.com/swiss-international-culinary-professional-diploma",
      },
      {
        name: "Food & Beverage Service Professional Diploma (VET by EHL)",
        link: "https://www.aimsenrich.com/swiss-international-food-beverage-service-professional-diploma",
      },
      {
        name: "Rooms Professional Diploma (VET by EHL)",
        link: "https://www.aimsenrich.com/swiss-professional-diploma-rooms-cii-vet",
      },
    ],
    leftImage: "/home/course/school-of-hospitality-left.webp",
    rightImage: "/home/course/slides/school-of-hospitality.webp",
    mobileImage: "/home/course/slides/hospitality.webp",
    browseAllLink: "/hospitality-tourism-school",
    buttonText: "Browse Hospitality Programs",
  },
  {
    id: 4,
    title: "School of Information and Technology",
    programs: [
      {
        name: "Master of Computer Application MCA",
        link: "/information-technology-school/master-computer-applications",
      },
      {
        name: "Bachelor of Computer Application BCA",
        link: "/information-technology-school/bachelor-computer-applications",
      },
      {
        name: "AI/ML | Data Science | Full-Stack Development BCA+",
        link: "/information-technology-school/bachelor-computer-applications",
      },
    ],
    leftImage: "/home/course/school-of-information-left.webp",
    rightImage: "/home/course/slides/school-of-information.webp",
    mobileImage: "/home/course/slides/information.webp",
    browseAllLink: "/information-technology-school",
    buttonText: "Browse IT Programs",
  },
  {
    id: 5,
    title: "Pre-University College (PUC)",
    programsTitle: "SCIENCE",
    programs2: [
      {
        name: "PCMB/PCMC (Integrated)",
        link: "/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee",
      },
      { name: "PCMB/PCMC", link: "/pre-university-college/science-pcmb-pcmc" },
    ],
    programsTitle2: "COMMERCE",
    programs3: [
      {
        name: "CEBA",
        link: "/pre-university-college/commerce-heba",
      },
    ],
    leftImage: "/home/course/puc-left.webp",
    rightImage: "/home/course/slides/puc.webp",
    mobileImage: "/home/course/slides/puc02.webp",
    browseAllLink: "/pre-university-college",
    buttonText: "Browse PUC Programs",
  },
];

export default function ExactSwapCarousel() {
  const [current, setCurrent] = useState(0);
  const thumbsRef = useRef([]);
  const thumbsContainerRef = useRef(null);

  useEffect(() => {
    thumbsRef.current = thumbsRef.current.slice(0, courses.length);
  }, []);

  useEffect(() => {
    const el = thumbsRef.current[current];
    const container = thumbsContainerRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = el.getBoundingClientRect();

      // Only scroll horizontally within the container
      const scrollLeft =
        el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [current]);

  const prev = () =>
    setCurrent((p) => (p - 1 + courses.length) % courses.length);
  const next = () => setCurrent((p) => (p + 1) % courses.length);
  const goTo = (i) => setCurrent(i);

  return (
    <div className="bg-[url('/home/bg-circle.svg')] bg-cover bg-center bg-no-repeat text-white p-6 md:p-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div>
          <h3 className="md:text-left"> Select your Course</h3>
          <p className="pb-4 md:text-left">
            Explore our schools, see their potential paths, and select the{" "}
            <br />
            one that fits your goal.
          </p>
        </div>

        <div className="md:flex gap-6 md:gap-12 items-center relative">
          {/* LEFT ARROW - Desktop and Tablet Landscape only */}
          <div className="hidden xl:block absolute right-44 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prev}
              aria-label="Previous"
              className="bg-white cursor-pointer hover:bg-[#A22877] hover:text-white text-black p-2 rounded-full shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 17"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT ARROW - Desktop and Tablet Landscape only */}
          <div className="hidden xl:block absolute right-32 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={next}
              aria-label="Next"
              className="bg-white cursor-pointer text-black p-2 rounded-full shadow hover:bg-[#A22877] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 17"
                fill="none"
              >
                <path
                  d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* CENTERED CAROUSEL CONTENT */}
          <div className="mx-0 xl:mx-16 flex flex-col xl:flex-row gap-6 xl:gap-12 items-center w-full xl:items-start xl:text-left">
            {/* LEFT - Big Image (Desktop and Tablet Landscape only) */}
            <div className="hidden xl:flex justify-center items-center">
              <div className="w-full max-w-[520px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={courses[current].id}
                    layoutId={`card-${courses[current].id}`}
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 120, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="rounded-lg overflow-hidden mt-20"
                  >
                    <Image
                      width={320}
                      height={320}
                      src={courses[current].leftImage}
                      alt={courses[current].title}
                      className="h-[320px] lg:h-full object-cover block"
                      draggable={true}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.img
                    key={`ghost-${courses[current].id}`}
                    src={courses[current].rightImage}
                    alt={courses[current].title}
                    layoutId={`thumb-${courses[current].id}`}
                    style={{ visibility: "hidden" }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT - Text and Mobile/Tablet Image */}
            <div className="flex flex-col w-full items-center xl:items-start">
              {/* Mobile/Tablet: Show current image at top */}
              <div className="xl:hidden flex justify-center w-full">
                <div className="w-full max-w-[400px] relative">
                  <Image
                    width={400}
                    height={300}
                    src={
                      courses[current].mobileImage ||
                      courses[current].rightImage
                    }
                    alt={courses[current].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Mobile/Tablet arrows (centered) */}
              <div className="xl:hidden flex justify-center gap-4 py-5">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="bg-white cursor-pointer hover:bg-[#A22877] hover:text-white text-black p-3 rounded-full shadow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 17"
                    fill="none"
                    className="rotate-180"
                  >
                    <path
                      d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="bg-white cursor-pointer text-black p-3 rounded-full shadow hover:bg-[#A22877] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 17"
                    fill="none"
                  >
                    <path
                      d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* Text (left aligned always) */}
              <div className="xl:h-[450px] xl:flex xl:flex-col xl:justify-start justify-center w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${courses[current].id}`}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-4 w-full md:w-2/3 md:overflow-y-auto text-left"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {courses[current].title}
                    </h3>
                    {courses[current].programs &&
                      courses[current].programs.length > 0 && (
                        <ul className="mb-4 space-y-1">
                          {courses[current].programs.map((p, i) => (
                            <li key={i} className="text-lg leading-snug">
                              <Link
                                href={p.link}
                                className="transition-colors duration-200 underline md:no-underline hover:underline"
                              >
                                {p.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    {courses[current].programsTitle && (
                      <span className="text-2xl monser-600">
                        {courses[current].programsTitle}
                      </span>
                    )}
                    {courses[current].programs2 &&
                      courses[current].programs2.length > 0 && (
                        <ul className="my-4 space-y-1 ">
                          {courses[current].programs2.map((p, i) => (
                            <li key={i} className="text-lg leading-snug">
                              <Link
                                href={p.link}
                                className=" transition-colors duration-200 underline md:no-underline hover:underline"
                              >
                                {p.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    {courses[current].programsTitle2 && (
                      <span className="text-2xl monser-600">
                        {courses[current].programsTitle2}
                      </span>
                    )}
                    {courses[current].programs3 &&
                      courses[current].programs3.length > 0 && (
                        <ul className="my-4 space-y-1 ">
                          {courses[current].programs3.map((p, i) => (
                            <li key={i} className="text-lg leading-snug">
                              <Link
                                href={p.link}
                                className=" transition-colors duration-200 underline md:no-underline hover:underline"
                              >
                                {p.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    <Link href={courses[current].browseAllLink}>
                      <Button variant="placement"
                        showReadMore={false}
                        className="hover:text-white hover:border-white text-xl cursor-pointer"
                      >
                        {courses[current].buttonText}
                      </Button>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              

              {/* Thumbnails (desktop and tablet landscape only) */}
              <div className="hidden xl:block relative">
                <motion.div
                  ref={thumbsContainerRef}
                  className="flex gap-4 overflow-x-auto pb-2 mt-10 md:mt-6 items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {courses.map((c, idx) => {
                    const isActive = idx === current;
                    return (
                      <motion.button
                        key={c.id}
                        ref={(el) => (thumbsRef.current[idx] = el)}
                        onClick={() => goTo(idx)}
                        layoutId={`card-${c.id}`}
                        className={`flex-none lg:w-[150px] md:w-[160px] rounded-lg overflow-hidden border-2 focus:outline-none ${
                          isActive ? "border-transparent" : "border-transparent"
                        }`}
                        whileHover={{ scale: 1.03 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                        aria-pressed={isActive}
                      >
                        <motion.img
                          src={c.rightImage}
                          alt={c.title}
                          className="w-full h-full object-cover block cursor-pointer"
                          initial={false}
                          animate={isActive ? { y: -16 } : { y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          draggable={false}
                        />
                        <div className="text-sm md:text-sm font-medium truncate">
                          {c.title}
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
