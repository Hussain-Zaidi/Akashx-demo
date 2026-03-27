// "use client";

// import { Button, Input, Heading } from "../../components";
// import React, { useEffect, useState } from "react";
// import { useNotification } from "../../components/Notification/NotificationContext"; // Import notification context

// const defaultSection = {
//   section6_title1: "",
//   section6_title2: "",
//   section6_description_p1: "",
//   section6_description_p2: "",
//   section6_description_p3: "",
// };

// // Define the props interface for the component
// interface TesthomeRowOneProps {
//   fetchedSection: any; // You can define a more specific type if needed
// }

// export default function TesthomeRowquarteryour({ fetchedSection }: TesthomeRowOneProps) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [section, setSection] = useState(defaultSection);

//   // Access the notification context
//   const { showNotification } = useNotification();

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const sendEmail = async () => {
//     if (!email) {
//       showNotification("Please enter a valid email address.", "error",'requestSignUp');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("/api/sendEmailSignup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         showNotification(
//           "Your request has been received successfully, and we will get back to you soon.",
//           "success",'requestSignUp'
//         );
//       } else {
//         showNotification(data.message || "Something went wrong. Please try again later.", "error",'requestSignUp');
//       }
//     } catch (error) {
//       showNotification("Error occurred. Please try again later.", "error",'requestSignUp');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 1050);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Update section data based on fetchedSection
//   useEffect(() => {
//     setSection({
//       section6_title1: fetchedSection.section6_title1 ?? defaultSection.section6_title1,
//       section6_title2: fetchedSection.section6_title2 ?? defaultSection.section6_title2,
//       section6_description_p1: fetchedSection.section6_description_p1 ?? defaultSection.section6_description_p1,
//       section6_description_p2: fetchedSection.section6_description_p2 ?? defaultSection.section6_description_p2,
//       section6_description_p3: fetchedSection.section6_description_p3 ?? defaultSection.section6_description_p3,
//     });
//   }, [fetchedSection]); // Dependency on fetchedSection

//   return (
//     <div className="flex justify-center">
//       <div className="container-xs flex justify-center lg:px-5 md:px-[15px] max-w-[100%] mx-[105px] md:mx-auto">
//         <div
//           className="relative flex h-[650px] md:h-[400px] w-full flex-col items-center gap-[42px] md:gap-[32px] rounded-[20px] border border-solid border-blue-a100 bg-[url(/images/img_image_650x1608.webp)] md:bg-[url(/images/sign.svg)] bg-cover bg-no-repeat px-14 py-20 shadow-xs lg:h-auto lg:py-8 md:px-[18px] md:py-[40px] md:mb-[100px]"
//           style={{
//             backgroundSize: isMobile ? "140% 150%" : "",
//             backgroundPosition: isMobile ? "50% 50%" : "",
//           }}
//         >
//           <div className="mx-[46px] flex w-[58%] flex-col items-center gap-3.5 lg:w-full md:mx-0 md:w-full">
//             <Heading
//               size="headingxl"
//               as="h2"
//               className="bg-gradient1 bg-clip-text text-center font-montserrat text-[50px] font-extrabold uppercase leading-[60px] text-transparent lg:text-[42px] md:text-[34px]"
//               style={{
//                 fontSize: isMobile ? "28px" : "",
//                 lineHeight: isMobile ? "normal" : "",
//               }}
//             >
//               <>
//                 {section.section6_title1}
//                 <br className="md:hidden"></br>
//                 <span className="hidden md:inline"> </span>
//                 {section.section6_title2}
//               </>
//             </Heading>
//             <Heading
//               size="text3xl"
//               as="h3"
//               className="text-[30px] font-semibold text-gray-50 lg:text-[25px] md:text-[24px] md:text-[22px] md:text-center md:w-[250px]"
//               style={{
//                 fontSize: isMobile ? "16px" : "",
//                 lineHeight: isMobile ? "23px" : "",
//                 width: isMobile ? "100%" : "",
//               }}
//             >
//               {section.section6_description_p1}{" "}
//               <span style={{ color: "#30D5C8" }}>{section.section6_description_p2}</span>{" "}
//               {section.section6_description_p3}
//             </Heading>
//           </div>
//           <div className="mb-[174px] flex w-[695px] justify-center lg:w-full md:w-full">
//             <Input
//               type="email"
//               id="requestSignUp"
//               name="email"
//               onChange={handleEmailChange}
//               placeholder={`Company Email`}
//               className="flex h-[90px] md:h-[44px] w-[58%] items-center justify-center rounded-bl-[10px] rounded-tl-[10px] md:rounded-bl-[4px] md:rounded-tl-[4px] bg-[#EBF5FF] px-8 text-[24px] font-medium text-blue_gray-300 md:w-full md:px-0 flex-1"
//               style={{
//                 fontSize: isMobile ? "14px" : "",
//               }}
//             />
//             <Button
//               onClick={() => {
//                 const inputElement = document.getElementById('requestSignUp') as HTMLInputElement | null;
//                 if (inputElement && inputElement.value) {
//                   sendEmail();
//                 } else {
//                   showNotification("Please enter a valid email address.", "error",'requestSignUp');
//                 }
//               }}
//               className="flex h-[90px] md:h-[44px] min-w-[242px] md:min-w-[92px] flex-row items-center justify-center rounded-br-[10px] rounded-tr-[10px] md:rounded-br-[4px] md:rounded-tr-[4px] bg-deep_purple-a200 px-[34px] text-center text-[28px] font-medium text-gray-50 lg:text-[23px] md:px-4 md:text-[14px]"
//             >
//               {loading ? "Sending..." : "Sign Up"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



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
          "We have received your request. Will get back to you soon.",
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
      <div className="container-xs flex justify-center lg:px-5 md:px-[15px] max-w-[100%] mx-[105px] md:mx-auto">
        <div
          // className="relative flex h-[650px] md:h-[400px] w-full flex-col items-center gap-[42px] md:gap-[32px] rounded-[20px] border border-solid border-blue-a100 bg-[url(/images/img_image_650x1608.webp)] md:bg-[url(/images/sign.svg)] bg-cover bg-no-repeat px-14 py-20 shadow-xs lg:h-auto lg:py-8 md:px-[18px] md:py-[40px] md:mb-[100px]"
          className="relative flex h-[650px] md:h-[352px] w-full flex-col items-center gap-[42px] md:gap-[32px] rounded-[20px] border border-solid border-blue-a100 bg-[url(/images/cognitive/Group1000004448.svg)] md:bg-[url(/images/sign.svg)] bg-cover bg-no-repeat px-14 py-20 shadow-xs md:px-[18px] md:py-[40px] md:mb-[100px]"
          style={{
            backgroundSize: isMobile ? "140% 150%" : "110%",
            backgroundPosition: isMobile ? "50% 60%" : "50% 50%",
          }}
        >
          <div className="mx-[46px] flex w-[68%] flex-col items-center gap-3.5 lg:w-full md:mx-0 md:w-full">
            <Heading
              size="headingxl"
              as="h2"
              className="bg-gradient1 bg-clip-text text-center font-montserrat text-[42px] font-extrabold uppercase leading-[60px] text-transparent md:text-[34px]"
              style={{
                fontSize: isMobile ? "24px" : "",
                lineHeight: isMobile ? "normal" : "",
              }}
            >
              <>
                {/* {section.section6_title1} */}
                Go from AI PoC <br className="md:block hidden" />to Production 
                <br className="md:hidden"></br>
                <span className="hidden md:inline"> </span>
                {/* {section.section6_title2} */}
                <span className="text-[56px] md:text-[24px] leading-[124%] mb-[30.656px] md:mb-0 inline-block">
                Fast, With Near-Zero Effort

                </span>
              </>
            </Heading>
            {/* <Heading
              size="text3xl"
              as="h3"
              className="text-[30px] font-semibold text-gray-50 lg:text-[25px] md:text-[24px] md:text-[22px] md:text-center md:w-[250px]"
              style={{
                fontSize: isMobile ? "16px" : "",
                lineHeight: isMobile ? "23px" : "",
                width: isMobile ? "100%" : "",
              }}
            >
              {section.section6_description_p1}{" "}
              <span style={{ color: "#30D5C8" }}>{section.section6_description_p2}</span>{" "}
              {section.section6_description_p3}
            </Heading> */}
          </div>
          <div className="mb-[174px] flex w-[695px] justify-center md:w-full">
            <Input
              type="email"
              id="requestSignUp"
              name="email"
              onChange={handleEmailChange}
              placeholder={`Company Email`}
              className="flex h-[90px] md:h-[44px] w-[58%] items-center justify-center rounded-bl-[10px] rounded-tl-[10px] md:rounded-bl-[4px] md:rounded-tl-[4px] bg-[#EBF5FF] px-8 text-[24px] font-medium text-blue_gray-300 md:w-full md:px-0 flex-1"
              style={{
                fontSize: isMobile ? "14px" : "",
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
              className="flex h-[90px] md:h-[44px] min-w-[242px] md:min-w-[92px] flex-row items-center justify-center rounded-br-[10px] rounded-tr-[10px] md:rounded-br-[4px] md:rounded-tr-[4px] bg-deep_purple-a200 px-[34px] text-center text-[28px] font-medium text-gray-50 lg:text-[23px] md:px-4 md:text-[14px]"
            >
              {loading ? "Sending..." : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
