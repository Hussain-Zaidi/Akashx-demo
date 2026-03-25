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
    <div className="bg-[url(/images/cognitive/Group1000004528.svg)] bg-[center_-1rem] bg-no-repeat" style={{backgroundSize: isMobile ? '45rem':'113rem'}}>
      <div
        ref={sectionRef}
        className="relative max-w-[85rem] mx-auto px-6 mb-[12.5rem] md:mb-[6rem]"
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
            Seamlessly plugs <br className='md:block hidden' />into <br className='md:hidden' />
            your {' '}
            {/* existing <br className='md:block hidden' />Data  */}
            Lakehouse
          </Heading>
          <p className="mt-8 md:mt-[1rem] text-[#B8D0F2] text-[1.666875rem] md:text-[1rem] font-normal font-inter">
            {/* Connects your <br className=' hidden md:block'/>Data Warehouse / Lakehouse and <br className='md:hidden'/> */}
            {/* feeds to your Agents via MCP */}
            Purpose built for Humans and Agents
          </p>
        </div>

        <div className="shadow-[0_0_3.4375rem_0_#75BAFF33] md:shadow-[0_0_1rem_0_#75BAFF33] border border-[#2B7FFF4D] rounded-[1.5rem] md:rounded-[0.75rem] bg-[#070A20] p-[3.1468rem] md:p-5 flex flex-col items-center">
          <div className="flex w-full gap-11 md:gap-0 md:flex-col items-center mb-[2.5rem] md:mb-6">
            <img
              className="w-full"
              src="/images/cognitive/Group1000004521.svg"
              alt="Databricks"
            />
          </div>

          <div className="w-[80%] md:w-11/12 h-[0.1rem] bg-[linear-gradient(90deg,#2941591A,#41668C,#2941591A)]"></div>

          <div className="flex gap-6 pt-[2.7rem] md:pt-4">
            <div className="text-[#75BAFF] text-[1.5rem] md:text-[0.875rem] md:leading-auto font-semibold font-inter text-center">
              Seamlessly plugs into S3/Open formats with zero-ETL/migration
            </div>

            {/* <div className="flex justify-center items-center flex-row-reverse  md:w-[15px]">
              <Img
                src="img_bookmark.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence1 rotate-90"
                style={{ margin: isMobile ? '0px -4px' : '0px -4px' }}
              />
              <Img
                src="img_bookmark.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence2 rotate-90"
                style={{ margin: isMobile ? '0px -4px' : '0px -4px' }}
              />
              <Img
                src="img_bookmark.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence3 rotate-90"
                style={{ margin: isMobile ? '0px -4px' : '0px -4px' }}
              />
              <Img
                src="img_bookmark.svg"
                width={20}
                height={22}
                alt="Bookmark"
                className="md:h-[15px] md:w-[15px] h-[21px] w-[26px] object-contain fade-in-sequence4 rotate-90"
                style={{ margin: isMobile ? '0px -4px' : '0px -4px' }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
