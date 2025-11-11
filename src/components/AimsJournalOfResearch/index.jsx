import React from "react";
import HeroBanner from "./HeroBanner";
import Content from "./Content";
import GridBox from "./GridBox";
import ReadyToDraw from "../shared/ReadyToDraw";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import TabSection from "./TabSection";
const index = () => {
  return (
    <>
      <HeroBanner />
      <Content />
      <GridBox />
      <TabSection />
      <ReadyToDraw
        title="Contact Us"
        subtitle={
          <>
            <p className="flex items-center gap-2">
              <TfiEmail className="inline-block text-2xl" />
              Email:{" "}
              <strong className="monser-600"><a href="mailto:library@theaims.ac.in" className="monser-600">library@theaims.ac.in</a></strong>
            </p>
            <p className="flex items-center gap-2 pt-2">
              <LuPhone className="inline-block text-2xl" />
              Phone: <strong className="monser-600">080 – 2839 0433/34</strong>
            </p>
          </>
        }
        primaryButtonText={false}
        secondaryButtonText={false}
        tertiaryButtonText={false}
      />
    </>
  );
};

export default index;
