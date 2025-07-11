import { Heading } from "../../components";
import React, { useEffect, useState } from "react";
import styles from "../../styles/CarouselThree.module.css"; // Import the CSS module

// Default data structure
const defaultSection = {
  section_Investors_title1: "",
  section_Investors_title2: "",
  // luminary1_title: "",
  // luminary1_description: "",
  // luminary2_title: "",
  // luminary2_description: "",
};

interface CarouselProps {
  images: string[]; // Define the type for the images prop
}

export default function TestaboutColumnTwo() {
  const [section, setsection] = useState(defaultSection);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "//64.227.101.114/api/akashx-about-pages"
        );
        const data = await response.json();

        // Check if data exists and set state accordingly
        const fetchedSection = data?.data?.[0] ?? {};

        setsection({
          section_Investors_title1:
            fetchedSection.section_Investors_title1 ?? defaultSection.section_Investors_title1,
          section_Investors_title2:
            fetchedSection.section_Investors_title2 ?? defaultSection.section_Investors_title2,
          // luminary1_title:
          //   fetchedSection.luminary1_title ?? defaultSection.luminary1_title,
          // luminary1_description:
          //   fetchedSection.luminary1_description ??
          //   defaultSection.luminary1_description,
          // luminary2_title:
          //   fetchedSection.luminary2_title ?? defaultSection.luminary2_title,
          // luminary2_description:
          //   fetchedSection.luminary2_description ??
          //   defaultSection.luminary2_description,
        });
      } catch (error) {
        console.error("Error fetching API data:", error);
        // Set default values on error
        setsection(defaultSection);
      }
    };

    fetchData();
  }, []);











  

  
  const Carousel: React.FC<{ people: typeof people }> = ({ people }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  
    // Pattern that defines the order of slides
    const pattern = [4, 5, 1, 2, 3, 4, 5, 2, 1];
  
    // Duplicate the last two slides at the beginning and the first two slides at the end
    const extendedPeople = [
      ...people.slice(-2), // Last two items
      ...people,
      ...people.slice(0, 2), // First two items
    ];
  
    // Function to handle the left and right navigation
    const handleNavigation = (direction: "left" | "right") => {
      let nextIndex = activeIndex;
  
      if (direction === "right") {
        nextIndex = (activeIndex + 1) % extendedPeople.length;
      } else if (direction === "left") {
        nextIndex = (activeIndex - 1 + extendedPeople.length) % extendedPeople.length;
      }
  
      setActiveIndex(nextIndex);
    };
  
    // Adjust the transform to move the carousel based on the activeIndex
    const getTranslateX = () => {
      const visibleItems = 5; // Show 5 visible items
      const itemWidth = 100 / visibleItems; // Calculate the width for each item
  
      // Calculate the center of the carousel and adjust the translation
      const centerIndex = Math.floor(visibleItems / 2); // The center index for the visible items
      const offset = activeIndex - centerIndex; // Calculate the offset to center the active slide
      return -((offset * itemWidth)-40); // Adjust for visible cards
    };
  
    // Dots click handler (only for visible items)
    const handleDotClick = (index: number) => {
      // Calculate the correct active index based on the dot click
      const correctIndex = index + 2; // Adjust index because we duplicated the slides
      setActiveIndex(correctIndex);
    };
  
    useEffect(() => {
      // Automatically scroll through the carousel every 2 seconds
      const interval = setInterval(() => {
        handleNavigation("right");
      }, 200000);
  
      return () => clearInterval(interval);
    }, [activeIndex]);
  
    return (
      <div className={styles.carousel}>
        {/* Carousel Container */}
        <div
          className={styles.carouselContainer}
          style={{
            transform: `translateX(${getTranslateX()}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {extendedPeople.map((person, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ""}`}
            >
              <img src={person.image} alt={person.name} />
              <div className={styles.personInfo}>
                <p>{person.name}</p>
                <p>{person.occupation}</p>
                <img className={styles.SVQuadLogo} src={person.logo} alt={`${person.name} logo`} />
              </div>
            </div>
          ))}
        </div>
  
  
        {/* Dots */}
        <div className={styles.carouselDots}>
          {/* Render 5 dots for the visible slides */}
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex - 2 ? styles.active : ""}`} // Adjust for the duplicated slides
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  



  

  







  
  const people = [
    {
      image: "/images/img_image_59.webp",
      name: "Raju Reddy1",
      occupation: "Silicon Valley Quad ",
      logo: "/images/logo/SVQuadLogo.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Kanwal Rekhi2",
      occupation: "Inventus Capital",
      logo: "/images/logo/icp.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ankur Jain3",
      occupation: "Emergent Ventures",
      logo: "/images/logo/emergent.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Raju Reddy4",
      occupation: "Iona Star Capital",
      logo: "/images/logo/iconstar.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ankur Jain5",
      occupation: "Techstars",
      logo: "/images/logo/techstars.png",
    },
  ];

  return (
    <div className="flex flex-col items-center md:py-10">
      <div className="container-xs flex flex-col items-center gap-[104px] lg:px-5 md:px-5 md:gap-[50px]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[30px] sm:text-[24px] md:text-transparent"
          >
            {section.section_Investors_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[40px] sm:text-[24px] md:text-transparent"
            >
            {section.section_Investors_title2}
          </Heading>
        </div>

        <div className="flex self-stretch md:flex-col md:gap-[3rem]">
          <Carousel people={people} />
        </div>
      </div>
    </div>
  );
}
