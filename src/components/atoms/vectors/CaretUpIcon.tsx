import * as React from "react";
import { SVGProps } from "react";

const CaretUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.92 8.8c-.19 0-.38-.07-.53-.22L9.87 2.06c-.48-.48-1.26-.48-1.74 0L1.61 8.58c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06L7.07 1a2.74 2.74 0 0 1 3.86 0l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z"
      fill="#7165E3"
    />
  </svg>
);

export default CaretUpIcon;
