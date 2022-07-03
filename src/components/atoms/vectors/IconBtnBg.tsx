import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const IconBtnBg = (props: SvgIconProps) => (
  <svg
    // width={70}
    // height={47}
    viewBox="0 0 70 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 23.395C0 10.475 10.475 0 23.395 0h23.81C59.794 0 70 10.206 70 22.796c0 12.143-9.52 22.155-21.648 22.766l-23.778 1.199C11.206 47.435 0 36.779 0 23.395Z"
      fill={props.bgColor || "#7165E3"}
    />
  </svg>
);

export default IconBtnBg;
