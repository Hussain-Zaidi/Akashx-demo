'use client';

import { useEffect, useState } from 'react';
import { Heading } from '../../components';

const tabs = [
  {
    id: 'join',
    title: 'Cognitive Join',
    description: 'Reason across documents and relational tables.',
    example:
      'Detect companies announcing AI initiatives by joining earnings transcripts with market data.',
  },
  {
    id: 'classify',
    title: 'Cognitive Classify',
    description: 'Automatically classify unstructured data.',
    example: 'Classify support tickets by urgency and topic in real-time.',
  },
  {
    id: 'group',
    title: 'Cognitive Group By',
    description: 'Group insights intelligently across datasets.',
    example: 'Group customer feedback into themes without predefined labels.',
  },
  {
    id: 'topic',
    title: 'Cognitive Topic Discovery',
    description: 'Discover hidden topics in large datasets.',
    example: 'Extract emerging trends from millions of documents.',
  },
];

export default function SectionThree() {
  const [active, setActive] = useState('join');
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

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div className="text-white flex items-center justify-center px-6  mb-[12.5rem] md:mb-[6rem]">
      <div className="max-w-[80rem] w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <Heading
            size="auto"
            as="h1"
            className="bg-gradient1 bg-clip-text text-center font-montserrat text-[3.5rem] font-extrabold leading-tight md:leading-tight text-transparent "
            style={{
              fontSize: isMobile ? '1.5rem' : '',
            }}
          >
            Query with reasoning <br /> across Petabytes of data
          </Heading>
          <p className="mt-4 text-[#B8D0F2] text-[1.5rem] md:text-[1rem] font-normal font-inter">
            No Vector DB • No RAG-Pipelines • No LLM Orchestration • Just SQL
          </p>
        </div>

        <div className="flex gap-[6.5rem] md:gap-[3.25rem] items-start mt-[6.25rem] md:flex-col">
          {/* Tabs */}
          <div className="space-y-[2.625rem] md:space-y-0 md:flex md:gap-4 md:flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`w-fit flex items-center gap-3 px-5 py-[1.625rem] md:p-[.6rem] rounded-[1.25rem] md:rounded-[0.3rem] border transition-all duration-300
                  ${
                    active === tab.id
                      ? 'bg-[linear-gradient(90deg,#2B7FFF1A,#1A0F4C1A)] border-[#75BAFF] shadow-[0px_0px_55px_#75BAFF33]'
                      : 'border-[rgba(117,186,255,0.55)] '
                  }`}
              >
                {/* Icon placeholder */}
                <img
                  className="w-[2rem] h-[2rem] md:w-[1.25rem] md:h-[1.25rem] pointer-events-none select-none"
                  src="/images/cognitive/tabler_table-spark.svg"
                />
                <span className="text-[1.625rem] md:text-[0.875rem] text-[#CDDAED] font-medium font-inter">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="relative min-h-[11.25rem] flex-1">
            <div className="w-full h-[0.125rem] bg-[linear-gradient(90deg,#466f994d,#5E95CC,#466f994d)]" />
            <div
              key={active}
              className="absolute md:relative inset-0 transition-all duration-500 ease-in-out animate-fade mt-[2rem] h-fit flex flex-col gap-[2.125rem]"
            >
              <div className="flex items-center gap-[2.125rem]">
                <img
                  className="flex-[0_0_3.5rem] w-[3.5rem] h-[3.5rem] md:flex-[0_0_2.125rem] md:w-[2.125rem] md:h-[2.125rem] md:py-[0.375rem] pointer-events-none select-none py-[0.8125rem] rounded-[0.625rem] border border-[#75baff9a]"
                  src="/images/cognitive/tabler_table-spark.svg"
                />

                <p className="text-[#B8D0F2] text-[1.5rem] md:text-base font-normal font-inter">
                  {activeTab?.description}
                </p>
              </div>
              <div className="flex gap-[2.125rem]">
                <div className="flex-[0_0_3.5rem] w-[3.5rem] h-[3.5rem] md:flex-[0_0_2.125rem] md:w-[2.125rem] md:h-[2.125rem] pointer-events-none select-none flex-[0_0_3.5rem]"></div>
                <div>
                  <p className="text-[#75BAFF] text-[1.5rem] md:text-base font-normal font-inter mb-1">
                    Example
                  </p>
                  <p className="text-[#B8D0F2] text-[1.5rem] md:text-base font-normal font-inter">
                    {activeTab?.example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fade {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(0.625rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}