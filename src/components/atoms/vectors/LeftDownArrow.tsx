import * as React from "react"
import { SVGProps } from "react"

const LeftDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.105 23.54a.742.742 0 0 1-.53.22H10.99c-.41 0-.75-.34-.75-.75v-8.584c0-.41.34-.75.75-.75s.75.34.75.75v7.835h7.834c.41 0 .75.34.75.75a.725.725 0 0 1-.22.53Z"
      fill="#27AE60"
    />
    <path
      d="m23.542 11.52-11.9 11.9c-.29.29-.771.29-1.06 0a.755.755 0 0 1 0-1.06l11.9-11.9c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z"
      fill="#27AE60"
    />
  </svg>
)

export default LeftDownArrow
