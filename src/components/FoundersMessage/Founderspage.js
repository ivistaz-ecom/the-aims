"use client"
import React, { useState } from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const foundersData = [
  {
    title: " Founder",
    titles: ["About  Founder", " Founder’s Message"],
    name: "Dr Kerron G Reddy",
    names: "Founder, AIMS Institutes",
    email: "founder@theaims.ac.in",
    image: "/founders-message/leader-img1.webp",
    about: `Dr Kerron G Reddy is the Founder of AIMS Institutes, Peenya, Bangalore, Karnataka, India which she established in 1994. She is an accomplished educationist with demonstrated ability to lead, teach, motivate, and direct students while maintaining high interest and achievement in research, projects and consultancy services. A multifaceted social entrepreneur, administrator and academician, she has over 30 years’ rich experience in institution building, teaching, research and running the operations of premier institutions of higher education in India and overseas.
  
  Dr Kerron G Reddy holds a PhD in Management from Bangalore University and double post graduate degrees, MBA in Human Resources Management from Bangalore University, Karnataka and MA in English Literature from Kakatiya University, Warangal, Telangana. Dr Kerron G Reddy has several research publications to her credit and has presented papers in various reputed journals in India and overseas. Under her guidance seven research scholars were awarded PhD by the University of Mysore.
  
  Dr Kerron G Reddy believes in empowering students with 360-degree learning and help them be the leaders of tomorrow. In pursuit of this philosophy, she set up focus centers at AIMS for Entrepreneurship, Sustainability, Community Services, Consultancy, International Liaison and Student Development. Each focus centre headed by a professional from the field strives continuously to realise Dr Kerron G Reddy’s dream of nurturing ideal future citizens of tomorrow with social sensitivity and a global perspective.
  
  Dr Kerron G Reddy’s vast experience in the field of education has naturally resulted in her being accepted as expert advisor in the field. She has been contributing towards excellence in education sector in India with her active participation as a Certified Assessor for NAAC. She has also served as a member of University Academic Council, Syndicate member, Senate member, and Member of UGC Advisory Committee. Dr Kerron G Reddy is deeply sensitive to the societal needs and also engages herself in uplifting the backward sections of the society. She was awarded the title of Sustainable Diplomacy Governor, by SUNFO Global Federation, Sri Lanka in 2022. She is also the Managing trustee of a charity organisation, Needzz that supports underprivileged members of the society.`,
    message:
      "Having a single-minded focus on addressing student needs, we are clear that it is our responsibility to help our students realize their goals in an increasingly competitive world. We have consistently produced excellent results and AIMS alumni can be found at premier organizations in India and overseas. From academic excellence to leadership qualities, in a nurturing environment with required infrastructure, AIMS offers everything needed to succeed as a student.",
  },

  {
    title: " CEO",
    titles: ["About  CEO", " CEO’s Message"],
    name: "Meka Priyanandan Reddy",
    names: "CEO, AIMS Institutes",
    email: "priyanandan@theaims.ac.in",
    image: "/founders-message/leader-img2.webp",
    about: `Dr Meka Priyanandan Reddy is the CEO of AIMS Institutes, having dedicated over two decades to integrating higher education and technology. Earlier, as the COO of AIMS Institutes for over a decade, he pioneered innovative collaborations that have yielded profound regional and global impacts.

He champions a future where learning transcends traditional boundaries, equipping students with the right attitude, skills, and knowledge. A technological evangelist, Dr Priyanandan leverages digital innovation to drive institutional growth. His entrepreneurial and networking acumen bridge the gap between academia, industry, and global markets.

Dr Priyanandan Reddy completed his B.Tech from SRM University, Chennai, his MBA from Salford University, UK, and received an Honorary Doctorate in Higher Education from an International University in South Korea.

He is a member of “Chaîne des Rôtisseurs,” an International Association of Gastronomy established in over 75 countries, and also a member of EUHOFA, enhancing his global reach and enabling cross-border collaborations for academic excellence.`,
    message: `"At AIMS, we are driven by a legacy of academic excellence, entrepreneurial spirit, global vision, and social responsibility. Our mission is to inspire and equip students to become professionals of global caliber, fostering a vibrant learning environment where ideas thrive, diversity is celebrated, and every individual is empowered to succeed. Education at AIMS is a journey of growth, discovery, and transformation. With exceptional faculty, dedicated staff, state-of-the-art facilities, and strong industry collaborations, we ensure our students receive an education that is both relevant and future-ready. Our alumni, making their mark across the globe, stand as a proud testament to the strong foundations and skills nurtured at AIMS. I warmly invite you to explore the opportunities at AIMS and take the next steps towards realising your dreams and aspirations."`,
  },
  {
    title: " Executive Director",
    titles: ["About  Executive Director", " Executive Director’s Message"],
    name: "Dr Roja Reddy Meka",
    names: "Executive Director, AIMS Institutes",
    email: "rojareddy@theaims.ac.in",
    image: "/founders-message/leader-img3.webp",
    about: `Dr Roja Reddy Meka is a visionary educationist, institutional leader, and academic strategist, widely respected for her transformational contributions to higher education in India. She has spent over 16 years crafting academic experiences that empower learners, inspire faculty, and elevate institutions. Her leadership journey began in 2008 as Director of Admissions at AIMS Institutes, Bangalore where she revolutionised admission procedures, championed diversity, and instituted systems to manage over 21 academic programs. From 2012 to 2022, she concurrently served as Director of Undergraduate Education, playing a central role in faculty recruitment, curriculum development, and academic operations across nine major programs. Under her stewardship, key UG programs like BBA, BCA & BHM have been consistently ranked in national excellence categories by GHRDC and RI World Rankings.
  
  Dr Roja Reddy holds a PhD in Management, MBA in HR from Bangalore University and Bachelor of Architecture from JNTU, Hyderabad. She has contributed to the book of knowledge with her comprehensive research on excellence in higher education and global Universities.
  
  Today as Executive Director of AIMS Institutes, Dr Roja Reddy leads an ecosystem of more than 2000 students, overseeing UG, PG, and doctoral offerings, as well as pre-university programs. Her focus on autonomy-readiness, strategic leadership development, HR policy formation, as well as taking quality initiatives has reinvigorated institutional processes and strengthened academic agility. Dr Roja Reddy also plays a key role in conceptualising AIMS academic policies, leveraging both her doctoral research on world class universities and deep institutional experience. Her dedication to quality, innovation, and human capital has made her a trusted thought leader in shaping new-generation educational ecosystems. Dr Roja Reddy has been instrumental in envisioning AIMS Institutes to soon become an autonomous institution. Currently, she’s also steering the development of a new and distinct University in Karnataka as its Co-founder.
  
  Her contributions to society have been widely recognised. Dr Roja was appointed as the ‘Sustainable Human Development Accelerator’ by the Global Chairman of SUNFO Global Federation, Sri Lanka in 2022. In 2023, she was honored as one of the ‘Power Women’ by Vision Digital, an accomplishment acknowledged by the Karnataka Book of Records. Most recently, in 2025, she was recognised as the Leading Woman Educationist by the Peenya Industries Association, Bangalore, celebrating her unwavering commitment to transformative education.`,
    message: `"Dear Students, Congratulations on becoming an ‘AIMER’! Welcome to AIMS Institutes — a place where you will transform into confident, ethical, and globally-minded professionals. At AIMS, we combine multidisciplinary learning with research, entrepreneurship incubation, and real-world projects. Supported by our experienced faculty and expert professionals, you will receive a 360-degree education designed to prepare you for the dynamic global workplace. Our campus celebrates diversity, echoing the spirit of Vasudhaiva Kutumbakam — The World is One Family. Here, you will build lifelong friendships and learn the values of equality, inclusivity, and empathy. We maintain a strong commitment to academic excellence and discipline while nurturing your professional growth and ethical sensitivity. Our alumni have made their mark globally, and we are confident you will too. We look forward to supporting you on this exciting journey and making your time at AIMS Institutes truly unforgettable."`,
  },
  {
    title: " Principal",
    titles: ["About Principal", "Principal's Message"],
    name: "Dr Rama Murthy",
    names: "Principal, AIMS Institutes",
    email: "principal@theaims.ac.in",
    image: "/founders-message/leader-img04.webp",
    about: `As the Principal of AIMS Institutes, Dr Ramamurthy focuses on strengthening academic programs, promoting research, and enhancing industry collaborations. He has held several leadership roles, including Associate Professor, Program Director, and Registrar, before becoming Principal.

He holds a PhD in Management from Dravidian University, an MPhil, and an MBA in Finance. His prolific research includes 24 published papers, 27 international presentations, and co-authoring a patent titled “Monetary Incentives and Employee Performance.”

Dr Ramamurthy has authored books like “Advanced Financial Accounting,” “Business Finance,” and “Corporate Accounting,” and has been honoured with the “Dr Radhakrishna Shikshana Ratna National Award.”`,
    message: `Dear Students, Welcome to AIMS Institutes — where your future begins! At AIMS, we provide a dynamic environment supported by world-class infrastructure — smart classrooms, innovation labs, a vibrant library, and centres for research and entrepreneurship. Here, learning goes beyond academics, preparing you to be leaders in a globalized world. "Great things never come from comfort zones." Guided by expert faculty and a diverse student community, your journey here will be full of opportunities for growth, discovery, and success. Dream big, work hard, and make the most of every opportunity. We are proud to have you with us — and excited to see the amazing things you will achieve!`,
  },
]

const FoundersMessage = () => {
  const [activeTabs, setActiveTabs] = useState(foundersData.map(() => 0)) // 0 = first tab (About)
  const [showFullAbout, setShowFullAbout] = useState(
    foundersData.map(() => false)
  )

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
              <div className="-mt-2 text-[20px] md:text-[20px] lg:text-[28px] text-black !font-semibold whitespace-pre-line"> 
                <a href={`mailto:${item.email}`} className="text-[#A12876] underline"> {item.email}</a>
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
                  cursor="pointer"
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
                    className={`leading-relaxed text-base  whitespace-pre-line text-black  ${
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
