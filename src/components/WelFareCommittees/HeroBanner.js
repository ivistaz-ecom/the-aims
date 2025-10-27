// import React from "react";
// import Image from "next/image";
// import ApplicationMarquee from "../../shared/ApplicationMarquee";

// const HeroBanner = ({ announcements, pageType = "business" }) => {
//   return (
//     <>
//       <div className="relative w-full h-[100vh] overflow-hidden">
//         {/* Background Image */}
//         <Image
//           src="/welfare-committees/banner.png"
//           alt="Patents"
//           width={1920}
//           height={1080}
//           className="w-full h-full object-cover"
//           priority
//         />

//         {/* Gradient Overlay - Figma Design */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
//           }}
//         ></div>

//         {/* Bottom Content Container */}
//         <div className="absolute bottom-20 left-0 right-0">
//           <div className="container mx-auto py-4 px-6 lg:px-8">
//             <div className="flex items-center justify-center">
//               <div className="text-center">
// <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16">
//   Safeguarding Integrity.
//   <br className="hidden md:block" />
//   Empowering Voices.
// </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Application Announcements Marquee */}
//       <ApplicationMarquee announcements={announcements} pageType={pageType} />
//     </>
//   );
// };

// export default HeroBanner;

import React from "react";
import ApplicationMarquee from "../../shared/ApplicationMarquee";
import Image from "next/image";

const HeroBannerSoB = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/welfare-committees/banner-01.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/welfare-committees/mobile.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>
        <div className="absolute top-0 lg:top-10 left-0 lg:right-0 px-4 lg:px-0">
          <div className="lg:px-8 px-4">
            <div className="container mx-auto py-4">
              <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                <div className="flex items-center">
                  <Image
                    src="/white-empower.svg"
                    alt="Recruiters"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-0">
          <div className="lg:px-8 px-4">
            <div className="container mx-auto">
              <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
                <div className="flex items-center">
                  <h1 className="text-white text-left lg:text-left md:text-left xl:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                    Safeguarding Integrity.
                    <br className="" />
                    Empowering Voices.
                  </h1>
                </div>
                {/* <div className="flex items-center">
                <Image
                  src="/school-of-business/iacbe.png"
                  alt="IACBE"
                  width={400}
                  height={100}
                  className="object-contain"
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  );
};

export default HeroBannerSoB;
