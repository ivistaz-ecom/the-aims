import React from "react"
import Button from "@/shared/Button"

const DocumentPageTemplate = ({
  heading,
  paragraph,
  buttonName,
  pdfLink,
  backgroundColor = "#E1F9F4",
  headingColor = "#0C2165",
  buttonVariant = "secondary",
  showArrow = true,
}) => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8" style={{ backgroundColor }}>
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1
                className="text-4xl font-bold"
                style={{ color: headingColor }}
              >
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-2">
            <p className="text-lg">{paragraph}</p>
          </div>
          <div>
            <div className="mt-4 w-fit">
              <Button
                href={pdfLink}
                target="_blank"
                variant={buttonVariant}
                showArrow={showArrow}
              >
                {buttonName}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentPageTemplate
