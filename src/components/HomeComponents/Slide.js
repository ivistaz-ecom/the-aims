// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const courses = [
//   {
//     id: 1,
//     title: "School of Business",
//     programs: [
//       "PhD in Management",
//       "MBA Master of Business Administration",
//       "BBA Bachelor of Business Administration",
//       "BBA Aviation",
//       "BBA+ CA / ACCA"
//     ],
//     imageLeft: "/home/course/sob.png",
//     imageRight: "/home/course/pre.png"
//   },
//   {
//     id: 2,
//     title: "School of Finance and Commerce",
//     programs: [
//       "B.Com General",
//       "B.Com Finance",
//       "B.Com Accounting"
//     ],
//     imageLeft: "/home/course/sof.png",
//     imageRight: "/home/course/sof.png"
//   },
//   {
//     id: 3,
//     title: "School of Hospitality and Tourism",
//     programs: ["Diploma in Hospitality", "BHM", "MHM"],
//     imageLeft: "/home/course/soh.png",
//     imageRight: "/home/course/soh.png"
//   },
//   {
//     id: 4,
//     title: "School of Information and Technology",
//     programs: ["BCA", "MCA", "B.Sc IT"],
//     imageLeft: "/home/course/soit.png",
//     imageRight: "/home/course/soit.png"
//   },
//   {
//     id: 5,
//     title: "Pre-University College (PUC)",
//     programs: ["Science", "Commerce", "Arts"],
//     imageLeft: "/home/course/pre.png",
//     imageRight: "/home/course/pre.png"
//   }
// ];

// export default function CourseCarousel() {
//   const [current, setCurrent] = useState(0);
//   const timeoutRef = useRef(null);

//   // Auto-play every 5s
//   useEffect(() => {
//     const nextSlide = () => setCurrent((prev) => (prev + 1) % courses.length);
//     timeoutRef.current = setTimeout(nextSlide, 2000);
//     return () => clearTimeout(timeoutRef.current);
//   }, [current]);

//   const goToSlide = (index) => {
//     setCurrent(index);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + courses.length) % courses.length);
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % courses.length);
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 text-white p-6 md:p-12 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* TOP SECTION - Main Content */}
//         <div className="grid md:grid-cols-2 gap-8 items-center mb-8">

//           {/* LEFT IMAGE */}
//           <div className="relative h-full md:h-[600px] w-full flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={courses[current].id}
//                 src={courses[current].imageLeft}
//                 alt={courses[current].title}
//                 initial={{ opacity: 0, y: -40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 40 }}
//                 transition={{ duration: 0.6 }}
//                 className="rounded-lg shadow-lg object-cover h-full w-full"
//               />
//             </AnimatePresence>
//           </div>

