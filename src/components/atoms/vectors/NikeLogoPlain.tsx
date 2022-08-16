import * as React from "react";
import { SVGProps } from "react";

const NikeLogoSm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={49}
    height={48}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={24.602} cy={24} r={24} fill="url(#nike-plain-a)" />
    <g clipPath="url(#nike-plain-b)">
      <path
        d="M10.9 31.327c-1.055-.042-1.92-.326-2.595-.853a5.149 5.149 0 0 1-.54-.53 3.298 3.298 0 0 1-.584-1.034c-.382-1.126-.185-2.603.563-4.224.64-1.387 1.63-2.764 3.354-4.67.254-.28 1.011-1.101 1.016-1.101.002 0-.04.07-.091.156a9.899 9.899 0 0 0-1.042 2.36c-.335 1.21-.295 2.246.119 3.05a3.005 3.005 0 0 0 1.326 1.299c.963.464 2.374.502 4.097.112.12-.027 5.998-1.56 13.064-3.409 7.066-1.848 12.849-3.358 12.85-3.357.002.002-16.417 6.907-24.94 10.49-1.35.567-1.712.71-2.346.93-1.622.56-3.075.827-4.25.78Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="nike-plain-a"
        x1={6.759}
        y1={2}
        x2={48.768}
        y2={8.721}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#050505" />
        <stop offset={1} stopColor="#383838" />
      </linearGradient>
      <clipPath id="nike-plain-b">
        <path
          fill="#fff"
          transform="translate(6.61 18.78)"
          d="M0 0h36.169v12.798H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default NikeLogoSm;
