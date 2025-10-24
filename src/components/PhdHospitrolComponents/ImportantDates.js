import React from "react";
import PhdTabs from "../Tab/TabProps"; // Update path as needed

const tabData = [
  {
    key: "important-dates",
    label: "Important Dates",
    content: (
      <>
        <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
          Important Dates
        </h6>
        <p className="text-gray-800 text-sm sm:text-base">
          Applications for Entrance Test shall be invited only once a year and the entrance test is conducted generally during September/October.
        </p>
      </>
    ),
  },
  {
    key: "eligibility",
    label: "Eligibility",
    content: (
      <>
        <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
          Any candidate who meets the following requirements is eligible to seek registration for a PhD program :
        </h6>
        <p className="text-gray-800 mb-4 text-sm sm:text-base">
          A candidate shall have Masters Degree or any other Degree/Diploma of the University or any other Degree/Diploma of any other University/Institution recognized as equivalent thereto, with minimum of 55% marks or equivalent Cumulative Grade Point Average (CGPA) or an equivalent Grade.
        </p>
        <p style={{ fontWeight: '600' }} className="text-gray-800 font-semibold text-sm sm:text-base mb-2">
          However, this condition is relaxed to 50% in case of:
        </p>
        <ul className="list-disc pl-5 text-gray-800 text-sm sm:text-base space-y-1">
          <li>SC/ST/Cat-I candidates</li>
          <li>In service candidates with a minimum of five years of regular experience associated with teaching profession as teachers/library professionals/physical education instructors/laboratory staff in educational institute</li>
        </ul>
      </>
    ),
  },
  {
    key: "selection-process",
    label: "Selection Process",
    content: (
      <>
        <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
          Selection Process
        </h6>
        <ul className="list-disc pl-5 text-gray-800 text-sm sm:text-base space-y-1">
          <li>Admission to PhD shall be through an Entrance Test only</li>
          <li>Applications for the Entrance Test are invited by the University once a year, generally held in September or October</li>
          <li>The Registrar (Evaluation) of University of Mysore invites applications from eligible candidates</li>
          <li>The Entrance Test consists of one paper on the broad area of PhD, lasting 3 hours and worth 100 marks</li>
          <li>The syllabus is framed by the respective Boards of Studies based on the UGC/CSIR National Eligibility Test (NET) pattern</li>
          <li>The question paper contains 50 objective type questions (1 mark each) and essay/short answer questions for 50 marks</li>
          <li>Candidates intending to pursue inter/multidisciplinary research sit for a common Entrance Test with a syllabus framed by the Inter/Multidisciplinary Board of Studies</li>
          <li>A candidate must secure at least 55 marks out of 100 (50 marks for SC/ST candidates) to be eligible to apply for admission to the PhD. program</li>
          <li>Successful completion of the Entrance Test implies eligibility for admission but does not guarantee entry into the PhD. degree program</li>
          <li>The Registrar (Evaluation) declares the results and issues eligibility certificates to successful candidates</li>
          <li>The eligibility certificate is valid for one year from the date of the Entrance Test, until the next test is notified</li>
          <li>The Entrance Test process is applicable to all candidates pursuing PhD research under the University and all affiliated research centres</li>
        </ul>
      </>
    ),
  },
];

const PhdTabPage = () => {
  return <PhdTabs tabs={tabData} />;
};

export default PhdTabPage;
