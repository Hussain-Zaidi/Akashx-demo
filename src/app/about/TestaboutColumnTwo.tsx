import { Heading, Img, Button } from "../../components";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

// Default data structure
const defaultSection = {
  section3_title1: "",
  section3_title2: "",
  luminary1_title: "",
  luminary1_description: "",
  luminary1_link: "",
  luminary2_title: "",
  luminary2_description: "",
  luminary2_link: "",
};
// Define the props interface for the component
interface TestaboutColumnTwoProps {
  fetchedSection: any; // You can define a more specific type if needed
}
export default function TestaboutColumnTwo({ fetchedSection }: TestaboutColumnTwoProps) {
  const [section, setSection] = useState(defaultSection);
    // Update section data based on fetchedSection
    useEffect(() => {
      setSection({
        section3_title1: fetchedSection.section3_title1 ?? defaultSection.section3_title1,
        section3_title2: fetchedSection.section3_title2 ?? defaultSection.section3_title2,

        luminary1_title: fetchedSection.luminary1_title ?? defaultSection.luminary1_title,
        luminary1_description: fetchedSection.luminary1_description ?? defaultSection.luminary1_description,
        luminary1_link: fetchedSection.luminary1_link ?? defaultSection.luminary1_link,

        luminary2_title: fetchedSection.luminary2_title ?? defaultSection.luminary2_title,
        luminary2_description: fetchedSection.luminary2_description ?? defaultSection.luminary2_description,
        luminary2_link: fetchedSection.luminary2_link ?? defaultSection.luminary2_link,
      });
    }, [fetchedSection]); // Dependency on fetchedSection

  return (
    <div className="flex flex-col items-center md:py-0">
      <div className="container-xs flex flex-col items-center gap-[131px] lg:px-5 md:px-5 md:gap-[50px]  max-w-[100%] px-[130px]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[24px] md:text-transparent"
          >
            {section.section3_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[24px] md:text-transparent"
          >
            {section.section3_title2}
          </Heading>
        </div>
        <div className="flex self-stretch md:flex-col md:gap-[57px] gap-[130px]">
          <div className="flex w-full items-start gap-[34px] md:gap-[15px] justify-center md:flex-col ">
            <Img
              src="DavidDeWitt.svg"
              width={286}
              height={286}
              alt="Imagesixtyeight"
              className="mt-1 md:h-[286px] md:h-[auto] w-[286px] self-center object-contain  md:w-[120px] self-baseline"
            />
            <div className="flex flex-1 flex-col items-start gap-3 md:gap-[4px] md:self-stretch max-w-[416px]">
              <Heading as="h4" className="text-[26px] font-semibold text-blue_gray-100 md:text-[18px]">
              {section.luminary1_title}
              </Heading>
              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] //font-medium leading-7 text-blue-100 lg:w-full lg:text-[18px] md:w-full md:text-[14px] md:w-[184px] md:leading-[18px]"
              >
                <>
                {section.luminary1_description}
                </>
              </Heading>
              <Link href={section.luminary1_link} rel="noreferrer">
              <Button
                className="rilinkedin_one_border flex items-center justify-center rounded-[10px] p-[12px] mt-[11px] relative bg-gray-900_ba md:mt-[12px]"
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #3499FF, #6DDCFF)",
                  padding: "1px",
                }}
              >
                <div
                  className="w-full h-full rounded-[8px] flex items-center justify-center p-[12px] md:p-[10px]"
                  style={{
                    background: "#080d26",
                    borderRadius: "7px",
                  }}
                >
                  <Img
                    src="img_ri_linkedin_fill.svg"
                    width={24}
                    height={24}
                    className="w-[24px] md:w-[22px]"
                  />
                </div>
              </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-start gap-[34px] md:gap-[15px] justify-center md:flex-col">
            <Img
              src="SamMadden.svg"
              width={286}
              height={286}
              alt="Imagesixtyeight"
              className="mt-1 md:h-[286px] md:h-[auto] w-[286px] self-center object-contain  md:w-[120px] self-baseline"
            />
            <div className="flex flex-1 flex-col items-start gap-3 md:gap-[4px] md:self-stretch max-w-[416px]">
              <Heading as="h4" className="text-[26px] font-semibold text-blue_gray-100 md:text-[18px]">
              {section.luminary2_title}
              </Heading>
              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] //font-medium leading-7 text-blue-100 lg:w-full lg:text-[18px] md:w-full md:text-[14px] md:w-[184px] md:leading-[18px]"
              >
                <>
                {section.luminary2_description}
                </>
              </Heading>
              <Link href={section.luminary2_link} rel="noreferrer">
              <Button
                className="rilinkedin_one_border flex items-center justify-center rounded-[10px] p-[12px] mt-[11px] relative bg-gray-900_ba md:mt-[12px]"
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #3499FF, #6DDCFF)",
                  padding: "1px",
                }}
              >
                <div
                  className="w-full h-full rounded-[8px] flex items-center justify-center p-[12px] md:p-[10px]"
                  style={{
                    background: "#080d26",
                    borderRadius: "7px",
                  }}
                >
                  <Img
                    src="img_ri_linkedin_fill.svg"
                    width={24}
                    height={24}
                    className="w-[24px] md:w-[22px]"
                  />
                </div>
              </Button>
              </Link>
            </div>
          </div>
          {/* <div className="relative h-[290px] w-full content-center lg:h-auto md:h-auto">
            <div className="mx-auto flex flex-1 items-start justify-center gap-[34px] px-14 md:px-5 md:flex-col md:px-4">
              <Img
                src="img_image_69.webp"
                width={286}
                height={286}
                alt="Imagesixtynine"
                className="mt-1 h-[286px] w-[286px] self-center object-contain md:w-full"
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
