import * as React from "react"
import { SVGProps } from "react"

const RightUpArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.54 20.104a.742.742 0 0 1-.53.22c-.41 0-.749-.34-.749-.75v-7.835h-7.835c-.41 0-.75-.34-.75-.75s.34-.749.75-.749h8.585c.41 0 .75.34.75.75v8.584a.742.742 0 0 1-.22.53Z"
      fill="#E81313"
    />
    <path
      d="m23.421 11.64-11.9 11.9c-.29.29-.771.29-1.061 0a.755.755 0 0 1 0-1.06l11.9-11.9c.29-.29.771-.29 1.061 0 .29.29.29.77 0 1.06Z"
      fill="#E81313"
    />
  </svg>
)

export default RightUpArrow
