'use client';

import { Heading } from '@/components/Heading';
import { useEffect, useRef, useState, type PointerEvent } from 'react';

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
      // {
      //   heading: 'Healthcare Insights',
      //   description: 'Identify emerging symptom clusters across large clinical note collections.'
      // },
      // {
      //   heading: 'Risk Assessment',
      //   description: 'Analyze credit risk by combining financial statements with market sentiment data.'
      // },
      // {
      //   heading: 'Fraud Detection',
      //   description: 'Identify anomalous patterns in transaction data and communication logs.'
      // }
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
      // {
      //   heading: 'Talent Insights',
      //   description: 'Analyze resumes to identify career trajectories and leadership transitions.'
      // },
      // {
      //   heading: 'Deal Risk Analysis',
      //   description: 'Predict deal closure probability by analyzing communication patterns and historical data.'
      // },
      // {
      //   heading: 'Competitive Intelligence',
      //   description: 'Track competitor mentions and sentiment across sales calls and market reports.'
      // }
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
      // {
      //   heading: 'Financial Intelligence',
      //   description: 'Detect patterns in patient billing and insurance claims.'
      // },
      // {
      //   heading: 'Treatment Efficacy',
      //   description: 'Correlate treatment protocols with patient outcomes across structured and unstructured data.'
      // },
      // {
      //   heading: 'Operational Efficiency',
      //   description: 'Optimize hospital workflows by analyzing staff schedules, patient flow, and resource allocation.'
      // }
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
      
      // {
      //   heading: 'Sales Intelligence',
      //   description: 'Evaluate sales hiring success patterns.'
      // },
      // {
      //   heading: 'Retention Analysis',
      //   description: 'Predict employee churn by analyzing performance reviews, engagement surveys, and communication patterns.'
      // },
      // {
      //   heading: 'Skills Gap Analysis',
      //   description: 'Identify emerging skill requirements by analyzing job descriptions and industry trends.'
      // }
    ],
  },
];

