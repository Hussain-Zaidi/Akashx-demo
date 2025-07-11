import { Heading, Img, Button } from "../../components";
import React, { Suspense, useEffect, useState } from "react";

// Default data structure
const defaultSection = {
  board_member_section_title1: "",
  board_member_section_title2: "",
  board_member_name: "",
  board_member_group: "",
  board_member_description: "",
};
// Define the props interface for the component
interface TestaboutColumnSixProps {
  fetchedSection: any; // You can define a more specific type if needed
}
export default function TestaboutColumnSix({ fetchedSection }: TestaboutColumnSixProps) {
  const [section, setSection] = useState(defaultSection);
    // Update section data based on fetchedSection
    useEffect(() => {
      setSection({
        board_member_section_title1: fetchedSection.board_member_section_title1 ?? defaultSection.board_member_section_title1,
        board_member_section_title2: fetchedSection.board_member_section_title2 ?? defaultSection.board_member_section_title2,
        board_member_name: fetchedSection.board_member_name ?? defaultSection.board_member_name,
        board_member_group: fetchedSection.board_member_group ?? defaultSection.board_member_group,
        board_member_description: fetchedSection.board_member_description ?? defaultSection.board_member_description,
      });
    }, [fetchedSection]); // Dependency on fetchedSection

  return (
    <div className="flex flex-col items-center md:py-0">
      <div className="container-xs flex flex-col items-center gap-[131px] lg:px-5 md:px-5 md:gap-[50px] max-w-[100%] px-[130px]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[24px] md:text-transparent"
          >
            {section.board_member_section_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[24px] md:text-transparent"
            >
            {section.board_member_section_title2}
          </Heading>
        </div>



        <div className="flex self-stretch md:flex-col justify-center">

            <div
              className={`max-w-[1310px] m-auto flex-shrink-0 flex w-full items-center gap-[46px] md:flex-col transition-all duration-1000 md:hidden`}
              style={{
              }}
            >
              <Img
                src="RajuReddyBoard.svg"
                width={286}
                height={286}
                alt={`Image ${1}`}
                className="h-[280px] w-[280px] object-contain md:w-full"
              />
              <div className="flex flex-1 flex-col gap-10 md:self-stretch">
                <div className="flex flex-col items-start">
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px]"
                  >
                    {section.board_member_name}
                  </Heading>
                  <div className="flex items-center gap-4 self-stretch md:flex-col">
                    <Heading
                      as="h5"
                      className="text-[22px] font-medium text-blue_gray-100 lg:text-[18px]"
                    >
                      {section.board_member_group}
                    </Heading>
                    <Img
                      src="svquadBoard.svg"
                      width={70}
                      height={70}
                      alt="Profile Image"
                      className="h-[70px] w-[70px] object-contain md:w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {/* <Img
                    src="img_ri_double_quotes_l.webp"
                    width={46}
                    height={46}
                    alt="Quote Icon"
                    className="h-[46px] w-[46px] object-contain"
                  /> */}
                  <Heading
                    as="h6"
                    className="text-[22px] font-normal leading-7 text-blue-100 lg:text-[18px]"
                  >
                    {section.board_member_description}
                  </Heading>
                </div>
              </div>
            </div>







            
            <div
                      className={`max-w-[1310px] m-auto flex-shrink-0 flex w-full items-center gap-[58px] md:gap-[15px] md:flex-col transition-all duration-1000 hidden md:flex`}
                      style={{
                        // opacity: currentIndex === index ? "1" : "0",
                        // transform: `translateX(${translateX})`,
                      }}
                    >
                      <div className="flex w-full gap-3">
                        <Img
                          src="RajuReddyBoard.svg"
                          width={286}
                          height={286}
                          alt={`Image`}
                          className="h-[117px] w-[117px] object-contain"
                        />
                          <div className="flex flex-col items-start w-full">
                            <Heading
                              size="headinglg"
                              as="h4"
                              className="text-[20px] font-semibold text-blue_gray-100 lg:text-[20px] leading-[30px] mb-1 md:mb-0"
                              style={{fontSize: '18px'}}
                            >
                              {section.board_member_name}
                            </Heading>
                            <div className="items-center gap-4 self-stretch md:flex-col block md:mt-[-10px]">
                              <Heading
                                as="h5"
                                className="text-[16px] font-medium text-blue_gray-100 lg:text-[16px] inline leading-[25px]"style={{fontSize: '14px'}}
                              >
                                {section.board_member_group}
                              </Heading>
                              <Img
                                src="svquadBoard.svg"
                                width={36}
                                height={36}
                                alt="Profile Image"
                                className="h-[36px] w-[36px] object-contain inline ml-2 md:h-[40px] md:w-[40px]"
                              />
                            </div>
                            </div>

                        </div>

                        <div className="flex flex-1 flex-col gap-10 md:self-stretch hidden md:block">
                          <div className="flex flex-col gap-2">
                            {/* <Img
                              src="img_ri_double_quotes_l.webp"
                              width={46}
                              height={46}
                              alt="Quote Icon"
                              className="h-[46px] w-[46px] object-contain md:w-[38px] md:h-[38px]"
                            /> */}
                            <Heading
                              as="h6"
                              className="text-[16px] font-normal leading-7 text-blue-100 lg:text-[16px]"
                              style={{fontSize:'14px',lineHeight:'18px'}}
                            >
                              {section.board_member_description}
                            </Heading>
                          </div>
                        </div>
                    </div>








          
        </div>




      </div>
    </div>
  );
}
