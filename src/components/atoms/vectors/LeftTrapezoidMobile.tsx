import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const LeftTrapezoidMobile = (props: SvgIconProps) => (
  <svg
    width={366}
    height={110}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M366 80c0 16.569-13.431 30-30 30H30C13.431 110 0 96.569 0 80V30.684C0 13.472 14.45-.21 31.637.73l306 16.721C353.546 18.32 366 31.473 366 47.405V80Z"
      fill={props.bgColor || "#D8D4F7"}
    />
  </svg>
);

export default LeftTrapezoidMobile;
