import * as React from "react"
import { SVGProps } from "react"

const ArrowLeftClosePanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.676 3.704c0-.573.373-1.037.833-1.037h9.994c.46 0 .832.464.832 1.037s-.373 1.037-.832 1.037h-9.994c-.46 0-.833-.464-.833-1.037Zm0 16.592c0-.572.373-1.037.833-1.037h9.993c.46 0 .833.465.833 1.037 0 .573-.373 1.037-.833 1.037H10.51c-.46 0-.833-.464-.833-1.037ZM6.933 8.533c.325.405.325 1.062 0 1.467l-1.077.963h14.646c.46 0 .832.464.832 1.037s-.372 1.037-.832 1.037H5.856L6.933 14c.325.405.325 1.062 0 1.467s-.852.405-1.178 0l-2.297-2.58a1.333 1.333 0 0 1 0-1.774l2.297-2.58c.326-.404.853-.404 1.178 0Z"
      fill="#7165E3"
    />
  </svg>
)

export default ArrowLeftClosePanel
