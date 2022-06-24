import * as React from "react";
import { SVGProps } from "react";

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={18} cy={18} r={18} fill="#7165E3" />
    <path
      clipRule="evenodd"
      d="M21.04 10.051c1.01.402 1.319 1.802 1.732 2.252.413.45 1.004.603 1.331.603a3.147 3.147 0 0 1 3.147 3.146v5.795a4.22 4.22 0 0 1-4.22 4.22H12.97a4.22 4.22 0 0 1-4.22-4.22v-5.795a3.147 3.147 0 0 1 3.147-3.146c.326 0 .917-.153 1.331-.603.413-.45.721-1.85 1.731-2.252 1.011-.402 5.071-.402 6.081 0Z"
      stroke="#FFFFFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={0.4}
      d="M23.495 15.7h.01"
      stroke="#FFFFFE"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={0.4}
      clipRule="evenodd"
      d="M21.178 19.328a3.179 3.179 0 1 0-6.357 0 3.179 3.179 0 0 0 6.357 0Z"
      stroke="#FFFFFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CameraIcon;
