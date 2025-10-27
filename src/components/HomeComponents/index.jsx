import React from "react";
import HeroBanner from "./HeroBanner";

import Since from "./Since";

// import AimersInAction from './AimersInAction'

import Slide from "./Slide";
import SlideTwo from "./SlideTwo";
import CampusUpdates from "./CampusUpdates/CampusUpdates";
import Bullseye from "./Bullseye";
import YourPractice from "./YourPractice";
import ReadyToDraw from "../shared/ReadyToDraw";
import AlumniCarousel from "./AlumniCarousel";
import MapJourney from "./MapJourney";

const HomeComponents = () => {
  return (
    <>
      <HeroBanner />
      <Since />
      {/* <Slide /> */}
      <SlideTwo />
      <Bullseye />
      <YourPractice />
      <AlumniCarousel />
      <ReadyToDraw
        title={
          <>
            Ready to Take AIM? <br />
            Let’s Talk.
          </>
        }
        subtitle="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
        primaryButtonText={false}
        secondaryButtonText="Download Brochure"
        tertiaryButtonText="Contact Us"
      />
      <CampusUpdates />
      <MapJourney />
    </>
  );
};

export default HomeComponents;
