"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState("");
  const pathname = usePathname();
  const disableHashUpdates = ["/", "/cognitive", "/cognitive-sql", "/ontlogy-views", "/use-cases"].includes(pathname || "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Get all currently intersecting sections
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleSections.length > 0) {
          // Get the topmost visible section (first one in DOM order)
          const topSection = visibleSections[0];
          setActiveId(topSection);
          
          // Update URL hash without triggering scroll
          if (!disableHashUpdates) {
            const currentHash = window.location.hash.replace("#", "");
            if (currentHash !== topSection) {
              history.replaceState(null, "", `#${topSection}`);
            }
          }
        } else {
          // If no section is visible, check if we're at the very top of the page
          if (window.scrollY < offset) {
            setActiveId("HeroSection");
            if (!disableHashUpdates) {
              const currentHash = window.location.hash.replace("#", "");
              if (currentHash !== "HeroSection") {
                history.replaceState(null, "", "#HeroSection");
              }
            }
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: [0, 0.2, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Set initial active state based on hash or scroll position
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && sectionIds.includes(initialHash)) {
      setActiveId(initialHash);
    } else if (!initialHash && window.scrollY < offset) {
      setActiveId("HeroSection");
    }

    // Handle scroll to detect when at top
    const handleScroll = () => {
      if (window.scrollY < offset && !window.location.hash) {
        setActiveId("HeroSection");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset, disableHashUpdates]);

  return activeId;
}
