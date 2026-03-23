'use client';

import { Heading } from '@/components/Heading';
import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    title: 'Cognitive Join',
    desc: 'Reason across documents and relational tables.',
    example:
      'Detect companies announcing AI initiatives by joining earnings transcripts with market data.',
    image: 'material-symbols-light_join-left.svg'
  },
  {
    title: 'Cognitive Classify',
    desc: 'Apply semantic classification across large datasets.',
    example:
    'Identify frequent job hoppers across resumes.',
    image: 'streamline-plump_hierarchy-15.svg'
  },
  {
    title: 'Cognitive Group By',
    desc: 'Aggregate records based on inferred attributes.',
    example:
    'Group sales calls by inferred quality rating.',
    image: 'tabler_hierarchy-3.svg'
  },
  {
    title: 'Cognitive Topic Discovery',
    desc: 'Discover themes across document collections.',
    example:
    'Cluster clinical notes by symptom patterns.',
    image: 'lets-icons_chat-search.svg'
  },
];

export default function StickyStackSection() {
  const sectionRef = useRef(null);
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
    <div className="" id='CognitiveSQL'>
      <div
        ref={sectionRef}
        className="relative mx-auto px-6 mb-[12.5rem] md:mb-[4rem]"
      >
        {/* Sticky Heading */}
        {/* <div className="sticky top-28 z-9 text-center mb-[7.833rem] md:mb-12"> */}
          
        {/* </div> */}

        {/* Cards */}
        <div className="space-y-[4.4rem] md:space-y-[2.2rem] max-w-[52.5rem] m-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sticky top-[26.4rem] md:sticky "
              style={{
                top: isMobile ? i==0 ? '6rem' :`${16.2 + i * 3.5}rem` : i==0 ? '7rem' :`${21.5 + i * 5.5}rem`,
                zIndex: 10 + i,
              }}
            >
              {i == 0 &&(
                <div className="text-center mb-12 md:mb-10" style={{width:'110%', marginLeft:'-5%'}}>
            <Heading
              size="auto"
              as="h1"
              className="bg-gradient1 bg-clip-text text-center font-montserrat text-[3rem] font-bold leading-tight md:leading-tight text-transparent "
              style={{
                fontSize: isMobile ? '1.5rem' : '',
              }}
            >
              Query with reasoning <br /> across Petabytes of data
            </Heading>
            <p className="md:leading-6 mt-[2.125rem] md:mt-[1rem] text-[#B8D0F2] text-[1.666rem] md:text-[0.875rem] font-normal font-inter">
              No Vector DB <span className='text-[#556E94] mx-[0.25rem] inline-block'>•</span> No RAG-Pipelines <span className='text-[#556E94] mx-[0.25rem] inline-block md:hidden'>•</span><br className='hidden md:block' /> No LLM Orchestration <span className='text-[#556E94] mx-[0.25rem] inline-block'>•</span> Just SQL
            </p>
          </div>
              )}
              <div className="shadow-[0_0_2.5rem_0_#75BAFF33] md:shadow-[0_0_1rem_0_#75BAFF33] rounded-[2.5rem] md:rounded-[1.25rem]  bg-[linear-gradient(180deg,#5439CC_50%,#30D5C8)] p-2 md:p-1 ">
                <h3 className="uppercase text-[#CDDAED] text-[1.833125rem] md:text-base font-bold font-inter p-[1.65rem_2.15rem_2.15rem] md:p-[0.75rem_1rem_1rem] m-auto text-center">
                  {card.title}
                </h3>

                <div className='bg-[#080C26] p-[0_3.5rem] md:p-4 rounded-[2.5rem] md:rounded-[1.25rem] shadow-[0_0_3.4375rem_0_#75BAFF33] md:shadow-[0_0_1.5rem_0_#75BAFF33] h-[19.9168rem] md:h-[10rem] md:flex md:flex-col' >
                  <p className="p-[3.166875rem_0_2.666875rem] md:p-0 text-[#B8D0F2] text-[1.666875rem] md:text-[1rem] font-normal font-inter md:mb-4">
                    {card.desc}
                  </p>

                  <div className="flex items-start md:flex-1 justify-between gap-7 md:gap-3">
                    <div>
                      <p className="text-[#75BAFF] text-[1.5rem] md:text-[0.875rem] font-semibold font-inter mb-3 md:mb-1">
                        Example
                      </p>
                      <p className="text-[#B8D0F2] text-[1.5rem] md:text-[0.875rem] font-normal font-inter max-w-[26rem]">
                        {card.example}
                      </p>
                    </div>

                    <img
                      className="self-end bg-[linear-gradient(135deg,#2B7FFF33_20%,#080d26_60%)] flex-[0_0_8.9rem] w-[8.9rem] h-[8.9rem] md:flex-[0_0_3.125rem] md:w-[3.125rem] md:h-[3.125rem] md:py-[1rem] pointer-events-none select-none py-[2.15rem] rounded-[0.625rem]"
                      src={`/images/cognitive/${card.image}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
