import { Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function TestHomeRowthumbsupOne({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-[23px] md:gap-2 flex-1`}>
      <Img src="material-symbols-light_hard-disk-outline-rounded.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
      <Img src="material-symbols-light_hard-disk-outline-rounded.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
      <Img src="material-symbols-light_hard-disk-outline-rounded.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" />
      {/* <Img src="material-symbols-light_hard-disk-outline-rounded.svg" width={28} height={28} alt="Thumbsup" className="h-[28px] w-[28px] md:h-[16px] md:w-[16px]" /> */}
    </div>
  );
}
