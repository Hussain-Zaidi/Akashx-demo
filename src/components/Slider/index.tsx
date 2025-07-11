"use client";

import React from "react";
import AliceCarousel, { Props as AliceProps } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = AliceProps & {
  items?: React.ReactElement[];
  centerMode?: boolean;
  magnifiedIndex?: number;
  activeSlideCSS?: string;
  [key: string]: any;
};

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  (
    { items = [], activeIndex = 0, centerMode = false, magnifiedIndex = 0, activeSlideCSS = "scale-75", ...props },
    ref
  ) => {
    const isSmall = (index: number) => {
      const computedIndex = (props?.activeIndex ?? 0) + magnifiedIndex;
      return computedIndex >= items.length
        ? index !== computedIndex - items.length
        : index !== computedIndex;
    };

    const slideItems = centerMode
      ? items.map((child: React.ReactElement, index: number) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

export { Slider };
