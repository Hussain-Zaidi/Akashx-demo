import { Heading, Img } from "../../components";
import React, { useState, useEffect } from "react";

const logo = [
  {
    logo: "/images/robustGroup/svQuad-m.svg",
  },
  {
    logo: "/images/robustGroup/emergent-m.svg",
  },
  {
    logo: "/images/robustGroup/ICP-m.svg",
  },
  {
    logo: "/images/robustGroup/techStar-m.svg",
  },
  {
    logo: "/images/robustGroup/iconStar-m.svg",
  },
];

const defaultSection = {
  robust_group_title1: "",
  robust_group_title2: "",
};

// Define the props interface for the component
interface TestaboutColumnSevenProps {
  fetchedSection: any; // You can define a more specific type if needed
}
export default function TestaboutColumnSeven({ fetchedSection }: TestaboutColumnSevenProps) {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1050);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const [section, setSection] = useState(defaultSection);
    // Update section data based on fetchedSection
    useEffect(() => {
      setSection({
        robust_group_title1: fetchedSection.robust_group_title1 ?? defaultSection.robust_group_title1,
        robust_group_title2: fetchedSection.robust_group_title2 ?? defaultSection.robust_group_title2,
      });
    }, [fetchedSection]); // Dependency on fetchedSection
  return (
    <div className="flex flex-col items-center md:py-0 pb-[142px] md:pb-[110px]"  
    style={{backgroundImage:'url(/images/sectionSeven.png)',
      backgroundSize:isMobile? '100% 50%': '50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition:isMobile? 'center' : '50% 100px',
    }}>
      <div className="container-xs flex flex-col items-center gap-[142px] md:gap-[60px] lg:px-5 md:px-5 max-w-[100%] px-[30px]">
        <div className="flex flex-col items-center gap-3 md:gap-[4px] bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium lg:text-[30px] md:text-[24px] md:text-transparent"
          >
            {section.robust_group_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold lg:text-[51px] md:text-[24px] md:text-transparent text-center"
          >
            {section.robust_group_title2}
          </Heading>
        </div>

        <div className="gap-[48px] md:gap-2 flex justify-center flex-wrap max-w-[820px]">
  {logo.map((item, index) => (
    <div
      key={index}
      style={{ 
        backgroundImage: `url(${item.logo})`,
    }}
      className="w-[240px] h-[120px] rounded-[10px] md:rounded-[5px] shadow-md md:w-[100px] md:h-[50px] bg-[size:101%] bg-no-repeat bg-center"
    >
    </div>
  ))}
</div>


      </div>
    </div>
  );
}

