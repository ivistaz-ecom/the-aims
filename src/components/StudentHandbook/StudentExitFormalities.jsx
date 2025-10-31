import Button from "@/shared/Button"
import Image from "next/image"
import React from "react"

const StudentExitFormalities = () => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-8 pb-6 md:pb-10">
        <div className="container mx-auto">
          {/* Mobile & Tablet = single column | Desktop = 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image First for Mobile & Tablet */}
            <div className="flex flex-col gap-4 order-1 md:order-1 lg:order-2">
              <Image
                src="/student-handbook/student-exit-formalities.webp"
                alt="Young men playing basketball outdoors"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Below Image for Mobile & Tablet */}
            <div className="flex flex-col justify-start md:items-start order-2 md:order-2 lg:order-1">
              <h2 className="text-[#0C2165] playfair-300 text-4xl md:text-6xl lg:text-6xl mb-2">
                Student Exit <br className="hidden md:hidden lg:block" />{" "}
                Formalities
              </h2>
              <div className="space-y-4">
                <p>
                  Once you successfully complete your final semester exams, you
                  need to follow the respective processes listed in the attached
                  document. You can download your EXIT FORM and approach the
                  respective authorised person at the campus.
                </p>
              </div>

              <div className="flex md:flex-row flex-col gap-4 py-6 items-center">
                <Button
                  variant="placement"
                  href="/student-handbook/Student-Handbook/Student Exit Formalities Process.pdf"
                >
                  Student Exit Formalities Process
                </Button>
                <Button
                  variant="placement"
                  href="/student-handbook/Student-Handbook/Student Exit Formalities Form.pdf"
                >
                  Student Exit Formalities Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentExitFormalities
