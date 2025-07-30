"use client";
import { Heading, Button, Input } from "../../components";
import WordFlip from "../../components/WordFlip";
import "../../styles/WordFlip.module.css";
import React, {useState, useEffect } from "react";
import { useNotification } from "../../components/Notification/NotificationContext"; // Import notification context
const defaultSection = {
  section1_title: "",
  section1_description: "",
  section1_input_desciption: "",
};

interface TesthomeColumnOneProps {
  fetchedSection: any; // You can define a more specific type if needed
}

export default function TesthomeColumnOne({ fetchedSection }: TesthomeColumnOneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [section, setSection] = useState(defaultSection);
  const flipWords = ["Warehouse", "Lakehouse"];


   const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
  
    // Access the notification context
    const { showNotification } = useNotification();
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const sendEmail = async () => {
      if (!email) {
        showNotification("Please enter a valid email address.", "error",'requestDemo');
        return;
      }
  
      setLoading(true);
  
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          showNotification(
            "Your request has been received successfully, and we will get back to you soon.",
            "success",
            'requestDemo'
          );
        } else {
          showNotification(data.message || "Something went wrong. Please try again later.", "error",'requestDemo');
        }
      } catch (error) {
        showNotification("Error occurred. Please try again later.", "error",'requestDemo');
      } finally {
        setLoading(false);
      }
    };

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
      section1_description: fetchedSection.section1_description ?? defaultSection.section1_description,
      section1_input_desciption: fetchedSection.section1_input_desciption ?? defaultSection.section1_input_desciption,
    });
  }, [fetchedSection]); // Dependency on fetchedSection

  return (
    <div className="mb-[152px] md:mb-[74px] flex flex-col items-center md:pt-[102px] relative">
      <div className="container-xs flex flex-col items-center gap-[136px] lg:gap-[102px] lg:px-5 md:gap-[102px] md:px-5 md:gap-[68px] min-h-[486px] md:min-h-[310px] justify-between">
        <div className="flex flex-col items-center gap-[20px] md:gap-[9px] self-stretch">


          {/* <div className="bg-gradient3 bg-clip-text flex flex-wrap items-start  gap-[15px] self-stretch overflow-hidden md:justify-center text-center md:block md:w-[99%] md:m-auto"> */}
          <div className="bg-gradient3 bg-clip-text block flex-wrap items-start  gap-[15px] self-stretch overflow-hidden md:justify-center text-center md:block md:w-[99%] md:m-auto">
            <Heading
              size="heading2xl"
              as="h1"
              className="inline self-center  font-montserrat text-[60px] font-extrabold text-transparent lg:text-[51px] md:text-[40px] md:text-[34px] md:inline"
              style=
                  {{
                    fontSize: isMobile  ? '29px': "",
                  }}
            >
              {section.section1_title + " "}
            </Heading>

            
            <Heading id="flipTheWord" size="heading2xl" as="h2" className=" inline-flex gap-[10px] min-w-[530px] font-montserrat text-[60px] font-extrabold text-gray-50 lg:text-[51px] md:text-[40px] md:text-[34px]  md:inline"
            style={{
              background: (isMobile && 0)
                ? "inherit"
                : "linear-gradient(90deg, rgb(117, 87, 255) 30%, rgb(48, 213, 200) 100%)",
              WebkitBackgroundClip: (isMobile && 0) ? "inherit" : "text",
              color: (isMobile && 0) ? "inherit" : "#0000",
              fontSize: isMobile ? "29px" : "",
            }}
             >
              <span> Data </span>
              {/* Data Warehouse */}
              <WordFlip words={flipWords} />
            </Heading>
          </div>



          <Heading
            size="text2xl"
            as="h3"
            className="w-[68%] text-center text-[26px] font-normal leading-9 md:leading-[20px] text-blue-100 lg:w-full lg:text-[22px] md:w-full"
            style=
                  {{
                    fontSize: isMobile  ? '16px': "",
                  }}
          >
            {section.section1_description}
          </Heading>
        </div>
        <div className="flex w-[50%] flex-col items-center gap-[16px] md:gap-[12px] lg:w-full md:w-full ">

          <div className="flex justify-center self-stretch ">
            <Input
              type="email"
              name="email"
              id="requestDemo"
              placeholder={`Company Email`}
              onChange={handleEmailChange}
              className="flex h-[100px] md:h-[44px] flex-grow items-center justify-center rounded-bl-[10px] rounded-tl-[10px] bg-[#EBF5FF] px-8 text-[24px] font-medium text-blue_gray-300 md:px-0 md:rounded-bl-[4px] md:rounded-tl-[4px]"
              style=
              {{
                fontSize: isMobile  ? '14px': "",
              }}
            />
            <Button className="flex h-[100px] md:h-[44px] min-w-[278px] md:min-w-[144px] flex-row items-center justify-center rounded-br-[10px] rounded-tr-[10px] md:rounded-br-[4px] md:rounded-tr-[4px] bg-deep_purple-a200 px-[34px] text-center text-[28px] font-medium text-gray-50 lg:text-[23px] md:px-4 md:text-[16px]"
            // un comment the below line for mail functionality
            onClick={() => {
              const inputElement = document.getElementById('requestDemo') as HTMLInputElement | null;
              if (inputElement && inputElement.value) {
                sendEmail();
              } else {
                showNotification("Please enter a valid email address.", "error",'requestDemo');
              }
            }}
            >
             {loading ? "Sending...": 'Request Demo'}
            </Button>
          </div>
          <Heading as="h4" className="font-montserrat text-[22px] font-medium text-indigo-200 lg:text-[18px] text-center"
          style=
          {{
            fontSize: isMobile  ? '12px': "",
          }}
          >
          {section.section1_input_desciption}
          </Heading>
        </div>
      </div>
    </div>
  );
}
