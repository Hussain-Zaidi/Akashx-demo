"use client";

import { useEffect, useRef, useCallback } from "react";

export default function useHashNavigation(offset = 112) {
  const hasScrolled = useRef(false);
  const isScrolling = useRef(false);

  const scrollToElement = useCallback((hash: string) => {
    const element = document.getElementById(hash);
    if (element && !isScrolling.current) {
      isScrolling.current = true;
      
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      });
      
      return true;
    }
    return false;
  }, [offset]);

  const handleNavigation = useCallback((hash: string) => {
    if (!hash) return;
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        scrollToElement(hash);
      } else {
        // Retry with increasing delays
        const retryDelays = [200, 400, 800];
        retryDelays.forEach(delay => {
          setTimeout(() => {
            if (document.getElementById(hash)) {
              scrollToElement(hash);
            }
          }, delay);
        });
      }
    }, 100);
  }, [scrollToElement]);

  useEffect(() => {
    // Handle initial hash on page load
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && !hasScrolled.current) {
      hasScrolled.current = true;
      handleNavigation(initialHash);
    }

    // Handle hash changes
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        handleNavigation(hash);
      }
    };

    // Handle click events for anchor tags
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        try {
          const url = new URL(anchor.href);
          const hash = url.hash;
          const currentPath = window.location.pathname;
          const targetPath = url.pathname;
          
          // Check if it's an internal hash link on the same page
          if (hash && (targetPath === currentPath || (!targetPath || targetPath === '/'))) {
            e.preventDefault();
            
            const elementId = hash.replace("#", "");
            // Update URL without triggering page reload
            window.history.pushState(null, '', hash);
            handleNavigation(elementId);
          }
        } catch (error) {
          console.error('Error handling anchor click:', error);
        }
      }
    };

    // Add event listeners
    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onAnchorClick);
    
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onAnchorClick);
    };
  }, [handleNavigation, offset]);

  return null;
}