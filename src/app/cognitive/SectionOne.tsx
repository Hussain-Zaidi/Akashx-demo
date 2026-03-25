'use client';
import WordFlip from '@/components/WordFlip';
import '../../styles/WordFlip.module.css';
import { Heading } from '../../components';
import React, { useState, useEffect } from 'react';

export default function SectionOne() {
  const textOptions = ['Lakehouse', 'Warehouse'];
  const [isMobile, setIsMobile] = useState(false);

  // Array of feature items
  const features = [
    {
      id: 1,
      icon: '/images/cognitive/ri_dvd-ai-line.svg',
      text: 'Low-latency, <span style="color:#75BAFF; font-weight:600;" >token-efficient</span> AI with in-database SLMs',
      position: 'ml-auto',
    },
    {
      id: 2,
      icon: '/images/cognitive/tabler_table-spark.svg',
      text: '<span style="color:#75BAFF; font-weight:600;" >Transform files</span> into instantly queryable tables',
      position: 'mr-auto',
    },
    {
      id: 3,
      icon: '/images/cognitive/mingcute_target-line.svg',
      text: '<span style="color:#75BAFF; font-weight:600;" >Deterministic inference</span> without the inaccuracies of RAG',
      position: 'ml-auto',
    },
    {
      id: 4,
      icon: '/images/cognitive/hugeicons_idea-01.svg',
      text: 'Surface insights across <span style="color:#75BAFF; font-weight:600;" >structured</span> & <span style="color:#75BAFF; font-weight:600;" >unstructured</span> data',
      position: 'mr-auto',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-[5.125rem] md:mt-[0.8125rem] md:px-5 mb-[13.25rem] md:mb-[6rem]">
      <Heading
        size="auto"
        as="h1"
        className=" mb-[5.125rem] md:mb-[2rem] text-center bg-[#B8D0F2] bg-clip-text font-inter text-[2.666875rem] font-normal leading-tight md:leading-[2rem] text-transparent"
        style={{
          fontSize: isMobile ? '1.125rem' : '',
          width: isMobile ? '102%' : '',
          marginLeft: isMobile ? '1%' : '',
        }}
      >
        Introducing{' '}
        <span className="inline-flex">
          <span className="text-[#F4F8FF] text-[3rem] md:text-[1.25rem] font-semibold">
            Cognitive SQL.
            <div className="bg-[linear-gradient(90deg,#7557FF,#30D5C8)] w-full h-[0.125rem] mt-[1rem] md:mt-[0.25rem]"></div>
          </span>
        </span>{' '}
        Declaratively Simple AI for{' '}
        <span
          className="w-[16.375rem] md:w-[6rem] inline-block back text-left"
          style={{ background: 'inherit' }}
        >
          <WordFlip words={textOptions} />
        </span>
      </Heading>

      {/* <div className="grid grid-cols-2 md:grid-cols-1 gap-[2rem] md:gap-[1.375rem]">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`w-fit ${feature.position} text-[#CDDAED] font-inter text-[1.5rem] md:text-[0.875rem] p-[2rem] md:p-[.875rem] flex items-center gap-[1rem] justify-center border border-solid border-[#75baffcc] shadow-[0px_0px_1.875rem_#75BAFF33] rounded-[1rem] md:rounded-[0.5rem] bg-[#080C26]`}
          >
            <img
              className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] pointer-events-none select-none"
              src={feature.icon}
              alt={feature.text}
            />
            {feature.text}
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-4 md:grid-cols-1 gap-[2rem] md:gap-[1.375rem]">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`md:w-[100%] w-[25rem] text-[#CDDAED] font-inter text-[1.5rem] md:text-[0.875rem] flex flex-col md:flex-row items-statrt gap-[1.375rem] md:gap-[1rem] justify-center `}
          >
            {/* <img
              className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] pointer-events-none select-none"
              src={feature.icon}
              alt={feature.text}
            /> */}
            <div className="flex w-fit h-fit flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
              <img
                className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                src={feature.icon}
              alt={feature.text}
              />
            </div>
            <span dangerouslySetInnerHTML={{ __html: feature.text.replace(/\n/g, '<br/>') }} ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
