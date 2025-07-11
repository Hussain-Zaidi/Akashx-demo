import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TesthomeColumnFive from "./TesthomeColumnFive";
import TesthomeColumnOne from "./TesthomeColumnOne";
import TesthomeRowOne from "./TesthomeRowOne";
import TesthomeRowquarteryour from "./TesthomeRowquarteryour";
import TesthomeRowstorage from "./TesthomeRowstorage";
import TesthomeRowuserstrust from "./TesthomeRowuserstrust";
import React from "react";

export default function TestHomePage() {
  return (
    <div className="w-full">
      <div className="flex h-[1000px] flex-col gap-[250px] bg-[url(/images/img_image.webp)] bg-cover bg-no-repeat py-9 lg:h-auto lg:gap-[168px] md:h-auto md:gap-[168px] sm:gap-28 sm:py-4 md:bg-cover  md:bg-[position:0px_70%] md:bg-[size:130%] md:mt-[40px]">
        <Header />
        <TesthomeColumnOne />
      </div>
      <TesthomeRowstorage />
      <TesthomeRowquarteryour />
      <div className="h-[1140px] bg-[url(/images/img_image_1140x1920.webp)] bg-cover bg-no-repeat py-[120px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4  md:bg-[position:80%_0px] md:bg-[size:400%] " >
        <TesthomeColumnFive />
      </div>
      <TesthomeRowuserstrust />
      <div className="bg-gray-900 py-[120px] lg:py-8 md:py-5 sm:py-4">
        <TesthomeRowOne />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
