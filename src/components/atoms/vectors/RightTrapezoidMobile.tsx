import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const RightTrapezoidMobile = (props: SvgIconProps) => (
  <svg
    width={366}
    height={110}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 30C0 13.431 13.431 0 30 0h306c16.569 0 30 13.431 30 30v49.316c0 17.212-14.451 30.894-31.637 29.955l-306-16.721C12.454 91.681 0 78.527 0 62.595V30Z"
      fill={props.bgColor || "#F9D89F"}
    />
  </svg>
);

export default RightTrapezoidMobile;
