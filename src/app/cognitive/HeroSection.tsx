'use client';
import { Heading } from '../../components';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageSrc, setImageSrc] = useState('');


// Inside your component
const hasSetImage = useRef(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1050);
  };
  
  window.addEventListener('resize', handleResize);
  handleResize();
  
  // Array of possible images
  const images = [
      '/images/cognitive/Graphics.svg',
      '/images/cognitive/Graphics.svg',
    // '/images/cognitive/Frame.svg',
    // '/images/cognitive/Group 1000004520.svg'
  ];
  
  // Get the current index from localStorage
  const getImageIndex = () => {
    const savedIndex = localStorage.getItem('imageIndex');
    
    if (savedIndex !== null) {
      // Use the saved index and then update it for next time
      const currentIndex = parseInt(savedIndex);
      // Save the next index for the next visit
      const nextIndex = (currentIndex + 1) % images.length;
      localStorage.setItem('imageIndex', nextIndex.toString());
      return currentIndex;
    } else {
      // No saved index, start with 0 and save 1 for next time
      localStorage.setItem('imageIndex', '1');
      return 0;
    }
  };
  
  // Only set the image if we haven't already
  if (!hasSetImage.current) {
    const imageIndex = getImageIndex();
    setImageSrc(images[imageIndex]);
    console.log('Selected image:', images[imageIndex], 'Index:', imageIndex);
    console.log('Next image index will be:', localStorage.getItem('imageIndex'));
    hasSetImage.current = true;
  }
  
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div
      className="mt-[7.1875rem] md:mt-[5rem] mb-[7.1875rem] md:mb-[3.5rem] flex items-center justify-center px-14 md:flex-col md:px-5 "
      style={{
        gap: isMobile ? '1.875rem' : '15rem',
      }}
    >
      <div>
        <Heading
          size="auto"
          as="h1"
          className="bg-gradient1 bg-clip-text text-left md:text-center font-montserrat text-[3.5rem] font-extrabold leading-tight md:leading-tight text-transparent "
          style={{
            fontSize: isMobile ? '1.875rem' : '',
          }}
        >
          The World’s #1 
        </Heading>
        <Heading
          size="auto"
          as="h1"
          className="blue-green-background-text w-fit bg-clip-text text-left md:text-center font-montserrat text-[5rem] font-extrabold leading-tight md:leading-tight text-transparent "
          style={{
            fontSize: isMobile ? '2.375rem' : '',
          }}
        >
          OLCP Database
        </Heading>
        <Heading
          size="auto"
          as="h1"
          className="mt-[1.8125rem] md:mt-[1rem] bg-gradient1 bg-clip-text text-left md:text-center font-inter text-[2.333rem] font-normal leading-[3.375rem] md:leading-[1.25rem] text-transparent md:text-[1.875rem]"
          style={{
            fontSize: isMobile ? '1.125rem' : '',
          }}
        >
          <b>O</b>n<b>L</b>ine <b>C</b>ognitive <b>P</b>rocessing for <br />
          Humans and Agents
        </Heading>
      </div>

      {imageSrc && (
        <img
          className="h-[44.25rem] w-[51.166875rem] md:h-[20.625rem] md:w-[22.5rem] pointer-events-none select-none"
          src={imageSrc}
          alt="Cognitive processing visualization"
          // Add error handling in case image fails to load
          onError={(e) => {
            console.error('Failed to load image:', imageSrc);
            // Optionally fallback to the other image
            const fallbackImage = imageSrc.includes('Frame') 
              ? '/images/cognitive/Graphics.svg' 
              : '/images/cognitive/Frame.svg';
            e.currentTarget.src = fallbackImage;
          }}
        />
      )}
    </div>
  );
}