//           {/* RIGHT TEXT */}
//           <div className="flex flex-col items-start justify-center">
//             <div>
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={courses[current].title}
//                   initial={{ opacity: 0, x: 40 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -40 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <h2 className="text-3xl md:text-4xl font-bold mb-4">{courses[current].title}</h2>
//                   <ul className="space-y-1 mb-6">
//                     {courses[current].programs.map((program, idx) => (
//                       <li key={idx} className="text-lg">{program}</li>
//                     ))}
//                   </ul>
//                   <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full">
//                     Browse All Programs ↘
//                   </button>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION - Thumbnails Carousel */}
//         <div className="flex gap-4 overflow-x-auto pb-4">
//           {courses.map((course, index) => (
//             <motion.div
//               key={course.id}
//               onClick={() => goToSlide(index)}
//               className={`flex-none cursor-pointer w-[200px] rounded-lg overflow-hidden border-2 transition ${
//                 index === current ? "border-pink-500" : "border-transparent"
//               }`}
//               whileHover={{ scale: 1.05 }}
//             >
//               <img src={course.imageRight} alt={course.title} className="h-32 w-full object-cover" />
//               <div className="bg-gradient-to-b from-black/30 to-black/70 p-3 text-center">
//                 <div className="text-sm font-medium">{course.title}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* NAV BUTTONS - Positioned in middle-right */}
//       <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex gap-3">
//         <button onClick={prevSlide} className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100">
//           <FaChevronLeft />
//         </button>
//         <button onClick={nextSlide} className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100">
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import Button from "@/shared/Button";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "School of Business",
    programs: [
      "PhD in Management",
      "MBA Master of Business Administration",
      "BBA Bachelor of Business Administration",
      "BBA Aviation",
      //"BBA+ CA / ACCA",
    ],
    leftImage: "/home/course/school-of-buisnesss-left.webp",
    rightImage: "/home/course/school-of-buisnesss.webp",
  },
  {
    id: 2,
    title: "School of Finance and Commerce",
    programs: [
      "Ph.D in Commerce",
      "Master of Commerce MCOM",
      "Bachelor of Commerce BCOM",
     // "CA / ACCA BCOM+",
    ],
    leftImage: "/home/course/school-of-finance-left.webp",
    rightImage: "/home/course/school-of-finance.webp",
  },
  {
    id: 3,
    title: "School of Hospitality and Tourism",
    programs: [
      "BHM Bachelor of Hotel Management",
      "Certificate in Vocational Studies in QSR (Quick Service Restaurant)",
      "MHM",
    ],
    programsTitle: "Swiss International",
    programs2: [
      "Culinary Professional Diploma (VET by EHL)",
      "Food & Beverage Service Professional Diploma (VET by EHL)",
      "Rooms Professional Diploma (VET by EHL)",
    ],
    leftImage: "/home/course/school-of-hospitality-left.webp",
    rightImage: "/home/course/school-of-hospitality.webp",
  },
  {
    id: 4,
    title: "School of Information and Technology",
    programs: [
      "Master of Computer Application MCA",
      "Bachelor of Computer Application BCA",
      //"AI/ML | Data Science | Full-Stack Development BCA+",
    ],
    leftImage: "/home/course/school-of-information-left.webp",
    rightImage: "/home/course/school-of-information.webp",
  },
  {
    id: 5,
    title: "Pre-University College (PUC)",
    programsTitle: "SCIENCE",
    programs2: ["PCMB", "PCMC"],
    programsTitle2: "COMMERCE",
    programs3: ["CEBA"],
    leftImage: "/home/course/puc-left.webp",
    rightImage: "/home/course/puc.webp",
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
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [current]);

  const prev = () =>
    setCurrent((p) => (p - 1 + courses.length) % courses.length);
  const next = () => setCurrent((p) => (p + 1) % courses.length);
  const goTo = (i) => setCurrent(i);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 text-white p-6 md:p-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div>
          <h3> Select your Course</h3>
          <p className="pb-4">
            Explore our schools, see their potential paths, and select the{" "}
            <br /> one that fits your goal.
          </p>
        </div>
        <div className="md:flex gap-6 md:gap-12 items-center">
          {/* LEFT - Big Image (Desktop only) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-[520px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={courses[current].id}
                  layoutId={`card-${courses[current].id}`}
                  initial={{ y: -120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 120, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Image
                    width={320}
                    height={320}
                    src={courses[current].leftImage}
                    alt={courses[current].title}
                    className="h-[320px] md:h-full object-cover block"
                    draggable={true}
                  />
                </motion.div>
              </AnimatePresence>
              {/* Ghost to keep thumbnail visible during transition */}
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

          {/* RIGHT - Text and Thumbnails */}
          <div className="flex flex-col w-full">
            {/* Mobile: Show thumbnail image at top */}
            <div className="md:hidden mb-6">
              <div className="w-full relative">
                <Image
                  width={400}
                  height={300}
                  src={courses[current].rightImage}
                  alt={courses[current].title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${courses[current].id}`}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-4 w-full md:w-2/3"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {courses[current].title}
                </h3>
                {courses[current].programs && courses[current].programs.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {courses[current].programs.map((p, i) => (
                      <li key={i} className="text-lg leading-snug">
                        {p}
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
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                {courses[current].programsTitle2 && (
                  <span className="text-2xl monser-600">
                    {courses[current].programsTitle2}
                  </span>
                )}
                {courses[current].programs3 && courses[current].programs3.length > 0 && (
                  <ul className="my-4 space-y-1 ">
                    {courses[current].programs3.map((p, i) => (
                      <li key={i} className="text-lg leading-snug">
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                <Button
                  showReadMore={false}
                  className="hover:text-white hover:border-white"
                >
                  <Link href="/campus-life">Browse All Programs</Link>
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* THUMBNAILS */}
            {/* THUMBNAILS + ARROWS WRAPPER */}
            <div className="relative">
              {/* THUMBNAILS */}
              <motion.div
                ref={thumbsContainerRef}
                className="flex gap-4 overflow-x-auto pb-2 mt-10 items-center"
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
                      className={`flex-none w-[150px] md:w-[160px] rounded-lg overflow-hidden border-2 focus:outline-none ${
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
                        className="w-full h-full object-cover block"
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

              {/* ARROWS ABOVE THUMBNAILS */}
              <div className="absolute -top-8 -right-10 flex gap-5 z-20">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="bg-white hover:bg-[#A22877] hover:text-white text-black p-2 rounded-full shadow"
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
                      stroke="currentColor" // ✅ makes stroke follow text color
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="bg-white text-black p-2 rounded-full shadow hover:bg-[#A22877] hover:text-white"
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
                      stroke="currentColor" // ✅ now follows text color
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// for mobile
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Button from "@/shared/Button";
// import Link from "next/link";
// import Image from "next/image";

// const courses = [
//   {
//     id: 1,
//     title: "School of Business",
//     programs: [
//       "PhD in Management",
//       "MBA Master of Business Administration",
//       "BBA Bachelor of Business Administration",
//       "BBA Aviation",
//       "BBA+ CA / ACCA",
//     ],
//     leftImage: "/home/course/school-of-buisnesss-left.webp",
//     rightImage: "/home/course/school-of-buisnesss.webp",
//   },
//   {
//     id: 2,
//     title: "School of Finance and Commerce",
//     programs: ["B.Com General", "B.Com Finance", "B.Com Accounting"],
//     leftImage: "/home/course/school-of-finance-left.webp",
//     rightImage: "/home/course/school-of-finance.webp",
//   },
//   {
//     id: 3,
//     title: "School of Hospitality and Tourism",
//     programs: ["Diploma in Hospitality", "BHM", "MHM"],
//     leftImage: "/home/course/school-of-hospitality-left.webp",
//     rightImage: "/home/course/school-of-hospitality.webp",
//   },
//   {
//     id: 4,
//     title: "School of Information and Technology",
//     programs: ["BCA", "MCA", "B.Sc IT"],
//     leftImage: "/home/course/school-of-information-left.webp",
//     rightImage: "/home/course/school-of-information.webp",
//   },
//   {
//     id: 5,
//     title: "Pre-University College (PUC)",
//     programs: ["Science", "Commerce", "Arts"],
//     leftImage: "/home/course/puc-left.webp",
//     rightImage: "/home/course/puc.webp",
//   },
// ];

// export default function ExactSwapCarousel() {
//   const [current, setCurrent] = useState(0);
//   const thumbsRef = useRef([]);
//   const thumbsContainerRef = useRef(null);

//   useEffect(() => {
//     thumbsRef.current = thumbsRef.current.slice(0, courses.length);
//   }, []);

//   useEffect(() => {
//     const el = thumbsRef.current[current];
//     if (el && typeof el.scrollIntoView === "function") {
//       el.scrollIntoView({
//         behavior: "smooth",
//         inline: "center",
//         block: "nearest",
//       });
//     }
//   }, [current]);

//   const prev = () =>
//     setCurrent((p) => (p - 1 + courses.length) % courses.length);
//   const next = () => setCurrent((p) => (p + 1) % courses.length);
//   const goTo = (i) => setCurrent(i);

//   return (
//     <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 text-white p-6 md:p-12 relative overflow-hidden">
//       <div className="container mx-auto">
//         <div>
//           <h3 className="text-xl md:text-2xl font-semibold">Select your Course</h3>
//           <p className="pb-4 text-sm md:text-base">
//             Explore our schools, see their potential paths, and select the <br className="hidden md:block" />
//             one that fits your goal.
//           </p>
//         </div>

//         <div className="md:flex gap-6 md:gap-12 items-center">
//           {/* LEFT - Big Image (desktop only) */}
//           <div className="hidden md:flex justify-center items-center">
//             <div className="w-full max-w-[520px] relative">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={courses[current].id}
//                   layoutId={`card-${courses[current].id}`}
//                   initial={{ y: -120, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: 120, opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 320, damping: 24 }}
//                   className="rounded-lg overflow-hidden"
//                 >
//                   <Image
//                     width={500}
//                     height={500}
//                     src={courses[current].leftImage}
//                     alt={courses[current].title}
//                     className="h-[320px] md:h-full object-cover block"
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* RIGHT - Text + Thumbnails */}
//           <div className="flex flex-col w-full">
//             {/* On mobile: show thumbnail above text */}
//             <div className="md:hidden mb-4">
//               <img
//                 src={courses[current].rightImage}
//                 alt={courses[current].title}
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//             </div>

//             {/* TEXT (desktop has animation, mobile no animation) */}
//             <div className="mb-4 w-full md:w-2/3">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`text-${courses[current].id}`}
//                   initial={{ x: 40, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -40, opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 }}
//                 >
//                   <h3 className="text-xl md:text-3xl font-bold mb-3">
//                     {courses[current].title}
//                   </h3>
//                   <ul className="mb-4 space-y-1">
//                     {courses[current].programs.map((p, i) => (
//                       <li key={i} className="text-base md:text-lg leading-snug">
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                   <Button showReadMore={false} className="hover:text-white hover:border-white">
//                     <Link href="/campus-life">Browse All Programs</Link>
//                   </Button>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* THUMBNAILS */}
//             <div
//               ref={thumbsContainerRef}
//               className="flex gap-4 overflow-x-auto pb-2 mt-6 items-center"
//             >
//               {courses.map((c, idx) => {
//                 const isActive = idx === current;
//                 return (
//                   <button
//                     key={c.id}
//                     ref={(el) => (thumbsRef.current[idx] = el)}
//                     onClick={() => goTo(idx)}
//                     className={`flex-none w-[140px] md:w-[160px] rounded-lg overflow-hidden border-2 focus:outline-none ${
//                       isActive ? "border-pink-500" : "border-transparent"
//                     }`}
//                   >
//                     <img
//                       src={c.rightImage}
//                       alt={c.title}
//                       className="w-full h-24 object-cover block"
//                     />
//                     <div className="text-xs md:text-sm font-medium truncate">
//                       {c.title}
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ARROWS */}
//       <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex gap-3 z-20">
//         <button
//           onClick={prev}
//           aria-label="Previous"
//           className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           onClick={next}
//           aria-label="Next"
//           className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }
