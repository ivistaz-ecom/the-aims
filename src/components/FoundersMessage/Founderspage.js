"use client"
import React, { useState } from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const foundersData = [
  {
    title: "Our Founder",
    name: "Dr. Kerron G Reddy",
    names: " Founder, AIMS Institutes",
    image: "/founders-message/leader-img1.webp",
    about: `Dr Rama Murthy Dr Kerron G Reddy is the Founder of AIMS Institutes, Peenya, Bangalore, Karnataka, India, which she established in 1994. She is an accomplished educationist with demonstrated ability to lead, teach, motivate, and direct students while maintaining high interest and achievement in research, projects and consultancy services. A multifaceted social entrepreneur, administrator and academician, she has over 30 years’ rich experience in institution building, teaching, research and running the operations of premier institutions of higher education in India and overseas.\nDr Kerron G Reddy holds a PhD in Management from Bangalore University and double postgraduate degrees, MBA in Human Resources Management from Bangalore University, Karnataka and M.A in English Literature from Kakatiya University, Warangal, Telangana. Dr Kerron G Reddy has several research publications to her credit and has presented papers in various reputed journals in India and overseas. Under her guidance, seven research scholars were awarded PhD by the University of Mysore.\nDr Kerron G Reddy believes in empowering students with 360-degree learning and helping them be the leaders of tomorrow. In pursuit of this philosophy, she set up focus centres at AIMS for Entrepreneurship, Sustainability, Community Services, Consultancy, International Liaison and Student Development. Each Focus Centre, headed by a professional from the field, strives continuously to realise Dr Kerron G Reddy’s dream of nurturing ideal future citizens of tomorrow with social sensitivity and a global perspective.\nDr Kerron G Reddy’s vast experience in the field of education has naturally resulted in her being accepted as an expert advisor in the field. She has been contributing towards excellence in the education sector in India with her active participation as a Certified Assessor for NAAC. She has also served as a member of the University Academic Council, Syndicate member, Senate member, and Member of the UGC Advisory Committee.  Dr Kerron G Reddy is deeply sensitive to the societal needs and engages herself in uplifting the backward sections of society. She is the Managing Trustee of a charity organisation, Needzz, that supports underprivileged members of society.`,
    message: `"Having a single-minded focus on addressing student needs, we are clear that it is our responsibility to help our students realize their goals in an increasingly competitive world. We have consistently produced excellent results and AIMS alumni can be found at premier organizations in India and overseas. From academic excellence to leadership qualities, a nurturing environment with required infrastructure, AIMS offers everything needed to succeed as a student."`,
  },
  {
    title: "Our CEO",
    name: "Meka Priyanandan Reddy",
    names: " CEO, AIMS Institutes",
    image: "/founders-message/leader-img2.webp",
    about: `Dr Meka Priyanandan Reddy is the CEO of AIMS Institutes today, having dedicated over two decades to the integration of higher education and technology. Earlier, as the COO of AIMS Institutes for over a decade, he pioneered innovative collaborations that have yielded profound regional and global impacts. \n Dr Priyanandan Reddy champions a future where learning transcends traditional boundaries, equipping students with the right attitude, skills and knowledge. As a technological evangelist, Dr Priyanandan leverages his expertise in digital innovation to drive institutional growth. His entrepreneurial and networking acumen position him as a catalyst for strategic expansion, bridging the gap between academia, industry, and global markets. Dr Priyanandan Reddy is also in the process of setting up a new distinct University in Karnataka as its Co-founder.\n Dr Priyanandan Reddy completed his B Tech from SRM University, Chennai, his MBA from Salford University, UK and received an Honorary Doctorate in higher education from an International University in South Korea.\nDr Priyanandan Reddy is a member of “Chaîne des Rôtisseurs”, an International Association of Gastronomy which is established in over 75 countries. He is also a member of EUHOFA, which has enhanced his reach, providing unparalleled access to global networks in international hospitality educational excellence. His international affiliations create valuable collaborations, unlocking opportunities to engage in cross-border knowledge exchange, professional growth, and innovation-driven partnerships.`,
    message: `"At AIMS, we are driven by a legacy of academic excellence, entrepreneurial spirit, global vision, and social responsibility. Our mission is to inspire and equip students to become professionals of global calibre, fostering a vibrant learning environment where ideas thrive, diversity is celebrated, and every individual is empowered to succeed. Education at AIMS is a journey of growth, discovery, and transformation. With exceptional faculty, dedicated staff, state-of-the-art facilities, and strong industry collaborations, we ensure our students receive an education that is both relevant and future-ready. Our alumni, making their mark across the globe, stand as a proud testament to the strong foundations and skills nurtured at AIMS. I warmly invite you to explore the opportunities at AIMS and take the next step towards realising your dreams and aspirations."`,
  },
  {
    title: "Our Executive Director",
    name: "Dr. Roja Reddy Meka",
    names: " Executive Director, AIMS Institutes",
    image: "/founders-message/leader-img3.webp",
    about: `Dr Roja Reddy Meka is a visionary educationist, institutional leader, and academic strategist, widely respected for her transformational contributions to higher education in India. She has spent over 16 years crafting academic experiences that empower learners, inspire faculty, and elevate institutions. Her leadership journey began in 2008 as Director of Admissions at AIMS Institutes, Bangalore, where she revolutionised admission procedures, championed diversity, and instituted systems to manage over 21 academic programs. From 2012 to 2022, she concurrently served as Director of Undergraduate Education, playing a central role in faculty recruitment, curriculum development, and academic operations across nine major programs. Under her stewardship, key UG programs like BBA, BCA & BHM have been consistently ranked in national excellence categories by GHRDC and RI World Rankings. \n Dr Roja Reddy holds a PhD in Management, an MBA in HR from Bangalore University and a Bachelor of Architecture from JNTU, Hyderabad. She has contributed to the book of knowledge with her comprehensive research on excellence in higher education and global Universities. \n Today as Executive Director of AIMS Institutes, Dr Roja Reddy leads an ecosystem of more than 1200 students, overseeing UG, PG, and doctoral offerings, as well as pre-university programs. Her focus on autonomy-readiness, strategic leadership development, HR policy formation, as well as taking quality initiatives, has reinvigorated institutional processes and strengthened academic agility. Dr Roja Reddy also plays a key role in conceptualising AIMS academic policies, leveraging both her doctoral research on world-class universities and deep institutional experience. Her dedication to quality, innovation, and human capital has made her a trusted thought leader in shaping new-generation educational ecosystems. Dr Roja Reddy has been instrumental in envisioning AIMS Institutes to soon become an autonomous institution. Currently, she’s also steering the development of a new and distinct University in Karnataka as its Co-founder. \n Her contributions have been widely recognised. In 2023, she was honoured as one of the ‘Power Women’ by Vision Digital, an accomplishment acknowledged by the Karnataka Book of Records. Most recently, in 2025, she was recognised as the Leading Woman Educationist by the Peenya Industries Association, Bangalore, celebrating her unwavering commitment to transformative education.`,
    message: `"Dear Students, Congratulations on becoming an ‘AIMER’! Welcome to AIMS Institutes — a place where you will transform into confident, ethical, and globally-minded professionals. At AIMS, we combine multidisciplinary learning with research, entrepreneurship incubation, and real-world projects. Supported by our experienced faculty and vibrant ecosystem, you will receive a 360-degree education designed to prepare you for the dynamic global landscape. Our campus celebrates diversity, echoing the spirit of Vasudhaiva Kutumbakam — The World is One Family. Here, you will build lifelong friendships and learn the values of equity, inclusivity, and empathy. We maintain a strong commitment to academic excellence and discipline while nurturing your professional growth and ethical sensitivity. Our alumni have made their mark globally, and we are confident you will too. We look forward to supporting you on this exciting journey and making your time at AIMS Institutes truly unforgettable."`,
  },
  {
    title: "Our Principal",
    name: "Dr. Rama Murthy",
    names: "Principal, AIMS Institutes",
    image: "/founders-message/leader-img4.webp",
    about: `As the Principal of AIMS, Dr Ramamurthy aims to strengthen the institution’s academic programs, encourage interdisciplinary research, and enhance industry collaborations. His focus will be on nurturing future-ready graduates equipped with the skills and values necessary to excel in a dynamic global landscape. Dr Ramamurthy has an impressive academic experience. Over the years, he has held several key leadership roles, including as Associate Professor, Program Director and Registrar, before being appointed as the Principal. He has played a pivotal role in program administration, curriculum development, faculty training, and student mentoring. Throughout his career, he has been a teacher sought after by students, which has won him deservedly recognition as the best teacher. He also earned the trust of the founders and trustees while excelling in his role as administrator. \n Dr B M Ramamurthy earned a PhD in Management from Dravidian University in 2016 and has also completed an MPhil before his PhD and an MBA in Finance. A lifelong learner, he has further enhanced his expertise through professional certifications, including a Wharton Certificate in Entrepreneurship Strategy and a course on FinTech and the Transformation in Financial Services from Copenhagen Business School. \n Dr Ramamurthy has significantly contributed to the academic community as a prolific researcher with 24 published research papers and 27 presentations at international conferences. His research covers a broad spectrum of topics, including fintech, financial inclusion, sustainability in HRM, and innovations in management education. He has co-authored a patent titled "Monetary Incentives and Employee Performance," reflecting his commitment to innovative research in business management. Dr Ramamurthy has authored several books, including "Advanced Financial Accounting," “Business Finance," and "Corporate Accounting," which are widely used by students and professionals alike. He has also guided doctoral scholars for a PhD in Management at the University of Mysore. \n Among his many accolades, Dr Ramamurthy was honoured with the "Dr Radhakrishna Shikshana Ratna National Award" for his distinguished contributions to teaching, training, research, and administration. Dr Ramamurthy has been actively involved in organising and participating in numerous workshops, faculty development programs, and webinars. Notable among these are his participation in the two-day conclave on "MBA Pedagogy for the 21st Century Business School" at IIM Bangalore and his role as a resource person in various workshops on syllabus revision and curriculum design.  \n Dr Ramamurthy's passion for exploring new pedagogical tools and methods has been evident throughout his career. He has consistently advocated for integrating technology in teaching and fostering a research-driven learning environment. His strategic vision, combined with his dedication to student welfare, positions him as an inspiring leader who will further elevate the standards of AIMS Institutes, Peenya, Bengaluru, Karnataka.`,
    message: `"Dear Students, Welcome to AIMS Institutes — where your future begins! At AIMS, we provide a dynamic environment supported by world-class infrastructure — smart classrooms, innovation labs, a vibrant library, and centres for research and entrepreneurship. Here, learning goes beyond academics, preparing you to be leaders in a globalized world. "Great things never come from comfort zones." Guided by expert faculty and a diverse student community, your journey here will be full of opportunities for growth, discovery, and success. Dream big, work hard, and make the most of every opportunity. We are proud to have you with us — and excited to see the amazing things you will achieve!"`,
  },
]

const FoundersMessage = () => {
  const [activeTabs, setActiveTabs] = useState(foundersData.map(() => "about"))
  const [showFullAbout, setShowFullAbout] = useState(
    foundersData.map(() => false)
  )

  const handleTabClick = (index, tab) => {
    const updatedTabs = [...activeTabs]
    updatedTabs[index] = tab
    setActiveTabs(updatedTabs)
  }

  const toggleReadMore = (index) => {
    const updated = [...showFullAbout]
    updated[index] = !updated[index]
    setShowFullAbout(updated)
  }

  return (
    <section className="bg-white text-gray-800 py-10 px-6 lg:px-20 space-y-20">
      {foundersData.map((item, index) => {
        // Split first 4 lines approx for Read More functionality
        const words = item.about.split(" ")
        const firstPart = words.slice(0, 50).join(" ") 
        const remainingPart = words.slice(50).join(" ")

        return (
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
            <div className="lg:w-2/3 space-y-5 text-center lg:text-left ">
              <h3 className="italic text-[#A12876] text-3xl lg:text-4xl font-serif  ">
                {item.title}
              </h3>
              <div>
                <div className="sm:-mt-6 -mt-6 text-[20px] md:text-[20px] lg:text-[28px] !text-black !font-semibold whitespace-pre-line ">
                  {item.name}
                </div>
                <div className="-mt-2 text-[20px] md:text-[20px] lg:text-[28px] !text-black !font-semibold whitespace-pre-line ">
                  {item.names}
                </div>

                {/* <p className="leading-relaxed font-serif whitespace-pre-line">
                  {item.designation}
                </p> */}
              </div>

              {/* Tabs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Button
                  variant="placement"
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    activeTabs[index] === "about"
                      ? "bg-[#A12876] text-black"
                      : "bg-white !text-[#A12876] border border-[#A12876] hover:bg-[#A12876] hover:!text-white"
                  }`}
                  onClick={() => handleTabClick(index, "about")}
                >
                  About {item.title.replace("Our ", "")}
                </Button>

                <Button
                  variant="placement"
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    activeTabs[index] === "message"
                      ? "bg-[#A12876] text-black"
                      : "bg-white !text-[#A12876] border border-[#A12876] hover:bg-[#A12876] hover:!text-white"
                  }`}
                  onClick={() => handleTabClick(index, "message")}
                >
                  {item.title.replace("Our ", "")}’s Message
                </Button>
              </div>

              {/* Content */}

              <div className="mt-4 text-left ">
                {activeTabs[index] === "about" ? (
                  <>
                    <p
                      className={`leading-relaxed text-base whitespace-pre-line overflow-hidden !text-black ${
                        !showFullAbout[index] ? "line-clamp-7" : ""
                      }`}
                    >
                      {item.about}
                    </p>

                    <button
                      className="text-black !font-semibold hover:text-[#A12876] mt-2 transition"
                      onClick={() => toggleReadMore(index)}
                    >
                      {showFullAbout[index] ? "Read Less" : "Read More"}
                    </button>
                  </>
                ) : (
                  <p className="leading-relaxed text-base">{item.message}</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default FoundersMessage
