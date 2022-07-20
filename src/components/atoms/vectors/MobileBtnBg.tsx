import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const MobileBtnBg = (props: SvgIconProps) => (
  <svg
    // width={127}
    // height={47}
    viewBox={"0 0 127 47"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 23.233C0 10.402 10.402 0 23.233 0h83.193C117.789 0 127 9.211 127 20.574c0 10.852-8.43 19.839-19.26 20.532l-83.023 5.312C11.328 47.275 0 36.648 0 23.233Z"
      fill={props.bgColor || "#F5CF48"}
    />
  </svg>
);

export default MobileBtnBg;
