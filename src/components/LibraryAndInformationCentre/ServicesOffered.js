"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ServicesOffered = () => {
  const services = [
    "Book Lending Service",
    "OPAC (Online Public Access Catalogue)",
    "Study and Research Assistance",
    "Inter-Library Loan",
    "E-Resource Access",
    "Reference & Awareness Services",
    "Book Bank Scheme",
    "Newspaper Clipping Service",
  ];

  // State for responsive image
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:px-8 px-4">
      <div className="container mx-auto py-12">
        {/* Top Section */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#0d2352] mb-6">
          Services Offered
        </h3>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:items-start gap-8">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <ul className="list-disc list-outside space-y-2 text-gray-900 text-lg pl-6 marker:text-[#0d2352]">
              {services.map((service, index) => (
                <li key={index} className="pl-2">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[350px] lg:w-1/2 lg:h-[400px] order-1 lg:order-2 rounded-xl overflow-hidden">
            <Image
              src={
                isMobile
                  ? "/library-and-information-centre/service_offer_mob.webp"
                  : "/library-and-information-centre/services-offered-new.webp"
              }
              alt="Library services"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-300" />

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h4 className="text-2xl text-[#0d2352] mb-3 font-semibold">Vision</h4>
            <p className="text-gray-800 leading-relaxed">
              To empower students, faculty, and the community through innovative
              technology, resources, and collaboration for continuous learning and
              growth.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="text-2xl text-[#0d2352] mb-3 font-semibold">Mission</h4>
            <p className="text-gray-800 leading-relaxed">
              To provide accessible, advanced resources and services that inspire
              academic excellence, foster research and creativity, and support the
              evolving needs of our diverse campus community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;
