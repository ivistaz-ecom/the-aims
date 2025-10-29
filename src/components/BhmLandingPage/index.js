import React from "react"
import HeroBanner from "./HeroBanner"
import AccreditationSection from "./AccreditationSection"
import ProgramOverview from "./ProgramOverview"
import PlacementHighlights from "./PlacementHighlights"
import ValueAddedPrograms from "./ValueAddedPrograms"
import EligibilityAndDates from "./EligibilityAndDates"
import FastTrackCareer from "./FastTrackCareer"

const index = () => {
  return (
    <div>
      <HeroBanner />
      <AccreditationSection />
      <ProgramOverview />
      <PlacementHighlights />
      <ValueAddedPrograms />
      <EligibilityAndDates />
      <FastTrackCareer />
    </div>
  )
}

export default index
