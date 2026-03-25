"use client";
import Footer from "../../components/Footer";
import TestaboutColumnOne from "./TestaboutColumnOne";
import TestaboutColumnTwo from "./TestaboutColumnTwo";
import TestaboutColumnThree from "./TestaboutColumnThree";
import TestaboutColumnSix from "./TestaboutColumnSix";
import TestaboutColumnSeven from "./TestaboutColumnSeven";
import TestaboutRowakashxis from "./TestaboutRowakashxis";
import React, { useState, useEffect } from "react";
import { STRAPI_URL } from "@/utils/url";

export default function TestAboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  // Use state to hold the fetched section data
  const [fetchedSection, setFetchedSection] = useState<any>(null); // Use `any` if you don't want to define a type
  const apiURl = `${STRAPI_URL}/api/akashx-about-pages`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/about-page-api-data");
        const response = await fetch(apiURl);
        const jsonData = await response.json();

        // Set the fetched data to the state
        const sectionData = jsonData?.data?.[0] ?? null;
        setFetchedSection(sectionData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

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
      <div className="flex h-[1000px] flex-col justify-end gap-[222px] bg-[url(/images/img_image_1000x1920.webp)] md:bg-[url(/images/Frame.svg)] bg-cover bg-no-repeat py-9 lg:h-auto lg:gap-[166px] md:h-auto md:gap-[166px] sm:gap-[111px] sm:py-4"
      style=
      {{
        backgroundSize: isMobile  ? '275px': "",
        // backgroundPosition: isMobile  ? '100% -60%': "",
        backgroundPosition: isMobile  ? '75% -45%': "",
        marginTop: isMobile  ? '80px': "",
      }}
      >
        {fetchedSection && <TestaboutRowakashxis fetchedSection={fetchedSection} />}
      </div>
      <div className="bg-gray-900 py-[128px] lg:py-8 md:py-[55px]">
        {fetchedSection && <TestaboutColumnOne fetchedSection={fetchedSection} />}
      </div>
      <div className="bg-gray-900 py-[128px] lg:py-8 md:py-[55px]">
        {fetchedSection && <TestaboutColumnSix fetchedSection={fetchedSection} />}
      </div>
      {/* <div className="bg-gray-900 py-[128px] lg:py-8 md:py-[55px]">
        <TestaboutColumnThree />
      </div> */}
      <div className="bg-gray-900 py-[128px] lg:py-8 md:py-[55px]">
        {fetchedSection && <TestaboutColumnTwo fetchedSection={fetchedSection} />}
      </div>
      {/* <div className="bg-gray-900 py-[128px] lg:py-8 md:py-[55px]">
        <TestaboutColumnFour />
        </div>
        <div className="bg-gray-900 py-[128px] lg:py-8 md:py-[55px]">
        <TestaboutColumnFive />
        </div> */}
        <div className="bg-gray-900 py-[128px] md:pt-[55px] md:pb-0">
        {fetchedSection && <TestaboutColumnSeven fetchedSection={fetchedSection} />}
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
