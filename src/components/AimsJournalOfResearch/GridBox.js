import Image from "next/image";
import React from "react";

const GridBox = () => {
  return (
    <div className="lg:px-8 px-4">
      <div className="container mx-auto lg:py-10 md:py-6 py-10 xl:py-10  flex lg:flex-row flex-col gap-10">
      <div className="lg:w-1/2  mx-auto">
        <div className="bg-[#FAE5E6] sm:h-full sm:w-[750px] xl:w-full w-full md:w-[750px] lg:h-[540px] rounded-lg border border-[#A22877] p-8 relative">
          {/* Arrow icon positioned in top right */}
          <div className="absolute top-4 right-4">
            <Image
              src="/placement-policies/peach-arrow.svg"
              alt="Arrow"
              width={60}
              height={60}
            />
          </div>

          {/* Title */}
          <h2 className="lg:text-3xl text-2xl monser-600 text-[#531574] mb-6">
            About the Journal
          </h2>

          {/* Content */}
          <div className="text-gray-800 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><b className="monser-600">Editor:</b> Dr Kiran Reddy</li>
              <li><b className="monser-600">ISSN:</b> 2321-8487</li>
              <li><b className="monser-600">Frequency:</b> Bi-Annual</li>
              <li><b className="monser-600">Publisher:</b> AIMS Institutes</li>
              <li><b className="monser-600">Current Issue:</b> Volume 20, Issue 1 (2025)</li>
              <li><b className="monser-600">Publication Charges:</b> No submission or processing fees</li>
            </ul>

            {/* <p className="text-lg mt-6">
              Ineligible students will be considered for placements only after
              all other students are placed. Re-entry into the process depends
              on improved performance and approval by the placement committee.
            </p> */}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="bg-[#E0F8F3] sm:h-full sm:w-[750px] xl:w-full md:w-[750px] lg:h-[540px] rounded-lg border border-[#88BBB1] p-8 relative">
          {/* Arrow icon positioned in top right */}
          <div className="absolute top-4 right-4">
            <Image
              src="/placement-policies/green-arrow.svg"
              alt="Arrow"
              width={60}
              height={60}
            />
          </div>

          {/* Title */}
          <h2 className="lg:text-3xl text-2xl monser-600 text-[#531574] mb-6">
            Editorial Team
          </h2>

          {/* Content */}
          <div className="text-black space-y-4">
            {/* <p className="text-lg monser-600">The Ones Guiding Your Aim.</p> */}

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><b className="monser-600">Editor-in-Chief:</b> Dr Kiran Reddy</li>
              <li><b className="monser-600">Editorial Board:</b></li>
              <li className="">Dr Jayaprakash Reddy</li>
              <li>Dr Gsiree Panthura</li>
              <li>Dr Jayashree Nair</li>
              <li>Dr Roja Reddy</li>  
              <li>Dr Denisa Arudan</li>
              <li>Dr Javad Ghalambor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default GridBox;
