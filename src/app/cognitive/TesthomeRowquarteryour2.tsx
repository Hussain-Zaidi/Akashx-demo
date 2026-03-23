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
      <div className="flex min-h-[60.5rem] md:min-h-[0] flex-col items-center justify-center bg-cover bg-no-repeat pb-[15rem] md:pb-[7.5rem] md:h-auto md:py-4 mt-[4.1875rem] md:mt-0">
        <div className="container-xs mt-1 flex flex-col items-center gap-[0px] md:px-5 md:gap-[2rem] max-w-full px-[8.75rem]">
          <div className="flex flex-col items-center gap-1">
            <Heading
              size="auto"
              as="h2"
              className="bg-gradient1 bg-clip-text font-montserrat text-[2.25rem] font-medium text-transparent md:text-[1.875rem] md:text-center"
              style={{ fontSize: isMobile ? "1.5rem" : "" }}
            >
              {section.section3_title1}
            </Heading>
            <Heading
              size="auto"
              as="h3"
              className="bg-gradient1 bg-clip-text font-montserrat text-[3rem] font-bold text-transparent md:text-[2.5rem] md:text-center"
              style={{ fontSize: isMobile ? "1.5rem" : "" }}
            >
              {/* {section.section3_title2} */}
              Compelling Annual TCO at a Scale
            </Heading>
          </div>
          <div className="flex items-end self-stretch md:flex-col">
            <div className="flex w-[16%] flex-col items-start gap-[2.75rem] md:w-full md:items-center md:gap-[1.5rem]">
              <Heading
                size="auto"
                as="h4"
                className="text-[1.25rem] font-normal text-blue-100  md:text-[1rem]"
                style={{ fontSize: isMobile ? "0.875rem" : "",
                          display: section.section3_p1 == ''?'none':'block',
                 }}
              >
                {section.section3_p1}
              </Heading>
              <div className="flex flex-col gap-[2.375rem] md:gap-[1.125rem] items-start md:items-center md:m-auto mb-[4.375rem] md:mb-0">
                <div className="flex items-start gap-[1.25rem] md:justify-center">
                  <Img
                    src="cognitive/gala_data.svg"
                    width={50}
                    height={50}
                    alt="Galadata"
                    className="h-[2rem] w-[2rem] md:w-[1.5rem] md:h-[1.5rem]"
                  />
                  <Heading
                    size="auto"
                    as="h5"
                    className="flex flex-col md:flex-row md:gap-[0.3125rem] text-[1.5rem] font-medium text-blue_gray-100 ] md:text-[1rem]"
                    style={{ fontSize: isMobile ? "1rem" : "" }}
                  >
                    <span className="font-bold leading-[2.25rem] md:leading-[1.375rem]">10TB</span>
                    <span className="font-light leading-[2.25rem] md:leading-[1.375rem]">Data Volume</span>
                  </Heading>
                </div>
                <div className="flex items-start gap-[1.25rem] md:justify-center">
                  <Img
                    src="cognitive/lets-icons_server-duotone.svg"
                    width={50}
                    height={50}
                    alt="Letsicons"
                    className="h-[2rem] w-[2rem] md:w-[1.5rem] md:h-[1.5rem]"
                  />
                  <Heading
                    size="auto"
                    as="h6"
                    className="flex flex-col md:flex-row md:gap-[0.3125rem] text-[1.5rem] font-extrabold text-blue_gray-100 md:text-[1rem]"
                    style={{ fontSize: isMobile ? "1rem" : "" }}
                  >
                    <span className="font-bold leading-[2.25rem] md:leading-[1.375rem]">500 hrs/month </span>
                    <span className="font-light leading-[2.25rem] md:leading-[1.375rem]">Workload</span>
                  </Heading>
                </div>
                <div className="flex items-start gap-[1.25rem] md:justify-center">
                  <Img
                    src="cognitive/Vector (1).svg"
                    width={50}
                    height={50}
                    alt="Grommeticons"
                    className="h-[2rem] w-[2rem] md:w-[1.5rem] md:h-[1.5rem]"
                  />
                  <Heading
                    size="auto"
                    as="h4"
                    className="flex flex-col md:flex-row md:gap-[0.3125rem] text-[1.5rem] font-bold text-blue_gray-100 md:text-[1rem]"
                    style={{ fontSize: isMobile ? "1rem" : "" }}
                  >
                    <span className="font-bold leading-[2.25rem] md:leading-[1.375rem]" >TPC-H</span>
                    <span className="font-medium leading-[2.25rem] md:leading-[1.375rem]">Bechmark</span>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center md:items-center gap-[3.75rem] self-center md:self-stretch md:gap-[1.875rem]">
              <Img
                src={isMobile ? "new-data12.svg" : "cognitive/Group1000004523.svg"}
                width={994}
                height={436}
                alt="Imagefiftyfive"
                className="h-auto w-[100%] max-w-[73.875rem] md:w-[110%] md:max-w-[110%] object-contain m-[-5%_0%_0%_0%] md:scale-[120%] md:m-[0%_-30%_10%_0]" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}