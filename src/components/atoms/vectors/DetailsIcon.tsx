import * as React from "react"
import { SVGProps } from "react"

const DetailsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill="#3F1E4B"
    />
    <path
      d="M15.75 9.75h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.75 15.75h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#3F1E4B"
    />
  </svg>
)

export default DetailsIcon
