"use client";

import { useEffect, useRef, useCallback, useState } from "react";

export default function useHashNavigation() {
  const [offset, setOffset] = useState(0);
  const hasScrolled = useRef(false);
  const isScrolling = useRef(false);

  // Calculate offset once on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    setOffset(10 * rootFontSize);
  }, []);

  const scrollToElement = useCallback((hash: string) => {
    if (!offset) return false; // ⛔ Important guard
    
    const element = document.getElementById(hash);
    if (element && !isScrolling.current) {
      isScrolling.current = true;

      requestAnimationFrame(() => {
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });

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
      if (scrollToElement(hash)) return;
      
      // Retry with increasing delays if element not found
      const retryDelays = [200, 400, 800];
      retryDelays.forEach(delay => {
        setTimeout(() => scrollToElement(hash), delay);
      });
    }, 100);
  }, [scrollToElement]);

  // 🔥 Step 1: Wait until offset is ready before handling initial hash
  useEffect(() => {
    if (!offset) return; // ⛔ Wait until offset is calculated
    
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && !hasScrolled.current) {
      hasScrolled.current = true;
      handleNavigation(initialHash);
    }
  }, [offset, handleNavigation]);

  // 🔥 Step 2: Handle hash changes and click events
  useEffect(() => {
    // Handle hash changes
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        handleNavigation(hash);
      }
    };

    // 🔥 Step 3: Fixed anchor click handler with better path comparison
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        try {
          const url = new URL(anchor.href);
          const hash = url.hash;
          const currentPath = window.location.pathname;
          const targetPath = url.pathname;
          
          // Check if it's an internal hash link
          if (hash) {
            const elementId = hash.replace("#", "");
            
            // ✅ Only prevent default if it's the same page
            if (targetPath === currentPath) {
              e.preventDefault();
              window.history.pushState(null, "", hash);
              handleNavigation(elementId);
            }
            // For different pages, let the navigation happen normally
            // The page will load and the initial hash effect will handle scrolling
          }
        } catch (error) {
          console.error('Error handling anchor click:', error);
        }
      }
    };

    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onAnchorClick);
    
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onAnchorClick);
    };
  }, [handleNavigation]);

  return null;
}