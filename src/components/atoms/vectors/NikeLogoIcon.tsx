import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const NikeLogoIcon = (props: SvgIconProps) => (
  <svg
    // width={93}
    // height={92}
    viewBox="0 0 93 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={49.334} cy={43.383} r={43.131} fill="url(#nike-logo-a)" />
    <circle
      cx={44.732}
      cy={46.833}
      r={43.837}
      stroke="#3F1E4B"
      strokeWidth={1.413}
    />
    <path
      d="M24.714 56.55c-1.898-.074-3.45-.585-4.665-1.533a9.239 9.239 0 0 1-.97-.953c-.492-.608-.826-1.2-1.05-1.858-.687-2.023-.333-4.677 1.012-7.59 1.151-2.494 2.928-4.967 6.028-8.393.457-.504 1.816-1.978 1.825-1.978.003 0-.07.126-.164.28-.806 1.327-1.496 2.89-1.871 4.243-.604 2.171-.531 4.034.213 5.48a5.4 5.4 0 0 0 2.382 2.333c1.732.834 4.268.903 7.364.202.214-.048 10.778-2.805 23.477-6.125 12.7-3.321 23.091-6.036 23.093-6.034.003.003-29.504 12.413-44.822 18.852-2.425 1.019-3.074 1.276-4.214 1.67-2.916 1.006-5.527 1.486-7.638 1.404Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="nike-logo-a"
        x1={17.268}
        y1={3.846}
        x2={92.763}
        y2={15.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#050505" />
        <stop offset={1} stopColor="#383838" />
      </linearGradient>
    </defs>
  </svg>
);

export default NikeLogoIcon;
