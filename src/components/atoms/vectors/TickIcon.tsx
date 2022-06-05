import * as React from "react";
import { SVGProps } from "react";

const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 4.675 4.22 8 11 1" stroke="#FFFFFE" strokeLinecap="round" />
  </svg>
);

export default TickIcon;
