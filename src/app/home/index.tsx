"use client";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import TesthomeColumnFive from "./TesthomeColumnFive";
import TesthomeColumnOne from "./TesthomeColumnOne";
import TesthomeRowOne from "./TesthomeRowOne";
import TesthomeKeyUse from "./TesthomeKeyUse";
import TesthomeRowquarteryour from "./TesthomeRowquarteryour2";
import TesthomeRowstorage from "./TesthomeRowstorage";
import {STRAPI_URL} from '@/utils/url'
import { useRouter } from "next/navigation";

export default function TestHomePage() {
  // Use state to hold the fetched section data
  const [fetchedSection, setFetchedSection] = useState<any>(null); // Use `any` if you don't want to define a type
  const apiURl = `${STRAPI_URL}/api/akashx-home-pages`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/home-page-api-data");
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

const router = useRouter();
  
  useEffect(() => {
    router.replace("/cognitive"); // no back button history
  }, []);

  return (
    <div className="w-full">
      <div className="flex min-h-[1000px] md:min-h-[0] flex-col gap-[250px] bg-[url(/images/img_image.webp)] md:bg-[url(/images/mobileHero.png)] bg-cover bg-no-repeat pt-11 pb-8 lg:h-auto lg:gap-[168px] md:h-auto md:gap-[168px] sm:gap-28 sm:py-4 md:bg-[position:-0%_75%] md:bg-contain md:mt-[40px]">
        {fetchedSection && <TesthomeColumnOne fetchedSection={fetchedSection} />}
      </div>

      {fetchedSection && <TesthomeRowstorage fetchedSection={fetchedSection} />}

      {fetchedSection && <TesthomeRowquarteryour fetchedSection={fetchedSection} />}

      <div className="min-h-[1140px] md:min-h-[0] bg-[url(/images/img_image_1140x1920.webp)] bg-cover bg-no-repeat py-[120px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4 bg-[position:40%_20px]  md:bg-[position:80%_0px] md:bg-[size:350%]">
        {fetchedSection && <TesthomeColumnFive fetchedSection={fetchedSection} />}
      </div>

      <div className="bg-gray-900 py-[120px] lg:py-8 md:py-5 sm:py-4">
        {fetchedSection && <TesthomeKeyUse fetchedSection={fetchedSection} />}
      </div>

      <div className="bg-gray-900 py-[120px] lg:py-8 md:py-5 sm:py-4 mb-[56px] md:mb-0">
      {fetchedSection && <TesthomeRowOne fetchedSection={fetchedSection} />}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
