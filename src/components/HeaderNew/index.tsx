'use client';

import { Heading, Img } from './..';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import useScrollSpy from '@/hooks/useScrollSpy';
import useHashNavigation from '@/hooks/useHashNavigation';

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [offset, setOffset] = useState(100); // fallback

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const rootFontSize =
      parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;

    setOffset(7 * rootFontSize);
  }, []);
  // Define section IDs for scroll spy (order matters for highlighting priority)
  const sectionIds = [
    'HeroSection',
    'CognitiveSQL',
    'OntlogyViews',
    'UseCases',
  ];

  // Use scroll spy for active section highlighting
  const activeSection = useScrollSpy(sectionIds, 100);

  // Use hash navigation for smooth scrolling
  useHashNavigation(offset);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Detect screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Helper function to check if a link is active
  const isLinkActive = (sectionId?: string) => {
    // Only apply active styles on the cognitive page
    if (pathname !== '/cognitive') return false;

    if (sectionId) {
      // For section links - check if this section is active
      return activeSection === sectionId;
    } else {
      // For home link - active when HeroSection is active
      return activeSection === 'HeroSection';
    }
  };

  return (
    <div className="fixed top-0 z-[100] block w-full origin-top-left border-b border-[#556E94]/30 bg-[#080C26]/100 p-[1.8125rem_0px_1.875rem]">
      <header
        {...props}
        className={`${props.className} flex justify-between items-center ml-[6.25rem] mr-28 gap-5 md:mx-0`}
        style={{
          position: isMobile ? 'fixed' : 'static',
          borderBottom: isMobile ? '1px solid #556E944D' : 'none',
          padding: isMobile ? '1rem 1.25rem 1rem 1.25rem' : 'initial',
          width: isMobile ? '100%' : 'auto',
          backgroundColor: isMobile ? '#080c26e6' : 'transparent',
          top: isMobile ? 0 : 'auto',
          zIndex: '100',
        }}
      >
        <Link href="/cognitive#HeroSection">
          <Img
            src="img_header_logo.svg"
            width={175.92}
            height={40.3}
            alt="Headerlogo"
            className="h-[2.51875rem] w-[10.995rem] object-contain md:w-[6.5rem] max-w-[10.995rem]"
          />
        </Link>

        {/* Hamburger Icon for mobile */}
        {isMobile && (
          <div
            className="cursor-pointer text-white"
            onClick={toggleMenu}
            style={{ zIndex: isMobile && isMenuOpen ? 51 : 'auto' }}
          >
            {isMenuOpen ? (
              <FiX size={30} className="text-white" style={{ color: '#fff' }} />
            ) : (
              <FiMenu
                size={30}
                className="text-white"
                style={{ color: '#fff' }}
              />
            )}
          </div>
        )}

        {/* Navigation Menu */}
        <ul
          className={`${
            isMobile
              ? isMenuOpen
                ? 'fixed w-full h-[100vh] bg-black bg-opacity-75 z-50 flex flex-col backdrop-blur-sm py-[2.5rem]'
                : 'fixed w-full h-[100vh] bg-black bg-opacity-75 z-50 flex flex-col backdrop-blur-sm py-[2.5rem]'
              : 'flex flex-wrap gap-[3.75rem] lg:gap-5 md:gap-5'
          } transition-[1s]`}
          style={{
            color: 'white',
            backgroundColor: isMobile && isMenuOpen ? '#080d26' : '#080d26',
            top: isMobile && isMenuOpen ? '3rem' : '3rem',
            left: isMobile && isMenuOpen ? '0' : '100%',
          }}
        >
          {/* Home Link - Active when HeroSection is visible */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="/cognitive#HeroSection"
              className={`cursor-pointer lg:text-[1.0625rem] ${
                isMobile
                  ? 'border-b border-[#546e937f] pb-[1.25rem] pt-[1.25rem] px-[1.25rem]'
                  : ''
              }`}
            >
              <Heading
                size="auto"
                as="p"
                className={`text-[1.25rem] font-medium hidden ${
                  isLinkActive()
                    ? 'text-blue-100'
                    : 'text-blue_gray-300 hover:text-blue-100'
                }`}
              >
                Home
              </Heading>
            </Link>
          </li>

          {/* Cognitive SQL Link */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="/cognitive#CognitiveSQL"
              className={`cursor-pointer lg:text-[1.0625rem] ${
                isMobile
                  ? 'border-b border-[#546e937f] pb-[1.25rem] pt-[1.25rem] px-[1.25rem]'
                  : ''
              }`}
            >
              <Heading
                size="auto"
                as="p"
                className={`text-[1.25rem] font-medium ${
                  isLinkActive('CognitiveSQL')
                    ? 'text-blue-100'
                    : 'text-blue_gray-300 hover:text-blue-100'
                }`}
              >
                Cognitive SQL
              </Heading>
            </Link>
          </li>

          {/* Ontology Views Link */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="/cognitive#OntlogyViews"
              className={`cursor-pointer lg:text-[1.0625rem] ${
                isMobile
                  ? 'border-b border-[#546e937f] pb-[1.25rem] pt-[1.25rem] px-[1.25rem]'
                  : ''
              }`}
            >
              <Heading
                size="auto"
                as="p"
                className={`text-[1.25rem] font-medium ${
                  isLinkActive('OntlogyViews')
                    ? 'text-blue-100'
                    : 'text-blue_gray-300 hover:text-blue-100'
                }`}
              >
                Ontology Views
              </Heading>
            </Link>
          </li>

          {/* Use Cases Link */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="/cognitive#UseCases"
              className={`cursor-pointer lg:text-[1.0625rem] ${
                isMobile
                  ? 'border-b border-[#546e937f] pb-[1.25rem] pt-[1.25rem] px-[1.25rem]'
                  : ''
              }`}
            >
              <Heading
                size="auto"
                as="p"
                className={`text-[1.25rem] font-medium ${
                  isLinkActive('UseCases')
                    ? 'text-blue-100'
                    : 'text-blue_gray-300 hover:text-blue-100'
                }`}
              >
                Use Cases
              </Heading>
            </Link>
          </li>

          {/* Company Link */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="/about"
              className={`cursor-pointer lg:text-[1.0625rem] ${
                isMobile
                  ? 'border-b border-[#546e937f] pb-[1.25rem] pt-[1.25rem] px-[1.25rem]'
                  : ''
              }`}
            >
              <Heading
                size="auto"
                as="p"
                className={`text-[1.25rem] font-medium ${
                  pathname === '/about'
                    ? 'text-blue-100'
                    : 'text-blue_gray-300 hover:text-blue-100'
                }`}
              >
                Company
              </Heading>
            </Link>
          </li>

          {/* Blogs Link */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="/blogs"
              className={`cursor-pointer lg:text-[1.0625rem] ${
                isMobile
                  ? 'border-b border-[#546e937f] pb-[1.25rem] pt-[1.25rem] px-[1.25rem]'
                  : ''
              }`}
            >
              <Heading
                size="auto"
                as="p"
                className={`text-[1.25rem] font-medium ${
                  pathname === '/blogs'
                    ? 'text-blue-100'
                    : 'text-blue_gray-300 hover:text-blue-100'
                }`}
              >
                Blogs
              </Heading>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
