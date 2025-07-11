import { Heading, Img } from "../../components";
import React, { Suspense, useEffect, useState } from "react";

// Default data structure
const defaultSection = {
  section3_title1: "",
  section3_title2: "",
  luminary1_title: "",
  luminary1_description: "",
  luminary2_title: "",
  luminary2_description: "",
};

export default function TestaboutColumnTwo() {
  const [section, setsection] = useState(defaultSection);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("//akashx.ai/api/akashx-about-pages"); 
        const data = await response.json();

        // Check if data exists and set state accordingly
        const fetchedSection = data?.data?.[0] ?? {};
        
        setsection({
          section3_title1: fetchedSection.section3_title1 ?? defaultSection.section3_title1,
          section3_title2: fetchedSection.section3_title2 ?? defaultSection.section3_title2,
          luminary1_title: fetchedSection.luminary1_title ?? defaultSection.luminary1_title,
          luminary1_description: fetchedSection.luminary1_description ?? defaultSection.luminary1_description,
          luminary2_title: fetchedSection.luminary2_title ?? defaultSection.luminary2_title,
          luminary2_description: fetchedSection.luminary2_description ?? defaultSection.luminary2_description,
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
    <div className="flex flex-col items-center md:py-10">
      <div className="container-xs flex flex-col items-center gap-[104px] lg:px-5 md:px-5 md:gap-[50px]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[30px] sm:text-[24px] md:text-transparent"
          >
            {section.section3_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[40px] sm:text-[24px] md:text-transparent"
          >
            {section.section3_title2}
          </Heading>
        </div>
        <div className="flex self-stretch md:flex-col md:gap-[3rem]">
          <div className="flex w-full items-start gap-[34px] sm:gap-[15px] justify-center ">
            <Img
              src="DavidDeWitt.svg"
              width={286}
              height={286}
              alt="Imagesixtyeight"
              className="mt-1 md:h-[286px] sm:h-[auto] w-[286px] self-center object-contain  sm:w-[120px]"
            />
            <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch max-w-[315px]">
              <Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] sm:text-[18px]">
              {section.luminary1_title}
              </Heading>
              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] font-medium leading-7 text-blue_gray-100 lg:w-full lg:text-[18px] md:w-full sm:text-[14px] sm:w-[184px] md:leading-[20px]"
              >
                <>
                {section.luminary1_description}
                </>
              </Heading>
            </div>
          </div>
          <div className="flex w-full items-start gap-[34px] sm:gap-[15px] justify-center">
            <Img
              src="SamMadden.svg"
              width={286}
              height={286}
              alt="Imagesixtyeight"
              className="mt-1 md:h-[286px] sm:h-[auto] w-[286px] self-center object-contain  sm:w-[120px]"
            />
            <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch max-w-[315px]">
              <Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] sm:text-[18px]">
              {section.luminary2_title}
              </Heading>
              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] font-medium leading-7 text-blue_gray-100 lg:w-full lg:text-[18px] md:w-full sm:text-[14px] sm:w-[184px] md:leading-[18px]"
              >
                <>
                {section.luminary2_description}
                </>
              </Heading>
            </div>
          </div>
          {/* <div className="relative h-[290px] w-full content-center lg:h-auto md:h-auto">
            <div className="mx-auto flex flex-1 items-start justify-center gap-[34px] px-14 md:px-5 sm:flex-col sm:px-4">
              <Img
                src="img_image_69.webp"
                width={286}
                height={286}
                alt="Imagesixtynine"
                className="mt-1 h-[286px] w-[286px] self-center object-contain sm:w-full"
              />
              <Heading size="headingmd" as="h6" className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px]">
                Sam Madden
              </Heading>
            </div>
            <Heading
              size="textmd"
              as="p"
              className="absolute right-0 top-[16%] m-auto w-[38%] text-[22px] font-medium leading-7 text-blue_gray-100 lg:text-[18px]"
            >
              Another key advisor contributing to the company&#39;s innovative solutions.
            </Heading>
          </div> */}
        </div>
      </div>
    </div>
  );
}
