"use client";
import { Heading, Img } from "../../components";
import React, {useEffect, useState} from "react";
const defaultSection = {
  section3_title1: "...",
  section3_title2: "...",
  section3_p1: "...",
  section3_p21: "...",
  section3_p22: "...",
  section3_p3: "...",
  section3_p41: "...",
  section3_p42: "...",

};
export default function TesthomeRowquarteryour() {
  const [section, setsection] = useState(defaultSection);
  const [isMobile, setIsMobile] = useState(false);

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
          section3_title1: fetchedSection.section3_title1 ?? defaultSection.section3_title1,
          section3_title2: fetchedSection.section3_title2 ?? defaultSection.section3_title2,
          
          section3_p1: fetchedSection.section3_p1 ?? defaultSection.section3_p1,
          section3_p21: fetchedSection.section3_p21 ?? defaultSection.section3_p21,
          section3_p22: fetchedSection.section3_p22 ?? defaultSection.section3_p22,
          section3_p3: fetchedSection.section3_p3 ?? defaultSection.section3_p3,
          section3_p41: fetchedSection.section3_p41 ?? defaultSection.section3_p41,
          section3_p42: fetchedSection.section3_p42 ?? defaultSection.section3_p42,
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
    <div>
      {/* bg-[url(/images/img_image_968x1920.webp)] */}
      <div className="flex h-[968px] flex-col items-center justify-center  bg-cover bg-no-repeat py-[114px] lg:h-auto lg:py-8 md:h-auto  md:py-4">
        <div className="container-xs mt-1 flex flex-col items-center gap-[0px] lg:px-5 md:px-5 md:gap-[50px]">
          <div className="flex flex-col items-center gap-1">
            <Heading
              size="text4xl"
              as="h2"
              className="bg-gradient1 bg-clip-text font-montserrat text-[36px] font-medium text-transparent lg:text-[30px] md:text-[30px] md:text-[28px] md:text-center"
              style=
                  {{
                    fontSize: isMobile  ? '24px': "",
                  }}
            >
              {section.section3_title1}
            </Heading>
            <Heading
              size="heading2xl"
              as="h3"
              className="bg-gradient1 bg-clip-text font-montserrat text-[60px] font-bold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px] md:text-center"
              style=
                  {{
                    fontSize: isMobile  ? '24px': "",
                  }}
            >
              {section.section3_title2}
            </Heading>
          </div>
          <div className="flex items-center self-stretch md:flex-col">
            <div className="flex w-[30%] flex-col items-start gap-[42px] md:w-full md:items-center md:gap-[24px]">
              <Heading size="textmd" as="h4" className="text-[20px] font-normal text-blue-100 lg:text-[17px] md:text-[16px]"
              style={{fontSize: isMobile  ? '14px': "",}}
              >
                {section.section3_p1}
              </Heading>
              <div className="flex flex-col gap-[38px] self-stretch md:gap-[10px]">
                <div className="flex items-center gap-[15px] md:justify-center">
                  <Img src="img_gala_data.svg" width={30} height={30} alt="Galadata" className="h-[30px] w-[30px]  md:w-[24px] md:h-[24px]" />
                  <Heading size="textxl" as="h5" className="text-[24px] font-medium text-blue_gray-100 lg:text-[20px]  md:text-[16px]" style={{fontSize: isMobile  ? '16px': "",}} >
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
                  <Heading size="textxl" as="h6" className="text-[24px] font-medium text-blue_gray-100 lg:text-[20px]  md:text-[16px]" style={{fontSize: isMobile  ? '16px': "",}}>
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
                  <Heading size="headingmd" as="h4" className="text-[24px] font-bold text-blue_gray-100 lg:text-[20px]  md:text-[16px]" style={{fontSize: isMobile  ? '16px': "",}}>
                    <span>{section.section3_p41}&nbsp;</span>
                    <span className="font-medium">{section.section3_p42}&nbsp;</span>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end md:items-center gap-[60px] self-center md:self-stretch md:gap-[30px]">
                  {/* <Img
                    src={isMobile ? "data-mobile.svg" : "data.svg"}
                    width={994}
                    height={436}
                    alt="Imagefiftyfive"
                    className="h-[436px] w-[88%] object-contain md:w-full md:max-w-[360px] md:h-[360px]"
                  />
                  <div className="flex justify-center md:justify-between md:mt-[-40px] md:max-w-[400px] md:w-[75%] md:m-auto self-stretch px-14 md:px-5 md:px-0 items-center">
                    <div className="flex w-[30%] items-start justify-end md:justify-center gap-3.5 md:gap-[6px] px-8 md:px-0  md:w-auto">
                      <div className="h-[26px] w-[26px] md:h-[16px] md:w-[16px] rounded bg-blue-200" />
                      <Heading
                        size="textxl"
                        as="p"
                        className="self-center text-[24px] font-medium text-indigo-50 lg:text-[20px] md:text-[14px]"
                        style={{fontSize: isMobile  ? '14px': "",}}
                      >
                        Compute
                      </Heading>
                    </div>
                    <div className="flex w-[16%] items-center justify-center gap-3.5 md:gap-[6px]  px-8  md:px-0  md:w-auto">
                      <div className="h-[26px] w-[26px] md:h-[16px] md:w-[16px] rounded bg-deep_purple-a200" />
                      <Heading size="textxl" as="p" className="text-[24px] font-medium text-indigo-50 lg:text-[20px] md:text-[14px]"
                      style={{fontSize: isMobile  ? '14px': "",}}>
                        E-S3
                      </Heading>
                    </div>
                    <div className="flex w-[10%] items-center justify-end md:justify-center gap-3.5 md:gap-[6px]  md:w-auto">
                      <div className="h-[26px] w-[26px] md:h-[16px] md:w-[16px] rounded bg-blue-400" />
                      <Heading size="textxl" as="p" className="text-[24px] font-medium text-indigo-50 lg:text-[20px] md:text-[14px]"
                      style={{fontSize: isMobile  ? '14px': "",}}>
                        S3
                      </Heading>
                    </div>
                  </div> */}
              
                  <Img
                    src={isMobile ? "data2.svg" : "data1.svg"}
                    width={994}
                    height={436}
                    alt="Imagefiftyfive"
                    className="h-auto w-[108%] max-w-[108%] object-contain  m-[-12%_-15%_0%_0] md:scale-[105%] md:m-[-50%_-0%_0%_0]"
                  />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
