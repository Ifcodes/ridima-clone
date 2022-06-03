import * as React from "react";
import { SVGProps } from "react";

const GooglePlayLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={93}
    height={92}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={49.792} cy={43.187} r={43.187} fill="url(#zaduu)" />
    <circle
      cx={45.187}
      cy={46.642}
      r={44.187}
      stroke="#3F1E4B"
      strokeWidth={2}
    />
    <path
      d="M40.324 29.152a2.46 2.46 0 0 0-2.36-.113L50.696 41.8l4.163-4.183-14.535-8.463Zm-3.53 1.068c-.16.34-.247.719-.247 1.108v23.34c0 .39.087.763.25 1.096l12.726-12.787-12.73-12.757Zm13.903 13.933L37.986 56.925c.337.156.696.224 1.055.224.442 0 .884-.105 1.283-.346l14.537-8.476-4.164-4.174Zm9.697-3.313a.215.215 0 0 0-.015-.01l-4.036-2.35-4.474 4.495 4.477 4.486 4.048-2.36a2.474 2.474 0 0 0 1.199-2.13c0-.88-.448-1.676-1.199-2.131Z"
      fill="#fff"
    />
    <path
      d="M50.7 44.153 37.988 56.925c.338.156.697.224 1.055.224.442 0 .884-.105 1.284-.346l14.537-8.476-4.164-4.174ZM60.396 40.84a.215.215 0 0 0-.016-.01l-4.035-2.35-4.474 4.495 4.476 4.486 4.049-2.36a2.474 2.474 0 0 0 1.198-2.13c0-.88-.448-1.676-1.198-2.131ZM40.325 29.152a2.46 2.46 0 0 0-2.36-.113L50.697 41.8l4.163-4.183-14.535-8.463Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="zaduu"
        x1={17.685}
        y1={3.599}
        x2={93.278}
        y2={15.693}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00D0FF" />
        <stop offset={1} stopColor="#008642" />
      </linearGradient>
    </defs>
  </svg>
);

export default GooglePlayLogoIcon;
