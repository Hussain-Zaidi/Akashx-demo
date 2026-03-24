'use client';

import { Heading } from '@/components/Heading';
import { useEffect, useState, useRef } from 'react';

type TabItem = {
  heading: string;
  description: string;
  image?: string;
};

type Tab = {
  id: string;
  title: string;
  animation: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  image: string;
  items: TabItem[];
};

const tabs: Tab[] = [
  {
    id: 'finance',
    title: 'Finance',
    animation: 'bottom-right',
    image: '/images/cognitive/streamline-plump_money-cash-bill-1.svg',
    items: [
      {
        heading: 'Financial Intelligence',
        description:
          'Detect market-moving announcements by joining earnings transcripts with financial datasets.',
        image: 'Maskgroup.svg',
      },
    ],
  },
  {
    id: 'sales',
    title: 'Sales',
    animation: 'bottom-left',
    image: '/images/cognitive/solar_sale-square-outline.svg',
    items: [
      {
        heading: 'Sales Intelligence',
        description:
          'Analyze thousands of sales calls and group them by inferred quality and outcomes.',
        image: 'Maskgroup1.svg',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    animation: 'top-right',
    image: '/images/cognitive/si_shield-health-safety-line.svg',
    items: [
     {
        heading: 'Healthcare Insights',
        description:
          'Identify emerging symptom clusters across large clinical note collections.',
        image: 'Maskgroup2.svg',
      },
    ],
  },
  {
    id: 'talent',
    title: 'Talent',
    animation: 'top-left',
    image: '/images/cognitive/fluent_briefcase-24-regular.svg',
    items: [
      {
        heading: 'Talent Insights',
        description: 'Analyze thousands of resumes to identify career trajectories and leadership transitions.',
        image: 'Maskgroup3.svg',
      },
    ],
  },
];

export default function EnterpriseUseCases() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [displayedTab, setDisplayedTab] = useState<Tab>(tabs[0]);
  
  const isMounted = useRef(true);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      isMounted.current = false;
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Auto-rotate tabs
  useEffect(() => {
    if (paused || isAnimating) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % tabs.length;
      handleTabChange(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused, activeIndex, isAnimating]);

  const handleTabChange = (newIndex: number) => {
    if (newIndex === activeIndex || isAnimating) return;

    // Start fade out animation
    setIsAnimating(true);
    
    // After fade out, change content and fade in
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    animationTimeoutRef.current = setTimeout(() => {
      if (isMounted.current) {
        setActiveIndex(newIndex);
        setDisplayedTab(tabs[newIndex]);
        
        // Start fade in after content change
        setTimeout(() => {
          if (isMounted.current) {
            setIsAnimating(false);
          }
        }, 50);
      }
    }, 300); // Match fade out duration
  };

  const activeTab = displayedTab;

  const getContainerAnimationClass = () => {
    if (isAnimating) {
      return 'animate-fade-out';
    }
    return 'animate-fade-in';
  };

  const getItemAnimationClass = (animationType: string, idx: number) => {
    if (isAnimating) return 'fade-item-hidden';
    
    const baseClass =
      {
        'bottom-right': 'slide-in-bottom-right',
        'bottom-left': 'slide-in-bottom-left',
        'top-right': 'slide-in-top-right',
        'top-left': 'slide-in-top-left',
      }[animationType] || 'slide-in-bottom-right';

    return `fade-item-visible ${baseClass} delay-${idx}`;
  };

  return (
    <div className="px-6 flex items-center justify-center mb-[12.5rem] md:mb-[6rem]">
      <div className="w-full flex justify-center gap-[8.5rem] md:gap-[2.5rem] md:flex-col">
        {/* Left */}
        <div className="w-full max-w-[33.5rem]">
          <Heading
            size="auto"
            as="h1"
            id='UseCases'
            className="bg-gradient1 bg-clip-text text-left md:text-center font-montserrat text-[3rem] font-bold leading-tight md:leading-tight text-transparent"
            style={{
              fontSize: isMobile ? '1.5rem' : '',
            }}
          >
            Enterprise AI <br className='md:hidden' /> Use Cases
          </Heading>

          <Heading
            size="auto"
            as="h1"
            className="mt-[4.541875rem] md:mt-[1rem] bg blue-green-background-text bg-clip-text text-left md:text-center font-montserrat text-[2.333rem] font-bold leading-tight md:leading-tight text-transparent"
            style={{
              backgroundSize:'60%',
              fontSize: isMobile ? '1.25rem' : '',
            }}
          >
            Cognitive SQL{' '}
          </Heading>
          <Heading
            size="auto"
            as="h1"
            className="mt-[.5rem] md:mt-[.5rem] bg-gradient1 bg-clip-text text-left md:text-center font-inter text-[1.833rem] font-normal leading-tight md:leading-[1.25rem] text-transparent md:text-[1.875rem]"
            style={{
              fontSize: isMobile ? '1.125rem' : '',
            }}
          >
            enables reasoning across <br />
            structured and unstructured data.
          </Heading>
        </div>

        {/* Right */}
        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          className="w-full max-w-[39.125rem] overflow-hidden md:overflow-visible"
        >
          {/* Tabs */}
          <div className="flex gap-4 mb-6 justify-between">
            {tabs.map((tab, index) => (
              <div key={tab.id} className='relative flex flex-col items-center'>
                <button
                  onClick={() => handleTabChange(index)}
                  className={`flex flex-col items-center gap-[1.333rem] px-4 md:px-0 py-3 transition-all duration-300 ${
                    isAnimating ? 'cursor-pointer' : 'cursor-pointer'
                  }`}
                  disabled={isAnimating}
                >
                  <img
                    className={`flex-[0_0_3.5rem] w-[3.5rem] h-[3.5rem] md:flex-[0_0_2.125rem] md:w-[2.125rem] md:h-[2.125rem] md:py-[0.5rem] pointer-events-none select-none py-[0.8125rem] rounded-[0.666875rem] md:rounded-[.3rem] border border-[#75baff9a] transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-[#75BAFF99] bg-[#080C26] shadow-[0_0_1rem_0_#75BAFF99]'
                        : 'border-[#75BAFF66] hover:border-gray-500 opacity-50'
                    }`}
                    src={tab.image}
                    alt={`${tab.title} tab`}
                  />
                  <span className="text-[#B8D0F2] text-[1.5rem] md:text-base font-normal font-inter">
                    {tab.title}
                  </span>
                </button>
                <div className={`h-[0.125rem] absolute bottom-[-1.6rem] z-10 w-60 transition-all bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)] ${
                    activeIndex === index
                      ? 'scale-100'
                      : 'scale-0'
                  }`} />
              </div>
            ))}
          </div>

          <div className="border-t-[0.125rem] border-[#41668C4D] pt-11 md:pt-6 relative min-h-[20rem] md:min-h-[12rem]">
            <div className={`grid grid-cols-1 gap-8 ${getContainerAnimationClass()}`}>
              {activeTab.items.map((item, idx) => (
                <div
                  key={`${activeIndex}-${idx}`}
                  className={`${getItemAnimationClass(activeTab.animation, idx)} flex items-center justify-center gap-9 md:gap-4 md:items-start`}
                >
                  <img
                    className={`flex-[0_0_15rem] w-[15rem] h-[15rem] md:flex-[0_0_6rem] md:w-[6rem] md:h-[6rem] pointer-events-none select-none rounded-[0.625rem]`}
                    src={`/images/cognitive/${item.image}`}
                    alt={`${item.heading} tab`}
                  />
                  <div>
                    <h3 className="font-semibold text-[#B8D0F2] text-[1.666rem] md:text-base font-inter mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-[#B8D0F2] text-[1.5rem] md:text-base font-normal font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-out {
          animation: fadeOut 0.3s ease forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }

        .fade-item-hidden {
          opacity: 0;
        }

        .fade-item-visible {
          opacity: 1;
        }

        .slide-in-bottom-right {
          animation: slideIn 0.5s ease forwards;
        }

        .slide-in-bottom-left {
          animation: slideIn 0.5s ease forwards;
        }

        .slide-in-top-right {
          animation: slideIn 0.5s ease forwards;
        }

        .slide-in-top-left {
          animation: slideIn 0.5s ease forwards;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-1 {
          animation-delay: 0.1s;
        }

        .delay-2 {
          animation-delay: 0.2s;
        }

        .delay-3 {
          animation-delay: 0.3s;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}