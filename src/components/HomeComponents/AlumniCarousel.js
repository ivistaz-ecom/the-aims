"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/shared/Button";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Aritrika Pal, BBA 2021-24",
    text: `"Excited to share that I've joined Deloitte as an Advisory Associate Analyst! While I secured the role independently, the solid foundation and support from AIMS Institutes were instrumental in my preparation. Truly grateful for the learning experience that shaped my journey."`,
    image: "/home/slide01.webp",
    stars: 5,
  },
  {
    id: 2,
    name: "Susheel B Gowda, BHM 2016-20",
    text: "My teachers are my pillars, they have always strived hard for the success of each of us and the department. I would like to thank my BHM department including teaching and support staff for supporting me in my journey. Long live AIMS!!",
    image: "/home/slide02.webp",
    stars: 5,
  },
  {
    id: 3,
    name: "Aritrika Pal, BBA 2021-24",
    text: `"Excited to share that I've joined Deloitte as an Advisory Associate Analyst! While I secured the role independently, the solid foundation and support from AIMS Institutes were instrumental in my preparation. Truly grateful for the learning experience that shaped my journey."`,
    image: "/home/slide01.webp",
    stars: 5,
  },
  {
    id: 4,
    name: "Susheel B Gowda, BHM 2016-20",
    text: "My teachers are my pillars, they have always strived hard for the success of each of us and the department. I would like to thank my BHM department including teaching and support staff for supporting me in my journey. Long live AIMS!!",
    image: "/home/slide02.webp",
    stars: 5,
  },

];

export default function AlumniCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <div className="lg:px-8 px-4">
        <section className="container mx-auto lg:mt-20 mt-10 mb-20 lg:mb-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="">
            <h2 className="text-4xl font-semibold text-[#0C2165]">
              AIMers in <br />
              <span className="italic text-[#A22877] playfair-400">Action</span>
            </h2>
            <div className="flex justify-left pt-5">
              <Button variant="placement" href="/aims-alumni-association" className="cursor-pointer">
                <span className="text-xl">Read Their Journeys</span>
              </Button>
            </div>
          </div>

          {/* Right carousel */}
          <div className="relative">
            {/* ✅ Mobile: only one testimonial */}

            {/* ✅ Mobile and Tablet Portrait: only one testimonial */}
            <div className="flex items-center justify-center xl:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[index].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="rounded-2xl overflow-hidden shadow-lg bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                >
                  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <Image
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 mt-4">
                    <div className="flex text-yellow-500 mb-2">
                      {Array.from({ length: testimonials[index].stars }).map(
                        (_, i) => (
                          <Image
                            key={i}
                            src="/home/star.svg"
                            alt="star"
                            width={20}
                            height={20}
                            className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                          />
                        )
                      )}
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl line-clamp-7">
                      {testimonials[index].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ✅ Desktop and Tablet Landscape: keep 2 testimonials */}
            <div className="hidden xl:flex items-center gap-6 lg:gap-10 h-[700px] w-[600px]">
              {[0, 1].map((offset) => {
                const t = testimonials[(index + offset) % testimonials.length];
                const isFirstCard = offset === 0;

                return (
                  <div
                    key={`${index}-${offset}`}
                    className="relative w-full max-w-sm lg:max-w-md"
                  >
                    {isFirstCard ? (
                      // ✅ Active card slides
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={index} // 👈 important: use index, not t.id
                          initial={{ opacity: 0, x: 80 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -80 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                          <div className="relative w-full h-64 lg:h-72 xl:h-80">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              className="object-contain w-[409px] h-[439px]"
                            />
                          </div>
                          <div className="bg-white rounded-xl p-4 mt-4">
                            <div className="flex text-yellow-500 mb-2">
                              {Array.from({ length: t.stars }).map((_, i) => (
                                <Image
                                  key={i}
                                  src="/home/star.svg"
                                  alt="star"
                                  width={25}
                                  height={25}
                                />
                              ))}
                            </div>
                            <h4 className="font-semibold text-base lg:text-lg mb-2 monser-600">
                              {t.name}
                            </h4>
                            <p className="text-gray-600 text-sm lg:text-base line-clamp-9">
                              {t.text}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      // ✅ Secondary card fades only
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`fade-${index}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                          <div className="relative w-full h-64 lg:h-72 xl:h-80">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="bg-white rounded-xl p-4 mt-4">
                            <div className="flex text-yellow-500 mb-2">
                              {Array.from({ length: t.stars }).map((_, i) => (
                                <Image
                                  key={i}
                                  src="/home/star.svg"
                                  alt="star"
                                  width={25}
                                  height={25}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Arrows - made stable */}
            <div className="absolute lg:bottom-[23%] bottom-0 lg:right-30 md:right-72 xl:right-30 right-22 -translate-x-1/2 xl:translate-y-16 lg:translate-y-52 md:translate-y-16 translate-y-16 flex gap-4">
              {/* PREV */}
              <button
                onClick={prev}
                type="button"
                aria-label="Previous testimonial"
                title="Previous testimonial"
                className="h-10 w-10 cursor-pointer rounded-full bg-white text-black shadow-md ring-1 ring-black/10 flex items-center justify-center hover:bg-[#A22877] hover:text-white"
              >
                <span className="sr-only">Previous testimonial</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 17"
                  fill="none"
                  className="rotate-180"
                  aria-hidden="true"
                >
                  <path
                    d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* NEXT */}
              <button
                onClick={next}
                type="button"
                aria-label="Next testimonial"
                title="Next testimonial"
                className="h-10 w-10 cursor-pointer rounded-full bg-white text-black shadow-md ring-1 ring-black/10 flex items-center justify-center hover:bg-[#A22877] hover:text-white"
              >
                <span className="sr-only">Next testimonial</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 17"
                  fill="none"
                  aria-hidden="true"
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
          </div>
        </section>
      </div>
    </>
  );
}
