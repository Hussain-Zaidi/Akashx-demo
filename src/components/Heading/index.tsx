import React from "react";

const sizes = {
  auto: "",
  textxs: "text-[16px]  lg:text-[13px]",
  textmd: "text-[20px]  lg:text-[17px]",
  textlg: "text-[22px]  lg:text-[18px]",
  textxl: "text-[24px]  lg:text-[20px] md:text-[22px]",
  text2xl: "text-[26px]  lg:text-[22px] md:text-[24px] sm:text-[22px]",
  text3xl: "text-[30px]  lg:text-[25px] md:text-[28px] sm:text-[26px]",
  text4xl: "text-[36px]  lg:text-[30px] md:text-[34px] sm:text-[32px]",
  headingxs: "text-[16px]  lg:text-[13px]",
  headings: "text-[20px]  lg:text-[17px]",
  headingmd: "text-[24px]  lg:text-[20px] md:text-[22px]",
  headinglg: "text-[26px]  lg:text-[22px] md:text-[24px] sm:text-[22px]",
  headingxl: "text-[50px]  lg:text-[42px] md:text-[46px] sm:text-[40px]",
  heading2xl: "text-[60px]  lg:text-[51px] md:text-[52px] sm:text-[46px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "textlg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  // Check if `children` is a string containing HTML
  const isHTML = typeof children === "string" && /<\/?[a-z][\s\S]*>/i.test(children);

  return isHTML ? (
    <Component
      className={`${className} ${sizes[size]}`}
      dangerouslySetInnerHTML={{ __html: children as string }}
      {...restProps}
    />
  ) : (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
