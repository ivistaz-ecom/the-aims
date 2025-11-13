import React from "react"
import Image from "next/image"

const RcContent = () => {
  return (
    <>
      <div className="relative px-4 md:px-8 lg:px-8 py-6 md:py-10">
        <div className="container mx-auto">
          <div className="justify-center items-start  flex flex-col overflow-hidden ">
            <div className="md:max-w-5xl text-[20px] space-y-2">
              <p>
                Everything you need as a student - from handbooks, exams,
                calendars, formalities - is housed right here.
              </p>
              <p>
                It is our constant endeavour to create a student friendly
                environment across all our facilities, please feel free to share
                your suggestions if you feel anything can be improved further to
                <span className="monser-500"> principal@theaims.ac.in.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden lg:block">
  <Image
    src="/student-handbook/semi-circle.svg"
    alt="School Circle Background"
    width={120}
    height={120}
    className="w-full h-full object-cover"
  />
</div>

      </div>
      <div className="border-b border-gray-300 w-full h-1/2 md:mt-8"></div>
    </>
  )
}

export default RcContent
