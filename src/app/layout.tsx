'use client';
import Header from '../components/Header';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import '@/styles/tailwind.css';
import '../styles/index.css';
import '../styles/font.css';
import { setCustomViewport, resetCustomViewport ,setResponsiveRootFontSize ,removeResponsiveRootFontSize} from '../styles/view-port.js';
import { usePathname } from 'next/navigation';
import {
  NotificationProvider,
  useNotification,
} from '../components/Notification/NotificationContext';
import { FiCheck, FiX } from 'react-icons/fi';
import Script from 'next/script';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isFirstLoadRef = useRef(true);
  const navFallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  console.log(pathname);

  useEffect(() => {
    // Keep first-load intro duration, but for route changes hide only after the new page paints.
    if (isFirstLoadRef.current) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1800);
      isFirstLoadRef.current = false;
      return () => clearTimeout(timer);
    }

    let raf1 = 0;
    let raf2 = 0;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        // Keep loader visible for an extra 1s on every route change.
        hideTimer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [pathname]);

  useEffect(() => {
    // Trigger loader immediately on internal link interaction (before pathname updates).
    const handleNavigationIntent = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;
      if (anchor.target === '_blank') return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      let destination: URL;
      try {
        destination = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (destination.origin !== window.location.origin) return;

      const destinationPath = `${destination.pathname}${destination.search}`;
      const currentPath = `${window.location.pathname}${window.location.search}`;
      if (destinationPath === currentPath) return;

      // Force immediate paint of loader so next page content doesn't flash first.
      flushSync(() => {
        setIsLoading(true);
      });

      // Safety: if navigation is cancelled/blocked and pathname does not change,
      // do not keep the loader open indefinitely.
      if (navFallbackTimerRef.current) {
        clearTimeout(navFallbackTimerRef.current);
      }
      navFallbackTimerRef.current = setTimeout(() => {
        setIsLoading(false);
        navFallbackTimerRef.current = null;
      }, 1800);
    };

    document.addEventListener('click', handleNavigationIntent, true);
    return () => {
      document.removeEventListener('click', handleNavigationIntent, true);
      if (navFallbackTimerRef.current) {
        clearTimeout(navFallbackTimerRef.current);
        navFallbackTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Route changed successfully: clear any pending fallback timer.
    if (navFallbackTimerRef.current) {
      clearTimeout(navFallbackTimerRef.current);
      navFallbackTimerRef.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    if (!isLoading && pathname !== '/cognitive') {
      setCustomViewport();
      removeResponsiveRootFontSize();
      
      window.addEventListener('resize', setCustomViewport);

      return () => {
        window.removeEventListener('resize', setCustomViewport);
      };
    } else {
      resetCustomViewport();
      setResponsiveRootFontSize();
      window.addEventListener('resize', resetCustomViewport);
      return () => {
        window.removeEventListener('resize', resetCustomViewport);
      };
    }
  }, [isLoading, pathname]);

  return (
    <NotificationProvider>
      <html lang="en">
        <head>
          <Script id="leadfeeder" strategy="afterInteractive">
            {`
              (function(ss,ex){
                window.ldfdr=window.ldfdr||function(){
                  (ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));
                };
                (function(d,s){
                  var fs=d.getElementsByTagName(s)[0];
                  function ce(src){
                    var cs=d.createElement(s);
                    cs.src=src;
                    cs.async=1;
                    fs.parentNode.insertBefore(cs,fs);
                  };
                  ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
                })(document,'script');
              })('YEgkB8ldENy8ep3Z');
            `}
          </Script>

          

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          {pathname && pathname !== '/cognitive' && (
            <div id="container">
              <Header />
            </div>
          )}
          <div id="container-main">{children}</div>
          <NotificationBox />
          <div
            id="loading-overlay"
            className="fixed top-0 left-0 w-full h-full bg-[#080d26] flex justify-center items-center z-50"
            style={{
              zIndex: 100,
              pointerEvents: isLoading ? 'auto' : 'none',
              opacity: isLoading ? '1' : '0',
            }}
          >
            <div
              className="border-4 border-t-4 border-r-white border-b-white border-l-white border-solid rounded-full animate-spin"
              style={{
                minWidth:'45px',
                width: '3%',
                aspectRatio:1,
                borderTopColor: '#6243ef',
              }}
            ></div>
          </div>
        </body>
      </html>
    </NotificationProvider>
  );
}

function NotificationBox() {
  const { notification, hideNotification } = useNotification();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
  if (!notification.visible) return;

  const timer = setTimeout(() => {
    hideNotification();
  }, 5000); // 5 sec

  return () => clearTimeout(timer);
}, [notification.visible]);

  return (
    <div
      className={`min-h-[calc(90*(100/1920)*1vw)] md:min-h-[calc(120*(100/1050)*1vw)] fixed bottom-4 left-0 right-0 mx-auto w-[90%] max-w-[calc(880*(100/1920)*1vw)] p-[calc(20*(100/1920)*1vw)] md:p-[calc(20*(100/1050)*1vw)] rounded-lg md:rounded-md shadow-lg bg-[#080c26f2] text-white border border-[#75BAFF] transform
      ${notification.visible ? 'notification' : 'notification-exit'}`}
      style={{
        maxWidth: isMobile
          ? 'calc(935*(100/1050)*1vw)'
          : 'calc(880*(100/1920)*1vw)',
        boxShadow: '0px 0px 40px 0px rgba(117, 186, 255, 0.25)',
        borderWidth: isMobile
          ? 'calc(.6*(100/1050)*1vw)'
          : 'calc(.6*(100/1920)*1vw)',
      }}
    >
      {notification.visible && (
        <div className="relative flex items-center gap-[calc(16*(100/1920)*1vw)] md:gap-[clamp(10px,_calc(16*(100/1920)*1vw),_100px)]">
          <div
            className="flex items-center justify-center min-w-[calc(40*(100/1920)*1vw)] w-[calc(40*(100/1920)*1vw)] h-[calc(40*(100/1920)*1vw)] md:min-w-[calc(60*(100/1050)*1vw)] md:w-[calc(60*(100/1050)*1vw)] md:h-[calc(60*(100/1050)*1vw)] rounded-full border"
            style={{
              borderColor:
                notification.type === 'success' ? '#29B5AA' : '#d32f2f',
            }}
          >
            {notification.type === 'success' ? (
              <FiCheck className="text-[#29B5AA] text-[calc(18*(100/1920)*1vw)] md:text-[calc(30*(100/1050)*1vw)]" />
            ) : (
              <FiX className="text-[#d32f2f] text-[calc(18*(100/1920)*1vw)] md:text-[calc(30*(100/1050)*1vw)]" />
            )}
          </div>
          <div className="flex flex-col gap-[6px] md:gap-[3px]">
            <div
              className="font-semibold text-blue-100"
              style={{
                fontSize: isMobile
                  ? 'calc(32*(100/1050)*1vw)'
                  : 'calc(16*(100/1920)*1vw)',
                fontFamily: 'Montserrat',
              }}
            >
              {notification.type === 'success'
                ? 'THANKS FOR REACHING OUT!'
                : 'ERROR OCCURRED'}
            </div>
            <div
              className="text-blue-100"
              style={{
                fontSize: isMobile
                  ? 'calc(36*(100/1050)*1vw)'
                  : 'calc(18*(100/1920)*1vw)',
              }}
            >
              {notification.type === 'success'
                ? notification.message
                : notification.message}
            </div>
          </div>

          <button
            onClick={() => {
              console.log(notification.id);
              const element = document.getElementById(notification.id);
              if (
                element &&
                (element instanceof HTMLInputElement ||
                  element instanceof HTMLTextAreaElement)
              ) {
                element.value = ''; // Clear the value
              }
              hideNotification(); // Call your function here if needed
            }}
            className="ml-auto text-white hover:text-gray-400 self-baseline"
          >
            <FiX className="text-[#8EA1BD] text-[calc(25*(100/1920)*1vw)] md:text-[calc(45*(100/1050)*1vw)]" />
          </button>
        </div>
      )}
    </div>
  );
}
