"use client";
import { Heading, Button, Img } from "./..";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  const pathname = usePathname();
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center pb-[40px] lg:h-auto md:h-auto pt-[120px] lg:py-8 md:py-5 md:py-4 md:pt-[40px] bg-[url(/images/img_image_636x1920.webp)] bg-cover bg-no-repeat md:bg-[position:-100px_-100px]`}
    >
      <div className="container-xs flex justify-center lg:px-5 md:px-5  ml-[100px] mr-28 max-w-full md:ml-0 md:mr-0">
        <div className="flex w-full flex-col items-center">
          <div className="flex w-[60%] items-start justify-between gap-5 md:gap-[60px] self-start lg:w-full md:w-full md:flex-col">
            <div className="flex w-[23%] flex-col gap-8 md:gap-[18px] md:w-full">
              <div className="flex flex-col items-start gap-4 md:gap-[6px]">
                <Img
                  // src="img_footer_logo.svg"
                  src="img_header_logo.svg"
                  width={166}
                  height={38}
                  alt="Footerlogo"
                  className="h-[38px] w-[166px] object-contain md:w-[104px]"
                />
                <Heading
                  size="headings"
                  as="h5"
                  className="bg-gradient bg-clip-text font-montserrat text-[20px] font-extrabold leading-7 text-transparent  md:text-[16px] md:leading-[21px]"
                >
                  <>
                    World’s #1<br />
                    Storage Accelerated <br />
                    Data Warehouse
                  </>
                </Heading>
              </div>
              <div className="flex gap-[26px] md:gap-[18px]">
              <Link href="https://www.linkedin.com/company/akashx-inc/" rel="noreferrer">
                <Button className="flex h-[44px] w-[44px] md:h-[42px] md:w-[42px] items-center justify-center rounded-[22px] border border-solid border-blue_gray-500 px-2.5  hover:border-blue_gray-300">
                  <Img src="img_ri_linkedin_fill.svg" width={22} height={22} />
                </Button>
              </Link>
                <Button className="flex h-[44px] w-[44px] md:h-[42px] md:w-[42px] items-center justify-center rounded-[22px] border border-solid border-blue_gray-500 px-2.5  hover:border-blue_gray-300">
                  <Img src="x.svg" width={24} height={24} className="w-[70%]" />
                </Button>
              </div>

            </div>
            <div className="flex w-[38%] items-start justify-between gap-[160px] md:gap-[60px] md:w-full md:flex-col">
              <div className="flex w-[70%] flex-col items-start gap-[26px] md:gap-[23px] self-center md:w-full">
                {/* <Heading
                  size="headingxs"
                  as="h6"
                  className="font-montserrat text-[16px] font-semibold uppercase tracking-[1.00px] text-blue_gray-100 md:text-[14px]"
                >
                  PLATFORM
                </Heading> */}
                <ul className="flex flex-col items-start gap-6 md:gap-3">
                  <li>
                    <Link href="/home" rel="noreferrer" className="md:text-[14px]">
                      <Heading size="textxs" as="p" className="uppercase font-poppins text-[18px] font-medium  text-blue_gray-100 hover:text-indigo-50 hover:underline">
                        About
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" rel="noreferrer" className="md:text-[14px]">
                      <Heading size="textxs" as="p" className="uppercase font-poppins text-[18px] font-medium  text-blue_gray-100 hover:text-indigo-50 hover:underline">
                       Company
                      </Heading>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="Works" target="_blank" rel="noreferrer" className="md:text-[14px]">
                      <Heading size="textxs" as="p" className="font-poppins text-[18px] font-medium text-indigo-50">
                        Works
                      </Heading>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="Team" target="_blank" rel="noreferrer" className="md:text-[14px]">
                      <Heading size="textxs" as="p" className="font-poppins text-[18px] font-medium text-indigo-50">
                        Team
                      </Heading>
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="flex flex-col  gap-[26px] md:gap-3 whitespace-nowrap">
                <Heading
                  size="headingxs"
                  as="h6"
                  className="font-montserrat text-[16px] font-semibold uppercase tracking-[1.00px] text-blue_gray-100 md:text-[14px]"
                >
                  Contat us
                </Heading>
                <ul className="flex flex-col items-start gap-6">
                  <li>
                    <Link href="mailto:contact@akashx.ai" rel="noreferrer" className="md:text-[14px]">
                      <Heading size="textxs" as="p" className="font-poppins text-[18px] font-medium text-blue_gray-100 hover:text-indigo-50 hover:underline">
                      contact@akashx.ai
                      </Heading>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" className="md:text-[14px]">
                      <Heading size="textxs" as="p" className="font-poppins text-[18px] font-medium text-indigo-50">
                        How it Works
                      </Heading>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-[118px] md:mt-[80px] h-px self-stretch bg-blue_gray-500_7f w-[1296px] md:w-full mx-auto" />
          <Heading
            size="textxs"
            as="p"
            className="mt-[38px] md:mt-[16px] font-montserrat text-[16px] font-normal text-blue_gray-300 md:text-[12px]"
          >
            © Copyright 2025, All Rights Reserved by AkashX
          </Heading>
        </div>
      </div>
    </footer>
  );
}
