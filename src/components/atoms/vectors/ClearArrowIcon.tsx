import * as React from "react";
import { SVGProps } from "react";

const ClearArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.73 9.684a1 1 0 1 0-1.46-1.368l1.46 1.368ZM22.318 27.73a1 1 0 0 0 1.364-1.462l-1.364 1.462Zm-6.853-7.763-.682.73.682-.73Zm-.094-2.83-.73-.684.73.684Zm8.311 9.13-7.534-7.031-1.365 1.462 7.535 7.032 1.364-1.462Zm-7.581-8.446 7.629-8.138-1.46-1.368-7.629 8.138 1.46 1.368Zm.047 1.415a1 1 0 0 1-.047-1.415l-1.46-1.368a3 3 0 0 0 .142 4.245l1.365-1.462Z"
      fill="#3F1E4B"
    />
  </svg>
);

export default ClearArrowIcon;
