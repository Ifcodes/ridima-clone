import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const TriangleUpIcon = (props: SvgIconProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.677 13.98-3.21-3.21-1.96-1.97a2.13 2.13 0 0 0-3.01 0l-5.18 5.18c-.68.68-.19 1.84.76 1.84h11.84c.96 0 1.44-1.16.76-1.84Z"
      fill={props.bgcolor || "#F5CF48"}
    />
  </svg>
);

export default TriangleUpIcon;
