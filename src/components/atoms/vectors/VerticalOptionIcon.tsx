import * as React from "react";
import { SVGProps } from "react";

const VerticalOptionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={3}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={1.5} cy={1.5} r={1.5} fill="#333" />
    <circle cx={1.5} cy={9.5} r={1.5} fill="#333" />
    <circle cx={1.5} cy={17.5} r={1.5} fill="#333" />
  </svg>
);

export default VerticalOptionIcon;
