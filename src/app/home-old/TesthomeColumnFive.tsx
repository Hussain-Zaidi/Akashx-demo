"use client";
import { Img, Heading } from "../../components";
import QuerySpeedIncrease from "../../components/QuerySpeedIncrease";
import React, { Suspense, useEffect, useState } from "react";

const defaultSection = {
  section4_title1: "...",
  section4_title2_part1: "...",
  section4_title2_part2: "...",

  section4_row1_title: "...",
  section4_row1_description: "...",
  section4_row1_note: "...",

  section4_row2_title: "...",
  section4_row2_description: "...",
  section4_row2_note: "...",

  section4_row3_title: "...",
  section4_row3_description: "...",
  section4_row3_note: "...",
};

// const data = [
//   { headingText: "10x", subheadingText: "Increase in Query Speed", descriptionText: "(Speed of real time db)" },
//   { headingText: "4x", subheadingText: "Decrease in Cost", descriptionText: "(Speed of real time db)" },
//   {
//     headingText: "100%",
//     subheadingText: "Full ANSI SQL compatible ",
//     descriptionText: "(Full joins, Fast ingest, etc)",
//   },
// ];

export default function TesthomeColumnFive() {
  const [section, setsection] = useState(defaultSection);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("//akashx.ai/api/akashx-home-pages"); 
        const data = await response.json();

        // Check if data exists and set state accordingly
        const fetchedSection = data?.data?.[0] ?? {};
        
        setsection({
          section4_title1: fetchedSection.section4_title1 ?? defaultSection.section4_title1,
          section4_title2_part1: fetchedSection.section4_title2_part1 ?? defaultSection.section4_title2_part1,
          section4_title2_part2: fetchedSection.section4_title2_part2 ?? defaultSection.section4_title2_part2,
          
          section4_row1_title: fetchedSection.section4_row1_title ?? defaultSection.section4_row1_title,
          section4_row1_description: fetchedSection.section4_row1_description ?? defaultSection.section4_row1_description,
          section4_row1_note: fetchedSection.section4_row1_note ?? defaultSection.section4_row1_note,

          section4_row2_title: fetchedSection.section4_row2_title ?? defaultSection.section4_row2_title,
          section4_row2_description: fetchedSection.section4_row2_description ?? defaultSection.section4_row2_description,
          section4_row2_note: fetchedSection.section4_row2_note ?? defaultSection.section4_row2_note,

          section4_row3_title: fetchedSection.section4_row3_title ?? defaultSection.section4_row3_title,
          section4_row3_description: fetchedSection.section4_row3_description ?? defaultSection.section4_row3_description,
          section4_row3_note: fetchedSection.section4_row3_note ?? defaultSection.section4_row3_note,
        });
      } catch (error) {
        console.error("Error fetching API data:", error);
        // Set default values on error
        setsection(defaultSection);
      }
    };

    fetchData();
  }, []);

  // Map API data dynamically for the QuerySpeedIncrease component
  const dynamicData = [
    {
      headingText: section.section4_row1_title,
      subheadingText: section.section4_row1_description,
      descriptionText: section.section4_row1_note,
    },
    {
      headingText: section.section4_row2_title,
      subheadingText: section.section4_row2_description,
      descriptionText: section.section4_row2_note,
    },
    {
      headingText: section.section4_row3_title,
      subheadingText: section.section4_row3_description,
      descriptionText: section.section4_row3_note,
    },
  ];

  return (
    <div className="flex flex-col items-center md:mt-[84px] ">
      <div className="container-xs flex flex-col items-center gap-[122px]  md:px-5 md:gap-[50px]">
        <div className="flex flex-col items-center gap-1">
          <Heading
            size="text4xl"
            as="h2"
            className="bg-gradient1 bg-clip-text font-montserrat text-[36px] font-medium text-transparent lg:text-[30px] md:text-[30px] md:text-[28px] md:text-center"
              style=
                  {{
                    fontSize: isMobile  ? '24px': "",
                    width: isMobile ? '300px': '',
                  }}
          >
            {section.section4_title1}
          </Heading>
          <Heading
            size="heading2xl"
            as="h3"
            className="bg-gradient1 bg-clip-text font-montserrat text-[60px] font-bold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px] md:text-center"
              style=
                  {{
                    fontSize: isMobile  ? '24px': "",
                    width: isMobile ? '300px': '',
                  }}
          >
            <span
              style={{
                background: "linear-gradient(90deg, #7557FF, #30D5C8)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {section.section4_title2_part1}
            </span>
            {" "} 
            <span
            style={{
              background: "linear-gradient(90deg, #B8D0F2, #F4F8FF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            >{section.section4_title2_part2}</span>
          </Heading>
        </div>
        {/* <div className="flex items-center gap-[22px] md:gap-0 self-stretch md:flex-col"> */}
        <div className="flex items-center md:gap-0 md:flex-col w-full m-[0_5%_0_0%] md:m-0">
        {isMobile ? (
          <div></div>
        ) : (
          <Img
            src="circle(1).svg"
            width={1002}
            height={555}
            alt="Imagefiftyeight"
            className="h-[555px] w-[70%] self-end object-contain md:w-full md:self-auto ml-[-60px] m-[0_0%_0_-7%]"
          />
        )}
          <div className="ml-[-40px] flex w-[30%] flex-col rounded-[10px] bg-black-900_b2 md:ml-0 md:w-full md:max-w-[260px] max-w-[450px]">
            <Suspense fallback={<div>Loading feed...</div>}>
              {dynamicData.map((d, index) => (
                <QuerySpeedIncrease
                  {...d}
                  key={"list10X" + index}
                  className={`light_blue_A100_deep_purple_A200_01_border border-solid ${
                    index === 2 ? "" : "border-b"
                  }`}
                  
                />
              ))}
            </Suspense>
          </div>
          {isMobile ? (
            <Img
            src="circle(2).svg"
            width={360}
            height={360}
            alt="Imagefiftyeight"
            className="h-[304px] w-[360px] self-end object-contain md:w-full md:self-auto object-top md:w-[120%] md:max-w-[120%]"
            style={{width: isMobile ? '120%': '',}}
          />
        ) : (
          <div></div>
        )}
        </div>
      </div>
    </div>
  );
}
