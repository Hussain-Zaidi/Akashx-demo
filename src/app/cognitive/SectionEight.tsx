'use client';

import { useEffect, useRef, useState } from 'react';

export default function CodeCard() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  const segmentPairs = [
    {
      id: 1,
      y: 0,
      left: {
        title: '1',
        subtitle: 'S3',
        description: 'Resume ingestion from storage ',
        image: '/images/cognitive/Group1.svg',
      },
      right: {
        title: '2',
        subtitle: 'Unstructured',
        description: 'Extract text + OCR + metadata (layout-aware)',
        image: '/images/cognitive/Group2.svg',
      },
    },
    {
      id: 2,
      y: 10.7,
      left: {
        title: '3',
        subtitle: 'LlamaIndex',
        description:
          'Chunk by semantic structure (experience blocks, roles, dates)',
        image: '/images/cognitive/Rectangle.svg',
      },
      right: {
        title: '4',
        subtitle: 'Pinecone',
        description: 'Embed + build vector index',
        image: '/images/cognitive/Group3.svg',
      },
    },
    {
      id: 3,
      y: 20,
      left: {
        title: '5',
        subtitle: 'OpenSearch',
        description: 'Hybrid retrieval + metadata filters (vector + keyword)',
        image: '/images/cognitive/Group5.svg',
      },
      right: {
        title: '6',
        subtitle: 'Cohere Rerank',
        description: 'Rerank +context assembly',
        image: '/images/cognitive/Group4.svg',
      },
    },
    {
      id: 4,
      y: 29.25,
      left: {
        title: '7',
        subtitle: 'Claude',
        description: 'LLM answer + guardrails + citations',
        image: '/images/cognitive/Group.svg',
      },
      right: {
        title: '8',
        subtitle: 'RAGAS',
        description: 'Eval + monitoring loop (quality + cost + drift)',
        image: '/images/cognitive/Group8.svg',
      },
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstChild as HTMLElement;
    if (!scrollContent) return;

    let segmentIndex = 0;
    let isScrollingUp = false;

    const stopDuration = 2000;
    const scrollDuration = 1000;

    const smoothScrollTo = (
      targetTop: number,
      duration: number = scrollDuration,
    ): Promise<void> => {
      return new Promise((resolve) => {
        const startTop = scrollContainer.scrollTop;
        const distance = targetTop - startTop;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easeInOutCubic =
            progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          scrollContainer.scrollTop = startTop + distance * easeInOutCubic;

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animateScroll);
          } else {
            setIsAnimating(false);
            resolve();
          }
        };

        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        setIsAnimating(true);
        animationRef.current = requestAnimationFrame(animateScroll);
      });
    };

    const scrollNextSegment = async () => {
      const rootFontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      if (!scrollContainer || !isScrolling) return;

      if (!isScrollingUp) {
        const nextIndex = segmentIndex + 1;

        if (nextIndex < segmentPairs.length) {
          segmentIndex = nextIndex;
          const targetY = segmentPairs[segmentIndex].y * rootFontSize;
          console.log(`targetY ${segmentIndex}`, targetY);
          await smoothScrollTo(targetY);
          setCurrentSegment(segmentIndex);

          timeoutRef.current = setTimeout(scrollNextSegment, stopDuration);
        } else {
          // Reset to top
          isScrollingUp = true;

          await smoothScrollTo(1.5 * rootFontSize, 1000);

          segmentIndex = 0;
          setCurrentSegment(0);

          isScrollingUp = false;

          timeoutRef.current = setTimeout(scrollNextSegment, stopDuration);
        }
      }
    };

    const startScrolling = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      scrollNextSegment();
    };

    if (isScrolling) startScrolling();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isScrolling]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsScrolling(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  const handleMouseLeave = () => {
    setIsScrolling(true);
  };

  return (
    <div className="md:px-6 mb-[7.5rem] md:mb-[6rem]" id='RAGPipelines'>
       <h1 className=" mb-14 md:mb-[2rem] bg-gradient1 bg-clip-text text-center font-montserrat text-[3rem] md:text-[1.5rem] font-bold leading-tight md:leading-tight text-transparent  ">
        {/* Declarative simplicity lets you iterate <br className='md:block hidden' />in <br className='md:hidden' /> */}
        {/* minutes, without RAG-pipelines. */}
        {/* <span className="blue-green-background-text">Concept-Tree Indexes</span> */}
        Iterate in minutes, <br />without RAG-pipelines
      </h1>

      <div>
         <div className='w-[56.833125rem] md:w-full mx-auto p-[1.666rem] md:p-5 border border-[#2B7FFF4D] rounded-[1rem] md:rounded-[0.75rem]' >
          <p className=" text-[#B8D0F2] text-[1.5rem] md:text-[.875rem] font-normal font-inter">
            <span className='text-[1.833rem] md:text-[.875rem] font-semibold'>Q.</span> List candidates who had deep backend coding for 3+ years, then
            transitioned to Engineering Management (excluding product/project
            roles)
          </p>
        </div>
        <div className="h-[2.5rem] m-auto w-[0.25rem] md:hidden bg-[linear-gradient(to_bottom,#2B7FFF80_50%,transparent_50%)] bg-[length:0.125rem_1rem] bg-repeat-y bg-top" />
        <div className="h-[0.25rem]  m-auto w-[59.5rem] md:hidden bg-[linear-gradient(to_right,#2B7FFF80_50%,transparent_50%)] bg-[length:1rem_0.125rem] bg-repeat-x bg-top" />







        <div className="flex gap-16 md:gap-8 m-auto justify-center items-center md:flex-col md:mt-8">
          <div className="w-[47.666875rem]">
            <div className=" h-[2.5rem] m-auto w-[0.25rem] md:hidden bg-[linear-gradient(to_bottom,#2B7FFF80_50%,transparent_50%)] bg-[length:0.125rem_1rem] bg-repeat-y bg-top" />
            <div
              className=" md:scale-[42.5%] md:my-[-26.25%] max-w-[100%] pointer-events-none  h-[37.5rem] md:h-[42.5rem] flex-1 border md:border-[4px] border-[#2B7FFF4D] rounded-[1.5rem] bg-[#070A20] p-[0rem_1.666rem_1.666rem] md:px-5 md:py-0 flex flex-col items-center relative"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <div
                className="absolute top-[12.4rem] flex items-center justify-between px-6 w-full z-10 gap-[26rem]"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transition: 'opacity 0.2s ease-in-out',
                }}
              >
                <div className="flex-[1] text-left transition-all duration-1000 flex flex-col gap-1 items-start relative top-[-2.42rem]">
                  <p className="text-[#B8D0F2] text-[1.165rem] mt-1 font-inter font-normal">
                    {segmentPairs[currentSegment]?.left.description}
                  </p>
                  <p className="text-[#B8D0F2] text-[1.165rem] mt-3 font-inter font-normal flex gap-1 items-center">
                    <img
                      className="block mr-2 w-[2rem] h-auto"
                      src={segmentPairs[currentSegment]?.left.image}
                    />
                    {segmentPairs[currentSegment]?.left.subtitle}
                  </p>
                </div>

                <div className="flex-[1] text-left transition-all duration-1000 flex flex-col gap-1 items-start relative top-[2.22rem]">
                  <p className="text-[#B8D0F2] text-[1.165rem] mt-1 font-inter font-normal">
                    {segmentPairs[currentSegment]?.right.description}
                  </p>
                  <p className="text-[#B8D0F2] text-[1.165rem] mt-3 font-inter font-normal flex gap-1 items-center">
                    <img
                      className="block mr-2 w-[2rem] h-auto"
                      src={segmentPairs[currentSegment]?.right.image}
                    />
                    {segmentPairs[currentSegment]?.right.subtitle}
                  </p>
                </div>
              </div>

              <div
                ref={scrollContainerRef}
                className="flex-1 overflow-auto scrollbar-hide relative"
              >
                <div className="relative w-[24.0381125rem] h-[50.90625rem]">
                  <img
                    src="/images/cognitive/step1.svg"
                    alt="Cognitive"
                    className="w-full mx-auto absolute transition-all duration-1000"
                    style={{ opacity: currentSegment == 0 ? 1 : 0 }}
                  />
                  <img
                    src="/images/cognitive/step2.svg"
                    alt="Cognitive"
                    className="w-full mx-auto absolute transition-all duration-1000"
                    style={{ opacity: currentSegment == 1 ? 1 : 0 }}
                  />
                  <img
                    src="/images/cognitive/step3.svg"
                    alt="Cognitive"
                    className="w-full mx-auto absolute transition-all duration-1000"
                    style={{ opacity: currentSegment == 2 ? 1 : 0 }}
                  />
                  <img
                    src="/images/cognitive/step4.svg"
                    alt="Cognitive"
                    className="w-full mx-auto absolute transition-all duration-1000"
                    style={{ opacity: currentSegment == 3 ? 1 : 0 }}
                  />
                </div>
              </div>

              <div className="w-11/12 h-[0.125rem] bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)]"></div>

              <div className="flex gap-6 pt-[1.666rem] md:py-[2.9375rem]">
                <div className="text-[#75BAFF] text-[1.333rem] md:text-[2.05625rem] font-normal font-inter text-center">
                  RAG Pipelines
                </div>
              </div>
            </div>
          </div>

          {/* <div className='className="max-w-[46.666875rem] '>
<div className='h-[2.5rem] m-auto w-[0.25rem] md:hidden bg-[linear-gradient(to_bottom,#2B7FFF80_50%,transparent_50%)] bg-[length:0.125rem_1rem] bg-repeat-y bg-top' />
          <div
            className="max-w-[46.666875rem] h-[37.5rem] md:h-auto flex-1 border border-[#2B7FFF4D] rounded-[1.5rem] p-[0rem] overflow-auto  flex flex-col items-center relative"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-[46.666875rempx] h-[37.5rem] md:h-auto"
            >
              <source
                src={
                  '/images/cognitive/WhatsApp Video 2026-03-21 at 6.17.20 PM.mp4'
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
  </div>  */}
          <div className="relative rounded-full bg-[linear-gradient(135deg,#41668C66_40%,#28B6F6)] p-[1.5px]">
            <div className="bg-[linear-gradient(135deg,#080C26_50%,#75BAFF)] text-[1.5rem] md:text-[1rem] font-bold font-montserrat rounded-full flex items-center justify-center flex-[0_0_5rem] w-[5rem] h-[5rem] md:flex-[0_0_4rem] md:w-[4rem] md:h-[4rem] md:py-[1rem] pointer-events-none select-none py-[2.15rem]">
              <span className="bg-gradient1 bg-clip-text text-transparent">
                VS
              </span>
            </div>
          </div>
          <div>
            <div className="h-[2.5rem] m-auto w-[0.25rem] md:hidden bg-[linear-gradient(to_bottom,#2B7FFF80_50%,transparent_50%)] bg-[length:0.125rem_1rem] bg-repeat-y bg-top" />
            <div className="w-[46.666875rem] md:w-full h-[37.5rem] md:h-auto">
              {/* <div className="mb-14">
          <div className="bg-gradient1 font-inter text-3xl font-normal leading-tight md:leading-[1.25rem] text-transparent md:text-[1.875rem] mb-4">
          Q.
          </div>
          <span className="bg-gradient1 font-inter text-base font-normal leading-tight md:leading-[1.25rem] text-transparent md:text-[1.875rem]">
          List candidates who had deep backend coding for 3+ years, then
            transitioned to Engineering Management (excluding product/project
            roles)
            </span>
        </div> */}
              <div className="h-full flex flex-1 flex-col border-gray-700 bg-[linear-gradient(0deg,#5439CC,#30D5C8)] p-3 md:p-[0.25rem_0.25rem_0]  border border-blue-500/30 rounded-2xl md:rounded-[0.75rem] overflow-hidden bg-[#040B2A] shadow-lg">
                <div className="flex flex-1 flex-col rounded-[1rem] md:rounded-[0.75rem] overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 bg-[#1F385F] min-h-[3.5rem] md:min-h-[2rem]">
                    <span className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#DF4343]"></span>
                    <span className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#FFB703]"></span>
                    <span className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#0CAC77]"></span>
                  </div>

                  <div className="p-10 md:p-5 font-inter text-2xl md:text-sm leading-7 bg-[#080C26] flex-1">
                    <p className="text-[#0CAC77]">
                      SELECT{' '}
                      <span className="text-[#0CAC77]">Candidate_Name</span>,
                      resume_url
                    </p>

                    <p className="text-[#B8D0F2] mt-6 md:mt-3">
                      FROM{' '}
                      <span className="text-[#B8D0F2]">resume_ontology</span>
                    </p>

                    <p className="text-[#B8D0F2] mt-6 md:mt-3">
                      WHERE{' '}
                      <span className="text-[#866CFF]">cognitive_classify</span>{' '}
                      (
                    </p>

                    <div className="pl-6 py-[.5rem] md:py-[.25rem] space-y-[.5rem] md:space-y-[.25rem]">
                      <p className="text-[#B8D0F2]">raw_text,</p>

                      <p className="text-[#866CFF] inline">
                        "{'>'}=3y deep backend coding, then transitioned to{' '}
                      </p>
                      <p className="text-[#866CFF] inline">
                        Engineering Management (exclude product/project
                      </p>
                      <p className="text-[#866CFF]">roles)."</p>

                      <p className="text-[#B8D0F2] mt-2">['Yes','No']</p>
                    </div>

                    <p className="text-[#B8D0F2]">) = 'Ye</p>

                    {/* <div className="border-t border-blue-500/20 mt-6 pt-4 flex items-center gap-2 text-blue-400 text-sm">
              <span>✨</span>
              <span>Single Cognitive SQL Statement</span>
            </div> */}
                  </div>
                </div>

                <h3 className="uppercase text-[#B8D0F2] text-[1.5rem] md:text-[0.875rem] font-bold font-inter p-[1.75rem_1.75rem_.75rem] md:p-[1rem_1rem_1rem] m-auto text-center">
                  Single Cognitive SQL Statement
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
