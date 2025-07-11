import React from "react";

const sizes = {
  textxs: "text-[16px] font-normal lg:text-[13px]",
  texts: "text-[18px] font-normal not-italic lg:text-[15px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";

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

export { Text };
