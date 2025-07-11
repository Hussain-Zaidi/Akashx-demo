    "use client";

    import { Heading, Img } from "../../components";
    import React, { useState, useEffect } from "react";

    const defaultSection = {
      section5_title1: "...",
      section5_title2: "...",

      section5_user1_name: "...",
      section5_user1_job: "...",
      section5_user1_description: "...",

      section5_user2_name: "...",
      section5_user2_job: "...",
      section5_user2_description: "...",

      section5_user3_name: "...",
      section5_user3_job: "...",
      section5_user3_description: "...",
    };

    export default function TesthomeRowuserstrust() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const totalSlides = 3; // Total number of slides
      const autoRotateInterval = 5000; // Auto-rotate interval in milliseconds
      const [section, setSection] = useState(defaultSection);

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

            const fetchedSection = data?.data?.[0] ?? {};

            setSection({
              section5_title1: fetchedSection.section5_title1 ?? defaultSection.section5_title1,
              section5_title2: fetchedSection.section5_title2 ?? defaultSection.section5_title2,

              section5_user1_name: fetchedSection.section5_user1_name ?? defaultSection.section5_user1_name,
              section5_user1_job: fetchedSection.section5_user1_job ?? defaultSection.section5_user1_job,
              section5_user1_description: fetchedSection.section5_user1_description ?? defaultSection.section5_user1_description,

              section5_user2_name: fetchedSection.section5_user2_name ?? defaultSection.section5_user2_name,
              section5_user2_job: fetchedSection.section5_user2_job ?? defaultSection.section5_user2_job,
              section5_user2_description: fetchedSection.section5_user2_description ?? defaultSection.section5_user2_description,

              section5_user3_name: fetchedSection.section5_user3_name ?? defaultSection.section5_user3_name,
              section5_user3_job: fetchedSection.section5_user3_job ?? defaultSection.section5_user3_job,
              section5_user3_description: fetchedSection.section5_user3_description ?? defaultSection.section5_user3_description,
            });
          } catch (error) {
            console.error("Error fetching API data:", error);
            setSection(defaultSection);
          }
        };
        fetchData();
      }, []);

      // Auto-rotate effect
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, autoRotateInterval);

        return () => clearInterval(intervalId);
      }, []);

      // Handle dot click
      const handleDotClick = (index: number) => {
        setCurrentIndex(index);
      };

      return (
        <div className="flex flex-col items-center justify-center bg-gray-900 pt-[120px] pb-[60px] lg:py-8 md:py-5 md:py-4 mb-10 mt-16 md:mt-[68px] md:mb-[68px]">
          <div className="container-xs flex flex-col items-center gap-[72px] lg:gap-[32px] lg:px-5 md:gap-[54px] md:px-5 md:gap-9">
            <div className="flex flex-col items-center">
              <Heading
                size="text4xl"
                as="h2"
                className="bg-gradient1 bg-clip-text font-montserrat text-[36px] font-medium text-transparent lg:text-[30px] md:text-[30px] md:text-[28px] md:text-center"

                style=
                      {{
                        fontSize: isMobile  ? '24px': "",
                        width: isMobile ? '300px': '',
                      }}
              >
                {section.section5_title1}
              </Heading>
              <Heading
                size="heading2xl"
                as="h3"
                className="bg-gradient1 bg-clip-text font-montserrat text-[60px] font-bold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px] md:text-center"
                style=
                      {{
                        fontSize: isMobile  ? '24px': "",
                        width: isMobile ? '300px': '',
                      }}
              >
                {section.section5_title2}
              </Heading>
            </div>

            <div className="relative w-full h-[400px] overflow-hidden flex justify-center items-center">
              {[...Array(totalSlides)].map((_, index) => {
                let translateX = "-100%";
                if (currentIndex === index) translateX = "0";
                else if ((currentIndex + 1) % totalSlides === index) translateX = "100%";

                if(isMobile){

                  return (
                    <div
                      key={index}
                      className={`max-w-[1310px] m-auto flex-shrink-0 flex w-full items-center gap-[46px] md:gap-[15px] md:flex-col absolute transition-all duration-1000`}
                      style={{
                        opacity: currentIndex === index ? "1" : "0",
                        transform: `translateX(${translateX})`,
                      }}
                    >
                      <div className="flex w-full gap-3">
                        <Img
                          src="img_image_59.webp"
                          width={286}
                          height={286}
                          alt={`Image ${index + 1}`}
                          className="h-[117px] w-[117px] object-contain"
                        />
                          <div className="flex flex-col items-start w-full">
                            <Heading
                              size="headinglg"
                              as="h4"
                              className="text-[20px] font-semibold text-blue_gray-100 lg:text-[20px] leading-[30px] mb-1 md:mb-0"
                              style={{fontSize: '18px'}}
                            >
                              {section[`section5_user${index + 1}_name`  as keyof typeof section]}
                            </Heading>
                            <div className="items-center gap-4 self-stretch md:flex-col block">
                              <Heading
                                as="h5"
                                className="text-[16px] font-medium text-blue_gray-100 lg:text-[16px] inline leading-[30px]"style={{fontSize: '14px'}}
                              >
                                {section[`section5_user${index + 1}_job`  as keyof typeof section]}
                              </Heading>
                              <Img
                                src="img_image_54.webp"
                                width={36}
                                height={36}
                                alt="Profile Image"
                                className="h-[36px] w-[36px] object-contain inline ml-2 md:h-[24px] md:w-[24px]"
                              />
                            </div>
                            </div>

                        </div>

                        <div className="flex flex-1 flex-col gap-10 md:self-stretch">
                          <div className="flex flex-col gap-2">
                            <Img
                              src="img_ri_double_quotes_l.webp"
                              width={46}
                              height={46}
                              alt="Quote Icon"
                              className="h-[46px] w-[46px] object-contain md:w-[38px] md:h-[38px]"
                            />
                            <Heading
                              as="h6"
                              className="text-[16px] font-normal leading-7 text-blue-100 lg:text-[16px]"
                              style={{fontSize:'16px',lineHeight:'20px'}}
                            >
                              {section[`section5_user${index + 1}_description`  as keyof typeof section]}
                            </Heading>
                          </div>
                        </div>
                    </div>
                  );

                }else{

                  return (
                    <div
                      key={index}
                      className={`max-w-[1310px] m-auto flex-shrink-0 flex w-full items-center gap-[46px] md:flex-col absolute transition-all duration-1000`}
                      style={{
                        opacity: currentIndex === index ? "1" : "0",
                        transform: `translateX(${translateX})`,
                      }}
                    >
                      <Img
                        src="img_image_59.webp"
                        width={286}
                        height={286}
                        alt={`Image ${index + 1}`}
                        className="h-[286px] w-[286px] object-contain md:w-full"
                      />
                      <div className="flex flex-1 flex-col gap-10 md:self-stretch">
                        <div className="flex flex-col items-start">
                          <Heading
                            size="headinglg"
                            as="h4"
                            className="text-[26px] font-semibold text-blue_gray-100 lg:text-[22px]"
                          >
                            {section[`section5_user${index + 1}_name` as keyof typeof section]}
                          </Heading>
                          <div className="flex items-center gap-4 self-stretch md:flex-col">
                            <Heading
                              as="h5"
                              className="text-[22px] font-medium text-blue_gray-100 lg:text-[18px]"
                            >
                              {section[`section5_user${index + 1}_job` as keyof typeof section]}
                            </Heading>
                            <Img
                              src="img_image_54.webp"
                              width={36}
                              height={36}
                              alt="Profile Image"
                              className="h-[36px] w-[36px] object-contain md:w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Img
                            src="img_ri_double_quotes_l.webp"
                            width={46}
                            height={46}
                            alt="Quote Icon"
                            className="h-[46px] w-[46px] object-contain"
                          />
                          <Heading
                            as="h6"
                            className="text-[22px] font-normal leading-7 text-blue-100 lg:text-[18px]"
                          >
                            {section[`section5_user${index + 1}_description` as keyof typeof section]}
                          </Heading>
                        </div>
                      </div>
                    </div>
                  );

                }

              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 md:mt-[-45px] mt-[-63px]">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-[12px] w-[12px] md:w-[8px] md:h-[8px] rounded-md ${
                    currentIndex === index ? "bg-blue-400" : "bg-blue_gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
