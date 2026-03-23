'use client';

import { Heading } from '@/components/Heading';
import { Img } from '@/components/Img';
import { useEffect, useRef, useState } from 'react';

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
    <div className="">
      <div
        ref={sectionRef}
        className="relative max-w-[96rem] mx-auto px-6 mb-[12.5rem] md:mb-[6rem]"
      >
        {/* Sticky Heading */}
        <div className="text-center mb-20 md:mb-8">
          <Heading
            size="auto"
            as="h1"
            className="bg-gradient1 bg-clip-text text-center font-montserrat text-[3rem] font-bold leading-tight md:leading-tight text-transparent "
            style={{
              fontSize: isMobile ? '1.5rem' : '',
            }}
          >
            Why RAG Fails Enterprise AI <br className='md:hidden' /> from <br className='hidden md:block' />going to Production?
          </Heading>
        </div>

        <div className="border border-[#2B7FFF4D] rounded-[1.5rem] bg-[#070A20] p-[0_3.5831rem] md:p-[0_1.25rem] flex flex-col items-center">
          <div className="flex w-full gap-14 md:gap-0 md:flex-col items-center">
            <div className="pt-[2.7125rem]  flex flex-col gap-7 md:gap-3 flex-1 md:pt-5">
              <div className="flex items-center gap-6 md:gap-3 text-[#CDDAED] font-inter text-[1.8333rem] md:text-[0.875rem] font-bold">
                <div className="p-4 md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#080d26_)] border border-[#7557FF4D] rounded-[1rem] md:rounded-[.5rem]">
                  <img
                    className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                    src={`/images/cognitive/IIcon.svg`}
                  />
                </div>
                RAG
              </div>
              <div className="text-[#B8D0F2] font-inter text-[1.5rem] md:text-[0.875rem]">
                RAG does Top-K vector similarity search for <br />
                <span className="text-[#FE823D]">probabilistic results.</span>
              </div>
              <div className="flex justify-end">
                <img
                  className="w-auto h-[25rem]  md:flex-[0_0_6rem] md:w-auto md:h-[9.375rem] pointer-events-none select-none"
                  src={`/images/cognitive/Group1000004501.svg`}
                />
              </div>
            </div>

            <div className="h-[28rem] w-[0.125rem] md:w-full md:h-[0.125rem] bg-[linear-gradient(0deg,#41668C1A,#588BBF99,#41668C1A)] md:bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)]"></div>

            <div className="pt-[2.7125rem] flex flex-col gap-7 md:gap-3 flex-1 md:pt-5">
              <div className="flex items-center gap-6 md:gap-3 text-[#CDDAED] font-inter text-[1.8333rem] md:text-[0.875rem] font-bold">
                <div className="p-4 md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#080d26_)] border border-[#7557FF4D] rounded-[1rem] md:rounded-[.5rem]">
                  <img
                    className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                    src={`/images/cognitive/tickIcon.svg`}
                  />
                </div>
                Cognitive SQL
              </div>
              <div className="text-[#B8D0F2] font-inter text-[1.5rem] md:text-[0.875rem]">
                Cognitive does{' '}
                <span className="text-[#1CBC6E]">deterministic inferencing </span>
                via smart <br />
                brute forcing for <b>accurate results</b>.
              </div>
              <div className="flex justify-end">
                <img
                  className="w-auto h-[25rem] md:flex-[0_0_9.375rem] md:w-auto md:h-[9.375rem] pointer-events-none select-none"
                  src={`/images/cognitive/Group1000004502.svg`}
                />
              </div>
            </div>
          </div>

          <div className="w-11/12 h-[0.125rem] bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)]"></div>

          <div className="flex gap-6 py-[3.2293rem] md:py-5">
            <div className="text-[#7557FF] text-[1.8333rem] md:text-base font-semibold font-inter text-center">
              Explore More
            </div>

            <div className="flex justify-center items-center flex-row-reverse  md:w-[1rem]">
              <Img
                src="cognitive/Vector5C85EB.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[1rem] md:w-[1rem] h-[1.8rem] w-[1.8rem] object-contain fade-in-sequence1 "
                style={{ margin: isMobile ? '0px 0px' : '0px -4px' }}
              />
              <Img
                src="cognitive/Vector5C85EB.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[1rem] md:w-[1rem] h-[1.8rem] w-[1.8rem] object-contain fade-in-sequence2 "
                style={{ margin: isMobile ? '0px 0px' : '0px -4px' }}
              />
              <Img
                src="cognitive/VectorArrow.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[1rem] md:w-[1rem] h-[1.8rem] w-[1.8rem] object-contain fade-in-sequence3 "
                style={{ margin: isMobile ? '0px 0px' : '0px -4px' }}
              />
              <Img
                src="cognitive/VectorArrow.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[1rem] md:w-[1rem] h-[1.8rem] w-[1.8rem] object-contain fade-in-sequence4 "
                style={{ margin: isMobile ? '0px 0px' : '0px -4px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
