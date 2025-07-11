"use client";
import Header from "../components/Header";
import React, { ReactNode, useEffect, useState } from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import { setCustomViewport } from "../styles/view-port.js";
import { usePathname } from "next/navigation";
import { NotificationProvider, useNotification } from "../components/Notification/NotificationContext";
import { FiCheck, FiX } from "react-icons/fi";
import Script from "next/script";


export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const simulateLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    };

    simulateLoading();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setCustomViewport();
      window.addEventListener("resize", setCustomViewport);

      return () => {
        window.removeEventListener("resize", setCustomViewport);
      };
    }
  }, [isLoading, pathname]);

  return (
    <NotificationProvider>
      <html lang="en">
        <head>
          <Script id="leadfeeder-script" strategy="afterInteractive">
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
                  ce('https://sc.lfeeder.com/lftracker_v1_lAxoEaK3yvAaOYGd.js');
                })(document,'script');
              })('lAxoEaK3yvAaOYGd');
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
          <div id="container">
            <Header />
          </div>
          <div id="container-main">{children}</div>
          <NotificationBox />
          <div
            id="loading-overlay"
            className={`fixed top-0 left-0 w-full h-full bg-[#080d26] flex justify-center items-center z-50 transform transition-all duration-1000 ease-out `}
            style={{
              zIndex: 100,
              transform: isLoading ? "translateX(0%)" : "translateX(100%)",
              opacity: isLoading ? "1" : "0",
            }}
          >
            <div
              className="w-16 h-16 border-4 border-t-4 border-r-white border-b-white border-l-white border-solid rounded-full animate-spin"
              style={{
                borderTopColor: "#6243ef",
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
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
    className={`min-h-[calc(90*(100/1920)*1vw)] md:min-h-[calc(120*(100/1050)*1vw)] fixed bottom-4 left-0 right-0 mx-auto w-[90%] max-w-[calc(880*(100/1920)*1vw)] p-[calc(20*(100/1920)*1vw)] md:p-[calc(20*(100/1050)*1vw)] rounded-lg md:rounded-md shadow-lg bg-[#080c26f2] text-white border border-[#75BAFF] transform
      ${notification.visible ? "notification" : "notification-exit"}`}
    style={{
      maxWidth: isMobile ? "calc(935*(100/1050)*1vw)" : "calc(880*(100/1920)*1vw)",
      boxShadow: '0px 0px 40px 0px rgba(117, 186, 255, 0.25)',
      borderWidth: isMobile ? "calc(.6*(100/1050)*1vw)" : "calc(.6*(100/1920)*1vw)",
    }}
  >
    {notification.visible && (
        <div className="relative flex items-center gap-[calc(16*(100/1920)*1vw)] md:gap-[clamp(10px,_calc(16*(100/1920)*1vw),_100px)]">
          <div className="flex items-center justify-center min-w-[calc(40*(100/1920)*1vw)] w-[calc(40*(100/1920)*1vw)] h-[calc(40*(100/1920)*1vw)] md:min-w-[calc(60*(100/1050)*1vw)] md:w-[calc(60*(100/1050)*1vw)] md:h-[calc(60*(100/1050)*1vw)] rounded-full border"
          style={{
            borderColor: notification.type === "success" ?'#29B5AA':'#d32f2f'
          }}
          >
            {notification.type === "success" ? (
              <FiCheck className="text-[#29B5AA] text-[calc(18*(100/1920)*1vw)] md:text-[calc(30*(100/1050)*1vw)]" />
            ) : (
              <FiX className="text-[#d32f2f] text-[calc(18*(100/1920)*1vw)] md:text-[calc(30*(100/1050)*1vw)]" />
            )}
          </div>
          <div className="flex flex-col gap-[6px] md:gap-[3px]">
            <div className="font-semibold text-blue-100"
            style={{
              fontSize:isMobile ? "calc(32*(100/1050)*1vw)" : "calc(16*(100/1920)*1vw)",
              fontFamily: 'Montserrat',
            }}
            >
              {notification.type === "success"
                ? "THANKS FOR REACHING OUT!"
                : "ERROR OCCURRED"}
            </div>
            <div className="text-blue-100"
            style={{
              fontSize:isMobile ? "calc(36*(100/1050)*1vw)" : "calc(18*(100/1920)*1vw)",
            }}
            >
              {notification.type === "success"
                ? notification.message
                : notification.message}
            </div>
          </div>
          
          <button
            onClick={() => {
              console.log(notification.id);
              const element = document.getElementById(notification.id);
              if (element && (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
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
    )
}
