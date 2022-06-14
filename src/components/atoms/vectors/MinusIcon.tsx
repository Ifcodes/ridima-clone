import * as React from "react";
import { SVGProps } from "react";

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.883 15.5h15.25"
      stroke="#828282"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MinusIcon;
