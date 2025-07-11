import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useEffect, useState } from "react";

// Define type for founders
type Founder = {
  userName: string;
  userDescription: string;
};

// Static data for images and titles
const staticData = [
  { userImage: "DarshanNagaraj.svg", userTitle: "Co-Founder" },
  { userImage: "KartikKulkarni.svg", userTitle: "Co-Founder" },
  { userImage: "KrisInapurapu.svg", userTitle: "Co-Founder" },
];

// Default values for section and co-founders
const defaultSection = {
  section2_title1: "",
  section2_title2: "",
  co_founder1_name: "",
  co_founder1_description: "",
  co_founder2_name: "",
  co_founder2_description: "",
  co_founder3_name: "",
  co_founder3_description: "",
};

export default function TestaboutColumnOne() {
  const [section, setSection] = useState(defaultSection);
  const [founders, setFounders] = useState<Founder[]>([]); // Explicit type annotation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("//akashx.ai/api/akashx-about-pages");
        const jsonData = await response.json();
        const fetchedSection = jsonData?.data?.[0] ?? {};

        // Update section state
        setSection({
          ...defaultSection,
          section2_title1: fetchedSection.section2_title1 ?? defaultSection.section2_title1,
          section2_title2: fetchedSection.section2_title2 ?? defaultSection.section2_title2,
          co_founder1_name: fetchedSection.co_founder1_name ?? defaultSection.co_founder1_name,
          co_founder1_description: fetchedSection.co_founder1_description ?? defaultSection.co_founder1_description,
          co_founder2_name: fetchedSection.co_founder2_name ?? defaultSection.co_founder2_name,
          co_founder2_description: fetchedSection.co_founder2_description ?? defaultSection.co_founder2_description,
          co_founder3_name: fetchedSection.co_founder3_name ?? defaultSection.co_founder3_name,
          co_founder3_description: fetchedSection.co_founder3_description ?? defaultSection.co_founder3_description,
        });

        // Update founders state
        setFounders([
          {
            userName: fetchedSection.co_founder1_name ?? defaultSection.co_founder1_name,
            userDescription: fetchedSection.co_founder1_description ?? defaultSection.co_founder1_description,
          },
          {
            userName: fetchedSection.co_founder2_name ?? defaultSection.co_founder2_name,
            userDescription: fetchedSection.co_founder2_description ?? defaultSection.co_founder2_description,
          },
          {
            userName: fetchedSection.co_founder3_name ?? defaultSection.co_founder3_name,
            userDescription: fetchedSection.co_founder3_description ?? defaultSection.co_founder3_description,
          },
        ]);
      } catch (error) {
        console.error("Error fetching API data:", error);
        setSection(defaultSection);
        setFounders([]);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center md:mt-[68px]">
      <div className="container-xs flex flex-col items-center gap-[104px] lg:gap-[104px] lg:px-5 md:gap-[52px] md:px-[30px] sm:gap-[35px]">
        {/* Section Titles */}
        <div className="flex flex-col items-center gap-3 md:gap-0 md:bg-gradient md:bg-clip-text">
          <Heading
            size="textlg"
            as="h2"
            className="bg-gradient2 bg-clip-text font-montserrat text-[36px] font-medium lg:text-[30px] md:text-[30px] sm:text-[24px] md:text-transparent"
          >
            {section.section2_title1 || "Loading..."}
          </Heading>
          <Heading
            size="headinglg"
            as="h3"
            className="bg-gradient3 bg-clip-text font-montserrat text-[60px] font-bold lg:text-[51px] md:text-[40px] sm:text-[24px] md:text-transparent"
          >
            {section.section2_title2 || "Loading..."}
          </Heading>
        </div>

        {/* Co-Founder Profiles */}
        <div className="flex gap-[70px] self-stretch md:flex-wrap justify-center">
          <Suspense fallback={<div>Loading Profiles...</div>}>
            {loading ? (
              <div style={{ color: "#fff" }}>Loading feed...</div>
            ) : (
              founders.map((founder, index) => (
                <UserProfile
                  key={index}
                  userImage={staticData[index]?.userImage || "placeholder.svg"} // Fallback for missing image
                  userTitle={staticData[index]?.userTitle || "Co-Founder"}
                  userName={founder.userName || "Unknown"}
                  userDescription={founder.userDescription || "Description not available."}
                />
              ))
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
