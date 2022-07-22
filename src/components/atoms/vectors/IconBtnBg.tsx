import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const IconBtnBg = (props: SvgIconProps) => (
  <svg
    // width={70}
    // height={66}
    fill="none"
    viewBox="0 0 70 66"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 32.787C0 14.68 14.68 0 32.787 0h4.59C55.393 0 70 14.606 70 32.624c0 17.115-13.227 31.32-30.3 32.54l-4.577.327C16.143 66.847 0 51.815 0 32.787Z"
      fill={props.bgcolor ? props.bgcolor : "#7165E3"}
    />
  </svg>
);

export default IconBtnBg;
