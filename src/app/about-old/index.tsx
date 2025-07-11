"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TestaboutColumnOne from "./TestaboutColumnOne";
import TestaboutColumnTwo from "./TestaboutColumnTwo";
import TestaboutRowakashxis from "./TestaboutRowakashxis";
import React, { useState, useEffect } from "react";

export default function TestAboutPage() {
  const [isMobile, setIsMobile] = useState(false);
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
    <div className="w-full">
      <div className="flex h-[1000px] flex-col gap-[222px] bg-[url(/images/img_image_1000x1920.webp)] md:bg-[url(/images/Frame.svg)] bg-cover bg-no-repeat py-9 lg:h-auto lg:gap-[166px] md:h-auto md:gap-[166px] sm:gap-[111px] sm:py-4"
      style=
      {{
        backgroundSize: isMobile  ? '275px': "",
        backgroundPosition: isMobile  ? '100% -35%': "",
        marginTop: isMobile  ? '80px': "",
      }}
      >
        <Header />
        <TestaboutRowakashxis />
      </div>
      <div className="bg-gray-900 py-[120px] lg:py-8 md:py-5 sm:py-4">
        <TestaboutColumnOne />
      </div>
      <div className="bg-gray-900 py-[120px] lg:py-8 md:py-5 sm:py-4">
        <TestaboutColumnTwo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
