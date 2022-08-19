import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={16} fill="#F2F2F2" />
    <path
      d="m28.773 20.288-8.485 8.485c-.29.29-.771.29-1.061 0a.756.756 0 0 1 0-1.06l8.485-8.486c.29-.29.771-.29 1.061 0 .29.29.29.77 0 1.06Z"
      fill="#292D32"
    />
    <path
      d="M28.773 28.773c-.29.29-.77.29-1.06 0l-8.486-8.485a.756.756 0 0 1 0-1.061c.29-.29.77-.29 1.06 0l8.486 8.485c.29.29.29.771 0 1.06Z"
      fill="#292D32"
    />
  </svg>
);

export default CloseIcon;
