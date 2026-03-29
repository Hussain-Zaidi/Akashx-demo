"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const seoRouteToSection: Record<string, string> = {
  "/cognitive-sql": "CognitiveSQL",
  "/ontlogy-views": "OntlogyViews",
  "/use-cases": "UseCases",
};

export default function useHashNavigation() {
  const pathname = usePathname();
  const [offset, setOffset] = useState(0);
  const isScrolling = useRef(false);
  const retryTimeouts = useRef<NodeJS.Timeout[]>([]);
  const activeRetry = useRef<{ hash: string; attempt: number } | null>(null);

  // Clear all pending retries
  const clearRetries = useCallback(() => {
    retryTimeouts.current.forEach((timeout) => clearTimeout(timeout));
    retryTimeouts.current = [];
  }, []);

  // Calculate offset once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootFontSize =
      parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    setOffset(14 * rootFontSize);
  }, []);

  const scrollToElement = useCallback(
    (hash: string): boolean => {
      if (!offset) return false;

      const element = document.getElementById(hash);
      if (element && !isScrolling.current) {
        // Clear any ongoing retry for this hash
        if (activeRetry.current?.hash === hash) {
          clearRetries();
          activeRetry.current = null;
        }

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
    },
    [offset, clearRetries]
  );

  const retryScroll = useCallback(
    (hash: string, attempt: number = 0) => {
      // Maximum 20 retries (about 10 seconds total with increasing delays)
      if (attempt >= 20) {
        console.warn(`Failed to scroll to ${hash} after ${attempt} attempts`);
        activeRetry.current = null;
        return;
      }

      // Check if element exists
      if (scrollToElement(hash)) {
        activeRetry.current = null;
        return;
      }

      // Exponential backoff: 200ms, 300ms, 450ms, 675ms, etc. (capped at 2 seconds)
      const delay = Math.min(200 * Math.pow(1.5, attempt), 2000);

      const timeout = setTimeout(() => {
        retryScroll(hash, attempt + 1);
      }, delay);

      retryTimeouts.current.push(timeout);
    },
    [scrollToElement]
  );

  const handleNavigation = useCallback(
    (hash: string) => {
      if (!hash) return;

      // Clear any existing retries for different hash
      if (activeRetry.current && activeRetry.current.hash !== hash) {
        clearRetries();
        activeRetry.current = null;
      }

      // Cancel any ongoing scroll
      if (isScrolling.current) {
        isScrolling.current = false;
      }

      // Start retry mechanism
      activeRetry.current = { hash, attempt: 0 };
      retryScroll(hash);
    },
    [retryScroll, clearRetries]
  );

  // Wait until offset is ready before handling initial hash / SEO route section
  useEffect(() => {
    if (!offset) return;

    const initialHash = window.location.hash.replace("#", "");
    const isSeoAliasRoute = Boolean(seoRouteToSection[pathname || ""]);
    const shouldCanonicalizeToRoot =
      (pathname || "") === "/cognitive" &&
      (!initialHash || initialHash === "HeroSection");

    if (shouldCanonicalizeToRoot) {
      window.history.replaceState(null, "", "/");
    }

    if (initialHash) {
      if (isSeoAliasRoute) {
        // Keep SEO alias URLs clean by removing hash from address bar.
        window.history.replaceState(null, "", pathname || "/cognitive");
      }
      handleNavigation(initialHash);
      return;
    }

    const defaultSection = seoRouteToSection[pathname || ''];
    if (defaultSection) {
      handleNavigation(defaultSection);
    }
  }, [offset, handleNavigation, pathname]);

  // Handle hash changes and click events
  useEffect(() => {
    // Handle hash changes
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        handleNavigation(hash);
      }
    };

    // Handle anchor clicks
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href) {
        try {
          const url = new URL(anchor.href);
          const hash = url.hash;
          const currentPath = window.location.pathname;
          const targetPath = url.pathname;

          if (hash) {
            const elementId = hash.replace("#", "");

            if (targetPath === currentPath) {
              e.preventDefault();
              window.history.pushState(null, "", hash);
              handleNavigation(elementId);
            }
          }
        } catch (error) {
          console.error("Error handling anchor click:", error);
        }
      }
    };

    // Handle dynamic content mutations (for content that loads asynchronously)
    const observer = new MutationObserver(() => {
      // If we have an active retry, check if the element appeared
      if (activeRetry.current) {
        const element = document.getElementById(activeRetry.current.hash);
        if (element) {
          scrollToElement(activeRetry.current.hash);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onAnchorClick);
      observer.disconnect();
      clearRetries();
    };
  }, [handleNavigation, scrollToElement, clearRetries]);

  return null;
}
