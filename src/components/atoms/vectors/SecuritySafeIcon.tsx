import * as React from "react";
import { SVGProps } from "react";

const SecuritySafeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.17 10.193c0 4.483-3.253 8.681-7.7 9.91a1.797 1.797 0 0 1-.934 0c-4.446-1.229-7.7-5.427-7.7-9.91V6.17c0-.752.568-1.604 1.274-1.888l5.106-2.09a4.755 4.755 0 0 1 3.584 0l5.106 2.09c.697.284 1.274 1.136 1.274 1.888l-.01 4.024Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.997 11.458a1.833 1.833 0 1 0 0-3.666 1.833 1.833 0 0 0 0 3.666ZM11 11.458v2.75"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SecuritySafeIcon;
