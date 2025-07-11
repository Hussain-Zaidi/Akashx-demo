"use client";
import { Text, Heading } from "./..";
import React ,{useEffect,useState} from "react";

interface Props {
  className?: string;
  headingText?: React.ReactNode;
  subheadingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function QuerySpeedIncrease({
  headingText = "10x",
  subheadingText = "Increase in Query Speed",
  descriptionText = "(Speed of real time db)",
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
    <div {...props} className={`${props.className} flex flex-col items-start px-[50.82px] md:px-[20px] flex-1 md:flex-none justify-center md:py-[20px]`}>
      <Heading size="heading2xl" as="h1" className="font-montserrat text-[60px] font-semibold text-indigo-50" style={{fontSize: isMobile  ? '22px': "",}}>
        {headingText}
      </Heading>
      <Heading as="p" className="mt-2.5 md:mt-[8px] text-[22px] font-medium text-blue-100" style={{fontSize: isMobile  ? '16px': "",}}>
        {subheadingText}
      </Heading>
      <Text as="p" className="mb-2 mt-2.5 md:mt-[6px] text-[18px] font-normal text-blue-100" style={{fontSize: isMobile  ? '12px': "",}}>
        ({descriptionText})
      </Text>
    </div>
  );
}
