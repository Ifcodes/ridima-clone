import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const SmallButtonBg = (props: SvgIconProps) => (
  <svg
    width={239}
    height={68}
    viewBox="0 0 239 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 33.644C0 15.064 15.063 0 33.644 0h173.527C224.749 0 239 14.25 239 31.83c0 17.319-13.848 31.46-31.164 31.822l-173.488 3.63C15.496 67.675 0 52.501 0 33.643Z"
      fill={props.bgcolor ? props.bgcolor : "#7165E3"}
    />
  </svg>
);

export default SmallButtonBg;
