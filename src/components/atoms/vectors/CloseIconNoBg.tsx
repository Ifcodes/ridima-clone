import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const CloseIconNoBg = (props: SvgIconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.22 4.22a.75.75 0 0 1 1.06 0l15 15a.75.75 0 1 1-1.06 1.06l-15-15a.75.75 0 0 1 0-1.06Z"
      fill={props.linecolor || "#292D32"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.28 4.22a.75.75 0 0 1 0 1.06l-15 15a.75.75 0 0 1-1.06-1.06l15-15a.75.75 0 0 1 1.06 0Z"
      fill={props.linecolor || "#292D32"}
    />
  </svg>
);

export default CloseIconNoBg;
