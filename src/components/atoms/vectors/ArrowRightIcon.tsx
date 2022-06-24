import * as React from "react";
import { SVGProps } from "react";

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.906 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8l-6.52-6.52"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
