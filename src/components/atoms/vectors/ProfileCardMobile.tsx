import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const ProfileCardMobile = (props: SvgIconProps) => (
  <svg
    width={175}
    height={239}
    viewBox={"0 0 175 239"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M175 24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v183.332c0 12.723 9.929 23.235 22.63 23.961l127.001 7.257c13.77.787 25.369-10.168 25.369-23.961V24Z"
      fill={props.bgColor || "#F5CF48"}
    />
  </svg>
);

export default ProfileCardMobile;
