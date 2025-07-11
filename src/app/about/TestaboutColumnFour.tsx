import { Heading } from "../../components";
import React, { useEffect, useState } from "react";
import styles from "../../styles/CarouselTwo.module.css"; // Import the CSS module

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
    const [activeMember, setActiveMember] = useState<number>(0);
    const [tempperson, setTempperson] = useState(people);
    const [animationKey, setAnimationKey] = useState(0);
    const [inactive, setInactive] = useState(false);
    const updateCarousel = (index: number) => {
      setInactive(true);
      setTimeout(() => {
        setInactive(false);
        setActiveMember(index);

        const newTempperson = [
          ...people.slice(0, index),
          ...people.slice(index + 1),
        ];
        newTempperson.splice(2, 0, people[index]);
        const finalTempperson = newTempperson.slice(0, 5);
        setTempperson(finalTempperson);

        setAnimationKey((prevKey) => prevKey + 1);
      }, 1000);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        const nextIndex = (activeMember + 1) % people.length;
        updateCarousel(nextIndex);
      }, 6000);

      return () => clearInterval(interval);
    }, [activeMember, people]);

    const handleDotClick = (index: number) => {
      if (activeMember === index) return;

      setInactive(true);
      setTimeout(() => {
        setInactive(false);
        setActiveMember(index);

        const newTempperson = [
          ...people.slice(0, index),
          ...people.slice(index + 1),
        ];
        newTempperson.splice(2, 0, people[index]);
        const finalTempperson = newTempperson.slice(0, 5);
        setTempperson(finalTempperson);
        setAnimationKey((prevKey) => prevKey + 1);
      }, 1000);
    };

    return (
      <div className={styles.carousel}>
        <div className={styles.carouselContainer}>
          {tempperson.map((person, index) => (
            <div key={index} className={`${styles.carouselItem}`}>
              <div
                key={`image-${index}-${animationKey}`}
                className={`${styles.personImage} ${
                  inactive ? styles.inactive : ""
                } ${styles.active}`}
                style={{ backgroundImage: `url(${person.image})` }}
              ></div>

              <div
                className={`${styles.SVQuadLogo} ${
                  inactive && 2 === index ? styles.inactive : ""
                } ${2 === index ? styles.active : ""}`}
              >
                <div style={{ backgroundImage: `url(${person.logo})` }}></div>
              </div>

              <div
                key={`info-${index}-${animationKey}`}
                className={`${styles.personInfo} ${
                  inactive && 2 === index ? styles.inactive : ""
                } ${2 === index ? styles.active : ""}`}
              >
                <p>{person.name}</p>
                <p>{person.occupation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselDots}>
          {tempperson.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                activeMember === index ? styles.active : ""
              }`}
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
      name: "Raju Reddy",
      occupation: "Silicon Valley Quad ",
      logo: "/images/logo/SVQuadLogo.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Kanwal Rekhi",
      occupation: "Inventus Capital",
      logo: "/images/logo/icp.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ankur Jain",
      occupation: "Emergent Ventures",
      logo: "/images/logo/emergent.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Raju Reddy",
      occupation: "Iona Star Capital",
      logo: "/images/logo/iconstar.png",
    },
    {
      image: "/images/img_image_59.webp",
      name: "Ankur Jain",
      occupation: "Techstars",
      logo: "/images/logo/techstars.png",
    },
  ];

  return (
    <div className="flex flex-col items-center md:py-0">
      <div className="container-xs flex flex-col items-center gap-[104px] lg:px-5 md:px-5 md:gap-[10px]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium  lg:text-[30px] md:text-[24px] sm:text-[24px] md:text-transparent"
          >
            {section.section_Investors_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold  lg:text-[51px] md:text-[24px] sm:text-[24px] md:text-transparent"
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
