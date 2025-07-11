"use client";
import { Heading, Img } from "../../components";
import TestHomeRowthumbsupOne from "../../components/TestHomeRowthumbsupOne";
import React, { Suspense, useState, useEffect } from "react";

const defaultSection = {
  section2_title1: "...",
  section2_title2: "...",
  section2_subtitle1: "...",
  section2_subtitle1_description: "...",
  section2_subtitle2: "...",
  section2_subtitle2_description: "...",
  section2_subtitle3: "...",
  section2_subtitle3_description: "...",
};

export default function TesthomeRowstorage() {
  const [isMobile, setIsMobile] = useState(false);
  const [section, setsection] = useState(defaultSection);

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
          section2_title1: fetchedSection.section2_title1 ?? defaultSection.section2_title1,
          section2_title2: fetchedSection.section2_title2 ?? defaultSection.section2_title2,

          section2_subtitle1: fetchedSection.section2_subtitle1 ?? defaultSection.section2_subtitle1,
          section2_subtitle1_description: fetchedSection.section2_subtitle1_description ?? defaultSection.section2_subtitle1_description,

          section2_subtitle2: fetchedSection.section2_subtitle2 ?? defaultSection.section2_subtitle2,
          section2_subtitle2_description: fetchedSection.section2_subtitle2_description ?? defaultSection.section2_subtitle2_description,

          section2_subtitle3: fetchedSection.section2_subtitle3 ?? defaultSection.section2_subtitle3,
          section2_subtitle3_description: fetchedSection.section2_subtitle3_description ?? defaultSection.section2_subtitle3_description,

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
    <div className="md:mb-[68px]" >
      <div className="flex h-[1068px] flex-col items-center justify-center bg-[url(/images/img_image_1068x1920.webp)] bg-cover bg-no-repeat py-[120px] lg:h-auto lg:py-8 md:h-auto md:py-5 md:py-4">
        <div className="container-xs flex flex-col gap-[92px] lg:px-5 md:px-5 md:gap-[33px]">
          <div className="mx-[332px] flex flex-col items-center gap-1 md:mx-0 md:text-center">
            <Heading
              size="text4xl"
              as="h2"
              className="bg-gradient1 bg-clip-text font-montserrat text-[36px] font-medium text-transparent lg:text-[30px] md:text-center [30px] md:text-[28px]"
              style=
                  {{
                    fontSize: isMobile  ? '24px': "",
                  }}
            >
              {section.section2_title1}
            </Heading>
            <Heading
              size="heading2xl"
              as="h3"
              className="bg-gradient1 bg-clip-text font-montserrat text-[60px] font-bold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px]"
              style=
                  {{
                    fontSize: isMobile  ? '24px': "",
                  }}
            >
              {section.section2_title2}
            </Heading>
          </div>
          <div className="flex items-center md:flex-col md:gap-[41px]">
            <div className="flex w-[48%] flex-col items-center gap-10 md:gap-4 self-center md:w-full">
              <div className="justify-center flex items-center self-stretch md:self-auto md:mx-0 md:items-end md:gap-1">
                <div className="flex  flex-col items-center gap-2 md:w-full">
                  <Heading size="textmd" as="h4" className="text-[20px] font-light text-blue-100 lg:text-[17px] md:text-[12px] mb-[12px]  md:mb-0"
                  style={{ fontWeight: isMobile  ? '300': "",}}>
                    Node 1
                  </Heading>
                  <div className="flex flex-col items-center gap-2.5 self-stretch rounded-[20px] border border-solid border-blue-a100_99 bg-gray-900 p-6 shadow-sm md:p-4 md:w-[100px] md:self-auto">
                    <Img
                      src="img_ph_engine_thin.svg"
                      width={52}
                      height={52}
                      alt="Phenginethin"
                      className="h-[52px] w-[52px] md:h-[38px] md:w-[38px]"
                    />
                    <Heading as="h5" className="text-[22px] font-medium text-gray-50 lg:text-[18px]"
                    style=
                    {{
                      fontSize: isMobile  ? '12px': "",
                    }}
                    >
                      SQL Engine
                    </Heading>
                  </div>
                </div>
                <div className="flex w-[8%] justify-center gap-1.5 self-end py-6 md:w-[20%] md:self-auto md:py-4">
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300" />
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300" />
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300" />
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300" />
                </div>
                {/* <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch"> */}
                <div className="flex flex-col items-center gap-2 md:self-stretch md:w-full">
                  {/* <Heading size="textmd" as="h6" className="ml-[54px] text-[20px] font-light text-blue-100 lg:text-[17px] md:ml-0"> */}
                  <Heading size="textmd" as="h6" className="text-[20px] font-light text-blue-100 lg:text-[17px] md:text-[12px] md:ml-0 mb-[12px] md:mb-0" style={{ fontWeight: isMobile  ? '300': "",}}>
                    Node N
                  </Heading>
                  {/* <div className="flex flex-col items-center gap-2.5 rounded-[20px] border border-solid border-blue-a100_7f bg-gray-900 p-6 shadow-sm md:p-4"> */}
                  <div className="w-full flex flex-col items-center gap-2.5 rounded-[20px] border border-solid border-blue-a100_7f bg-gray-900 p-6 shadow-sm md:p-4 md:w-[100px] md:self-auto">
                    <Img
                      src="img_ph_engine_thin.svg"
                      width={52}
                      height={52}
                      alt="Phenginethin"
                      className="h-[52px] w-[52px] md:h-[38px] md:w-[38px]"
                    />
                    <Heading as="p" className="text-[22px] font-medium text-gray-50 lg:text-[18px]"
                    style=
                    {{
                      fontSize: isMobile  ? '12px': "",
                    }}
                    >
                      SQL Engine
                    </Heading>
                  </div>
                </div>
              </div>
              {/* <div className="mx-[90px] flex items-center self-stretch md:mx-0 md:flex-col"> */}
              <div className="justify-center flex items-center md:mx-0 w-full">
                <Heading
                  size="textmd"
                  as="p"
                  className="w-[28%] text-right text-[20px] font-normal leading-[26px] md:leading-normal text-blue-100 lg:w-[28%] lg:text-[17px] md:w-full md:text-[12px]"
                >
                  <>
                    Send partial <br />
                    analytics queries
                  </>
                </Heading>
                <div className="flex w-[18%] justify-between md:w-full">
                  <div className="w-full flex justify-center items-center flex-col" >  
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence4" style={{margin:'-4px 0'}} />
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence3" style={{margin:'-4px 0'}} />
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence2" style={{margin:'-4px 0'}} />
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence1" style={{margin:'-4px 0'}} />
                  </div>

                  <div className="w-full flex justify-center items-center flex-col" >
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence1" style={{margin:'-4px 0'}} />
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence2" style={{margin:'-4px 0'}} />
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence3" style={{margin:'-4px 0'}} />
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[20px] md:w-[20px] h-[24px] w-[30px] object-contain fade-in-sequence4" style={{margin:'-4px 0'}} />
                  </div>
                </div>
                <Heading
                  size="textmd"
                  as="p"
                  className="w-[28%] text-[20px] font-normal leading-[26px] md:leading-normal text-blue-100 lg:w-[28%] lg:text-[17px] md:ml-0 md:w-full md:text-[12px]"
                >
                  <>
                    Receive partial <br />
                    analytics results
                  </>
                </Heading>
              </div>
              <div className="flex w-[82%] flex-col items-center justify-center gap-[30px] self-center rounded-[20px] border border-solid border-blue-a100_99 bg-gray-900 p-[26px] shadow-sm lg:w-full md:w-full md:p-4">
                <div className="flex items-center gap-2.5 md:gap-0 self-stretch  md:items-end ">
                  <div className="flex flex-1 flex-col gap-3.5 md:gap-2 rounded-lg border border-solid border-indigo-300_99 bg-gray-900 px-[22px] py-5 md:py-3 md:px-3 md:self-stretch ">
                    <Suspense fallback={<div>Loading feed...</div>}>
                     <div className={`flex justify-between items-center gap-5 md:gap-2 flex-1 fade-in-sequence5`}>
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                      </div>
                      {[...Array(3)].map((d, index) => (
                        <TestHomeRowthumbsupOne key={"listthumbsup" + index} />
                      ))}
                    </Suspense>
                  </div>
                  <div className="flex w-[16%] md:w-[11%] justify-center gap-2 md:gap-[2px] self-end py-8  md:self-auto md:py-4 overflow-hidden">
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                  </div>
                  <div className="flex flex-1 flex-col gap-3.5 md:gap-2 rounded-lg border border-solid border-indigo-300_99 bg-gray-900 px-[22px] py-5 md:py-3 md:px-3 md:ml-0 md:self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      <div className={`flex justify-between items-center gap-5 md:gap-2 flex-1 fade-in-sequence6`} >
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                      </div>
                      {[...Array(3)].map((d, index) => (
                        <TestHomeRowthumbsupOne key={"listthumbsup1" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <Heading size="textxl" as="p" className="text-[24px] font-medium text-gray-50 md:text-[14px]"
                style=
                {{
                  fontSize: isMobile  ? '14px': "",
                }}
                >
                  AkashX E-S3 (Empowered Storage)
                </Heading>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end gap-[66px] md:self-stretch md:gap-[33px]">
              <div className="flex w-[84%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} >
                  {section.section2_subtitle1}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle1_description}
                </Heading>
              </div>
              <div className="flex w-[84%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} 
                >
                  {section.section2_subtitle2}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle2_description}
                </Heading>
              </div>
              <div className="flex w-[84%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} 
                >
                  {section.section2_subtitle3}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle3_description}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
