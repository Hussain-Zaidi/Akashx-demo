'use client';
import Footer from '../../components/FooterNew';
import Header from '../../components/HeaderNew';
import HeroSection from './HeroSection';
import SectionOne from './SectionOne';

import React, { useState, useEffect } from 'react';
import { STRAPI_URL } from '@/utils/url';
import SectionThree from './SectionThreeTwo';
// import SectionThreeOne from './SectionThree';
import SectionSix from './SectionSix';
import SectionTwo from './SectionTwo';
import SectionFive from './SectionFive';
import TesthomeRowOne from './TesthomeRowOne';
import SectionEight from './SectionEight';
import SectionSeven from './SectionSeven';
import TesthomeRowquarteryour from './TesthomeRowquarteryour2';

export default function CognitivePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [fetchedSection, setFetchedSection] = useState<any>(null); // Use `any` if you don't want to define a type
  const apiURl = `${STRAPI_URL}/api/akashx-home-pages`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURl);
        const jsonData = await response.json();
        const sectionData = jsonData?.data?.[0] ?? null;
        setFetchedSection(sectionData);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full relative CognitivePage">
      <Header />
      <div
        className="flex md:min-h-fit flex-col gap-[6.5rem] md:h-auto md:gap-[10.375rem] sm:gap-[6.9375rem] mt-[6.25rem]"
        style={{ marginTop: isMobile ? '5rem' : '' }}
      >
        {fetchedSection && <HeroSection />}
        <img
          className="w-full absolute block md:hidden   pointer-events-none select-none"
          src="/images/cognitive/Container.svg"
        />
        <img
          className="w-full absolute md:block hidden pointer-events-none select-none mt-[9rem]"
          src="/images/cognitive/Container-mobile.svg"
        />
        
      </div>

      {fetchedSection && <SectionOne />}
      {fetchedSection && <SectionTwo />}
      {/* {fetchedSection && <SectionThreeOne />} */}
      {fetchedSection && <SectionThree />}
      {fetchedSection && <SectionFive />}
      {fetchedSection && <SectionSix />}
      {fetchedSection && <SectionSeven />}
      {fetchedSection && <TesthomeRowquarteryour fetchedSection={fetchedSection} />}
      {fetchedSection && <SectionEight />}
      

      <div className="bg-gray-900 py-[7.5rem] lg:py-8 md:py-5 sm:py-4 mb-[3.5rem] md:mb-0">
        {fetchedSection && <TesthomeRowOne fetchedSection={fetchedSection} />}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
