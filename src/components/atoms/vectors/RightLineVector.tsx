import * as React from "react"
import { SVGProps } from "react"

const RightLineVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={130}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 1h130" stroke="url(#a)" strokeWidth={2} />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        y1={2}
        x2={133.25}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E0E0" />
        <stop offset={1} stopColor="#E0E0E0" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default RightLineVector
