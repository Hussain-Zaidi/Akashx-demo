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
    <div className="mb-[9.5rem] md:mb-[4.625rem] flex flex-col items-center md:pt-[6.375rem] relative">
      <div className="container-xs flex flex-col items-center gap-[8.5rem] lg:gap-[6.375rem] lg:px-5 md:gap-[6.375rem] md:px-5 md:gap-[4.25rem] min-h-[30.375rem] md:min-h-[19.375rem] justify-between">
        <div className="flex flex-col items-center gap-[1.25rem] md:gap-[0.5625rem] self-stretch">


          {/* <div className="bg-gradient3 bg-clip-text flex flex-wrap items-start  gap-[15px] self-stretch overflow-hidden md:justify-center text-center md:block md:w-[99%] md:m-auto"> */}
          <div className="bg-gradient3 bg-clip-text block flex-wrap items-start gap-[0.9375rem] self-stretch overflow-hidden md:justify-center text-center md:block md:w-[99%] md:m-auto">
            <Heading
              size="heading2xl"
              as="h1"
              className="inline self-center font-montserrat text-[3.75rem] font-extrabold text-transparent lg:text-[3.1875rem] md:text-[2.5rem] md:text-[2.125rem] md:inline"
              style=
                  {{
                    fontSize: isMobile  ? '1.8125rem': "",
                  }}
            >
              {section.section1_title + " "}
            </Heading>

            
            <Heading id="flipTheWord" size="heading2xl" as="h2" className=" inline-flex gap-[0.625rem] min-w-[33.125rem] font-montserrat text-[3.75rem] font-extrabold text-gray-50 lg:text-[3.1875rem] md:text-[2.5rem] md:text-[2.125rem] md:inline"
            style={{
              background: (isMobile && 0)
                ? "inherit"
                : "linear-gradient(90deg, rgb(117, 87, 255) 30%, rgb(48, 213, 200) 100%)",
              WebkitBackgroundClip: (isMobile && 0) ? "inherit" : "text",
              color: (isMobile && 0) ? "inherit" : "#0000",
              fontSize: isMobile ? "1.8125rem" : "",
            }}
             >
              <span> Data </span>
              {/* Data Warehouse */}
              <span className='w-[10.9375rem] inline-block back' style={{background:'inherit'}} >
                  <WordFlip words={flipWords} />
              </span>
            </Heading>
          </div>



          <Heading
            size="text2xl"
            as="h3"
            className="w-[68%] text-center text-[1.625rem] font-normal leading-9 md:leading-[1.25rem] text-blue-100 lg:w-full lg:text-[1.375rem] md:w-full"
            style=
                  {{
                    fontSize: isMobile  ? '1rem': "",
                  }}
          >
            {section.section1_description}
          </Heading>
        </div>
        <div className="flex w-[50%] flex-col items-center gap-[1rem] md:gap-[0.75rem] lg:w-full md:w-full ">

          <div className="flex justify-center self-stretch ">
            <Input
              type="email"
              name="email"
              id="requestDemo"
              placeholder={`Company Email`}
              onChange={handleEmailChange}
              className="flex h-[6.25rem] md:h-[2.75rem] flex-grow items-center justify-center rounded-bl-[0.625rem] rounded-tl-[0.625rem] bg-[#EBF5FF] px-8 text-[1.5rem] font-medium text-blue_gray-300 md:px-0 md:rounded-bl-[0.25rem] md:rounded-tl-[0.25rem]"
              style=
              {{
                fontSize: isMobile  ? '0.875rem': "",
              }}
            />
            <Button className="flex h-[6.25rem] md:h-[2.75rem] min-w-[17.375rem] md:min-w-[9rem] flex-row items-center justify-center rounded-br-[0.625rem] rounded-tr-[0.625rem] md:rounded-br-[0.25rem] md:rounded-tr-[0.25rem] bg-deep_purple-a200 px-[2.125rem] text-center text-[1.75rem] font-medium text-gray-50 lg:text-[1.4375rem] md:px-4 md:text-[1rem]"
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
          <Heading as="h4" className="font-montserrat text-[1.375rem] font-medium text-indigo-200 lg:text-[1.125rem] text-center"
          style=
          {{
            fontSize: isMobile  ? '0.75rem': "",
          }}
          >
          {section.section1_input_desciption}
          </Heading>
        </div>
      </div>
    </div>
  );
}