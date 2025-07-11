import { Button, Img, Heading } from "./..";
import Link from "next/link";
import React, {useEffect, useState } from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userTitle?: React.ReactNode;
  userLink?: string;
  userDescription?: React.ReactNode;
}

export default function UserProfile({
  userImage = "img_image2.webp",
  userName = "Darshan Nagaraj",
  userTitle = "Co-Founder ",
  userLink = "/ ",
  userDescription = "Based in Berlin, Germany, Darshan is a skilled professional in data analytics and engineering. He has held leadership roles at AVIV Group, Y42, and Berlin Brands Group. With a Bachelor of Engineering in Computer Science from Bangalore University, Darshan is dedicated to leveraging data to drive business intelligence and innovation.",
  ...props
}: Props) {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-[30px] md:max-w-sm`}>
      <Img
        src={userImage}
        width={400}
        height={300}
        alt={userImage}
        className="h-[300px] w-[400px] rounded-[10px] object-contain md:w-[100%] h-[auto]"
      />
      <div className="flex flex-col items-start gap-[18px] md:gap-[16px] self-stretch">
        <div className="flex flex-col items-start gap-0.5 self-stretch">
          <Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-gray-50 mb-[10px]" style=
         {{
          fontSize: isMobile  ? '18px': "",
          background: 0  ? 'linear-gradient(90deg, #3499FF, #6DDCFF)': "",
          backgroundClip: 0  ? 'text': "",
          color: 0  ? 'transparent': "#CDDAED",
         }}>
            {userName}
          </Heading>
          <Heading size="textmd" as="p" className="text-[22px] font-medium text-blue_gray-100" style=
         {{
          fontSize: isMobile  ? '16px': "",
          background: 0  ? 'linear-gradient(90deg, #3499FF, #6DDCFF)': "",
          backgroundClip: 0  ? 'text': "",
          color: 0  ? 'transparent': "#CDDAED",
         }}>
            {userTitle}
          </Heading>
        </div>
        <Heading size="textxs" as="p" className="w-full text-[20px] font-normal leading-[26px] md:leading-[18px] text-blue_gray-100" style=
         {{
          fontSize: isMobile  ? '14px': "",
          background: 0  ? 'linear-gradient(90deg, #3499FF, #6DDCFF)': "",
          backgroundClip: 0  ? 'text': "",
          color: 0  ? 'transparent': "#B8D0F2",
         }}>
          {userDescription}
        </Heading>
        <Link href={userLink} rel="noreferrer">
        <Button
          className="rilinkedin_one_border flex items-center justify-center rounded-[10px] p-[12px] relative bg-gray-900_ba"
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
        </Link>

      </div>
    </div>
  );
}
