import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const WalletActionCardLeftBg = (props: SvgIconProps) => (
  <svg
    width={175}
    height={210}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 24C0 10.745 10.745 0 24 0h127c13.255 0 24 10.745 24 24v155.384c0 12.787-10.025 23.328-22.796 23.97l-127 6.38C11.494 210.423 0 199.492 0 185.764V24Z"
      fill={props.bgColor || "#7165E3"}
    />
  </svg>
);

export default WalletActionCardLeftBg;
