import * as React from "react";
import { SVGProps } from "react";

const MasterCardLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={69}
    // height={42}
    viewBox="0 0 69 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M43.679 37.51H25.152V4.49H43.68v33.02Z" fill="#FF5F00" />
    <path
      d="M26.34 21c0-6.698 3.162-12.665 8.086-16.51A21.194 21.194 0 0 0 21.341 0C9.647 0 .168 9.402.168 21s9.479 21 21.173 21c4.939 0 9.484-1.678 13.085-4.49-4.924-3.845-8.087-9.812-8.087-16.51Z"
      fill="#EB001B"
    />
    <path
      d="M68.664 21c0 11.598-9.48 21-21.173 21a21.2 21.2 0 0 1-13.087-4.49c4.926-3.845 8.089-9.812 8.089-16.51 0-6.698-3.163-12.665-8.089-16.51A21.2 21.2 0 0 1 47.491 0c11.694 0 21.173 9.402 21.173 21Z"
      fill="#F79E1B"
    />
  </svg>
);

export default MasterCardLogo;
