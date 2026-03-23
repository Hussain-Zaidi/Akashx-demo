'use client';
import WordFlip from '@/components/WordFlip';
import '../../styles/WordFlip.module.css';
import { Heading } from '../../components';
import React, { useState, useEffect } from 'react';

export default function SectionOne() {
  const textOptions = ['Lakehouse', 'Warehouse'];
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="flex flex-col items-center mt-[5.125rem] md:mt-[0.8125rem] md:px-5 mb-[13.25rem] md:mb-[4rem]">
      <Heading
        size="auto"
        as="h1"
        className=" mb-[5.125rem] md:mb-[2rem] text-center bg-[#B8D0F2] bg-clip-text font-inter text-[2.666875rem] font-normal leading-tight md:leading-tight text-transparent"
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
        {/* <span 
          className={`inline-block text-[#8EA1BD] text-[3rem] md:text-[1.25rem] font-semibold transition-all duration-200 ${
            isAnimating ? 'animate-bounce scale-110' : ''
          }`}
          style={{
            // color: isAnimating ? '#30D5C8' : '#F4F8FF',
            // textShadow: isAnimating ? '0 0 10px #30D5C8' : 'none'
          }}
        >
          {textOptions[textIndex]}
        </span> */}
        <span
          className="w-[16.375rem] md:w-[6rem] inline-block back text-left"
          style={{ background: 'inherit' }}
        >
          <WordFlip words={textOptions} />
        </span>
      </Heading>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-[2rem] md:gap-[1.375rem]">
        <div className="w-fit ml-auto text-[#CDDAED] font-inter text-[1.5rem] md:text-[0.875rem] p-[2rem] md:p-[.875rem] flex items-center gap-[1rem] justify-center border border-solid border-[#75baffcc] shadow-[0px_0px_1.875rem_#75BAFF33] rounded-[1rem] md:rounded-[0.5rem] bg-[#080C26]">
          <img
            className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] pointer-events-none select-none"
            src="/images/cognitive/ri_dvd-ai-line.svg"
          />
          Token-efficient, low-latency AI via in-DB SLMs
        </div>

        <div className="w-fit mr-auto text-[#CDDAED] font-inter text-[1.5rem] md:text-[0.875rem] p-[2rem] md:p-[.875rem] flex items-center gap-[1rem] justify-center border border-solid border-[#75baffcc] shadow-[0px_0px_1.875rem_#75BAFF33] rounded-[1rem] md:rounded-[0.5rem] bg-[#080C26]">
          <img
            className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] pointer-events-none select-none"
            src="/images/cognitive/tabler_table-spark.svg"
          />
          Convert files into tables for instant querying.
        </div>

        <div className="w-fit ml-auto text-[#CDDAED] font-inter text-[1.5rem] md:text-[0.875rem] p-[2rem] md:p-[.875rem] flex items-center gap-[1rem] justify-center border border-solid border-[#75baffcc] shadow-[0px_0px_1.875rem_#75BAFF33] rounded-[1rem] md:rounded-[0.5rem] bg-[#080C26]">
          <img
            className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] pointer-events-none select-none"
            src="/images/cognitive/mingcute_target-line.svg"
          />
          Deterministic inferencing without RAG-inaccuracies.
        </div>

        <div className="w-fit mr-auto text-[#CDDAED] font-inter text-[1.5rem] md:text-[0.875rem] p-[2rem] md:p-[.875rem] flex items-center gap-[1rem] justify-center border border-solid border-[#75baffcc] shadow-[0px_0px_1.875rem_#75BAFF33] rounded-[1rem] md:rounded-[0.5rem] bg-[#080C26]">
          <img
            className="w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem] pointer-events-none select-none"
            src="/images/cognitive/hugeicons_idea-01.svg"
          />
          Generate insights joining unstructured & structured data
        </div>
      </div>
    </div>
  );
}