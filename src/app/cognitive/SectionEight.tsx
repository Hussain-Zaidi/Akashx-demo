'use client';

import { useEffect, useRef, useState } from 'react';

export default function CodeCard() {
  const [currentSegment, setCurrentSegment] = useState(0);
  const [nextSegment, setNextSegment] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef(false);
  const currentSegmentRef = useRef(0);

  const segmentPairs = [
    {
      id: 1,
      y: 0,
      left: {
        title: '',
        subtitle: 'S3',
        description: 'Resume ingestion from storage ',
        image: '/images/cognitive/Group1.svg',
      },
      right: {
        title: '',
        subtitle: 'Unstructured',
        description: 'Extract text + OCR + metadata (layout-aware)',
        image: '/images/cognitive/Group2.svg',
      },
    },
    {
      id: 2,
      y: 10.7,
      left: {
        title: '',
        subtitle: 'OpenAI',
        description: 'Convert text to high-dimensional vectors',
        image: '/images/cognitive/Group1.svg',
      },
      right: {
        title: '',
        subtitle: 'Pinecone',
        description: 'Store embeddings in vector database for fast retrieval',
        image: '/images/cognitive/Group1.svg',
      },
    },
    {
      id: 3,
      y: 20,
      left: {
        title: '',
        subtitle: 'Similarity',
        description: 'Find most relevant context based on query',
        image: '/images/cognitive/Group1.svg',
      },
      right: {
        title: '',
        subtitle: 'Prompt',
        description: 'Enhance prompts with retrieved context',
        image: '/images/cognitive/Group1.svg',
      },
    },
    {
      id: 4,
      y: 29.25,
      left: {
        title: '7',
        subtitle: 'GPT-4',
        description: 'Generate accurate responses with context',
        image: '/images/cognitive/Group1.svg',
      },
      right: {
        title: '8',
        subtitle: 'API Response',
        description: 'Return formatted results with citations',
        image: '/images/cognitive/Group1.svg',
      },
    },
  ];

  const stepImages = [
    '/images/cognitive/rag_pipeline_img_1.svg',
    '/images/cognitive/rag_pipeline_img_2.svg',
    '/images/cognitive/rag_pipeline_img_3.svg',
    '/images/cognitive/rag_pipeline_img_4.svg',
  ];
  const textPositions = [
    { left: '8.75rem', right: '12.25rem' },
    { left: '15rem', right: '18.5rem' },
    { left: '21.25rem', right: '24.75rem' },
    { left: '27.5rem', right: '31rem' },
  ];

  useEffect(() => {
    let cancelled = false;

    const preloadImages = async () => {
      await Promise.all(
        stepImages.map((src) => {
          return new Promise<void>((resolve) => {
            const image = new Image();
            image.src = src;

            if (typeof image.decode === 'function') {
              image.decode().then(() => resolve()).catch(() => resolve());
              return;
            }

            image.onload = () => resolve();
            image.onerror = () => resolve();
          });
        }),
      );

      if (!cancelled) {
        setImagesReady(true);
      }
    };

    preloadImages();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  useEffect(() => {
    currentSegmentRef.current = currentSegment;
  }, [currentSegment]);

  useEffect(() => {
    if (isPaused || !imagesReady) return;

    const interval = setInterval(() => {
      if (isAnimatingRef.current) return;
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }

      const upcomingSegment = (currentSegmentRef.current + 1) % segmentPairs.length;
      const followingSegment = (upcomingSegment + 1) % segmentPairs.length;

      setNextSegment(upcomingSegment);
      setIsAnimating(true);
      setIsSliding(true);
      isAnimatingRef.current = true;

      transitionTimerRef.current = setTimeout(() => {
        setCurrentSegment(upcomingSegment);
        currentSegmentRef.current = upcomingSegment;
        setNextSegment(followingSegment);
        setIsSliding(false);
        setIsAnimating(false);
        isAnimatingRef.current = false;
        transitionTimerRef.current = null;
      }, 500);
    }, 2500);

    return () => {
      clearInterval(interval);
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
    };
  }, [isPaused, imagesReady, segmentPairs.length]);


  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className='md:px-6 mb-[7.5rem] md:mb-[5rem]' id='RAGPipelines'>
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
        <div className='h-[2.5rem] m-auto w-[0.25rem] md:hidden bg-[linear-gradient(to_bottom,#2B7FFF80_50%,transparent_50%)] bg-[length:0.125rem_1rem] bg-repeat-y bg-top' />
        <div className='h-[0.25rem]  m-auto w-[59.5rem] md:hidden bg-[linear-gradient(to_right,#2B7FFF80_50%,transparent_50%)] bg-[length:1rem_0.125rem] bg-repeat-x bg-top' />

        <div className="flex gap-16 md:gap-8 m-auto justify-center items-center md:flex-col md:mt-8">
          {/*       
      <div
      className="max-w-[46.666875rem] h-[37.5rem] flex-1 border border-[#2B7FFF4D] rounded-[1.5rem] bg-[#070A20] p-[0rem_1.666rem_1.666rem] md:p-5 flex flex-col items-center relative"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      >
      <div
      className="absolute top-[12.4rem] flex items-center justify-between px-6 w-full pointer-events-none z-10 gap-[14.875rem]"
          style={{
            opacity: isAnimating ? 0 : 1,
            transition: 'opacity 0.2s ease-in-out',
            }}
            >
          <div className="w-[40%] text-left transition-all duration-500 flex gap-7 items-start relative top-[-2.42rem]">
          <div className="h-0">
          <p className="text-[#B8D0F2] text-lg mt-1">
          {segmentPairs[currentSegment]?.left.description}
                </p>
                <p className="text-[#B8D0F2] text-lg mt-3">
                <img
                className="inline-block mr-2 w-[1.6rem] h-auto"
                  src={segmentPairs[currentSegment]?.left.image}
                  />
                  {segmentPairs[currentSegment]?.left.subtitle}
              </p>
            </div>
            <h3 className="shadow-[0px_0px_.5rem_.5rem_#B8D0F2] text-[#B8D0F2] text-[1.666875rem] font-semibold flex items-center justify-center w-[2.7rem] h-[2.7rem] flex-[0_0_2.7rem] bg-[#4D72A8] rounded-full">
              {segmentPairs[currentSegment]?.left.title}
            </h3>
            </div>
            
          <div className="w-[40%] text-left transition-all duration-500 flex gap-7 items-start relative top-[2.22rem]">
          <h3 className="shadow-[0px_0px_.5rem_.5rem_#B8D0F2] text-[#B8D0F2] text-[1.666875rem] font-semibold flex items-center justify-center w-[2.7rem] h-[2.7rem] flex-[0_0_2.7rem] bg-[#4D72A8] rounded-full">
          {segmentPairs[currentSegment]?.right.title}
            </h3>
            <div className="h-0">
              <p className="text-[#B8D0F2] text-lg mt-1">
                {segmentPairs[currentSegment]?.right.description}
                </p>
              <p className="text-[#B8D0F2] text-lg mt-3">
                <img
                className="inline-block mr-2 w-[1.6rem] h-auto"
                src={segmentPairs[currentSegment]?.right.image}
                />
                {segmentPairs[currentSegment]?.right.subtitle}
              </p>
            </div>
          </div>
        </div>
        
  <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden">
    <img
      key={currentSegment}
      src={stepImages[currentSegment]}
      alt={`RAG pipeline step ${currentSegment + 1}`}
      className={`w-full h-full object-contain transition-opacity duration-300 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
    />
  </div>

        <div className="w-11/12 h-[0.125rem] bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)]"></div>
        
        <div className="flex gap-6 pt-[1.666rem] md:pt-5">
          <div className="text-[#75BAFF] text-[1.333rem] md:text-sm font-normal font-inter text-center">
            RAG Pipelines
          </div>
        </div>
      </div> */}
<div
  className="max-w-[46.666875rem] h-[37.5rem] flex-1 border border-[#2B7FFF4D] rounded-[1.5rem] bg-[#070A20] p-[0rem_1.666rem_1.666rem] md:p-5 flex flex-col items-center relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div className="absolute inset-0 pointer-events-none z-10 md:hidden">
    <div
      className="absolute left-6 w-[11.5rem] transition-opacity duration-300"
      style={{
        top: textPositions[currentSegment]?.left,
        opacity: isAnimating ? 0 : 1,
      }}
    >
      <p className="text-[#B8D0F2] text-[2rem] leading-[1.2]">
        {segmentPairs[currentSegment]?.left.description}
      </p>
      <p className="text-[#B8D0F2] text-[2rem] mt-3">
        <img
          className="inline-block mr-2 w-[1.6rem] h-auto"
          src={segmentPairs[currentSegment]?.left.image}
        />
        {segmentPairs[currentSegment]?.left.subtitle}
      </p>
    </div>

    <div
      className="absolute right-6 w-[11.5rem] transition-opacity duration-300"
      style={{
        top: textPositions[currentSegment]?.right,
        opacity: isAnimating ? 0 : 1,
      }}
    >
      <p className="text-[#B8D0F2] text-[2rem] leading-[1.2]">
        {segmentPairs[currentSegment]?.right.description}
      </p>
      <p className="text-[#B8D0F2] text-[2rem] mt-3">
        <img
          className="inline-block mr-2 w-[1.6rem] h-auto"
          src={segmentPairs[currentSegment]?.right.image}
        />
        {segmentPairs[currentSegment]?.right.subtitle}
      </p>
    </div>
  </div>

  <div className="flex-1 w-full relative overflow-hidden">
    <div
      className={`h-[200%] w-full will-change-transform ${
        isSliding ? 'transition-transform duration-500 ease-in-out -translate-y-1/2' : 'transition-none translate-y-0'
      }`}
    >
      <div className="h-1/2 w-full flex items-center justify-center">
        <img
          src={stepImages[currentSegment]}
          alt={`RAG pipeline step ${currentSegment + 1}`}
          className="w-[78%] h-full object-contain md:w-full"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="h-1/2 w-full flex items-center justify-center">
        <img
          src={stepImages[nextSegment]}
          alt={`RAG pipeline step ${nextSegment + 1}`}
          className="w-[78%] h-full object-contain md:w-full"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>

  <div className="hidden md:flex w-full justify-between gap-5 mt-4">
    <div className="w-[48%]">
      <p className="text-[#B8D0F2] text-[0.875rem] leading-[1.3]">
        {segmentPairs[currentSegment]?.left.description}
      </p>
      <p className="text-[#B8D0F2] text-[0.875rem] mt-2">
        <img
          className="inline-block mr-2 w-[1rem] h-auto"
          src={segmentPairs[currentSegment]?.left.image}
        />
        {segmentPairs[currentSegment]?.left.subtitle}
      </p>
    </div>
    <div className="w-[48%]">
      <p className="text-[#B8D0F2] text-[0.875rem] leading-[1.3]">
        {segmentPairs[currentSegment]?.right.description}
      </p>
      <p className="text-[#B8D0F2] text-[0.875rem] mt-2">
        <img
          className="inline-block mr-2 w-[1rem] h-auto"
          src={segmentPairs[currentSegment]?.right.image}
        />
        {segmentPairs[currentSegment]?.right.subtitle}
      </p>
    </div>
  </div>

  <div className="w-11/12 h-[0.125rem] bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)]"></div>

  <div className="flex gap-6 pt-[1.666rem] md:pt-5">
    <div className="text-[#75BAFF] text-[1.333rem] md:text-sm font-normal font-inter text-center">
      RAG Pipelines
    </div>
  </div>
</div>

<div className="relative rounded-full bg-[linear-gradient(135deg,#41668C66_40%,#28B6F6)] p-[0.125rem]">
  <div className="bg-[linear-gradient(135deg,#080C26_60%,#75BAFF)] text-[1.5rem] md:text-[1rem] font-bold font-montserrat rounded-full flex items-center justify-center flex-[0_0_5rem] w-[5rem] h-[5rem] md:flex-[0_0_4rem] md:w-[4rem] md:h-[4rem] md:py-[1rem] pointer-events-none select-none py-[2.15rem]">
    <span className="bg-gradient1 bg-clip-text text-transparent">
      VS
    </span>
  </div>
</div>
<div>
  <div className='h-[2.5rem] m-auto w-[0.25rem] md:hidden bg-[linear-gradient(to_bottom,#2B7FFF80_50%,transparent_50%)] bg-[length:0.125rem_1rem] bg-repeat-y bg-top' />
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
                    FROM <span className="text-[#B8D0F2]">resume_ontology</span>
                  </p>

                  <p className="text-[#B8D0F2] mt-6 md:mt-3">
                    WHERE{' '}
                    <span className="text-[#866CFF]">cognitive_classify</span>{' '}
                    (
                  </p>

                  <div className="pl-6 py-[.5rem] md:py-[.25rem] space-y-[.5rem] md:space-y-[.25rem]">
                    <p className="text-[#B8D0F2]">raw_text,</p>

                    <p className="text-[#866CFF]">
                      "{'>'}=3y deep backend coding, then transitioned to 
                    </p>
                    <p className="text-[#866CFF]">
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
