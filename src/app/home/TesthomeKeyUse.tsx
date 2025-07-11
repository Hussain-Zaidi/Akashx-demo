"use client"
import { Heading } from "../../components";
import React, { useEffect, useState } from "react";
import styles from "../../styles/carouselCard.module.css"; // Import the CSS module

// Default data structure
const defaultSection = {
  section_use_cases_title1: "",
  section_use_cases_title2: "",
  section_use_cases_card1_title: "",
  section_use_cases_card1_description: "",
  section_use_cases_card2_title: "",
  section_use_cases_card2_description: "",
  section_use_cases_card3_title: "",
  section_use_cases_card3_description: "",
};

// Define the type for keyUseCases
interface KeyUseCase {
  image: string;
  heading: string;
  description: string;
}

interface CarouselProps {
  keyUseCases: KeyUseCase[]; // Define the type for the keyUseCases prop
}

interface TesthomeKeyUseProps {
  fetchedSection: any; // You can define a more specific type if needed
}

export default function TesthomeKeyUse({ fetchedSection }: TesthomeKeyUseProps) {
  const [section, setSection] = useState(defaultSection);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050); // Adjust the breakpoint for mobile
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update section data based on fetchedSection
  useEffect(() => {
    setSection({
      section_use_cases_title1: fetchedSection.section_use_cases_title1 ?? defaultSection.section_use_cases_title1,
      section_use_cases_title2: fetchedSection.section_use_cases_title2 ?? defaultSection.section_use_cases_title2,
      section_use_cases_card1_title: fetchedSection.section_use_cases_card1_title ?? defaultSection.section_use_cases_card1_title,
      section_use_cases_card1_description: fetchedSection.section_use_cases_card1_description ?? defaultSection.section_use_cases_card1_description,
      section_use_cases_card2_title: fetchedSection.section_use_cases_card2_title ?? defaultSection.section_use_cases_card2_title,
      section_use_cases_card2_description: fetchedSection.section_use_cases_card2_description ?? defaultSection.section_use_cases_card2_description,
      section_use_cases_card3_title: fetchedSection.section_use_cases_card3_title ?? defaultSection.section_use_cases_card3_title,
      section_use_cases_card3_description: fetchedSection.section_use_cases_card3_description ?? defaultSection.section_use_cases_card3_description,
    });
  }, [fetchedSection]); // Dependency on fetchedSection

  // Define the keyUseCases array with type KeyUseCase[]
  const keyUseCases: KeyUseCase[] = [
    {
      image: "/images/keyUseCases/Maskgroup1.svg",
      heading: section.section_use_cases_card1_title,
      description:section.section_use_cases_card1_description,
    },
    {
      image: "/images/keyUseCases/Maskgroup2.svg",
      heading: section.section_use_cases_card2_title,
      description:section.section_use_cases_card2_description,
    },
    {
      image: "/images/keyUseCases/Maskgroup3.svg",
      heading: section.section_use_cases_card3_title,
      description:section.section_use_cases_card3_description,
    },
  ];

  const Carousel: React.FC<CarouselProps> = ({ keyUseCases }) => {
    return (
      <div className={styles.carousel}>
        <div
          className={`${styles.carouselContainer} ${isMobile ? styles.mobileScroll : ""}`}
        >
          {keyUseCases.map((useCase: KeyUseCase, index: number) => (
            <div key={index} className={styles.card}>
              <img src={useCase.image} alt={useCase.heading} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h4>{useCase.heading}</h4>
                <p>{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center md:py-10 mt-[40px] md:mt-[23px] mb-[-16px] md:mb-0">
      <div className="container-xs flex flex-col items-center gap-[39px] md:gap-0 md:px-[0px] max-w-[100%]">
        <div className="flex flex-col items-center gap-3 md:gap-0 bg-gradient bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium md:text-[24px] md:text-transparent"
          >
            {section.section_use_cases_title1}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold md:text-[24px] md:text-transparent"
            >
            {section.section_use_cases_title2}
          </Heading>
        </div>

        <div className="flex self-stretch md:flex-col md:gap-[3rem]">
          <Carousel keyUseCases={keyUseCases} />
        </div>
      </div>
    </div>
  );
}
