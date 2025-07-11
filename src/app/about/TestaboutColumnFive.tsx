import { Heading, Img } from "../../components";
import React, { Suspense, useEffect, useState } from "react";
import styles from "../../styles/Carousel.module.css"; // Import the CSS module

// Default data structure
const defaultSection = {
  section3_title1: "",
  section3_title2: "",
  luminary1_title: "",
  luminary1_description: "",
  luminary2_title: "",
  luminary2_description: "",
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
        const response = await fetch("//64.227.101.114/api/akashx-about-pages");
        const data = await response.json();

        // Check if data exists and set state accordingly
        const fetchedSection = data?.data?.[0] ?? {};

        setsection({
          section3_title1: fetchedSection.section3_title1 ?? defaultSection.section3_title1,
          section3_title2: fetchedSection.section3_title2 ?? defaultSection.section3_title2,
          luminary1_title: fetchedSection.luminary1_title ?? defaultSection.luminary1_title,
          luminary1_description: fetchedSection.luminary1_description ?? defaultSection.luminary1_description,
          luminary2_title: fetchedSection.luminary2_title ?? defaultSection.luminary2_title,
          luminary2_description: fetchedSection.luminary2_description ?? defaultSection.luminary2_description,
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
    const [currentIndex, setCurrentIndex] = useState(0); // Start at the first valid slide
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
  
    // Declare visibleItems here before usage
    const visibleItems = isMobile ? 2 : 4; // Show 2 items on mobile, 4 otherwise
    const totalItems = people.length;
  
    // Clone slides for infinite effect
    const extendedPeople = [
      ...people.slice(-visibleItems), // Clone last few slides to the beginning
      ...people,
      ...people.slice(0, visibleItems), // Clone first few slides to the end
    ];
  
    // Resize handler to check for mobile view
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1050);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      const dotElement = document.getElementById('carouselDots'); 
      if (dotElement) {
        const firstDot = dotElement.children[0] as HTMLButtonElement;
        firstDot.click();
      }
      const interval = setInterval(() => {
        moveToNextSlide();
      }, 6000); // Slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [visibleItems]);
  
    const moveToNextSlide = () => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };
  
    const handleTransitionEnd = () => {
      // Reset index when reaching cloned slides
      if (currentIndex >= extendedPeople.length - visibleItems) {
        setIsTransitioning(false);
        setCurrentIndex(visibleItems); // Move to the first valid slide after last clone
      } else if (currentIndex <= 0) {
        setIsTransitioning(false);
        setCurrentIndex(extendedPeople.length - visibleItems * 2); // Move to last valid slide
      }
    };
  
    const translateX = -(currentIndex * (isMobile ? 50 : 280 + 120));
  
    return (
      <div className={styles.carousel}>
        <div className={styles.carouselContainer}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(${translateX}${isMobile ? "%" : "px"})`,
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedPeople.map((person, index) => (
              <div className={styles.carouselItem} key={index}  style={{
                opacity:
                    index >= currentIndex && index < currentIndex + visibleItems
                      ? "1"
                      : "0",
                transition:'1s'
              }}>
                <img
                  className={styles.personImage}
                  src={person.image}
                  alt={person.name}
                />
                <div className={styles.personInfo}>
                  <p>{person.name}</p>
                  <p>{person.occupation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Dots */}
        <div className={styles.carouselDots} id="carouselDots">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                (currentIndex - visibleItems) % totalItems === index
                  ? styles.active
                  : ""
              }`}
              onClick={() => setCurrentIndex(index + visibleItems)}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  
  
  
  

  const people = [
    {
      image: "/images/img_image_59.webp",
      name: "Vik Pant",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Rishabh Kaul",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Jitendra Vaidya",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Rajiv Pant",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Keith Culley",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Raj Jegannathan",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Prem Jain",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "SP Kothari",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ajoy Kodali",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ramesh Indraghanti",
      occupation: "Database Engineer",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ashish Garg",
      occupation: "Database Engineer",
    },
  ];
  
  

  return (
    <div className="flex flex-col items-center md:py-0 mb-[135px] md:mb-[57px]">
      <div className="container-xs flex flex-col items-center gap-[104px] lg:px-5 md:px-5 md:gap-[40px] max-w-[calc(100%-240px)] md:max-w-full">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[24px] sm:text-[24px] md:text-transparent"
          >
            AkashX is advised by
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[24px] sm:text-[24px] md:text-transparent"
          >
            Industry Luminaries
          </Heading>
        </div>

        <div className="flex self-stretch md:flex-col md:gap-[3rem]">
          <Carousel people={people} />
        </div>
      </div>
    </div>
  );
}
