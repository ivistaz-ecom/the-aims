import React from "react"
import ReadyToDraw from "../shared/ReadyToDraw"

const ReadyToDrawPage = () => {
  return (
    <ReadyToDraw
      title={
        <>
          Ready to Take AIM? <br />
          Let's Talk.
        </>
      }
      subtitle="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
      primaryButtonText="Enquire Now"
      secondaryButtonText="Download Brochure"
      tertiaryButtonText="Contact Us"
    />
  )
}

export default ReadyToDrawPage
