import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const LeftTrapezoid = (props: SvgIconProps) => (
  <svg
    // width={421}
    // height={128}
    viewBox={"0 0 421 128"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M420.953 106.134c0 11.708-9.491 21.199-21.2 21.199H21.198c-11.708 0-21.2-9.491-21.2-21.199V22.056C-.002 9.894 10.21.225 22.355.888L400.91 21.574c11.242.615 20.043 9.91 20.043 21.168v63.392Z"
      fill={props.bgcolor || "#DCE5EF"}
    />
  </svg>
);

export default LeftTrapezoid;
