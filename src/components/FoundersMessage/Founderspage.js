"use client"
import React, { useState } from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const foundersData = [
  {
    title: "Our Founder",
    titles: ["About Our Founder", "Our Founder’s Message"],
    name: "Dr. Kerron G Reddy",
    names: "Founder, AIMS Institutes",
    image: "/founders-message/leader-img1.webp",
    about: `Dr Kerron G Reddy is the Founder of AIMS Institutes, Peenya, Bangalore, Karnataka, India, which she established in 1994. She is an accomplished educationist with demonstrated ability to lead, teach, motivate, and direct students while maintaining high interest and achievement in research, projects, and consultancy services. A multifaceted social entrepreneur, administrator, and academician, she has over 30 years of rich experience in institution building, teaching, research, and running premier higher education institutions in India and overseas.
    
Dr Kerron G Reddy holds a PhD in Management from Bangalore University and double postgraduate degrees, MBA in Human Resources Management from Bangalore University, Karnataka, and M.A in English Literature from Kakatiya University, Warangal, Telangana. She has several research publications to her credit and has presented papers in reputed journals in India and overseas. Under her guidance, seven research scholars were awarded PhDs by the University of Mysore.

Dr Kerron G Reddy believes in empowering students with 360-degree learning and helping them become leaders of tomorrow. In pursuit of this philosophy, she set up focus centres at AIMS for Entrepreneurship, Sustainability, Community Services, Consultancy, International Liaison, and Student Development. Each centre continuously works towards nurturing socially responsible, globally minded citizens.

Her vast experience has made her an expert advisor in the field of education. She has contributed to excellence in Indian education through active participation as a Certified Assessor for NAAC, as well as serving as a member of the University Academic Council, Syndicate, Senate, and UGC Advisory Committee. She is also the Managing Trustee of ‘Needzz,’ a charity organisation supporting underprivileged communities.`,
    message: `"Having a single-minded focus on addressing student needs, we are clear that it is our responsibility to help our students realize their goals in an increasingly competitive world. We have consistently produced excellent results and AIMS alumni can be found at premier organizations in India and overseas. From academic excellence to leadership qualities, in a nurturing environment with required infrastructure, AIMS offers everything needed to succeed as a student."`,
  },
  {
    title: "Our CEO",
    titles: ["About Our CEO", "Our CEO’s Message"],
    name: "Meka Priyanandan Reddy",
    names: "CEO, AIMS Institutes",
    image: "/founders-message/leader-img2.webp",
    about: `Dr Meka Priyanandan Reddy is the CEO of AIMS Institutes, having dedicated over two decades to integrating higher education and technology. Earlier, as the COO of AIMS Institutes for over a decade, he pioneered innovative collaborations that have yielded profound regional and global impacts.

He champions a future where learning transcends traditional boundaries, equipping students with the right attitude, skills, and knowledge. A technological evangelist, Dr Priyanandan leverages digital innovation to drive institutional growth. His entrepreneurial and networking acumen bridge the gap between academia, industry, and global markets.

Dr Priyanandan Reddy completed his B.Tech from SRM University, Chennai, his MBA from Salford University, UK, and received an Honorary Doctorate in Higher Education from an International University in South Korea.

He is a member of “Chaîne des Rôtisseurs,” an International Association of Gastronomy established in over 75 countries, and also a member of EUHOFA, enhancing his global reach and enabling cross-border collaborations for academic excellence.`,
    message: `"At AIMS, we are driven by a legacy of academic excellence, entrepreneurial spirit, global vision, and social responsibility. Our mission is to inspire and equip students to become professionals of global caliber, fostering a vibrant learning environment where ideas thrive, diversity is celebrated, and every individual is empowered to succeed. Education at AIMS is a journey of growth, discovery, and transformation. With exceptional faculty, dedicated staff, state-of-the-art facilities, and strong industry collaborations, we ensure our students receive an education that is both relevant and future-ready. Our alumni, making their mark across the globe, stand as a proud testament to the strong foundations and skills nurtured at AIMS. I warmly invite you to explore the opportunities at AIMS and take the next steps towards realising your dreams and aspirations."`,
  },
  {
    title: "Our Executive Director",
    titles: ["About Our Executive Director", "Our Executive Director’s Message"],
    name: "Dr. Roja Reddy Meka",
    names: "Executive Director, AIMS Institutes",
    image: "/founders-message/leader-img3.webp",
    about: `Dr Roja Reddy Meka is a visionary educationist and academic strategist, widely respected for her transformational contributions to higher education in India. Over the last 16 years, she has crafted academic experiences that empower learners, inspire faculty, and elevate institutions.

She began her journey in 2008 as Director of Admissions at AIMS Institutes, Bangalore, revolutionising admission processes and fostering diversity. From 2012 to 2022, she also served as Director of Undergraduate Education, strengthening faculty recruitment, curriculum development, and academic operations across major programs.

Dr Roja Reddy holds a PhD in Management, an MBA in HR from Bangalore University, and a Bachelor of Architecture from JNTU, Hyderabad. She has contributed significantly to research on excellence in higher education and global universities.

Recognised as one of the ‘Power Women’ by Vision Digital in 2023 and the Leading Woman Educationist by the Peenya Industries Association in 2025, Dr Roja continues to lead with innovation and integrity.`,
    message: `"Dear Students, Congratulations on becoming an ‘AIMER’! Welcome to AIMS Institutes — a place where you will transform into confident, ethical, and globally-minded professionals. At AIMS, we combine multidisciplinary learning with research, entrepreneurship incubation, and real-world projects. Supported by our experienced faculty and expert professionals, you will receive a 360-degree education designed to prepare you for the dynamic global workplace. Our campus celebrates diversity, echoing the spirit of Vasudhaiva Kutumbakam — The World is One Family. Here, you will build lifelong friendships and learn the values of equality, inclusivity, and empathy. We maintain a strong commitment to academic excellence and discipline while nurturing your professional growth and ethical sensitivity. Our alumni have made their mark globally, and we are confident you will too. We look forward to supporting you on this exciting journey and making your time at AIMS Institutes truly unforgettable."`,
  },
  {
    title: "Our Principal",
    titles: ["About Founder", "Founder’s Message"],
    name: "Dr. Rama Murthy",
    names: "Principal, AIMS Institutes",
    image: "/founders-message/leader-img4.webp",
    about: `As the Principal of AIMS Institutes, Dr Ramamurthy focuses on strengthening academic programs, promoting research, and enhancing industry collaborations. He has held several leadership roles, including Associate Professor, Program Director, and Registrar, before becoming Principal.

He holds a PhD in Management from Dravidian University, an MPhil, and an MBA in Finance. His prolific research includes 24 published papers, 27 international presentations, and co-authoring a patent titled “Monetary Incentives and Employee Performance.”

Dr Ramamurthy has authored books like “Advanced Financial Accounting,” “Business Finance,” and “Corporate Accounting,” and has been honoured with the “Dr Radhakrishna Shikshana Ratna National Award.”`,
    message: `Dear Students, Welcome to AIMS Institutes — where your future begins! At AIMS, we provide a dynamic environment supported by world-class infrastructure — smart classrooms, innovation labs, a vibrant library, and centres for research and entrepreneurship. Here, learning goes beyond academics, preparing you to be leaders in a globalized world. "Great things never come from comfort zones." Guided by expert faculty and a diverse student community, your journey here will be full of opportunities for growth, discovery, and success. Dream big, work hard, and make the most of every opportunity. We are proud to have you with us — and excited to see the amazing things you will achieve!`,
  },
]

