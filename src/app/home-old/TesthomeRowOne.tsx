"use client";

import { Button, Input, Heading } from "../../components";
import React, {useEffect, useState } from "react";

const defaultSection = {
  section6_title1: "...",
  section6_title2: "...",
  section6_description_p1: "...",
  section6_description_p2: "...",
  section6_description_p3: "...",

};

export default function TesthomeRowOne() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [section, setsection] = useState(defaultSection);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("//akashx.ai/api/akashx-home-pages"); 
        const data = await response.json();

        // Check if data exists and set state accordingly
        const fetchedSection = data?.data?.[0] ?? {};
        
        setsection({
          section6_title1: fetchedSection.section6_title1 ?? defaultSection.section6_title1,
          section6_title2: fetchedSection.section6_title2 ?? defaultSection.section6_title2,
          section6_description_p1: fetchedSection.section6_description_p1 ?? defaultSection.section6_description_p1,
          section6_description_p2: fetchedSection.section6_description_p2 ?? defaultSection.section6_description_p2,
          section6_description_p3: fetchedSection.section6_description_p3 ?? defaultSection.section6_description_p3,
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
    <div className="flex justify-center">
      <div className="container-xs flex justify-center lg:px-5 md:px-5">
        <div className="flex h-[650px] md:h-[400px] ] w-full flex-col items-center gap-[34px] rounded-[20px] border border-solid border-blue-a100 bg-[url(/images/img_image_650x1608.webp)] bg-cover bg-no-repeat px-14 py-20 shadow-xs lg:h-auto lg:py-8   md:p-[40px 20px 20px 40px] md:px-[18px] md:py-[40px] md:mb-[100px]"
        style=
        {{
          backgroundSize: isMobile  ?  '200%' : "",
          backgroundPosition:  isMobile  ? 'bottom': "",
        }}
        >
          <div className="mx-[46px] flex w-[58%] flex-col items-center gap-3.5 lg:w-full md:mx-0 md:w-full">
            <Heading
              size="headingxl"
              as="h2"
              className="bg-gradient1 bg-clip-text text-center font-montserrat text-[50px] font-extrabold uppercase leading-[60px] text-transparent lg:text-[42px] md:text-[34px] md:text-[28px]"
              style=
                  {{
                    fontSize: isMobile  ? '28px': "",
                    lineHeight: isMobile  ? 'normal': "",
                  }}
            >
              <>
                {section.section6_title1}
                <br className="md:hidden" ></br>
                {section.section6_title2}
              </>
            </Heading>
            <Heading
              size="text3xl"
              as="h3"
              className="text-[30px] font-semibold text-gray-50 lg:text-[25px] md:text-[24px] md:text-[22px] md:text-center md:w-[250px]"
              style=
                  {{
                    fontSize: isMobile  ? '16px': "",
                    lineHeight: isMobile  ? '23px': "",
                  }}
            >
                {section.section6_description_p1}
                {" "}
              <span style={{color:'#30D5C8'}}>
                {section.section6_description_p2}
              </span>
                {" "}
                {section.section6_description_p3}
            </Heading>
          </div>
          <div className="mb-[174px] flex w-[60%] justify-center lg:w-full md:w-full">
            <Input
              type="email"
              name="email"
              placeholder={`Company Email`}
              className="flex h-[100px] md:h-[44px] w-[58%] items-center justify-center rounded-bl-[10px] rounded-tl-[10px] md:rounded-bl-[4px] md:rounded-tl-[4px] bg-[#EBF5FF] px-8 text-[24px] font-medium text-blue_gray-300 md:w-full md:px-0"
              style=
                  {{
                    fontSize: isMobile  ? '14px': "",
                  }}
            />
            <Button className="flex h-[100px] md:h-[44px] min-w-[278px]  md:min-w-[92px] flex-row items-center justify-center rounded-br-[10px] rounded-tr-[10px] md:rounded-br-[4px] md:rounded-tr-[4px] bg-deep_purple-a200 px-[34px] text-center text-[28px] font-medium text-gray-50 lg:text-[23px] md:px-4 md:text-[14px]">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
