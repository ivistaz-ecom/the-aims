"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/shared/Button";
import PricingTable from "@/components/shared/PricingTable";
import Link from "next/link";

const JournalTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-16 bg-[#E1F9F4]">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {" "}
          {/* Reduced width for better centering */}
          {/* Buttons Row */}
          <div className="flex flex-wrap justify-center gap-1 mb-12">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between space-x-3 px-9 lg:w-auto xl:w-auto md:w-auto w-72 py-4 transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white/20 text-[#A22877] border border-black"
                    : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
                }`}
              >
                <span className="font-semibold text-sm md:text-[18px] monser-400">
                  {tab.title}
                </span>
                <Image
                  src={
                    activeTab === index
                      ? "/admission-process/up-arrow.svg"
                      : "/admission-process/down-arrow.svg"
                  }
                  alt={tab.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>
          {/* Content Area */}
          <div className="px-4">
          <div className="bg-white rounded-2xl py-5 mx-auto lg:px-20 xl:px-20 md:px-10 px-4">
            <div>
              {/* Heading */}
              {tabsData[activeTab].heading && tabsData[activeTab].heading.trim() !== "" && (
                <h5 className="text-2xl md:text-[24px] mb-6 monser-600 text-[#A22877]">
                  {tabsData[activeTab].heading}
                </h5>
              )}

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="">
                  {typeof tabsData[activeTab].conclusion === 'string' ? (
                    <p className="text-base md:text-lg monser-400">
                      {tabsData[activeTab].conclusion}
                    </p>
                  ) : (
                    <div className="text-base md:text-lg monser-400">
                      {tabsData[activeTab].conclusion}
                    </div>
                  )}
                </div>
              )}
            </div>
            {tabsData[activeTab].showButtons && (
              <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row gap-4 py-5">
                <Link href="/pdf/aims-journal-of-research/Submission+Guidelines.pdf" target="_blank">
                <Button variant="placement">
                  Download Submission Guidelines
                </Button>
                </Link>
                <Button variant="placement">
                  Download Undertaking Form
                </Button>
              </div>
            )}

            {/* Pricing Table */}
            {tabsData[activeTab].showPricingTable && (
              <div className="py-6">
                <PricingTable className="mt-4" />
              </div>
            )}

            {/* Subheading and Subcontent */}
            {tabsData[activeTab].subheading && tabsData[activeTab].subheading.trim() !== "" && (
              <h5 className="text-2xl md:text-[24px] py-3 monser-600 text-[#000]">
                {tabsData[activeTab].subheading}
              </h5>
            )}
            {tabsData[activeTab].subcontent && tabsData[activeTab].subcontent.trim() !== "" && (
              <p>{tabsData[activeTab].subcontent}</p>
            )}

            {/* Points Section 1 */}
            {tabsData[activeTab].points && tabsData[activeTab].points.length > 0 && (
              <>
                {tabsData[activeTab].pointsheading && tabsData[activeTab].pointsheading.trim() !== "" && (
                  <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
                    {tabsData[activeTab].pointsheading}
                  </h5>
                )}
                <div className="space-y-4 pt-3">
                  <div className="monser-400">
                    {tabsData[activeTab].points
                      .filter((point) => typeof point === 'string' ? point?.trim() : point)
                      .map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 text-lg"
                        >
                          <ul className="pl-4">
                            <li className="list-disc list-outside">{point}</li>
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* Points Section 2 */}
            {tabsData[activeTab].points2 && tabsData[activeTab].points2.length > 0 && (
              <>
                {tabsData[activeTab].pointsheading2 && tabsData[activeTab].pointsheading2.trim() !== "" && (
                  <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
                    {tabsData[activeTab].pointsheading2}
                  </h5>
                )}
                <div className="space-y-4 pt-3">
                  <div className="monser-400">
                    {tabsData[activeTab].points2
                      .filter((point) => typeof point === 'string' ? point?.trim() : point)
                      .map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 text-lg"
                        >
                          <ul className="pl-4">
                            <li className="list-disc list-outside">{point}</li>
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* Points Section 3 */}
            {tabsData[activeTab].points3 && tabsData[activeTab].points3.length > 0 && (
              <>
                {tabsData[activeTab].pointsheading3 && tabsData[activeTab].pointsheading3.trim() !== "" && (
                  <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
                    {tabsData[activeTab].pointsheading3}
                  </h5>
                )}
                <div className="space-y-4 pt-3">
                  <div className="monser-400">
                    {tabsData[activeTab].points3
                      .filter((point) => typeof point === 'string' ? point?.trim() : point)
                      .map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 text-lg"
                        >
                          <ul className="pl-4">
                            <li className="list-disc list-outside">{point}</li>
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* Points Section 4 */}
            {tabsData[activeTab].points4 && tabsData[activeTab].points4.length > 0 && (
              <>
                {tabsData[activeTab].pointsheading4 && tabsData[activeTab].pointsheading4.trim() !== "" && (
                  <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
                    {tabsData[activeTab].pointsheading4}
                  </h5>
                )}
                <div className="space-y-4 pt-3">
                  <div className="monser-400">
                    {tabsData[activeTab].points4
                      .filter((point) => typeof point === 'string' ? point?.trim() : point)
                      .map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 text-lg"
                        >
                          <ul className="pl-4">
                            <li className="list-disc list-outside">{point}</li>
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* Points Section 5 */}
            {tabsData[activeTab].points5 && tabsData[activeTab].points5.length > 0 && (
              <>
                {tabsData[activeTab].pointsheading5 && tabsData[activeTab].pointsheading5.trim() !== "" && (
                  <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
                    {tabsData[activeTab].pointsheading5}
                  </h5>
                )}
                <div className="space-y-4 pt-3">
                  <div className="monser-400">
                    {tabsData[activeTab].points5
                      .filter((point) => typeof point === 'string' ? point?.trim() : point)
                      .map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 text-lg"
                        >
                          <ul className="pl-4">
                            <li className="list-disc list-outside">{point}</li>
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalTabs;
