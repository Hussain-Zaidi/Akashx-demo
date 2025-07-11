"use client";
import { Heading, Img } from "../../components";
import TestHomeRowthumbsupOne from "../../components/TestHomeRowthumbsupOne";
import React, { Suspense, useState, useEffect } from "react";

const defaultSection = {
  section2_title1: "",
  section2_title2: "",
  section2_subtitle1: "",
  section2_subtitle1_description: "",
  section2_subtitle2: "",
  section2_subtitle2_description: "",
  section2_subtitle3: "",
  section2_subtitle3_description: "",
  section2_subtitle4: "",
  section2_subtitle4_description: "",
};

// Define the props interface for the component
interface TesthomeRowstorageProps {
  fetchedSection: any; // You can define a more specific type if needed
}

export default function TesthomeRowstorage({ fetchedSection }: TesthomeRowstorageProps) {
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
      section2_title1: fetchedSection.section2_title1 ?? defaultSection.section2_title1,
      section2_title2: fetchedSection.section2_title2 ?? defaultSection.section2_title2,

      section2_subtitle1: fetchedSection.section2_subtitle1 ?? defaultSection.section2_subtitle1,
      section2_subtitle1_description: fetchedSection.section2_subtitle1_description ?? defaultSection.section2_subtitle1_description,

      section2_subtitle2: fetchedSection.section2_subtitle2 ?? defaultSection.section2_subtitle2,
      section2_subtitle2_description: fetchedSection.section2_subtitle2_description ?? defaultSection.section2_subtitle2_description,

      section2_subtitle3: fetchedSection.section2_subtitle3 ?? defaultSection.section2_subtitle3,
      section2_subtitle3_description: fetchedSection.section2_subtitle3_description ?? defaultSection.section2_subtitle3_description,

      section2_subtitle4: fetchedSection.section2_subtitle4 ?? defaultSection.section2_subtitle4,
      section2_subtitle4_description: fetchedSection.section2_subtitle4_description ?? defaultSection.section2_subtitle4_description,

    });
  }, [fetchedSection]); // Dependency on fetchedSection
  return (
    <div className="md:mb-[74px]" >
      <div className="flex min-h-[1068px] md:min-h-[0] flex-col items-center justify-center bg-[url(/images/img_image_1068x1920.webp)] bg-cover bg-no-repeat pb-[120px] pt-[20px] lg:h-auto lg:py-8 md:h-auto md:py-5 md:py-4">
        <div className="container-xs flex flex-col gap-[92px] lg:px-5 md:px-5 md:gap-[50px] max-w-full">
          <div className="flex flex-col items-center gap-1 md:mx-0 md:text-center">
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
          <div className="flex items-center md:flex-col md:gap-[60px] justify-center gap-[202px]">
            <div className="flex w-[550px] flex-col items-center gap-[38px] md:gap-[18px] self-center md:w-full">
              <div className="justify-center flex items-center self-stretch md:self-auto md:mx-0 md:items-end gap-[4px] md:gap-[2px]">
                <div className="flex  flex-col items-center gap-[14px] md:gap-[2px]">
                  <Heading size="textmd" as="h4" className="text-[20px] font-light text-blue-100 lg:text-[17px] md:text-[12px] mb-[14px]  md:mb-0"
                  style={{ fontWeight: isMobile  ? '300': "300",
                    lineHeight: isMobile  ? '28px': "", 
                  }}>
                    Node 1
                  </Heading>
                  <div className="flex flex-col items-center gap-[5px] self-stretch rounded-[20px] md:rounded-[12px] border border-solid border-blue-a100_99 bg-gray-900 p-6 shadow-sm md:p-4 md:self-auto w-[180px] h-[140px] md:w-[100px] md:h-[90px]"
                  style={{boxShadow:isMobile ?'0px 0px 24px 0px rgba(238, 235, 255, 0.30' : ''}}
                  >
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
                <div className="flex w-[42px] justify-between gap-0 self-end py-[20px] md:w-[35px] md:self-auto md:py-[14px]">
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300 md:h-[5px] md:w-[5px]" />
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300 md:h-[5px] md:w-[5px]" />
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300 md:h-[5px] md:w-[5px]" />
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-indigo-300 md:h-[5px] md:w-[5px]" />
                </div>
                {/* <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch"> */}
                <div className="flex flex-col items-center md:self-stretch  gap-[14px] md:gap-[2px]">
                  {/* <Heading size="textmd" as="h6" className="ml-[54px] text-[20px] font-light text-blue-100 lg:text-[17px] md:ml-0"> */}
                  <Heading size="textmd" as="h6" className="text-[20px] font-light text-blue-100 lg:text-[17px] md:text-[12px] md:ml-0 mb-[14px] md:mb-0" style={{ fontWeight: isMobile  ? '300': "300",
                  lineHeight: isMobile  ? '28px': "",  
                  }}>
                    Node N
                  </Heading>
                  {/* <div className="flex flex-col items-center gap-2.5 rounded-[20px] border border-solid border-blue-a100_7f bg-gray-900 p-6 shadow-sm md:p-4"> */}
                  <div className="flex flex-col items-center gap-[5px] rounded-[20px] md:rounded-[12px] border border-solid border-blue-a100_7f bg-gray-900 p-6 shadow-sm md:p-4 md:w-[100px] md:self-auto  w-[180px] h-[140px]  md:w-[100px] md:h-[90px]"
                  style={{boxShadow:isMobile ?'0px 0px 24px 0px rgba(238, 235, 255, 0.30' : ''}}
                  >
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
              <div className="justify-center flex items-center md:mx-0 w-full gap-[29.39px]  md:gap-[22px]">
                <Heading
                  size="textmd"
                  as="p"
                  className=" text-right text-[20px] font-light leading-[26px] md:leading-normal text-blue-100 lg:w-[28%] lg:text-[17px] md:w-full md:text-[12px]"
                >
                  <>
                    Send partial <br />
                    analytics queries
                  </>
                </Heading>
                <div className="flex gap-[31.97px] md:gap-[22px] justify-between">
                  <div className="w-full flex justify-center items-center flex-col md:w-[15px]" >  
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence4" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence3" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence2" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                    <Img src="img_map.svg" width={20} height={22} alt="Map"className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence1" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                  </div>

                  <div className="w-full flex justify-center items-center flex-col  md:w-[15px]" >
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence1" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence2" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence3" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                    <Img src="img_bookmark.svg" width={20} height={22} alt="Bookmark" className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence4" style={{margin: isMobile?'-4px 0':'-4px 0'}} />
                  </div>
                </div>
                <Heading
                  size="textmd"
                  as="p"
                  className="text-[20px] font-light leading-[26px] md:leading-normal text-blue-100 lg:w-[28%] lg:text-[17px] md:ml-0 md:w-full md:text-[12px]"
                >
                  <>
                    Receive partial <br />
                    analytics results
                  </>
                </Heading>
              </div>
              <div className="flex w-[100%] max-w-[550px] h-[300px] md:h-[160px] flex-col items-center justify-center gap-[35px] md:gap-[15px] self-center rounded-[20px] md:rounded-[15px] border border-solid border-blue-a100_99 bg-gray-900 p-[30px_0px_42px_0px] shadow-sm lg:w-full md:w-[90%] md:p-[20px_15px] relative"
              style={{boxShadow:isMobile ?'0px 0px 24px 0px rgba(238, 235, 255, 0.30' : ''}}
              >
                <div className="flex items-center gap-[8px] md:gap-[2px] self-stretch  md:items-end m-auto md:m-0 ">
                  <div className="h-[164px] md:h-[94px] w-[176px] md:w-[101px] flex flex-1 flex-col gap-[12px] md:gap-2 rounded-lg border border-solid border-indigo-300_99 bg-gray-900 px-[24px] py-[24px] md:py-3 md:px-3 md:self-stretch ">
                    <Suspense fallback={<div>Loading feed...</div>}>
                     <div className={`flex justify-between items-center gap-[22px] md:gap-2 flex-1 fade-in-sequence5 mb-[8px] md:mb-[3px]`}>
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        {/* <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" /> */}
                      </div>
                      {[...Array(2)].map((d, index) => (
                        <TestHomeRowthumbsupOne key={"listthumbsup" + index} />
                      ))}
                    </Suspense>
                  </div>
                  <div className="flex w-[78px] md:w-[39.2px] justify-between gap-[0px] md:gap-[3px] self-end py-[22px]  md:self-auto md:py-[11.8px] overflow-hidden">
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                    <div className=" h-[6px] w-[6px] md:h-[4px] md:w-[4px] rounded-[3px] bg-indigo-300 min-w-[6px] md:min-w-[4px] " />
                  </div>
                  <div className="h-[164px] md:h-[94px] w-[176px] md:w-[101px]  flex flex-1 flex-col gap-[12px] md:gap-2 rounded-lg border border-solid border-indigo-300_99 bg-gray-900 px-[24px] py-[24px] md:py-3 md:px-3 md:ml-0 md:self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      <div className={`flex justify-between items-center gap-[23px] md:gap-2 flex-1 fade-in-sequence6 mb-[8px] md:mb-[3px]`} >
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
                        {/* <Img src="img_thumbs_up.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" /> */}
                      </div>
                      {[...Array(2)].map((d, index) => (
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
                <div className="absolute right-0 bottom-0 w-[136px] md:w-[72px] h-[136px] md:h-[72px] bg-[url('/images/patent.svg')] bg-center bg-no-repeat transform translate-x-[62%] translate-y-[21%] md:translate-x-[25%] md:translate-y-[70%] md:bg-[size:130%] bg-auto"></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-[50px] md:self-stretch md:gap-[28px] max-w-[706px]">
              <div className="flex w-[100%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} >
                  {section.section2_subtitle1}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle1_description}
                  {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. */}
                </Heading>
              </div>
              <div className="flex w-[100%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} 
                >
                  {section.section2_subtitle2}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle2_description}
                  {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. */}
                </Heading>
              </div>


              <div className="flex w-[100%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} 
                >
                  {section.section2_subtitle3}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle3_description}
                  {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. */}
                </Heading>
              </div>

              <div className="flex w-[100%] flex-col items-start gap-4 lg:w-full md:w-full">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[20px]" style={{fontSize: isMobile  ? '20px': "",}} 
                >
                  {section.section2_subtitle4}
                </Heading>
                <Heading as="p" className="w-full text-[22px] font-normal leading-[30px] md:leading-[18px] text-blue-100 lg:text-[18px] md:text-[16px]" style={{fontSize: isMobile  ? '14px': "",}} >
                  {section.section2_subtitle4_description}
                  {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. */}
                </Heading>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
