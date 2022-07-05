import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const ReverseMobileBtnBg = (props: SvgIconProps) => (
  <svg
    width={127}
    height={47}
    viewBox="0 0 127 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M127 23.733C127 10.902 116.598.5 103.767.5H20.574C9.211.5 0 9.711 0 21.074c0 10.852 8.43 19.839 19.26 20.532l83.024 5.312c13.387.857 24.716-9.77 24.716-23.185Z"
      fill={props.bgColor || "#F5CF48"}
    />
  </svg>
);

export default ReverseMobileBtnBg;
