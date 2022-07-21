import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const ReversedModalBg = (props: SvgIconProps) => (
  <svg
    // width={324}
    // height={80}
    viewBox={"0 0 324 80"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M284.386 79.5H34.143C15.567 79.5.5 64.293.5 45.525c0-18.19 14.185-33.148 32.173-33.942L282.676.539C304.923-.444 323.5 17.503 323.5 40c0 21.82-17.517 39.5-39.114 39.5Z"
      fill={props.bgcolor || "#FFFFFE"}
      stroke={props.linecolor || "#F5CF48"}
    />
  </svg>
);

export default ReversedModalBg;
