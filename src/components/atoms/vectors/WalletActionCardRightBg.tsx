import React from "react";
import { SvgIconProps } from "../../../types";

const WalletActionCardRightBg = (props: SvgIconProps) => (
  <svg
    width={175}
    height={210}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M175 24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v155.384c0 12.787 10.025 23.328 22.796 23.97l127 6.38c13.71.689 25.204-10.242 25.204-23.97V24Z"
      fill={props.bgColor || "#F5CF48"}
    />
  </svg>
)

export default WalletActionCardRightBg;
