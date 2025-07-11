"use client";
import { Heading, Img } from "../../components";
import React, { useEffect, useState } from "react";

// Default section data
const defaultSection = {
  section3_title1: "",
  section3_title2: "",
  section3_p1: "",
  section3_p21: "",
  section3_p22: "",
  section3_p3: "",
  section3_p41: "",
  section3_p42: "",
};

// Define the props interface for the component
interface TesthomeRowquarteryourProps {
  fetchedSection: any; // You can define a more specific type if needed
}

export default function TesthomeRowquarteryour({ fetchedSection }: TesthomeRowquarteryourProps) {
  const [section, setSection] = useState(defaultSection);
  const [isMobile, setIsMobile] = useState(false);

  // Resize handler to detect mobile view
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
      section3_title1: fetchedSection.section3_title1 ?? defaultSection.section3_title1,
      section3_title2: fetchedSection.section3_title2 ?? defaultSection.section3_title2,
      section3_p1: fetchedSection.section3_p1 ?? defaultSection.section3_p1,
      section3_p21: fetchedSection.section3_p21 ?? defaultSection.section3_p21,
      section3_p22: fetchedSection.section3_p22 ?? defaultSection.section3_p22,
      section3_p3: fetchedSection.section3_p3 ?? defaultSection.section3_p3,
      section3_p41: fetchedSection.section3_p41 ?? defaultSection.section3_p41,
      section3_p42: fetchedSection.section3_p42 ?? defaultSection.section3_p42,
    });
  }, [fetchedSection]); // Dependency on fetchedSection

  return (
    <div>
      <div className="flex min-h-[968px] md:min-h-[0] flex-col items-center justify-center bg-cover bg-no-repeat py-[120px] lg:h-auto lg:py-8 md:h-auto md:py-4 mt-[67px] md:mt-0">
        <div className="container-xs mt-1 flex flex-col items-center gap-[0px] lg:px-5 md:px-5 md:gap-[50px] max-w-full px-[140px]">
          <div className="flex flex-col items-center gap-1">
            <Heading
              size="text4xl"
              as="h2"
              className="bg-gradient1 bg-clip-text font-montserrat text-[36px] font-medium text-transparent lg:text-[30px] md:text-[30px] md:text-[28px] md:text-center"
              style={{ fontSize: isMobile ? "24px" : "" }}
            >
              {section.section3_title1}
            </Heading>
            <Heading
              size="heading2xl"
              as="h3"
              className="bg-gradient1 bg-clip-text font-montserrat text-[60px] font-bold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px] md:text-center"
              style={{ fontSize: isMobile ? "24px" : "" }}
            >
              {section.section3_title2}
            </Heading>
          </div>
          <div className="flex items-center self-stretch md:flex-col">
            <div className="flex w-[30%] flex-col items-start gap-[44px] md:w-full md:items-center md:gap-[24px]">
              <Heading
                size="textmd"
                as="h4"
                className="text-[20px] font-normal text-blue-100 lg:text-[17px] md:text-[16px]"
                style={{ fontSize: isMobile ? "14px" : "" }}
              >
                {section.section3_p1}
              </Heading>
              <div className="flex flex-col gap-[38px] self-stretch md:gap-[10px]">
                <div className="flex items-center gap-[15px] md:justify-center">
                  <Img
                    src="img_gala_data.svg"
                    width={30}
                    height={30}
                    alt="Galadata"
                    className="h-[30px] w-[30px] md:w-[24px] md:h-[24px]"
                  />
                  <Heading
                    size="textxl"
                    as="h5"
                    className="text-[24px] font-medium text-blue_gray-100 lg:text-[20px] md:text-[16px]"
                    style={{ fontSize: isMobile ? "16px" : "" }}
                  >
                    <span className="font-bold">{section.section3_p21}</span>
                    <span className="font-light">&nbsp;{section.section3_p22}</span>
                  </Heading>
                </div>
                <div className="flex items-center gap-[15px] md:justify-center">
                  <Img
                    src="img_lets_icons_server_duotone.svg"
                    width={30}
                    height={30}
                    alt="Letsicons"
                    className="h-[30px] w-[30px] md:w-[24px] md:h-[24px]"
                  />
                  <Heading
                    size="textxl"
                    as="h6"
                    className="text-[24px] font-extrabold text-blue_gray-100 lg:text-[20px] md:text-[16px]"
                    style={{ fontSize: isMobile ? "16px" : "" }}
                  >
                    {section.section3_p3}{" "}
                  </Heading>
                </div>
                <div className="flex items-center gap-[15px] md:justify-center">
                  <Img
                    src="img_grommet_icons_validate.svg"
                    width={30}
                    height={30}
                    alt="Grommeticons"
                    className="h-[30px] w-[30px] md:w-[24px] md:h-[24px]"
                  />
                  <Heading
                    size="headingmd"
                    as="h4"
                    className="text-[24px] font-bold text-blue_gray-100 lg:text-[20px] md:text-[16px]"
                    style={{ fontSize: isMobile ? "16px" : "" }}
                  >
                    <span>{section.section3_p41}&nbsp;</span>
                    <span className="font-medium">{section.section3_p42}&nbsp;</span>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end md:items-center gap-[60px] self-center md:self-stretch md:gap-[30px]">
              <Img
                src={isMobile ? "data24.png" : "data1.svg"}
                width={994}
                height={436}
                alt="Imagefiftyfive"
                className="h-auto w-[108%] max-w-[108%] object-contain m-[-12%_-15%_0%_0] md:scale-[200%] md:m-[0%_-60%_55%_0]" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
