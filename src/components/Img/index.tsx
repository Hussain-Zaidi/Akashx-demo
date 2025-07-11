"use client";
import React from "react";

// Define ImgProps type
interface ImgProps {
  className?: string;
  src?: string;
  alt?: string;
  isStatic?: boolean;
  width?: number | string;
  height?: number | string;
  [key: string]: any; // This allows for additional props if needed
}

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = "defaultNoData.webp",
  alt = "testImg",
  isStatic = false,
  width,
  height,
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  // Using the public/images folder
  const imagePath = isStatic ? imgSrc : `/images/${imgSrc}`;

  return (
    <img
      className={className}
      src={imagePath} // Direct reference to the public folder
      alt={alt}
      width={width}
      height={height}
      {...restProps}
      onError={() => {
        setImgSrc("defaultNoData.webp");
      }}
    />
  );
};

export { Img };
