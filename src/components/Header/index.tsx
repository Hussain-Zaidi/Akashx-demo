"use client";

import { Heading, Img } from "./..";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation"; // Import usePathname for active link detection

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Detect screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    window.addEventListener("resize", handleResize);

    // Call the handler initially to set the correct state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center ml-[100px] mr-28 gap-5 md:mx-0`}
      style={{
        position: isMobile ? "fixed" : "static",
        borderBottom: isMobile ? "1px solid #556E944D" : "none",
        padding: isMobile ? "16px 20px 16px 20px" : "initial",
        width: isMobile ? "100%" : "auto",
        backgroundColor: isMobile ? "#080c26e6" : "transparent",
        top: isMobile ? 0 : "auto",
        zIndex: "100",
        height:isMobile ? '64px' : '',
      }}
    >
      <Link
      href="/">
          <Img
          src="img_header_logo.svg"
          width={175.92}
          height={40.3}
          alt="Headerlogo"
          className="h-[40.3px] w-[175.92px] object-contain md:w-[104px] max-w-[175.92px]"
          />
      </Link>

      {/* Hamburger Icon for mobile (only visible below 1050px) */}
      {isMobile && (
        <div
          className="cursor-pointer text-white"
          onClick={toggleMenu}
          style={{ zIndex: isMobile && isMenuOpen ? 51 : "auto" }}
        >
          {isMenuOpen ? (
            <FiX  size={30} className="text-white" style={{color:'#fff'}} />
          ) : (
            <FiMenu  size={30} className="text-white" style={{color:'#fff'}} />
          )}
        </div>
      )}

      {/* Navigation Menu */}
      <ul
  className={`${
    isMobile
      ? isMenuOpen
        ? "fixed w-full h-[100vh] bg-black bg-opacity-75 z-50 flex flex-col backdrop-blur-sm py-[40px]"
        : "fixed w-full h-[100vh] bg-black bg-opacity-75 z-50 flex flex-col backdrop-blur-sm py-[40px]"
      : "flex flex-wrap gap-[60px] lg:gap-5 md:gap-5"
  } transition-[1s]`}
  style={{
    color: "white",
    backgroundColor: isMobile && isMenuOpen ? "#080d26" : "#080d26",
    // padding: isMobile && isMenuOpen ? "20px" : "",
    top: isMobile && isMenuOpen ? "48px" : "48px",
    left: isMobile && isMenuOpen ? "0" : "100%",
  }}
>

        <li onClick={() => setIsMenuOpen(false)}>
          <Link href="/" className={`hidden cursor-pointer lg:text-[17px] ${isMobile ? "border-b border-[#546e937f] pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium  ${
                pathname === "/cognitive"
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Home
            </Heading>
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link href="/cognitive-sql" className={`cursor-pointer lg:text-[17px] ${isMobile ? "border-b border-[#546e937f] pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium ${
                pathname === "/cognitive#CognitiveSQL"
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Cognitive SQL
            </Heading>
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link href="/ontlogy-views" className={`cursor-pointer lg:text-[17px] ${isMobile ? "border-b border-[#546e937f] pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium ${
                pathname === "/cognitive#OntlogyViews"
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Ontology Views
            </Heading>
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link href="/use-cases" className={`cursor-pointer lg:text-[17px] ${isMobile ? "border-b border-[#546e937f] pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium ${
                pathname === "/cognitive#UseCases"
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Use Cases
            </Heading>
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link href="/about" className={`cursor-pointer lg:text-[17px] ${isMobile ? "border-b border-[#546e937f] pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium ${
                pathname === "/about"
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Company
            </Heading>
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link href="/blogs" className={`cursor-pointer lg:text-[17px] ${isMobile ? "border-b border-[#546e937f] pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium ${
                pathname === "/blogs"
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Blogs
            </Heading>
          </Link>
        </li>
        {/* <li onClick={() => setIsMenuOpen(false)}>
          <Link href="#" className={`cursor-pointer lg:text-[17px] ${isMobile ? " pb-[20px] pt-[20px] px-[20px]" : ""}`}>
            <Heading
              size="textmd"
              as="p"
              className={`text-[20px] font-medium ${
                pathname === "#" // Replace with the actual path if needed
                  ? "text-blue-100"
                  : "text-blue_gray-300 hover:text-blue-100"
              }`}
            >
              Resources
            </Heading>
          </Link>
        </li> */}
      </ul>
    </header>
  );
}