export default function EnterpriseUseCases() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [canHover, setCanHover] = useState<boolean>(false);
  const hoverSafetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updateCanHover = () => {
      setCanHover(hoverMediaQuery.matches);
    };

    updateCanHover();
    hoverMediaQuery.addEventListener('change', updateCanHover);

    return () => {
      hoverMediaQuery.removeEventListener('change', updateCanHover);
    };
  }, []);

  useEffect(() => {
    if (canHover) return;

    // On touch/coarse-pointer devices, never stay in paused mode.
    setPaused(false);
  }, [canHover]);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    if (!paused || !canHover) return;

    // Safety net: if leave/cancel is missed, auto-resume after a short delay.
    hoverSafetyTimeoutRef.current = setTimeout(() => {
      setPaused(false);
    }, 8000);

    return () => {
      if (hoverSafetyTimeoutRef.current) {
        clearTimeout(hoverSafetyTimeoutRef.current);
        hoverSafetyTimeoutRef.current = null;
      }
    };
  }, [paused, canHover]);

  useEffect(() => {
    const handleVisibilityOrBlur = () => {
      setPaused(false);
    };

    window.addEventListener('blur', handleVisibilityOrBlur);
    document.addEventListener('visibilitychange', handleVisibilityOrBlur);

    return () => {
      window.removeEventListener('blur', handleVisibilityOrBlur);
      document.removeEventListener('visibilitychange', handleVisibilityOrBlur);
    };
  }, []);

  const handleTabChange = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setActiveIndex(newIndex);
  };

  const activeTab = tabs[activeIndex];

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (!canHover || event.pointerType !== 'mouse') return;
    setPaused(true);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (!canHover || event.pointerType !== 'mouse') return;
    setPaused(false);
  };

  const getAnimationClass = (animationType: string) => {
    switch (animationType) {
      case 'bottom-right':
        return 'animate-fade-in-bottom-right';
      case 'bottom-left':
        return 'animate-fade-in-bottom-left';
      case 'top-right':
        return 'animate-fade-in-top-right';
      case 'top-left':
        return 'animate-fade-in-top-left';
      default:
        return 'animate-fade-in-bottom-right';
    }
  };

  const getItemAnimationClass = (animationType: string, idx: number) => {
    const baseClass =
      {
        'bottom-right': 'slide-in-bottom-right',
        'bottom-left': 'slide-in-bottom-left',
        'top-right': 'slide-in-top-right',
        'top-left': 'slide-in-top-left',
      }[animationType] || 'slide-in-bottom-right';

    return `fade-item ${baseClass} delay-${idx}`;
  };

  return (
    <div className="px-6 flex items-center justify-center mb-[12.5rem] md:mb-[6rem]">
      <div className="w-full flex justify-center gap-[18.5rem] md:gap-[2.5rem] md:flex-col">
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
            className="mt-[4.541875rem] md:mt-[1rem] md:mx-auto w-fit blue-green-background-text bg-clip-text text-left md:text-center font-inter text-[2.333rem] font-bold leading-tight md:leading-tight text-transparent"
            style={{
              backgroundSize:'100%',
              fontSize: isMobile ? '1.25rem' : '',
            }}
          >
            Cognitive SQL{' '}
          </Heading>
          <Heading
            size="auto"
            as="h1"
            className="mt-[.5rem] md:mt-[0rem] bg-gradient1 bg-clip-text text-left md:text-center font-inter text-[1.833rem] font-normal leading-tight md:leading-[1.25rem] text-transparent md:text-[1.875rem]"
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
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={() => setPaused(false)}
          className="w-full max-w-[39.125rem] overflow-hidden md:overflow-hidden md:pt-[2rem] md:mt-[-2rem]"
        >
          {/* Tabs */}
          <div className="flex gap-4 mb-6 md:mb-[1rem] justify-between">
            {tabs.map((tab, index) => (
              <div key={tab.id} className='relative flex flex-col items-center'>
              <button
                onClick={() => handleTabChange(index)}
                className="flex flex-col items-center gap-[1.333rem] md:gap-4 px-4 md:px-0 md:py-0 transition-all duration-300"
              >
                <img
                  className={`flex-[0_0_3.5rem] w-[3.5rem] h-[3.5rem] md:flex-[0_0_2.125rem] md:w-[2.125rem] md:h-[2.125rem] md:py-[0.5rem] pointer-events-none select-none py-[0.8125rem] rounded-[0.666875rem] md:rounded-[.4rem] border border-[#75baff9a] ${
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
              <div className={`h-[0.125rem] absolute bottom-[-1.45rem] md:bottom-[-1.1rem] z-10 w-60 transition-all bg-[linear-gradient(90deg,#41668C1A,#588BBF99,#41668C1A)] ${
                    activeIndex === index
                      ? 'scale-100'
                      : 'scale-0'
                  }`} />
              </div>
            ))}
          </div>

          <div className="border-t-[0.125rem] border-[#41668C4D] pt-11 md:pt-6 relative min-h-[20rem] md:min-h-[8.5rem]">
            <div
              key={activeIndex}
              className={`grid grid-cols-1 gap-8 ${getAnimationClass(activeTab.animation)}`}
            >
              {activeTab.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`${getItemAnimationClass(activeTab.animation, idx)} flex items-start justify-center gap-9 md:gap-4 md:items-start`}
                >
                  <img
                    className={`flex-[0_0_11.25rem] w-[11.25rem] h-[11.25rem] md:flex-[0_0_6rem] md:w-[6rem] md:h-[6rem] pointer-events-none select-none rounded-[0.625rem]`}
                    src={`/images/cognitive/${item.image}`}
                    alt={`${item.heading} tab`}
                  />
                  <div>
                    <h3 className="font-semibold text-[#B8D0F2] text-[1.666rem] md:text-base font-inter mb-3 md:mb-1">
                      {item.heading}
                    </h3>
                    <p className="text-[#B8D0F2] text-[1.5rem] md:text-[0.875rem] font-normal font-inter">
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
        /* Fade In Animations */
        .animate-fade-in-bottom-right {
          animation: fadeInFromBottomRight 0.6s ease forwards;
        }

        .animate-fade-in-bottom-left {
          animation: fadeInFromBottomLeft 0.6s ease forwards;
        }

        .animate-fade-in-top-right {
          animation: fadeInFromTopRight 0.6s ease forwards;
        }

        .animate-fade-in-top-left {
          animation: fadeInFromTopLeft 0.6s ease forwards;
        }

        /* Item animations with delays */
        .fade-item {
          opacity: 0;
        }

        .slide-in-bottom-right {
          animation: slideInFromBottomRight 0.5s ease forwards;
        }

        .slide-in-bottom-left {
          animation: slideInFromBottomLeft 0.5s ease forwards;
        }

        .slide-in-top-right {
          animation: slideInFromTopRight 0.5s ease forwards;
        }

        .slide-in-top-left {
          animation: slideInFromTopLeft 0.5s ease forwards;
        }

        /* Delay classes for headings */
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

        /* Keyframes */
        @keyframes fadeInFromBottomRight {
          0% {
            opacity: 0;
            //transform: translate(1.25rem, 1.25rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes fadeInFromBottomLeft {
          0% {
            opacity: 0;
            //transform: translate(-1.25rem, 1.25rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes fadeInFromTopRight {
          0% {
            opacity: 0;
            //transform: translate(1.25rem, -1.25rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes fadeInFromTopLeft {
          0% {
            opacity: 0;
            //transform: translate(-1.25rem, -1.25rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes slideInFromBottomRight {
          0% {
            opacity: 0;
            //transform: translate(0.9375rem, 0.9375rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes slideInFromBottomLeft {
          0% {
            opacity: 0;
            //transform: translate(-0.9375rem, 0.9375rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes slideInFromTopRight {
          0% {
            opacity: 0;
            //transform: translate(0.9375rem, -0.9375rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }

        @keyframes slideInFromTopLeft {
          0% {
            opacity: 0;
            //transform: translate(-0.9375rem, -0.9375rem);
          }
          100% {
            opacity: 1;
            //transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}
