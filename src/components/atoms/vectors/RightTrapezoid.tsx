import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const RightTrapezoid = (props: SvgIconProps) => (
  <svg
    // width={421}
    // height={127}
    viewBox={"0 0 421 127"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 21.2C0 9.49 9.491 0 21.2 0h378.555c11.708 0 21.2 9.491 21.2 21.2v84.077c0 12.163-10.212 21.832-22.357 21.168L20.043 105.759C8.8 105.145 0 95.849 0 84.591V21.2Z"
      fill={props.bgcolor || "#F9D89F"}
    />
  </svg>
);

export default RightTrapezoid;
