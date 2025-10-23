"use client"
import React from "react"
import Image from "next/image"
import Button from "@/shared/Button";


const GetInvolvedSection = () => {
  return (
    <section className="bg-[#A43177] py-10">
      <div className="px-4 lg:px-8 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 ">
          {/* Left Content */}
          <div className="md:w-2/3">
            <h3 className=" text-xl md:text-[72px] playfair-300 mb-3 md:mb-6 leading-tight">
              The Next Step in Your <br />
              Academic Journey
            </h3>
            <p className="">
              Whether you&apos;re an aspiring academic or a professional seeking research depth, AIMS helps you aim sharper and go further.
            </p>
            <div className="flex gap-3 w-fit mt-10">
              <Button
                href="https://apply.theaims.ac.in/login"
                target="_blank"
                variant="secondary"
                showReadMore={false}
              >
                Apply Now
              </Button>

              {/* <Button
                href="https://enquiry.theaims.ac.in/"
                target="_blank"
                variant="secondary"
                showReadMore={false}
              >
                Enquire Now
              </Button> */}
              {/* <Button
                href="/contact-us"
                target="_blank"
                variant="secondary"
                showReadMore={false}
              >
                Contact Us
              </Button> */}
            </div>

          </div>


          {/* Right Icon */}
          <div className="md:w-1/3 justify-center md:justify-end hidden md:flex">
            <Image
              src="/life-at-aims/student-loan-icon.svg"
              alt="Arrow"
              width={1028}
              height={1028}
              className=" w-44 h-44"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection
