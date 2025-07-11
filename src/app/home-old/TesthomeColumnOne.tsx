"use client";
import { Heading, Button, Input } from "../../components";
import WordFlip from "../../components/WordFlip";
import "../../styles/WordFlip.module.css";
import React, {useState, useEffect } from "react";

const defaultSection = {
  section1_title: "...",
  section1_description: "...",
  section1_input_desciption: "...",
};

export default function TesthomeColumnOne() {
  const [isMobile, setIsMobile] = useState(false);
  const [section, setsection] = useState(defaultSection);
  const flipWords = ["Warehouse", "Lakehouse"];

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
          section1_title: fetchedSection.section1_title ?? defaultSection.section1_title,
          section1_description: fetchedSection.section1_description ?? defaultSection.section1_description,
          section1_input_desciption: fetchedSection.section1_input_desciption ?? defaultSection.section1_input_desciption,
        });
      } catch (error) {
        console.error("Error fetching API data:", error);
        // Set default values on error
        setsection(defaultSection);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-[152px] md:mb-[68px] flex flex-col items-center md:pt-[102px]">
      <div className="container-xs flex flex-col items-center gap-[136px] lg:gap-[102px] lg:px-5 md:gap-[102px] md:px-5 md:gap-[54px]">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="bg-gradient1 bg-clip-text flex flex-wrap items-start  gap-[15px] self-stretch overflow-hidden md:justify-center text-center md:block md:w-[99%] md:m-auto">
            <Heading
              size="heading2xl"
              as="h1"
              className="self-center  font-montserrat text-[60px] font-extrabold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px] md:inline"
              style=
                  {{
                    fontSize: isMobile  ? '29px': "",
                  }}
            >
              {section.section1_title + " "}
            </Heading>
            <Heading id="flipTheWord" size="heading2xl" as="h2" className="font-montserrat text-[60px] font-extrabold text-gray-50 lg:text-[51px] md:text-[40px] md:text-[34px]  md:inline"
            style=
              {{
                background: isMobile ? 'inherit': "",
                color: isMobile ? 'transparent': "",
                fontSize: isMobile  ? '29px': "",
              }}
             >
              {/* Data Warehouse */}
              <WordFlip words={flipWords} />
            </Heading>
          </div>
          <Heading
            size="text2xl"
            as="h3"
            className="w-[68%] text-center text-[26px] font-normal leading-9 md:leading-[20px] text-blue-100 lg:w-full lg:text-[22px] md:w-full"
            style=
                  {{
                    fontSize: isMobile  ? '16px': "",
                  }}
          >
            {section.section1_description}
          </Heading>
        </div>
        <div className="flex w-[50%] flex-col items-center gap-[18px] lg:w-full md:w-full">
          <div className="flex justify-center self-stretch ">
            <Input
              type="email"
              name="email"
              placeholder={`Company Email`}
              className="flex h-[100px] md:h-[44px] flex-grow items-center justify-center rounded-bl-[10px] rounded-tl-[10px] bg-[#EBF5FF] px-8 text-[24px] font-medium text-blue_gray-300 md:px-0 md:rounded-bl-[4px] md:rounded-tl-[4px]"
              style=
              {{
                fontSize: isMobile  ? '14px': "",
              }}
            />
            <Button className="flex h-[100px] md:h-[44px] min-w-[278px] md:min-w-[144px] flex-row items-center justify-center rounded-br-[10px] rounded-tr-[10px] md:rounded-br-[4px] md:rounded-tr-[4px] bg-deep_purple-a200 px-[34px] text-center text-[28px] font-medium text-gray-50 lg:text-[23px] md:px-4 md:text-[16px]">
              Request Demo
            </Button>
          </div>
          <Heading as="h4" className="font-montserrat text-[22px] font-medium text-indigo-200 lg:text-[18px] text-center"
          style=
          {{
            fontSize: isMobile  ? '12px': "",
          }}
          >
          {section.section1_input_desciption}
          </Heading>
        </div>
      </div>
    </div>
  );
}
