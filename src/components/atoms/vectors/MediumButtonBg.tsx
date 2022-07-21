import * as React from "react";
import { SvgIconProps } from "../../../types";

const MediumButtonBg = (props: SvgIconProps) => (
  <svg
    // width={286}
    // height={79}
    viewBox={"0 0 286 79"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 39.3C0 17.597 17.596 0 39.3 0h211.088C270.056 0 286 15.944 286 35.612c0 19.183-15.196 34.92-34.367 35.59L40.674 78.578C18.444 79.355 0 61.545 0 39.3Z"
      fill={props.bgcolor || "#F5CF48"}
    />
  </svg>
);

export default MediumButtonBg;
