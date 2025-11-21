"use client";
import React from "react";
import Image from "next/image";

const facilitySections = [
  {
    title: "Laboratory & Instrumentation Space",
    description:
      "The Research Centre houses well-equipped laboratories that provide the infrastructure for experimental and analytical research.",
    labs: [
      {
        src: "/central-facilities/mac-lab.png",
        title: "Mac Lab",
      },
      {
        src: "/central-facilities/windows.png",
        title: "Windows Lab",
      },
    ],
  },
  {
    title: "IT Facilities",
    description:
      "AIMS provides robust IT support to enable advanced computational research and digital collaboration with high-speed internet connectivity across all research spaces.",
    labs: [
      {
        src: "/central-facilities/it-1.png",
        // title: "IT-1",
      },
      {
        src: "/central-facilities/it-2.png",
        // title: "IT-2",
      },
    ],
  },
  {
    title: "Library & Information Resources",
    description:
      "The library offers a comprehensive collection of research journals, reference books, and e-resources, along with access to online databases and digital libraries. It provides dedicated study areas for researchers and postgraduates, as well as reference and documentation support for thesis and publication work.",
    labs: [
      {
        src: "/central-facilities/library.png",
        title: "Library",
      },
    ],
  },
  {
    title: "Audio-Visual (AV) Room",
    description:
      "The AV Room is equipped with high-definition projectors, interactive displays, and sound systems to support research presentations, seminars, workshops, and video conferencing. It facilitates academic discussions, training sessions, and virtual collaborative meetings.",
    labs: [
      {
        src: "/central-facilities/av-1.png",
        title: "AV Room",
      },
      {
        src: "/central-facilities/av-2.png",
        // title: "AV Room",
      },
    ],
  },
];

const CentralFacilitiesPage = ({ title, description }) => {
  return (
    <>
      <div className="container mx-auto px-6 py-10">
        {/* Header with Arrows */}
        <div className="flex flex-col md:flex-row mb-6 items-start md:items-end">
          <div className="md:w-[80%] pr-4">
            <h1 className="text-3xl font-bold text-[#8A1D64]">{title}</h1>
            <div className="text-gray-600 mt-2 space-y-4">
              {typeof description === "string"
                ? description
                    .split(/\n\s*\n/)
                    .map((paragraph, idx) => (
                      <p key={idx}>{paragraph.trim()}</p>
                    ))
                : description}
            </div>
          </div>
        </div>
        {facilitySections.map(({ title, description, labs }) => (
          <div key={title} className="flex flex-col gap-4 md:w-[80%]">
            <h2 className="lg:text-3xl text-2xl font-bold text-[#0C2165] monser-600 lg:pt-10 pt-5">
              {title}
            </h2>
            <p>{description}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pb-10 pb-5">
              {labs.map(({ src, title }) => (
                <div key={title}>
                  <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full h-full object-fit rounded-xl lg:py-5 py-3"
                  />
                  <h2 className="lg:text-2xl text-xl font-bold text-[#000] monser-500">
                    {title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Page Component
const CentralFacilities = ({ title, description }) => {
  return (
    <>
      <CentralFacilitiesPage
        title="AIMS Research Centre - Central Facilities"
        description={`The AIMS Research Centre is equipped with state-of-the-art facilities designed to support multidisciplinary research, innovation, and academic collaboration. The key central facilities include: `}
      />
    </>
  );
};

export default CentralFacilities;