const FoundersMessage = () => {
  const [activeTabs, setActiveTabs] = useState(foundersData.map(() => 0)) // 0 = first tab (About)
  const [showFullAbout, setShowFullAbout] = useState(foundersData.map(() => false))

  const handleTabClick = (index, tabIndex) => {
    const updatedTabs = [...activeTabs]
    updatedTabs[index] = tabIndex
    setActiveTabs(updatedTabs)
  }

  const toggleReadMore = (index) => {
    const updated = [...showFullAbout]
    updated[index] = !updated[index]
    setShowFullAbout(updated)
  }

  return (
    <section className="bg-white text-gray-800 py-10 px-6 lg:px-20 space-y-20">
      {foundersData.map((item, index) => (
        <div
          key={index}
          className={`container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-[370px] lg:h-[370px] flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="rounded-full object-cover relative z-10"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-2/3 space-y-5 text-center lg:text-left">
            <h3 className="italic text-[#A12876] text-3xl lg:text-4xl font-serif">
              {item.title}
            </h3>

            <div>
              <div className="sm:-mt-6 -mt-6 text-[20px] md:text-[20px] lg:text-[28px] text-black !font-semibold whitespace-pre-line">
                {item.name}
              </div>
              <div className="-mt-2 text-[20px] md:text-[20px] lg:text-[28px] text-black !font-semibold whitespace-pre-line">
                {item.names}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              {item.titles.map((tabTitle, tabIndex) => (
                <Button
                  key={tabIndex}
                  variant="placement"
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    activeTabs[index] === tabIndex
                      ? "bg-[#A12876] text-black"
                      : "bg-white !text-[#A12876] border border-[#A12876] hover:bg-[#A12876] hover:!text-white"
                  }`}
                  onClick={() => handleTabClick(index, tabIndex)}
                >
                  {tabTitle}
                </Button>
              ))}
            </div>

            {/* Content */}
            <div className="mt-4 text-left">
              {activeTabs[index] === 0 ? (
                <>
                  <p
                    className={`leading-relaxed text-base whitespace-pre-line text-black  ${
                      !showFullAbout[index] ? "line-clamp-3" : ""
                    }`}
                  >
                    {item.about}
                  </p>
                  <button
                    className="text-black !font-semibold hover:text-[#A12876] mt-2 transition text-[18px]"
                    onClick={() => toggleReadMore(index)}
                  >
                    {showFullAbout[index] ? "Read Less" : "Read More"}
                  </button>
                </>
              ) : (
                <p className="leading-relaxed text-base text-black whitespace-pre-line">
                  {item.message}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default FoundersMessage
