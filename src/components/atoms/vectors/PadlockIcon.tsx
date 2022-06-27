import * as React from "react";
import { SVGProps } from "react";

const PadlockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 9.167V7.333c0-3.034.917-5.5 5.5-5.5s5.5 2.466 5.5 5.5v1.834M15.586 20.167H6.419c-3.666 0-4.583-.917-4.583-4.584V13.75c0-3.667.917-4.583 4.583-4.583h9.167c3.667 0 4.583.916 4.583 4.583v1.833c0 3.667-.916 4.584-4.583 4.584Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.664 14.667h.008M10.992 14.667h.009M7.328 14.667h.009"
      stroke="#7165E3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PadlockIcon;
