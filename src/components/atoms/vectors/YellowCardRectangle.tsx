import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const YellowCardRectangle = (props: SvgIconProps) => (
  <svg
    // width={496}
    // height={331}
    viewBox="0 0 496 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M496 24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v256.724c0 12.718 9.92 23.228 22.617 23.96l448 25.851c13.776.795 25.383-10.161 25.383-23.96V24Z"
      fill={props.bgcolor || "#F5CF48"}
    />
  </svg>
);

export default YellowCardRectangle;
