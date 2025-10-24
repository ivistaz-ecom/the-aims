"use client"
import React, { useState } from "react"
import Image from "next/image"

const PatentsTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(2025)

  const patentsData = {
    2025: [
      {
        title: "OBE RANKINGS 2025 - “Outcome Based Learning“",
        description:
          "Positioned in the Titanium Band in India for India Academia Rankings",
      },
      {
        title: "GHRDC Best School of business (BBA)",
        description:
          "5th Best Private Institution for BBA in India Under “SUPER EXCELLENCE” Category",
      },
      {
        title: "GHRDC Best School of Information Technology",
        description:
          "2nd Best Private Institution for MCA in India Under “SUPER EXCELLENCE” Category",
      },
      {
        title: "GHRDC Best Hotel Management Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Institution for BHM in India Under “SUPER
              EXCELLENCE” Category
            </li>
            <li>No.1 Best Private Institution for BHM in Bangalore</li>
          </ul>
        ),
      },
      {
        title: "ET Now Best Education Brands 2025",
        description:
          "Recognised as one of the Best Education Brands 2025 by ET Now!",
      },
    ],
    2024: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " Business Today India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>16th Best Private Business School in South India</li>
            <li>
              17th Best Private Business School in South India for Selection
              Process
            </li>
            <li>
              36th Best Private Business School in India for Future Orientation
            </li>
          </ul>
        ),
      },
      {
        titles: "THE WEEK India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private Business School in Bangalore</li>
            <li>10th Best Private Business School in South India</li>
            <li>39th Best Private Business School in India</li>
          </ul>
        ),
      },
      {
        titles: "Outlook India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Affiliated Best Private Business School in Karnataka</li>
            <li>15th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Fortune India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>7th Best Private Business School in Bangalore</li>
            <li>20th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best BBA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Private Institution for BBA in South India</li>
            <li>
              4th Best Private Institution for BBA in India Under “SUPER
              EXCELLENCE” Category
            </li>
          </ul>
        ),
      },
      {
        titles: "Outlook Best BBA Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              24th Best Colleges of India - Under TOP 130 Private Institutes in
              All India
            </li>
            <li>
              7th Best Colleges of India - Under TOP 130 Private Institutes in
              South India
            </li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM  ",
        titles: " The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>7th Best Private Hotel Management in India</li>
            <li>3rd Best Private Hotel Management in the South</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best Hotel Management Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Institution for BHM in India Under “SUPER
              EXCELLENCE” Category
            </li>
            <li>No.1 Best Private Institution for BHM in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Outlook Best BHM Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Best Colleges of India - Under TOP 30 Private Institutes in
              All India
            </li>
            <li>
              2nd Best Colleges of India - Under TOP 30 Private Institutes in
              South India
            </li>
          </ul>
        ),
      },
      {
        title:
          "AIMS SCHOOL OF INFORMATION TECHNOLOGY \n Outlook Best BCA Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              20th Best Colleges of India - Under TOP 109 Private Institutes in
              All India
            </li>
            <li>
              11th Best Colleges of India - Under TOP 130 Private Institutes in
              South India
            </li>
          </ul>
        ),
      },
      {
        title: "GHRDC Best MCA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Institution for MCA in India Under “SUPER
              EXCELLENCE” Category
            </li>
            <li>No.1 Best Private Institution for MCA in Karnataka</li>
          </ul>
        ),
      },
      {
        title:
          "AIMS SCHOOL OF COMMERCE & FINANCE \n Outlook Best BCOM Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              25th Best Colleges of India - Under TOP 140 Private Institutes in
              All India
            </li>
            <li>
              12th Best Colleges of India - Under TOP 140 Private Institutes in
              South India
            </li>
          </ul>
        ),
      },
      {
        title:
          "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS \n Outlook Best MSW Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              10th Best Colleges of India - Under TOP 35 Private Institutes in
              All India
            </li>
            <li>
              7th Best Colleges of India - Under TOP 35 Private Institutes in
              South India
            </li>
          </ul>
        ),
      },
    ],

    2023: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " Outlook India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>14th Best Private Business School in South India</li>
            <li>No.1 Affliliated Best Private business School in Karnataka</li>
          </ul>
        ),
      },
      {
        title: "THE WEEK India’s Best B-School - MBA",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>38th Best Private Business School in India</li>
            <li>9th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Business Today India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              48th Best Private Business School in India for Furure Orientation.
            </li>
            <li>17th Best Private Business School in South India</li>
            <li>
              13th Best Private Business School in South India for Learning
              Experience
            </li>
          </ul>
        ),
      },
      {
        titles: "India Today India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Career360 India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Ranked AAA in the Best Private Business School category in
              Karnataka
            </li>
          </ul>
        ),
      },
      {
        titles: "Outlook India's Best Colleges - BBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>25th Best Private BBA College in India</li>
            <li>13th Best Private BBA College in South India</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best BBA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              7th Best in India under “Super Excellence” Category, among Private
              BBA Colleges
            </li>
            <li>5th Best Private BBA college in South India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM",
        titles: " Outlook India's Best Colleges - BHM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private Hotel Management Institution in India</li>
            <li>
              2nd Best Private Hotel Management Institution in South India
            </li>
            <li>No.1 Private Hotel Management Institution in Karnataka</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best Hotel Management Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Best in India under “Super Excellence” Category, among Private
              Hotel Management Institution
            </li>
            <li>No.1 Private Hotel Management Institution in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "THE WEEK Best Colleges of India - BHM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>5th Best Private Hotel Management in India</li>
            <li>3rd Best Private Hotel Management in the South</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF INFORMATION TECHNOLOGY",
        titles: "GHRDC Best MCA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Best in India under “Super Excellence” Category, among Private
              MCA Colleges
            </li>
            <li>3rd Best Private MCA college in South India</li>
          </ul>
        ),
      },
      {
        title: "Outlook India's Best Colleges - BCA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>26th Best Private BCA College in India</li>
            <li>14th Best Private BCA College in South India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF COMMERCE & FINANCE",
        titles: "Outlook India's Best Colleges - BCOM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>28th Best Private BCOM College in India</li>
            <li>12th Best Private BCOM College in South India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS",
        titles: "Outlook India's Best Colleges - MSW",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>11th Best Private MSW College in India</li>
            <li>7th Best Private MSW College in South India</li>
          </ul>
        ),
      },
      {
        titles: "India Today’s Best Colleges of India - MSW",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private MSW College in Bangalore</li>
          </ul>
        ),
      },
    ],
    2022: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>34th Best Private Business School in India</li>
            <li>8th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Fortune India",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>17th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Business Today",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              45th Best Private Business School in India for Learning Experience
            </li>
          </ul>
        ),
      },
      {
        titles: "India Today",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>20th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Outlook Best BBA Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>30th Best Private BBA College in India</li>
            <li>9th Best Private BBA College in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC BBA College Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>1st Rank in the category of Eminence in India</li>
            <li>5th Best BBA college in South</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM",
        titles: "GHRDC Hotel Management Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              4th Best Private Hotel Management Institution under “Super
              Excellence” Category in India
            </li>
            <li>
              2nd Best Private Hotel Management Institution under “Super
              Excellence” Category in Bangalore
            </li>
          </ul>
        ),
      },
      {
        titles: " Outlook Best Hotel Management Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>9th Best Private Hotel Management Institute in India</li>
            <li>2nd Best Private Hotel Management Institute in Bangalore</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF INFORMATION TECHNOLOGY",
        titles: "Outlook Best BCA Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>29th Best Private BCA College in India</li>
            <li>8th Best Private BCA College in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC BCA College Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>5th Rank in the category of Super Excellence in India</li>
            <li>4th Best BCA college in South</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF COMMERCE & FINANCE",
        titles: "Outlook Best BCOM Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>30th Best Private BCOM College in India</li>
            <li>6th Best Private BCOM College in Bangalore</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Outlook Best MSW Colleges Survey</li>
            <li>11th Best Private MSW College in India</li>
            <li>2nd Best Private MSW College in Bangalore</li>
          </ul>
        ),
      },
    ],
    2021: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " The Week Best B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>32nd Best Private Business School in India</li>
            <li>7th Best Private Business School in South India</li>
            <li>3rd Best Private Business School in Bangalore</li>
            <li>Business Today B -School Survey</li>
            <li>
              4th Best Private Business School in the category of Top 100 Living
              Experience in Bangalore
            </li>
            <li>
              5th Best Private Business School in the category of Top 100
              Learning Experience in Bangalore
            </li>
            <li>
              6th Best Private Business School in the category of Top 100 Future
              Orientation in Bangalore
            </li>
          </ul>
        ),
      },
      {
        titles: "India Today B-School Survey",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>20th Best Private Business School in South India</li>
            <li>6th Best Private Business School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Outlook Survey Best Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>32nd Best BBA colleges in India</li>
            <li>9th Best BBA college in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Careers360 B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Best B- School Rating of “AAA”</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM",
        titles: "GHRDC Hotel Management Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              4th Best Private Hotel Management Institution under “Super
              Excellence” Category in India
            </li>
            <li>
              2nd Best Private Hotel Management Institution under “Super
              Excellence” Category in India
            </li>
          </ul>
        ),
      },
      {
        titles: "The Week Best Hotel Management Schools Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private Hotel Management in India</li>
            <li>3rd Best Private Hotel Management in the South</li>
            <li>2nd Best Private Hotel Management in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "India Today Hotel Management Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private Hotel Management in Karnataka</li>
            <li>3rd Best Private Hotel Management in Bangalore</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS",
        titles: " India Today Social Work Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>6th Best Emerging College in Social Work, Karnataka</li>
            <li>4th Best Emerging College in Social Work, Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Outlook Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Best MSW colleges in India</li>
            <li>3rd Best MSW College in Bangalore</li>
          </ul>
        ),
      },
    ],
    2020: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " The Week Best B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best Private Business School in Bangalore</li>
            <li>7th Best Private Business School in South India</li>
          </ul>
        ),
      },
      {
        titles: "India Today B-School Survey",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>5th Best Private Business School in Bangalore</li>
            <li>15th Best Business School in South India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM",
        titles: "GHRDC Hotel Management Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              4th Best Private Hotel Management Institution under “Super
              Excellence” Category in India
            </li>
          </ul>
        ),
      },
      {
        titles: "The Week Best Hotel Management Schools Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best Private Hotel Management Institute in Bangalore</li>
            <li>5th Best Private Hotel Management Institution in India</li>
          </ul>
        ),
      },
      {
        titles: "India Today",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best Private Hotel Management in Bangalore</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS",
        titles: "India Today",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Emerging College in Social Work, Bangalore</li>
          </ul>
        ),
      },
    ],
    2019: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " The Week Best B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>The Week Best B-School Survey</li>
            <li>Top Best Private Business School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Times B School Survey",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best Private Business School in Karnataka</li>
          </ul>
        ),
      },
      {
        titles: "India Today B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Private Best Private Business School in Bangalore</li>
            <li>29th Best Private Business School in India</li>
          </ul>
        ),
      },
      {
        titles: "Business Today B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Private Best Private Business School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "AICTE-CII Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Platinum ranking with a score band {">"} 30</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM",
        titles: "GHRDC Hotel Management Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Hotel Management Institute in Karnataka under
              “Super Excellence” Category
            </li>
            <li>
              5th Best Private Hotel Management Institute in India under “Super
              Excellence” Category
            </li>
          </ul>
        ),
      },
      {
        titles: "The Week Best Hotel Management Schools Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best Private Hotel Management Institute in Bangalore</li>
            <li>5th Best Private Hotel Management Institute in India</li>
          </ul>
        ),
      },
    ],
    2018: [
      {
        titles: "NIRF 2018",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Among Top 100 Institutes in India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Times of India B-School Survey",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best B-School in Karnataka</li>
            <li>14th Best B-School in South Zone</li>
          </ul>
        ),
      },
      {
        titles: "The Week Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd top B-School in Bengaluru</li>
            <li>7th top Private B-School in South Zone</li>
            <li>10th top B-School in South Zone</li>
            <li>26th top Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "Business Today B -School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Private B-School in Bangalore</li>
            <li>29th Best Private B-School in India</li>
            <li>52nd best B-School in India</li>
            <li>16th Best B-School in South</li>
            <li>10th Best Private B-School in South</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "GHRDC Hotel Management Survey, 2018.",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Hotel Management Institution in Karnataka</li>
            <li>5th Best Private Hotel Management in India</li>
            <li>
              13th Best Institution ranked by Faculty, Publication, Research,
              Consultancy, CDP and other programs.
            </li>
            <li>
              13th Best Institution ranked by Placement, Social Responsibility,
              Networking & Industry Interface.
            </li>
          </ul>
        ),
      },
    ],
    2017: [
      {
        titles: "NIRF 2017",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Among Top 100 Institutes in India</li>
            <li>Among Top 6 Management Institutes in Karnataka</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Times of India B-School Survey 2017",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Top B-School in Karnataka</li>
            <li>Top Private B-School in Bangalore</li>
            <li>2nd Best Private B-School in Bangalore</li>
            <li>8th Best Private B-School in South India</li>
            <li>12th Best B-School in South India</li>
            <li>15th Best B-School in India for Learning Experience</li>
            <li>22nd Best Private B-School in India</li>
            <li>25th Best B-School in India</li>
            <li>33rd Best Private B-School in India</li>
            <li>49th Best B-School in India</li>
            <li>Business Today B-School Survey 2017</li>
            <li>22nd Best Private B-School in India</li>
            <li>15th Best B-School in India for Learning Experience</li>
            <li>Top Private B-School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Business Standard- IMRB International Survey, 2017",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              &quot;Category &#39;A&#39; Business School - Super League A4&quot;
            </li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "GHRDC Survey, 2017",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Private Hotel Management Institute in Karnataka</li>
            <li>
              5th Best Private Hotel Management Institute in India under “Super
              Excellence” Category
            </li>
          </ul>
        ),
      },
      {
        titles: "The Week, June 2017",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Rank - Top Private Hotel Management Colleges in South Zone
            </li>
            <li>6th Rank - Top Private Hotel Management Colleges in India</li>
            <li>17th Rank - Top Hotel Management Colleges in India</li>
          </ul>
        ),
      },
    ],
    2016: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Outlook Business, 2016",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>49th Rank all over India - Top 100 Management Schools</li>
          </ul>
        ),
      },
      {
        titles: "'The Week', 2016",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>53rd Place in all over India - out of 156 B-Schools</li>
            <li>34th Place in Private B-Schools</li>
            <li>9th Place in South Zone private B-Schools</li>
            <li>4th Place in Bangalore B-Schools</li>
          </ul>
        ),
      },
      {
        titles: "Times of India B-School Survey 2016.",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked No. 1 Private B-School in South zone</li>
            <li>No. 1 Private B-School in Karnataka</li>
            <li>2nd Best B-School in Karnataka</li>
            <li>3rd Best B-School in South-Zone</li>
            <li>14th Best Private B-School in India</li>
            <li>27th Best B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "Business Standard- IMRB International Survey, 17 June 2016",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              &quot;Category &#39;A&#39; Business School - Super League A4&quot;
            </li>
          </ul>
        ),
      },
      {
        titles: "Outlook Money",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>10th Rank - Top 25 Financial Specialists in India</li>
            <li>9th Rank - Top 10 Business School in Metros</li>
            <li>10th Rank - Top 10 Business School by Student Intake</li>
            <li>
              4th Rank - Top 10 Business School by Infra & Living Experience
            </li>
            <li>6th Rank - Top 10 Business School by Industry Interface</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "GHRDC Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Top Private Hotel Management Institutes in India</li>
            <li>
              5th Best Top 20 Hotel Management Institutes (Government & Private)
              in India by faculty, publication, research, consultancy, CDP &
              other programs
            </li>
          </ul>
        ),
      },
      {
        titles: "The Week Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Rank - Top Hotel Management Colleges in India</li>
            <li>7th Rank - Top Private Hotel Management Colleges in India</li>
            <li>
              4th Rank - Top Private Hotel Management Colleges in South Zone
            </li>
          </ul>
        ),
      },
    ],
    2015: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Times B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked 4th Best B-School in South India</li>
            <li>Ranked 1st in Bangalore</li>
            <li>Ranked 22nd in India</li>
          </ul>
        ),
      },
      {
        titles: "Digital Learning",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked A++</li>
          </ul>
        ),
      },
    ],
    2014: [
      {
        titles:
          "Awarded “Great Place to Study” India Edition 2014-16 Global Indian Institutes by SkillTree on 24th June 2014 at London, United Kingdom",
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Business Today",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "Businessworld",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>21st Best Private B-School in India</li>
            <li>1st Best Private B-School in Intellectual Capital</li>
          </ul>
        ),
      },
      {
        titles: "Outlook",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>36th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>31st Best Private B-School in India</li>
            <li>3rd Best B-School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Careers 360",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>36th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "Times B-School Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>44th Best B-School in India</li>
            <li>9th Best B-School in South Zone</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>6th Best Private Hotel Management Institute in India</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best Private Hotel Management Institute in India</li>
            <li>
              1st Best Private Hotel Management Institute in the “Super
              Excellence” category
            </li>
          </ul>
        ),
      },
    ],
    2013: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Outlook",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>56th Best B–School in India</li>
          </ul>
        ),
      },
      {
        titles: "Business Today",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>19th Best Private B-School in India</li>
            <li>34th Best B–School in India</li>
          </ul>
        ),
      },
      {
        titles: "The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>45th Best B-School in India</li>
            <li>26th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "Businessworld",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Best B School in India</li>
          </ul>
        ),
      },
      {
        titles: "Careers 360",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>13th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "CSR-GHRDC",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>25th Best Hotel Management Institute in India</li>
            <li>4th Best Private institute in India for Hotel Management</li>
          </ul>
        ),
      },
    ],
    2012: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " IACBE Accredited",
      },
      {
        titles: " Outlook",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked 57th Best B-School in India</li>
            <li>Ranked 54th Best Private B-School in India</li>
            <li>Ranked 3rd Best Private B-School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Business Today",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked 44th Best B–School in India</li>
            <li>Ranked 39th Best Private B-School in India</li>
            <li>Ranked 4th Best Private B-Schools in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Business India",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked 40th Best B–School in India</li>
            <li>Ranked 37th Best Private B-School. in India</li>
            <li>Ranked 3rd Best Private B-School in Bangalore</li>
          </ul>
        ),
      },
      {
        titles: "Careers 360",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              13th under the category Private Ownership & B -School in Tier 1
              Cusp
            </li>
          </ul>
        ),
      },
      {
        titles: "Businessworld",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Best B-School in South Zone </li>
            <li>4th in Intellectual Capital </li>
            <li> 11th in Industry Interface</li>
            <li>17th Best B-School in India </li>
            <li>21st with respect to Senior Faculty </li>
            <li> 21st by Parents</li>
            <li>23rd by Aspirant Students </li>
            <li>25th in Placements </li>
            <li>32nd in Infrastructure</li>
            <li> 33rd in Pedagogy</li>
          </ul>
        ),
      },
      {
        titles: "The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Ranked 4th Best B-School in Bangalore</li>
            <li>Ranked 53rd Best B-School in India</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>5th Best Hotel Management Institute in Bangalore</li>
            <li>38th Best Hotel Management Institute in India</li>
          </ul>
        ),
      },

      {
        titles: "GHRDC",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Hotel Management Institute in the state of Karnataka
            </li>
            <li>
              1st Best Hotel Management Institute in India under “Excellence”
              Category
            </li>
          </ul>
        ),
      },
    ],
    2011: [
      {
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              NEN Entrepreneurship Week India 2011 Championship Trophy - NEN
              (National Entrepreneurship Network)
            </li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              B-School Leadership Award - Asia&quot;s Best B-School Awards 2011
              (Suntec, Singapore)
            </li>
            <li>
              Best B-School for Industry Related Curriculum in Operations
              Management - Star News Best B-School Awards 2011
            </li>
          </ul>
        ),
      },
      {
        titles: "Businessworld",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Best B-School in India</li>
            <li>5th in Intellectual Capital</li>
            <li>26th in Infrastructure</li>
            <li>27th in Industry Interface</li>
            <li>32 in Pedagogy</li>
            <li>40th in Placements</li>
            <li>37th Rank by Industry</li>
            <li>39th ranked by Faculty</li>
            <li>42nd by Sudents</li>
            <li>43rd by Parents</li>
          </ul>
        ),
      },
      {
        titles: "The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>16th Best B-School in South Zone</li>
          </ul>
        ),
      },
      {
        titles: "Dainik Bhaskar",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>10th Best B-School in India</li>
          </ul>
        ),
      },

      {
        titles: "Careers 360",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              27th under the category Private Ownership & B-School in Tier 1
              Cusp
            </li>
            <li>15th Best B-School in the South Zone</li>
          </ul>
        ),
      },

      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Top Hotel Management Institute of India</li>
          </ul>
        ),
      },
    ],
    2010: [
      {
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              AIMS is accredited as an &#39;A&#39; Grade college by NAAC with
              one of the highest CGPA of 3.46 (on 4 point scale) among all
              colleges in India
            </li>
            <li>ISO 9001:2008 Certification by TUV-SUD</li>
            <li>
              Honour Roll Award for NEN e-week Celebrations - National
              Entrepreneurship Network (NEN)
            </li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Dainik Bhaskar",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>B22nd Best B-School in India</li>
            <li>Outstanding B-School in South India</li>
          </ul>
        ),
      },
      {
        titles: "Careers 360",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>35th Best B-School in India</li>
            <li>15th in South Zone</li>
          </ul>
        ),
      },
      {
        titles: "Businessworld",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>20th Best B-School in India </li>
            <li>6th Best B-School for Industry Interaction</li>
            <li>21st Best B-School in Infrastructure </li>
            <li>21st Best for Placements </li>
            <li> 40th Best for Pedagogy</li>
            <li>46th Best for Intellectual Capital. </li>
          </ul>
        ),
      },
      {
        titles: "Business India",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              41st best B-School (moved from the rating of A++ to the ranking)
            </li>
          </ul>
        ),
      },
    ],
    2009: [
      {
        titles: "Business India",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>41st Best School in India</li>
            <li>A++ Category B-School</li>
          </ul>
        ),
      },
      {
        titles: "Dalal Street",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Among Top 100 B-Schools in India</li>
          </ul>
        ),
      },

      {
        titles: "AIMA-IMRB",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>A Category Business School</li>
          </ul>
        ),
      },
    ],
    2008: [
      {
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Best Institute in Entrepreneurship Education - National Institute
              for Training in Industrial Engineering (NITIE), Mumbai
            </li>
            <li>
              Award certification in Entrepreneurship Education - NEN (National
              Entrepreneurship Network)
            </li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Best B-School Jury Award - Deccan Herald B-School Awards</li>
          </ul>
        ),
      },

      {
        titles: "Outlook",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>46th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "AIMA-IMRB",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>&#39;A&#39; Category Business School</li>
          </ul>
        ),
      },
    ],
    2007: [
      {
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>ISO 9001:2000 Certification by TUV SUD</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "Outlook",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>34th Best Private B-School in India</li>
          </ul>
        ),
      },
      {
        titles: "AIMA-IMRB",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Category &#39;A&#39; Business School</li>
          </ul>
        ),
      },
      {
        titles: "CSR-GHRDC",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>89th Best B-School in India</li>
            <li>28th in Group Ranking</li>
            <li>10th Best B-School in Karnataka</li>
          </ul>
        ),
      },
      {
        titles: "Businessworld",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>28th best B-School in India</li>
          </ul>
        ),
      },

      {
        titles: "Business India",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Category &#39;A&#39; Business School</li>
          </ul>
        ),
      },

      {
        titles: "Dalal Street",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Among Top 100 B-Schools in India</li>
          </ul>
        ),
      },

      {
        title: "AIMS SCHOOL OF HOSPITALITY & TOURISM",
        titles: "CSR-GHRDC Competition Success Review",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>No. 1 Private Hotel Management Institute in Bangalore</li>
            <li>3rd Best Private Hotel Management Institute in South India</li>
            <li> 12th Best Private Hotel Management Institute in India</li>
          </ul>
        ),
      },
    ],
    2006: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: "AIMA-IMRB Business Standard Survey",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Category &#39;A&#39; Business School</li>
          </ul>
        ),
      },

      {
        titles: "Business India",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Category &#39;A&#39; Business School</li>
          </ul>
        ),
      },
    ],
  }

  // All years from 2025 → 2006
  const years = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => 2025 - i)

  return (
    <div className="relative overflow-hidden">
      {/* Light Green Header Strip */}
      <div className="bg-[#E1F9F4] py-10 px-4 lg:px-8">
        <div className="container mx-auto  ">
          <div className="bg-[#e6f9f3] text-center">
            <p className="text-sm md:text-base  max-w-4xl mx-auto">
              At AIMS Institutes, rankings aren&#39;t the destination,
              they&#39;re the result of staying focused on our target to deliver
              education that transforms potential into performance.
            </p>
            <p className="mt-4 text-sm md:text-base  max-w-4xl mx-auto">
              As a&nbsp;
              <span className=" font-bold  monser-500 ">
                NAAC A Grade College
              </span>
              , we are recognised for academic rigour, industry relevance, and
              our ability to prepare students for the long haul. With over 30
              years of expertise, our journey is one of discipline, direction,
              and measurable outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-10 px-4 ">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-[#0C2165] playfair-300">
          Here&apos;s a look at how our efforts have <br />
          hit the mark over the years.
        </h3>
      </div>

      {/* Main Content Area - Single Column Timeline */}
      <div className="bg-white py-10 px-4 lg:px-8">
        <div className="container mx-auto ">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute top-4 bottom-4 w-[1px] bg-black"></div>

              {/* Year Sections */}
              {years.map((year) => (
                <div key={year} className="relative mb-8">
                  {/* Timeline Node */}
                  <div className="absolute left-[0.4px] -top-1 transform -translate-x-1/2">
                    <Image
                      src="/patents/patents-timeline.svg"
                      alt="Timeline Node"
                      width={50}
                      height={50}
                    />
                  </div>

                  {/* Year Button */}
                  <div>
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`md:ml-15 ml-10  px-6 py-1 rounded-full transition-all duration-300 border-1 flex items-center justify-between ${
                        selectedYear === year
                          ? "bg-[#A22877] text-white border-[#A22877]"
                          : "bg-white text-[#A22877] border-[#A22877]"
                      }`}
                    >
                      <span className="font-semibold monser-600 pr-2 text-[20px]">
                        Year {year}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          selectedYear === year ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Content Box */}
                  {selectedYear === year && (
                    <div className="md:ml-20 ml-10 mt-4 bg-[#E1F9F4] p-6 rounded-2xl">
                      <div className="flex flex-col gap-5">
                        {patentsData[year]?.map((item, index) => (
                          <div key={index}>
                            <h5 className="text-[#0C2165] monser-500 text-xl whitespace-pre-line">
                              {item.title}
                            </h5>
                            <p className="text-[#0C2165] monser-500 text-xl whitespace-pre-line mt-1">
                              {item.titles}
                            </p>

                            <div className="text-sm lg:text-base text-black mt-1">
                              {item.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatentsTimeline
