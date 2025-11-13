import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../../shared/Button"

const SoSwiss = () => {
  const courses = [
    {
      id: 1,
      title: "Swiss International Culinary Professional Diploma",
      description:
        "Co-certified by Swiss Vocational Education & Training (VET by EHL), this diploma is designed for future chefs ready to master classical and modern culinary techniques. This program sets you on a global culinary path, whether in top hotel kitchens or your own restaurant.",
      image: "/school-of-hospitality/Swiss 01.webp",
      link: "https://www.aimsenrich.com/swiss-international-culinary-professional-diploma",
    },
    {
      id: 2,
      title: "Swiss International Food & Beverage Service Professional Diploma",
      description:
        "This diploma prepares you to excel in fine dining service, wine and beverage pairing, and guest engagement. You'll train in simulated hotel environments and learn from industry professionals, setting you up for careers in luxury hospitality and F&B operations worldwide.",
      image: "/school-of-hospitality/Swiss 02.webp",
      link: "https://www.aimsenrich.com/swiss-international-food-beverage-service-professional-diploma",
    },
    {
      id: 3,
      title: "Swiss Professional Diploma in Rooms (CII-VET)",
      description:
        "Focused on the essential departments of front office and housekeeping, this diploma program blends Swiss precision with Indian operational needs. Students gain deep expertise in customer service, reservation systems, and housekeeping best practices, all critical to ensuring seamless guest experiences.",
      image: "/school-of-hospitality/Swiss 03.webp",
      link: "https://www.aimsenrich.com/swiss-professional-diploma-rooms-cii-vet",
    },
  ]

  return (
    <>
      <div className="px-4 lg:px-8">
        <div className="container mx-auto py-10">
          <h3 className="text-center t playfair-300 text-[#0C2165] ">
            Swiss International
          </h3>

          <div>
            {courses.map((course, index) => (
              <div key={course.id}>
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-14">
                  {/* Image */}
                  <div className="flex rounded-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={240}
                      height={240}
                      className="object-cover lg:w-60 lg:h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left lg:flex-1 flex flex-col justify-center items-center lg:items-start">
                    <h4 className="text-xl lg:text-[24px] font-bold text-[#000000] monser-600 mb-3">
                      {course.title}
                    </h4>
                    <p
                      className="text-black mb-6 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: course.description,
                      }}
                    />
                    <Link
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="placement">Explore Now</Button>
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                {index !== courses.length - 1 && (
                  <hr className="my-8 border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SoSwiss
