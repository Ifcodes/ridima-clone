import * as React from "react";
import { SVGProps } from "react";

const MessageNotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.33 13.333v4c0 5.334-2.666 8-8 8h-.666c-.413 0-.813.2-1.067.534l-2 2.666c-.88 1.174-2.32 1.174-3.2 0l-2-2.666c-.213-.294-.706-.534-1.066-.534h-.667c-5.333 0-8-1.333-8-8v-6.666c0-5.334 2.667-8 8-8h8"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.997 9.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.331 14.667h.012M15.995 14.667h.012M10.66 14.667h.011"
      stroke="#7165E3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MessageNotificationIcon;
