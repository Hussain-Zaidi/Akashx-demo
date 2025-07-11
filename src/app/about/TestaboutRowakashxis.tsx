"use client";
import { Heading } from "../../components";
import React, { useState, useEffect } from "react";

// Default data structure
const defaultSection = {
  section1_title: "",
  section1_p1: "",
  section1_p2: "",
};
// Define the props interface for the component
interface TestaboutRowakashxisProps {
  fetchedSection: any; // You can define a more specific type if needed
}
export default function TestaboutRowakashxis({ fetchedSection }: TestaboutRowakashxisProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [section, setSection] = useState(defaultSection);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Update section data based on fetchedSection
  useEffect(() => {
    setSection({
      section1_title: fetchedSection.section1_title ?? defaultSection.section1_title,
      section1_p1: fetchedSection.section1_p1 ?? defaultSection.section1_p1,
      section1_p2: fetchedSection.section1_p2 ?? fetchedSection.section1_p1 ?? defaultSection.section1_p2,
    });
  }, [fetchedSection]); // Dependency on fetchedSection
  

  return (
    <div className="mb-[150px] flex items-start px-14 md:flex-col md:px-5"
    style=
    {{
      marginBottom: isMobile  ? '1rem': "",
      gap: isMobile  ? '0px': " 386px",
    }}
    >
      <Heading
        size="headingxl"
        as="h1"
        className="mb-[161px] mt-[121px] md:mt-0 md:mb-[20px] w-[35%] bg-gradient1 bg-clip-text text-right md:text-left font-montserrat
         text-[62px] font-extrabold leading-[75px] md:leading-[36.57px] text-transparent lg:text-[48px]  md:text-[30px] md:w-[80%] min-h-[304px] md:min-h-0"
         style=
         {{
           fontSize: isMobile  ? '30px': "",
           paddingTop: isMobile  ? '60px': "",
         }}
      >
        {section.section1_title}
      </Heading>
      <div className="flex flex-1 flex-col items-end md:items-start gap-3 sm:gap-[15px] self-end md:self-stretch sm:self-auto max-w-[699px]">
        <Heading
          size="textmd"
          as="h2"
          className="text-[22px] font-normal leading-[31px] md:leading-[20px] text-blue-100 lg:w-full lg:text-[16px]  md:w-[100%] sm:w-full  max-w-[770px]"
          style=
         {{
           fontSize: isMobile  ? '16px': "",
           fontWeight: isMobile  ? '400': "",
         }}
        >
          {section.section1_p1}
        </Heading>
        <Heading
          size="textmd"
          as="h3"
          className="text-[22px] font-normal leading-[31px] md:leading-[20px] text-blue-100 lg:w-full lg:text-[16px] md:w-[100%] sm:w-full max-w-[699px]"
          style=
         {{
           fontSize: isMobile  ? '16px': "",
           fontWeight: isMobile  ? '400': "",
         }}
        >
          {section.section1_p2}
        </Heading>
      </div>
    </div>
  );
}
