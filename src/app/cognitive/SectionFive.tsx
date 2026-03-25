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
    <>
      <div className="">
        <div
          ref={sectionRef}
          className="relative max-w-[105rem] mx-auto px-6 mb-[18rem] md:mb-[6rem]" id='OntlogyViews'
        >
          <div className="text-center mb-32 md:mb-10">
            <Heading
              size="auto"
              as="h1"
              className="bg-gradient1 bg-clip-text text-center font-montserrat text-[3rem] font-bold leading-tight md:leading-tight text-transparent "
              style={{
                fontSize: isMobile ? '1.5rem' : '',
              }}
            >
              <span className="blue-green-background-text">Ontology Views</span>{' '}
              transform <br className='md:hidden' />
              TBs of files into queryable tables
            </Heading>
          </div>

          <div className="">
            <div className=" mx-auto flex gap-[12.625rem] md:gap-[0rem] justify-center items-center md:flex-col">
              {/* LEFT SIDE */}
              <div className="relative md:right-[-1.7rem]">
                {/* Image / Illustration */}
                <div className="relative">
                  <img
                    src="/images/cognitive/Card.svg" // 🔁 replace with your asset
                    alt="agents"
                    className="h-[31.660625rem] md:h-auto md:w-full md:mb-0 mb-[-10rem]"
                  />
                </div>

                {/* Card */}
                <div className="absolute bottom-[0.3rem] md:bottom-[4.9rem] left-0 w-[83.5%] bg-[linear-gradient(180deg,black,rgb(0_0_0_/_70%))] rounded-[0.8rem_0.8rem_0rem_0rem] md:rounded-[0.4rem_0.4rem_0rem_0rem] p-8 md:p-3">
                  <p className="text-[#B8D0F2] text-[1.8333125rem] md:text-[.875rem] font-inter md:leading-tight font-medium">
                    <b>Unleash</b> your agents <br />
                    to deterministically query without <br />
                    probabilistic vector search.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-14 md:space-y-[1.5rem] w-[37rem] md:w-auto md:mt-[-2rem]">
                {/* Item 1 */}
                <div className="flex items-start gap-5 md:gap-[0.875rem]">
                  {/* Icon */}
                  {/* 🔁 replace with your icon */}
                  <div className="flex flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
                    <img
                      className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                      src="/images/cognitive/hugeicons_ai-idea.svg"
                    />
                  </div>

                  <p className="text-[1.5rem] md:text-[0.875rem] text-[#B8D0F2] leading-auto">
                    <span className="text-[#75BAFF] font-semibold">
                      Extract inferred insights and facts
                    </span>{' '}
                    from PDFs, docs, Spreadsheets, and multimedia
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-5 md:gap-[0.875rem]">
                  <div className="flex flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
                    <img
                      className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                      src="/images/cognitive/mingcute_transformation-line.svg"
                    />
                  </div>

                  <p className="text-[1.5rem] md:text-[0.875rem] text-[#B8D0F2] leading-auto">
                    <span className="text-[#75BAFF] font-semibold">Reuse</span>{' '}
                    persistent inference-results across many questions
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-5 md:gap-[0.875rem]">
                  <div className="flex flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
                    <img
                      className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                      src="/images/cognitive/Vector.svg"
                    />
                  </div>

                  <p className="text-[1.5rem] md:text-[0.875rem] text-[#B8D0F2] leading-auto">
                    Enable{' '}
                    <span className="text-[#75BAFF] font-semibold">
                      millisecond-latency AI
                    </span>{' '}
                    queries by incrementally refreshing in the background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* <div className="">
        <div
          ref={sectionRef}
          className="relative max-w-[105rem] mx-auto px-6 mb-[4.840rem] md:mb-[4rem] "
        >
          <div className="text-center mb-32 md:mb-10">
            <Heading
              size="auto"
              as="h1"
              className="bg-gradient1 bg-clip-text text-center font-montserrat text-[3rem] font-bold leading-tight md:leading-tight text-transparent "
              style={{
                fontSize: isMobile ? '1.5rem' : '',
              }}
            >
              Answer deep questions across millions of <br className='md:hidden'/>
              complex docs using{' '}
              <span className="blue-green-background-text">
                Concept-Tree Indexes
              </span>
            </Heading>
          </div>

           <div className="">
            <div className=" mx-auto flex flex-row-reverse gap-[12.625rem] md:gap-[0rem] justify-center items-start md:flex-col">
              <div className="relative top-[-5rem] md:top-0 md:left-[-1.5rem]">
                <div className="relative">
                  <img
                    src="/images/cognitive/Group1000004522.svg" // 🔁 replace with your asset
                    alt="agents"
                    className="h-[39.4075rem] md:h-auto md:w-full"
                  />
                </div>

                <div className="absolute bottom-[10.4rem] md:bottom-[4.9rem] right-0 w-[85.2%] bg-[linear-gradient(180deg,black,rgb(0_0_0_/_70%))] rounded-[0.8rem_0.8rem_0rem_0rem] md:rounded-[0.4rem_0.4rem_0rem_0rem] p-8 md:p-2">
                  <p className="text-[#B8D0F2] text-[1.8333125rem] md:text-[.85rem] font-inter md:leading-normal font-medium">
                    Deterministic query retrieval <br />
                    without the probabilistic <br />
                    vector search.
                  </p>
                </div>
              </div>

              <div className="space-y-14 md:space-y-4 w-[37rem] md:w-auto md:mt-[-2rem]">
                <div className="flex items-start gap-5 md:gap-[0.875rem]">
                  <div className="flex flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
                    <img
                      className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                      src="/images/cognitive/streamline-flex_target.svg"
                    />
                  </div>

                  <p className="text-[1.5rem] md:text-[0.875rem] text-[#B8D0F2] leading-auto">
                    <span className="text-[#75BAFF] font-bold">98%</span>+
                    accuracy on Finance Bench (3000+ complex questions across
                    many 100+ page 10K filing reports)
                  </p>
                </div>

                <div className="flex items-start gap-5 md:gap-[0.875rem]">
                  <div className="flex flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
                    <img
                      className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                      src="/images/cognitive/fluent_document-text-extract-16-regular.svg"
                    />
                  </div>

                  <p className="text-[1.5rem] md:text-[0.875rem] text-[#B8D0F2] leading-auto">
                    <span className="text-[#75BAFF] font-bold">
                      Incremental updates
                    </span>{' '}
                    as new documents arrive - no pipelines needed.
                  </p>
                </div>

                <div className="flex items-start gap-5 md:gap-[0.875rem]">
                  <div className="flex flex-shrink-0 p-[0.620625rem] md:p-2 bg-[linear-gradient(135deg,#2B7FFF33_20%,#7557FF33)] border border-[#75BAFF80] rounded-[0.666875rem] md:rounded-[.3rem]">
                    <img
                      className="flex-[0_0_2rem] w-[2rem] h-[2rem] md:flex-[0_0_1rem] md:w-[1rem] md:h-[1rem] pointer-events-none select-none"
                      src="/images/cognitive/carbon_network-3.svg"
                    />
                  </div>

                  <p className="text-[1.5rem] md:text-[0.875rem] text-[#B8D0F2] leading-auto">
                    Hierarchical concept indexing that can be combined with 
                    Vector-index based{' '}
                    <span className="text-[#75BAFF] font-bold">
                      Hybrid retrieval
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
