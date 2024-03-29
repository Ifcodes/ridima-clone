import * as React from "react";
import { SvgIconProps } from "../../../types";

const NotificationIcon = (props: SvgIconProps) => (
  <svg
    width={28}
    height={28}
    viewBox={"0 0 28 28"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.023 23.952c-2.719 0-5.437-.432-8.015-1.295-.98-.339-1.727-1.027-2.054-1.925-.338-.899-.221-1.89.315-2.777l1.342-2.228c.28-.467.537-1.4.537-1.949v-3.371c0-4.34 3.535-7.875 7.875-7.875s7.875 3.535 7.875 7.875v3.371c0 .537.256 1.482.536 1.96l1.33 2.217a3.23 3.23 0 0 1 .257 2.777 3.173 3.173 0 0 1-1.995 1.925 25.16 25.16 0 0 1-8.003 1.295Zm0-19.67a6.132 6.132 0 0 0-6.125 6.125v3.371c0 .852-.35 2.112-.782 2.847l-1.342 2.228c-.256.432-.326.887-.175 1.272.14.397.49.7.969.863a23.333 23.333 0 0 0 14.921 0c.42-.14.747-.455.898-.875.152-.42.117-.875-.116-1.26l-1.342-2.228c-.443-.758-.781-2.007-.781-2.858v-3.36a6.124 6.124 0 0 0-6.125-6.125Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M16.193 4.597a.888.888 0 0 1-.245-.035 8.221 8.221 0 0 0-.98-.21 6.822 6.822 0 0 0-2.846.21.86.86 0 0 1-.899-.245.865.865 0 0 1-.163-.91 3.178 3.178 0 0 1 2.975-2.03c1.33 0 2.497.793 2.975 2.03a.89.89 0 0 1-.163.91.902.902 0 0 1-.654.28Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M14.023 26.612a4.39 4.39 0 0 1-3.091-1.284 4.39 4.39 0 0 1-1.284-3.091h1.75c0 .688.28 1.365.77 1.855s1.167.77 1.855.77a2.629 2.629 0 0 0 2.625-2.625h1.75a4.377 4.377 0 0 1-4.375 4.375Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
  </svg>
);

export default NotificationIcon;
