import Button from "@/shared/Button"
import Image from "next/image"
import React from "react"

const EventsandReunions = () => {
  return (
    <>
      <div className="w-full bg-white py-10 lg:px-0 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center lg:order-1 order-2">
              <h3 className="text-[#0C2165]">Events and Reunions</h3>
              <div className="space-y-4">
                <p>
                  We host regular alumni meet-ups on campus and across cities to
                  help you reconnect with friends, professors, and the wider
                  AIMer network. These events are a great way to revive old
                  memories, expand your circle, and celebrate new milestones
                  together.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-bold monser-600 my-4">
                  Make sure you&apos;re registered to receive invites for:
                </h5>
                <ul className="list-disc list-inside">
                  <li className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    Annual alumni reunions on campus
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    City-based get-togethers
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    Virtual networking sessions
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button variant="placement" href="https://docs.google.com/forms/d/e/1FAIpQLSdvpoig1zb37eq9jVRuBSUu22hQdXEBVc8vsYWK7039QhtO-g/viewform" target="_blank" className="w-[200px]">Register Now</Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex flex-col gap-4 lg:order-2 order-1">
              <Image
                src="/alumni-association/events-and-reunions.webp"
                alt="Young men playing basketball outdoors"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventsandReunions
