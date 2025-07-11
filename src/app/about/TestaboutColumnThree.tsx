import { Heading, Img, Button } from "../../components";
import React, { Suspense, useEffect, useState } from "react";

// Default data structure
const defaultSection = {
  section_founding_engineers_title1: "",
  section_founding_engineers_title2: "",
  // luminary1_title: "",
  // luminary1_description: "",
  // luminary2_title: "",
  // luminary2_description: "",
};

export default function TestaboutColumnTwo() {
  const [section, setsection] = useState(defaultSection);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("//64.227.101.114/api/akashx-about-pages"); 
        const data = await response.json();

        // Check if data exists and set state accordingly
        const fetchedSection = data?.data?.[0] ?? {};
        
        setsection({
          section_founding_engineers_title1: fetchedSection.section_founding_engineers_title1 ?? defaultSection.section_founding_engineers_title1,
          section_founding_engineers_title2: fetchedSection.section_founding_engineers_title2 ?? defaultSection.section_founding_engineers_title2,
          // luminary1_title: fetchedSection.luminary1_title ?? defaultSection.luminary1_title,
          // luminary1_description: fetchedSection.luminary1_description ?? defaultSection.luminary1_description,
          // luminary2_title: fetchedSection.luminary2_title ?? defaultSection.luminary2_title,
          // luminary2_description: fetchedSection.luminary2_description ?? defaultSection.luminary2_description,
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
    <div className="flex flex-col items-center md:py-0">
      <div className="container-xs flex flex-col items-center gap-[131px] lg:px-5 md:px-5 md:gap-[50px] max-w-[100%] px-[130px]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[24px] md:text-transparent"
          >
            {section.section_founding_engineers_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[24px] md:text-transparent"
            >
            {section.section_founding_engineers_title2}
          </Heading>
        </div>
        <div className="flex self-stretch md:flex-col md:gap-[60px] gap-[130px]">
          <div className="flex w-full items-start gap-[34px] md:gap-[15px] justify-center ">
            <Img
              src="Yong_Hu.svg"
              width={286}
              height={286}
              alt="Imagesixtyeight"
              className="mt-1 md:h-[286px] md:h-[auto] w-[286px] self-center object-contain  md:w-[120px] self-baseline"
            />
            <div className="flex flex-1 flex-col items-start gap-[15px] md:self-stretch max-w-[416px] md:gap-[4px]">
              <Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[18px] md:mb-[-4px]">
              Yong Hu
              </Heading>

              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] font-medium leading-7 text-blue-100 lg:w-full lg:text-[18px] md:w-full md:text-[14px] md:w-[184px] md:leading-[18px] mb-[-5px] md:mb-[0px]"
              >
                <>
                Database Engineer
                </>
              </Heading>

              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] font-medium leading-7 text-blue-100 lg:w-full lg:text-[18px] md:w-full md:text-[14px] md:w-[184px] md:leading-[18px]"
              >
                <>
                Primary contributor to Oracle Distributed Transactions!
                </>
              </Heading>
              <Button
                className="rilinkedin_one_border flex items-center justify-center rounded-[10px] p-[12px] mt-[11px] relative bg-gray-900_ba md:mt-[14px]"
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
            </div>
          </div>




          <div className="flex w-full items-start gap-[34px] md:gap-[15px] justify-center">
            <Img
              src="Sounak_Chakraborty.svg"
              width={286}
              height={286}
              alt="Imagesixtyeight"
              className="mt-1 md:h-[286px] md:h-[auto] w-[286px] self-center object-contain  md:w-[120px] self-baseline"
            />
            <div className="flex flex-1 flex-col items-start gap-[15px] md:self-stretch max-w-[416px] md:gap-[4px]">
              <Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px] md:text-[18px] md:mb-[-4px]">
              Sounak Chakraborty
              </Heading>
              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] font-medium leading-7 text-blue-100 lg:w-full lg:text-[18px] md:w-full md:text-[14px] md:w-[184px] md:leading-[18px] mb-[-5px] md:mb-[0px]"
              >
                <> 
                Architect/Database Engineer
                </>
              </Heading>
              <Heading
                size="textmd"
                as="h5"
                className="text-[22px] font-medium leading-7 text-blue-100 lg:w-full lg:text-[18px] md:w-full md:text-[14px] md:w-[184px] md:leading-[18px]"
              >
                <> 
                Primary Contributor to Oracle's Spark OLAP Engine and Cloud-Native Data Lake Platforms!
                </>
              </Heading>
                  <Button
                    className="rilinkedin_one_border flex items-center justify-center rounded-[10px] p-[12px] relative bg-gray-900_ba mt-[11px] md:mt-[14px]"
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
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
}
