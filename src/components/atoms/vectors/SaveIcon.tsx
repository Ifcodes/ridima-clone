import * as React from "react";
import { SVGProps } from "react";

const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.184 7.84H6.811a4.16 4.16 0 0 0-4.147 4.147v15.146c0 1.934 1.387 2.76 3.08 1.814l5.24-2.92c.56-.307 1.467-.307 2.013 0l5.24 2.92c1.694.946 3.08.12 3.08-1.814V11.987c.014-2.28-1.853-4.147-4.133-4.147Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.33 11.987v15.146c0 1.934-1.386 2.747-3.08 1.814l-5.24-2.92c-.56-.307-1.466-.307-2.026 0l-5.24 2.92c-1.693.933-3.08.12-3.08-1.814V11.987A4.16 4.16 0 0 1 6.811 7.84h10.373a4.16 4.16 0 0 1 4.147 4.147Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.33 6.813V21.96c0 1.933-1.386 2.747-3.08 1.813l-4.92-2.746v-9.04a4.16 4.16 0 0 0-4.146-4.147h-6.52V6.813a4.16 4.16 0 0 1 4.147-4.146h10.373a4.16 4.16 0 0 1 4.147 4.146Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SaveIcon;
