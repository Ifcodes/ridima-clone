import * as React from "react";
import { SvgIconProps } from "../../../types";

const ShieldIconFilled = (props: SvgIconProps) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.91 9.12V4.73c0-.82-.62-1.75-1.39-2.06L10.95.39a5.187 5.187 0 0 0-3.91 0L1.47 2.67C.71 2.98.09 3.91.09 4.73v4.39c0 4.89 3.55 9.47 8.4 10.81.33.09.69.09 1.02 0 4.85-1.34 8.4-5.92 8.4-10.81Zm-8.16 1.75v2.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.63A2.497 2.497 0 0 1 6.5 8.5a2.5 2.5 0 0 1 5 0c0 1.12-.74 2.05-1.75 2.37Z"
      fill="#fff"
    />
  </svg>
);

export default ShieldIconFilled;
