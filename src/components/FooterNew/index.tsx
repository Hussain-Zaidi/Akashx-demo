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
      className={`${props.className} flex justify-center items-center pb-[2.5rem] lg:h-auto md:h-auto pt-[7.5rem] lg:py-8 md:py-5 md:py-4 md:pt-[2.5rem] bg-[url(/images/img_image_636x1920.webp)] bg-cover bg-no-repeat md:bg-[position:-6.25rem_-6.25rem]`}
    >
      <div className="container-xs flex justify-center lg:px-5 md:px-5 ml-[6.25rem] mr-28 max-w-full md:ml-0 md:mr-0">
        <div className="flex w-full flex-col items-center">
          <div className="flex w-[100%] items-start justify-between gap-5 md:gap-[3.75rem] self-start lg:w-full md:w-full md:flex-col">
            <div className="flex w-fit whitespace-nowrap flex-col gap-8 md:gap-[1.125rem] md:w-full">
              <div className="flex flex-col items-start gap-4 md:gap-[0.375rem]">
                <Img
                  // src="img_footer_logo.svg"
                  src="img_header_logo.svg"
                  width={166}
                  height={38}
                  alt="Footerlogo"
                  className="h-[2.375rem] w-[10.375rem] object-contain md:w-[6.5rem]"
                />
                <Heading
                  size="auto"
                  as="h5"
                  className="bg-gradient bg-clip-text font-montserrat text-[1.375rem] font-extrabold leading-7 text-transparent md:text-[1rem] md:leading-[1.3125rem]"
                >
                  <>
                    {/* World’s #1<br />
                    Storage Accelerated <br />
                    Data Warehouse */}
                    World’s #1<br />
OLCP Database
                  </>
                </Heading>
              </div>
              <div className="flex gap-[1.625rem] md:gap-[1.125rem]">
              <Link href="https://www.linkedin.com/company/akashx-inc/" rel="noreferrer">
                <Button className="flex h-[2.75rem] w-[2.75rem] md:h-[2.625rem] md:w-[2.625rem] items-center justify-center rounded-[1.375rem] border border-solid border-blue_gray-500 px-2.5 hover:border-blue_gray-300">
                  <Img src="img_ri_linkedin_fill.svg" width={22} height={22} />
                </Button>
              </Link>
                <Button className="flex h-[2.75rem] w-[2.75rem] md:h-[2.625rem] md:w-[2.625rem] items-center justify-center rounded-[1.375rem] border border-solid border-blue_gray-500 px-2.5 hover:border-blue_gray-300">
                  <Img src="x.svg" width={24} height={24} className="w-[70%]" />
                </Button>
              </div>

            </div>
            <div className="flex w-[100%] items-start justify-center gap-[9rem] md:gap-[3.75rem] md:w-full md:flex-col">
              <div className="flex w-fit flex-col items-start gap-[1.625rem] md:gap-[1.4375rem] self-center md:w-full whitespace-nowrap">
                <Heading
                  size="auto"
                  as="h6"
                  className="font-montserrat text-[1.375rem] font-bold md:font-semibold uppercase tracking-[1.00px] text-blue_gray-100 md:text-[.875rem]"
                >
                  PLATFORM
                </Heading>
                <ul className="flex flex-col items-start gap-6 md:gap-4">
                  <li>
                    <Link href="/cognitive#CognitiveSQL" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className=" font-inter text-[1.375rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                        Cognitive SQL          
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cognitive#OntlogyViews" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className=" font-inter text-[1.375rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                       Ontlogy Views 
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cognitive#UseCases" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className=" font-inter text-[1.375rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                       Use Cases
                      </Heading>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="Works" target="_blank" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="font-inter text-[1.125rem] md:text-[.875rem]  font-medium text-indigo-50">
                        Works
                      </Heading>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="Team" target="_blank" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="font-inter text-[1.125rem] md:text-[.875rem]  font-medium text-indigo-50">
                        Team
                      </Heading>
                    </Link>
                  </li> */}
                </ul>
              </div>

              <div className="flex w-fit flex-col items-start gap-[1.625rem] md:gap-[1.4375rem] self-start md:w-full">
                <Heading
                  size="auto"
                  as="h6"
                  className="font-montserrat text-[1.375rem] font-bold md:font-semibolduppercase tracking-[1.00px] text-blue_gray-100 md:text-[0.875rem]"
                >
                  COMPANY
                </Heading>
                <ul className="flex flex-col items-start gap-6 md:gap-4">
                  {/* <li>
                    <Link href="/cognitive" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="uppercase font-inter text-[1.125rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                        Home
                      </Heading>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/about" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className=" font-inter text-[1.375rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                       About
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className=" font-inter text-[1.375rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                       Blogs
                      </Heading>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="Works" target="_blank" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="font-inter text-[1.125rem] md:text-[.875rem]  font-medium text-indigo-50">
                        Works
                      </Heading>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="Team" target="_blank" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="font-inter text-[1.125rem] md:text-[.875rem]  font-medium text-indigo-50">
                        Team
                      </Heading>
                    </Link>
                  </li> */}
                </ul>
              </div>


              <div className="flex flex-col gap-[1.625rem] md:gap-4 whitespace-nowrap">
                <Heading
                  size="auto"
                  as="h6"
                  className="font-montserrat text-[1.375rem] font-bold md:font-semibold uppercase tracking-[1.00px] text-blue_gray-100 md:text-[0.875rem]"
                >
                  Contact us
                </Heading>
                <ul className="flex flex-col items-start gap-6">
                  <li>
                    <Link href="mailto:contact@akashx.ai" rel="noreferrer" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="font-inter text-[1.375rem] md:text-[.875rem]  font-normal text-blue_gray-100 hover:text-indigo-50 hover:underline">
                      contact@akashx.ai
                      </Heading>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" className="md:text-[0.875rem]">
                      <Heading size="auto" as="p" className="font-inter text-[1.125rem] md:text-[.875rem]  font-medium text-indigo-50">
                        How it Works
                      </Heading>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-[7.375rem] md:mt-[5rem] h-px self-stretch bg-blue_gray-500_7f w-[81rem] md:w-full mx-auto" />
          <Heading
            size="auto"
            as="p"
            className="mt-[2.375rem] md:mt-[1rem] font-montserrat text-[1.375rem] font-normal text-blue_gray-300 md:text-[0.75rem]"
          >
            © Copyright 2025, All Rights Reserved by AkashX
          </Heading>
        </div>
      </div>
    </footer>
  );
}