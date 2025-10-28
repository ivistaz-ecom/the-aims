import React from "react"
import Button from "@/shared/Button"

const FastTrackCareer = () => {
  return (
    <section className="pb-10 px-4 lg:px-0 bg-white">
      <div className="container mx-auto text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-4">
            Fast-Track your Career with
          </h5>
          <h2 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#531675] mb-6">
            AIMS Institutes
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl monser-500 mb-12 mx-auto">
          Join our School of Business at AIMS Institutes, your launchpad to
          global careers and leadership success.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Apply Now Button */}
          <Button
            showReadMore={false}
            variant="placement"
            href="https://apply.theaims.ac.in/login"
          >
            Apply Now
          </Button>

          {/* Contact Us Button */}
          <Button
            showReadMore={false}
            variant="placement"
            href="https://staging.theaims.ac.in/contact-us"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-300 mb-8"></div>

      {/* Admissions Contact Info */}
      <div className="text-sm monser-400 text-center">
        {/* Desktop: All on same line */}
        <div className="hidden md:block">
          <span className="text-[#531675] monser-600 text-xl">
            ADMISSIONS OFFICE:
          </span>
          <span className="text-black monser-600 text-lg ml-2"> Mail: </span>
          <a
            href="mailto:admission@theaims.ac.in"
            className="text-black hover:text-[#6E3299] transition-colors text-base"
          >
            admission@theaims.ac.in
          </a>
          <span className="mx-2">|</span>
          <span className="text-lg monser-600">Call / WhatsApp:</span>
          <a
            href="tel:+918150001994"
            className="text-black hover:text-[#6E3299] transition-colors text-base ml-2"
          >
            +91-815-000-1994
          </a>
        </div>

        {/* Mobile: Separate lines */}
        <div className="md:hidden">
          <div className="mb-2">
            <span className="text-[#531675] monser-600 text-xl">
              ADMISSIONS OFFICE:
            </span>
          </div>
          <div className="mb-2">
            <span className="text-black monser-600 text-lg"> Mail: </span>
            <a
              href="mailto:admission@theaims.ac.in"
              className="text-black hover:text-[#6E3299] transition-colors text-base"
            >
              admission@theaims.ac.in
            </a>
          </div>
          <div>
            <span className="text-lg monser-600">Call / WhatsApp:</span>
            <a
              href="tel:+918150001994"
              className="text-black hover:text-[#6E3299] transition-colors text-base ml-2"
            >
              +91-815-000-1994
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastTrackCareer
