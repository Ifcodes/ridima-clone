import * as React from "react";
import { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#logoicona)">
      <path
        d="m19.165 30.835-16.65-4.592A3.424 3.424 0 0 1 0 22.943v-1.457l21.942-5.938 2.694 9.833c.911 3.322-2.146 6.371-5.47 5.454Z"
        fill="url(#logoiconb)"
      />
      <path
        d="m21.788 19.466-19.69 5.328A1.663 1.663 0 0 1 0 23.19V9.087C0 6.786 1.543 4.77 3.765 4.17L18.308.235c4.23-1.145 8.393 2.037 8.393 6.415v6.4a6.649 6.649 0 0 1-4.913 6.416Z"
        fill="#7165E3"
      />
    </g>
    <defs>
      <linearGradient
        id="logoiconb"
        x1={16.812}
        y1={31}
        x2={13.782}
        y2={19.266}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7165E3" />
        <stop offset={0.303} stopColor="#6D63E3" />
        <stop offset={0.578} stopColor="#625DE3" />
        <stop offset={0.841} stopColor="#5053E3" />
        <stop offset={1} stopColor="#414BE3" />
      </linearGradient>
      <clipPath id="logoicona">
        <path fill="#fff" d="M0 0h26.701v31H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default LogoIcon;
