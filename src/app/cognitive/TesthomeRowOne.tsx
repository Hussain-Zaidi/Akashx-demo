"use client";

import { Button, Input, Heading } from "../../components";
import React, { useEffect, useState } from "react";
import { useNotification } from "../../components/Notification/NotificationContext"; // Import notification context

const defaultSection = {
  section6_title1: "",
  section6_title2: "",
  section6_description_p1: "",
  section6_description_p2: "",
  section6_description_p3: "",
};

// Define the props interface for the component
interface TesthomeRowOneProps {
  fetchedSection: any; // You can define a more specific type if needed
}

export default function TesthomeRowquarteryour({ fetchedSection }: TesthomeRowOneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState(defaultSection);

  // Access the notification context
  const { showNotification } = useNotification();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmail = async () => {
    if (!email) {
      showNotification("Please enter a valid email address.", "error",'requestSignUp');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailSignup", {
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
          "success",'requestSignUp'
        );
      } else {
        showNotification(data.message || "Something went wrong. Please try again later.", "error",'requestSignUp');
      }
    } catch (error) {
      showNotification("Error occurred. Please try again later.", "error",'requestSignUp');
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
      section6_title1: fetchedSection.section6_title1 ?? defaultSection.section6_title1,
      section6_title2: fetchedSection.section6_title2 ?? defaultSection.section6_title2,
      section6_description_p1: fetchedSection.section6_description_p1 ?? defaultSection.section6_description_p1,
      section6_description_p2: fetchedSection.section6_description_p2 ?? defaultSection.section6_description_p2,
      section6_description_p3: fetchedSection.section6_description_p3 ?? defaultSection.section6_description_p3,
    });
  }, [fetchedSection]); // Dependency on fetchedSection

  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center lg:px-5 md:px-[0.9375rem] max-w-[100%] mx-[6.5625rem] md:mx-auto">
        <div
          className="relative flex h-[40.625rem] md:h-[25rem] w-full flex-col items-center gap-[2.625rem] md:gap-[2rem] rounded-[1.25rem] border border-solid border-blue-a100 bg-[url(/images/img_image_650x1608.webp)] md:bg-[url(/images/sign.svg)] bg-cover bg-no-repeat px-14 py-20 shadow-xs lg:h-auto lg:py-8 md:px-[1.125rem] md:py-[2.5rem] md:mb-[6.25rem]"
          style={{
            backgroundSize: isMobile ? "140% 150%" : "",
            backgroundPosition: isMobile ? "50% 50%" : "",
          }}
        >
          <div className="mx-[2.875rem] flex w-[58%] flex-col items-center gap-3.5 lg:w-full md:mx-0 md:w-full">
            <Heading
              size="auto"
              as="h2"
              className="bg-gradient1 bg-clip-text text-center font-montserrat text-[3.125rem] font-extrabold uppercase leading-[3.75rem] text-transparent lg:text-[2.625rem] md:text-[2.125rem]"
              style={{
                fontSize: isMobile ? "1.75rem" : "",
                lineHeight: isMobile ? "normal" : "",
              }}
            >
              <>
                {section.section6_title1}
                <br className="md:hidden"></br>
                <span className="hidden md:inline"> </span>
                {section.section6_title2}
              </>
            </Heading>
            <Heading
              size="auto"
              as="h3"
              className="text-[1.875rem] font-semibold text-gray-50 lg:text-[1.5625rem] md:text-[1.25rem] md:text-center md:w-[15.625rem]"
              style={{
                fontSize: isMobile ? "1rem" : "",
                lineHeight: isMobile ? "1.4375rem" : "",
                width: isMobile ? "100%" : "",
              }}
            >
              {section.section6_description_p1}{" "}
              <span style={{ color: "#30D5C8" }}>{section.section6_description_p2}</span>{" "}
              {section.section6_description_p3}
            </Heading>
          </div>
          <div className="mb-[10.875rem] flex w-[43.4375rem] justify-center lg:w-full md:w-full">
            <Input
              type="email"
              id="requestSignUp"
              name="email"
              onChange={handleEmailChange}
              placeholder={`Company Email`}
              className="flex h-[5.625rem] md:h-[2.75rem] w-[58%] items-center justify-center rounded-bl-[0.625rem] rounded-tl-[0.625rem] md:rounded-bl-[0.25rem] md:rounded-tl-[0.25rem] bg-[#EBF5FF] px-8 text-[1.5rem] font-medium text-blue_gray-300 md:w-full md:px-0 flex-1"
              style={{
                fontSize: isMobile ? "0.875rem" : "",
              }}
            />
            <Button
              onClick={() => {
                const inputElement = document.getElementById('requestSignUp') as HTMLInputElement | null;
                if (inputElement && inputElement.value) {
                  sendEmail();
                } else {
                  showNotification("Please enter a valid email address.", "error",'requestSignUp');
                }
              }}
              className="flex h-[5.625rem] md:h-[2.75rem] min-w-[15.125rem] md:min-w-[5.75rem] flex-row items-center justify-center rounded-br-[0.625rem] rounded-tr-[0.625rem] md:rounded-br-[0.25rem] md:rounded-tr-[0.25rem] bg-deep_purple-a200 px-[2.125rem] text-center text-[1.75rem] font-medium text-gray-50 lg:text-[1.4375rem] md:px-4 md:text-[0.875rem]"
            >
              {loading ? "Sending..." : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}