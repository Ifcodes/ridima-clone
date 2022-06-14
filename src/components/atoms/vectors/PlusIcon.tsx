import * as React from "react";
import { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 18h18M18 27V9"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusIcon;