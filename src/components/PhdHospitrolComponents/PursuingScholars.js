'use client'
import React, { useState } from "react";

const PursuingScholars = () => {
  const scholarsData = {
    "Dr Kiran Reddy": [
      "Ms Hemalatha - Registered",
      "Ms Padmini V - Registered",
      "Mr Gourav Koundal - Registered",
      "Mr Vikram M - Registered",
      "Mr Bhaskar Sailesh - Provisionally Registered",
      "Mr Rajashekar J - Provisionally Registered",

    ],
    "Dr Saurabh Srivastava": [
      "Mr Jagadeesh Babu M K - Thesis Submitted",
      "Ms Chandrika P - Registered",
      "Mr Umashankar N R - Provisionally Registered",
    ],
    "Dr Renati Jayaprakash Reddy": [
      "Mr Vinayaka Shantesh Angadi - Thesis Submitted",
      "Ms Deepthi S J - Registered",
      "Ms Anita Kurian - Registered",
      "Ms Sushmitha P - Provisionally Registered",
      "Mr Sreedhar B N - Provisionally Registered",
      "Mr Ranganatha R - Provisionally Registered",
      "Ms Shambhavi B R - Provisionally Registered",
      "Mr Nataraja - Provisionally Registered",
      "Ms Pushpa M - Provisionally Registered",
    ],
    "Dr B.A.Karunakara Reddy": [
      "Ms Nitu Sharma - Thesis Submitted",
      "Ms Sangeetha S - Registered",
      "Ms Diana Erudiyanathan - Registered",
      "Mr Virupaksha J D - Registered",
      "Mr Vedanandaprabhu P G - Registered",
      "Ms Sowmyashree A - Registered",
      "Ms Tejaswini S - Registered",
      "Mr Chiranth R - Registered",
      "Ms Hema N - Provisionally Registered",
    ],
  };

  const [selectedGuide, setSelectedGuide] = useState("Dr Kiran Reddy");

  return (
    <div className="border-b border-gray-500 mb-10">
      <div className="lg:px-8 px-4">
        <div className="pb-10 container mx-auto">
          {/* Title */}
          <div className="lg:w-1/2 items-center text-center lg:text-left mb-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c2165]">
              Pursuing
            </h3>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#a22978] italic -mt-6 md:-mt-8">
              Scholars
            </h3>
          </div>

          {/* Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20">
            {/* Left Side */}
            <div className="flex-1 w-full">
              <div className="text-2xl font-bold mb-2.5">Management</div>
              {["Dr Kiran Reddy", "Dr Saurabh Srivastava"].map((name) => (
                <button
                  key={name}
                  onClick={() => setSelectedGuide(name)}
                  className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === name
                    ? "bg-[#a2396e] text-white border-none"
                    : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-none"
                    }`}
                >
                  Guide - <span className="font-bold">{name}</span>
                </button>
              ))}

              <div className="text-2xl font-bold mb-2.5 mt-5">Commerce</div>
              {["Dr Renati Jayaprakash Reddy", "Dr B.A.Karunakara Reddy"].map(
                (name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedGuide(name)}
                    className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === name
                      ? "bg-[#a2396e] text-white border-none"
                      : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-none"
                      }`}
                  >
                    Guide - <span className="font-bold">{name}</span>
                  </button>
                )
              )}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-gray-600 self-stretch"></div>

            {/* Right Side */}
            <div className="flex-1 w-full">
              <div
                className="text-2xl md:text-4xl mb-5 pl-0 lg:pl-2 text-[#a2396e]"
                style={{ fontWeight: "600" }}
              >
                Guide - {selectedGuide}
              </div>
              <div className="bg-[#a2396e] text-white rounded-2xl p-5">
                {scholarsData[selectedGuide].map((entry, idx) => (
                  <div key={idx} className="flex items-start mb-2">
                    <span className="pr-2">•</span>
                    <span>{entry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PursuingScholars;
