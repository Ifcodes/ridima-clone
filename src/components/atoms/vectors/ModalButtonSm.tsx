import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const ModalButtonSm = (props: SvgIconProps) => (
  <svg
    width={324}
    height={79}
    viewBox={"0 0 324 79"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 39.136C0 17.522 17.522 0 39.136 0h251.151C308.906 0 324 15.094 324 33.713c0 18.053-14.221 32.902-32.257 33.68L40.826 78.237C18.569 79.198 0 61.413 0 39.136Z"
      fill={props.bgColor || "#F5CF48"}
    />
  </svg>
);

export default ModalButtonSm;
