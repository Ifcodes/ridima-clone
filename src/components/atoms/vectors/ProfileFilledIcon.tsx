import * as React from "react";
import { SVGProps } from "react";

const ProfileFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox={"0 0 28 28"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM11.996 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z"
      fill="#FFFFFE"
    />
  </svg>
);

export default ProfileFilledIcon;
