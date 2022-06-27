import * as React from "react";
import { SVGProps } from "react";

const PasswordCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.1 17.875H6.871c-.568 0-1.072-.018-1.521-.082-2.411-.266-3.062-1.403-3.062-4.501V8.708c0-3.098.65-4.235 3.062-4.5.449-.065.953-.083 1.521-.083h3.172M13.766 4.125h1.356c.569 0 1.073.018 1.522.082 2.41.266 3.062 1.403 3.062 4.501v4.584c0 3.098-.651 4.235-3.062 4.5-.45.065-.953.083-1.522.083h-1.356M13.75 1.833v18.334"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.172 11h.008M6.5 11h.008"
      stroke="#7165E3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PasswordCheckIcon;
