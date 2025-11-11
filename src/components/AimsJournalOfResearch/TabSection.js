import React from "react";
import JournalTabs from "./JournalTabs";

const AdmissionTabsSection = () => {
  const tabsData = [
    {
      title: "Submissions",
      heading: "",

      subheading: "Submission Guidelines",
      subcontent:
        "Authors must ensure the following before submission to minimize the risk of rejection.",
      pointsheading: "Author information:",
      points: [
        "Information of all co-authors to be provided",
        "Information while submitting and in the Manuscript should match",
      ],
      pointsheading2: "Manuscript length and formatting:",
      points2: [
        "Abstract in the proper format and required length",
        "Key messages provided",
      ],
      pointsheading3: "Tables:",
      points3: [
        "Tables to be cited within the text of the article",
        "Tables to be placed within the article",
      ],
      pointsheading4: "Figures:",
      points4: [
        "Figures to be provided in acceptable format",
        "Figures to be labelled appropriately",
        "Figures to be cited within the text of the article",
      ],
      pointsheading5: "References:",
      points5: ["All references to be cited within text of the article"],
      conclusion:
        "We accept Academic Papers (Conceptual or Empirical), Reflective Practice articles, Case Studies, and Book Reviews.",
      showButtons: true,
    },

    {
      title: "Submission Process",

      points: ["", ""],
      conclusion: (
        <>
          <p>
            Authors should submit the manuscript to &quot;AIMS Journal of
            Research&quot;. There is no charge for article submission. <br />
            <br />
            <b className="monser-600">Note:</b> Please fill in the Undertaking
            form and send the its scanned copy along with the paper to{" "}
            <a
              href="mailto:research@theaims.ac.in"
              className="text-[#000] underline"
            >
              research@theaims.ac.in
            </a>
          </p>
        </>
      ),
      showButtons: false,
    },

    {
      title: "Archives",
      heading: "",
      showButtons: false,
      points: [
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Vol-19_Iss-2_September-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2024 - Volume 19, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+18+-+Issue+2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 - Volume 18, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+18+-+Issue+1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 - Volume 18, Issue 1
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+17+-+Issue+2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2022 - Volume 17, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+17+-+Issue+1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2022 - Volume 17, Issue 1
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+16+-+Issue+2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 - Volume 16, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+16+-+Issue+1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 - Volume 16, Issue 1
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+15+-+Issue+2+.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 - Volume 15, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+15+-+Issue+1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 - Volume 15, Issue 1
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+14+-+Issue+2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2019 - Volume 14, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+14+-+Issue+1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2019 - Volume 14, Issue 1
          </a>
        </>,

        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+13+-+Issue+2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2018 - Volume 13, Issue 2
          </a>
        </>,
        <>
          <a
            href="/pdf/aims-journal-of-research/archives/AIMS+Journal+Volume+13+-+Issue+1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            2018 - Volume 13, Issue 1
          </a>
        </>,
      ],
      conclusion: (
        <>
          {/* <p>
            [Full Archive Page] (take from Archives section:{" "}
            <a className="underline" href="/aims-journal-of-research" target="_blank" rel="noopener noreferrer">
              https://www.theaims.ac.in/aims-journal-of-research
            </a>
            )
          </p> */}
        </>
      ),
    },

    {
      title: "Indexing/Abstracting",
      // heading: "PUC Admission Process:",
      points: ["DRJI", "Index Copernicus", "Indian Citation Index (ici)"],
      conclusion: "",
    },
    {
      title: "Subscription",
      // heading: "Subscription Plans",
      // points: [
      //   "Complete 10th standard with good marks",
      //   "Apply online for PUC program selection",
      //   "Submit required certificates and documents",
      //   "Complete admission formalities and start classes",
      // ],
      conclusion: "Rates (₹):",
      showPricingTable: true,
    },
  ];

  return <JournalTabs tabsData={tabsData} />;
};

export default AdmissionTabsSection;
